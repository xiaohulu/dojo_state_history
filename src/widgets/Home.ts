import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import * as css from './styles/Home.m.css';

export interface HomeProperties{
	toProfilePage: (opts: object) => void;
}

export default class Home extends WidgetBase<HomeProperties> {
	protected render() {
		return v('h1', { classes: [css.root] }, [
			'Home Page',
			v('button', {
				type: 'button',
				onclick: this._onClick
			}, ['Redict to Profile Page'])
		]);
	}

	private _onClick(){
		this.properties.toProfilePage && this.properties.toProfilePage({});
	}
}
