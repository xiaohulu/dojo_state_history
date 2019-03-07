import { Store } from '@dojo/framework/stores/Store';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';
import Home, { HomeProperties } from '../widgets/Home';
import { State } from '../interfaces';
import { OutletContext } from '@dojo/framework/routing/interfaces';
import { toProfileProcess } from '../processes/toProfileProcess';
export interface ChangeRoutePayload {
	outlet: string;
	context: OutletContext;
}

function getProperties(store: Store<State>): HomeProperties {

	return {
		toProfilePage: toProfileProcess(store)
	};
}

export default StoreContainer(Home, 'state', { paths: [], getProperties });
