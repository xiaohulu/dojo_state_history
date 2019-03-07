import renderer from '@dojo/framework/widget-core/vdom';
import { w } from '@dojo/framework/widget-core/d';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import { registerThemeInjector } from '@dojo/framework/widget-core/mixins/Themed';
import { registerStoreInjector } from '@dojo/framework/stores/StoreInjector';
import dojo from '@dojo/themes/dojo';
import '@dojo/themes/dojo/index.css';

import { StateHistory } from '@dojo/framework/routing/history/StateHistory';

import routes from './routes';
import App from './App';
import Store from '@dojo/framework/stores/Store';
import { State } from './interfaces';
import { changeRouteProcess } from './processes/routeProcesses';

const store = new Store<State>();
const registry = registerStoreInjector(store);
const router = registerRouterInjector(routes, registry, { HistoryManager: StateHistory });
registerThemeInjector(dojo, registry);

router.on('nav', ({ outlet, context }: any) => {
	changeRouteProcess(store)({ outlet, context });
});

function onRouteChange() {
	const outlet = store.get(store.path('routing', 'outlet'));
	const params = store.get(store.path('routing', 'params'));

	if (outlet) {
		const link = router.link(outlet, params);
		if (link !== undefined) {
			router.setPath(link);
		}
	}
}

store.onChange(store.path('routing', 'outlet'), onRouteChange);
store.onChange(store.path('routing', 'params'), onRouteChange);

const r = renderer(() => w(App, {}));
r.mount({ registry });
