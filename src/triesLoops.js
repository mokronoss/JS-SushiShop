import { makis } from './app/data/makis';
import { random } from './app/data/functionsG';

const app = document.getElementById('app');
app.classList.add('container');

//read maki.js
for (const maki of makis) {
	for (const el of maki) {
		console.log(Object.keys(el));
		console.log(Object.values(el));
	}
}
