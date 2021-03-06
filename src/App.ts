import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Outlet from '@dojo/framework/routing/Outlet';

import Menu from './widgets/Menu';
import About from './widgets/About';
import Profile from './widgets/Profile';

import * as css from './App.m.css';
import HomeContainer from './containers/HomeContainer';

export default class App extends WidgetBase {
	protected render() {
		return v('div', { classes: [css.root] }, [
			w(Menu, {}),
			v('div', [
				w(Outlet, { key: 'home', id: 'home', renderer: () => w(HomeContainer, {}) }),
				w(Outlet, { key: 'about', id: 'about', renderer: () => w(About, {}) }),
				w(Outlet, { key: 'profile', id: 'profile', renderer: () => w(Profile, { username: 'Dojo User' }) })
			])
		]);
	}
}
