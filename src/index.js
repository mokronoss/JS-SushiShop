import { makis } from './app/data/makis';
import { random } from './app/data/functionsG';

const app = document.getElementById('app');
//add container of boodstrapgg
app.classList.add('container');

//   ****************   HEADER   ************************

const header = document.createElement('header');
//add random photo to header
// random list added
const randomMaki = makis[random(makis.length)];
header.innerHTML = randomMaki.nom;
const headerImg = document.createElement('img');
headerImg.src = randomMaki.image;
header.appendChild(headerImg);
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

	// divDemo.innerHTML = `
	// 	<h3>${maki.description}</h3>
	// 	<figure>
	// 		<img src="${maki.image}" />
	// 	</figure>
	// `;

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
	h6.innerText = `"le prix de boite (huit pieces) : "${maki.prix * 8}`;
	divM.appendChild(h6);

	const button1 = document.createElement('button');
	button1.innerHTML = 'Add to card';
	button1.setAttribute('type', 'submit');

	button1.addEventListener('click', function () {
		const parent = this.parentNode;
		const name = parent.getElementsByTagName('h4')[0].innerHTML;
		let price = parent.getElementsByTagName('h6')[0].innerHTML;
		price = price.replace(/[A-Za-z:"()]/g, '');
		price = price.trim();

		const list = document.getElementById('orders_list');
		const newListItem = document.createElement('li');
		newListItem.innerHTML = `${name} - <span>${price}</span>`;
		list.appendChild(newListItem);

		let summaryPrice = 0;
		const priceses = list.getElementsByTagName('span');
		for (let i = 0; i < priceses.length; i++) {
			let onePrice = priceses[i].innerHTML;
			onePrice = parseFloat(onePrice);
			summaryPrice += onePrice;
		}
		document.getElementById('summaryPrice').innerHTML = `Summary price: ${summaryPrice}`;
	});

	divM.appendChild(button1);
}

const footer = document.createElement('footer');

const basket = document.createElement('p');
basket.innerHTML = 'BASKET';
footer.appendChild(basket);

const orders_list = document.createElement('ul');
orders_list.id = 'orders_list';
footer.appendChild(orders_list);

const summaryPrice = document.createElement('h2');
summaryPrice.id = 'summaryPrice';
footer.appendChild(summaryPrice);
app.appendChild(footer);
