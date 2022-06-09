/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import Lib from '@/lib/Lib';

import './index.scss';

render(() => <App />, document.getElementById('root')!);

const lib = new Lib(document.getElementById('lib')!, { color: 'red' });
lib.render();
setTimeout(() => {
	lib.setColor('green');
}, 1000);
