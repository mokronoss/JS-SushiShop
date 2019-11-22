import { makis } from './app/data/makis';
import { random } from './app/data/functionsG';

const app = document.getElementById('app');
//add container of boodstrap
app.setAttribute('classe', 'container');

//   ****************   HEADER   ************************

const header = document.createElement('header');
//add random photo to header
header.innerContent = random(makis.length);
app.appendChild(header);

//   ****************   SECTION   ************************

const h1 = document.createElement('h1');
h1.innerText = 'les meilleurs maki a Bruxelles';
app.appendChild(h1);

const sectionDemo = document.createElement('section');
const divDemo = document.createElement('div');
sectionDemo.appendChild(divDemo);
app.appendChild(sectionDemo);

for (const maki of makis) {
	const divM = document.createElement('div');
	divDemo.appendChild(divM);

	const h3 = document.createElement('h3');
	divM.appendChild(h3);
	h3.innerText = maki.description;

	const figure = document.createElement('figure');
	const img = document.createElement('img');
	figure.appendChild(img);
	divM.appendChild(figure);
	img.src = maki.image;

	const h4 = document.createElement('h4');
	h4.innerText = maki.nom;
	divM.appendChild(h4);

	const h5 = document.createElement('h5');
	h5.innerText = `"prix par pieces : " ${maki.prix}`;
	divM.appendChild(h5);

	const h6 = document.createElement('h6');
	h6.innerText = `"le prix de boite (8pieces) : "${maki.prix * 8}`;
	divM.appendChild(h6);

	const button1 = document.createElement('button');
	button1.setAttribute('type', 'submit');
	button1.innerContent = 'Acheter';
	divM.appendChild(button1);
}
