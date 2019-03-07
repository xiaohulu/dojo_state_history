import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import * as css from './styles/Profile.m.css';

export interface ProfileProperties {
	username: string;
}

export default class Profile extends WidgetBase<ProfileProperties> {
	protected render() {
		return v('div', { classes: [css.root] }, [
			v('h1',[`Click Browser back button. should click one times to home, but need to click two times`]),
			v('div',['What is best practice to change route programmatic?'])
		]);
	}
}
