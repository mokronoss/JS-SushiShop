import { makis } from './app/data/makis';
import { random } from './app/data/functionsG';

const app = document.getElementById('app');
app.classList.add('container');


//   ****************   HEADER   ************************

const header = document.createElement('header');
const h2 = document.createElement('h2');
h2.innerText = 'Promotion du jour';

//add random maki to header
// random list added
//TODO Fetch not working
fetch('/data/makis.json')
  .then((reponse) => reponse.json())
  .then((data) => {
    const makis2 = data.makis2;
	const randomMaki = makis2[random(makis2.length)];
	header.innerHTML = `
		<h2>Offre du jour</h2>
		<figure>
			<img src="${randomMaki.image}" />
		</figure>
		<h3>${randomMaki.description}</h3>
		<h5>prix par boite : ${randomMaki.prix * 8}&euro;</h5>
	`;
  });

// // added by file maki.js
//   const randomMaki = makis[random(makis.length)];
// 	header.innerHTML = `
// 		<h2>Offre du jour</h2>
// 		<figure>
// 			<img src="${randomMaki.image}" />
// 		</figure>
// 		<h3>${randomMaki.description}</h3>
// 		<h5>prix par boite : ${randomMaki.prix * 8}&euro;</h5>
// 	`;

app.appendChild(header);


//   ****************   SECTION   ************************

const h1 = document.createElement('h1');
h1.innerText = 'les meilleurs makis a Bruxelles';
app.appendChild(h1);

const sectionDemo = document.createElement('section');
const divDemo = document.createElement('div');
sectionDemo.appendChild(divDemo);
app.appendChild(sectionDemo);


//   -------------- LOOP FOR OBJECT/ARRAY ---------------------
for (const maki of makis) {
	const divM = document.createElement('div');
	divM.classList.add('sushiList');
	divDemo.appendChild(divM);
	// separate div for photo - flex
	const figure = document.createElement('figure');
	figure.classList.add('sushiImg');
	const img = document.createElement('img');
	img.src = maki.image;
	figure.appendChild(img);
	divM.appendChild(figure);

	// separate div for text - flex
	const divDes = document.createElement('div');
	divDes.classList.add('sushiDes');
	const h3 = document.createElement('h3');
	h3.innerText = maki.description;
	divDes.appendChild(h3);

	const h4 = document.createElement('h4');
	h4.innerText = maki.nom;
	divDes.appendChild(h4);

	const h5 = document.createElement('h5');
	h5.innerText = `le prix de boite (huit pieces) : ${maki.prix * 8}€`;
	divDes.appendChild(h5);

	const btnA = document.createElement('button');
	btnA.innerHTML = 'Acheter';
	btnA.setAttribute('type', 'submit');


	//   --------------  ACTION ON CLICK ACHETER ---------------------
	btnA.addEventListener('click', function () {
		const parent = this.parentNode;
		const name = parent.getElementsByTagName('h4')[0].innerHTML;
		let price = parent.getElementsByTagName('h5')[0].innerHTML;
		// regular expression
		price = price.replace(/[A-Za-z:"()]/g, '');
		price = price.trim();

		const list = document.getElementById('orders_list');
		const newListItem = document.createElement('li');
		newListItem.setAttribute('type', 'checkbox');
		newListItem.innerHTML = `${name} - <span>${price}</span>`;
		list.appendChild(newListItem);
		
		//   -------------- BONUS  REMOVE FROM LIST ---------------------
		// newListItem.addEventListener('change', function (event) {
		// 	event.target.newListItem.reduce;
		// });

		let summaryPrice = 0;

		const prices = list.getElementsByTagName('span');
		for (let i = 0; i < prices.length; i++) {
			let onePrice = prices[i].innerHTML;
			onePrice = parseFloat(onePrice);
			summaryPrice += onePrice;
			//   -------------- BONUS REDUCTION appel plus bas---------------------
			if (summaryPrice > 50) {
				let reduction = summaryPrice * 0.8;
				//to set decimal number in place of Math.round(summaryPrice * 100) / 100;
				reduction = reduction.toFixed(2);
				document.getElementById('reduction').innerHTML = `Prix apres reduction: ${reduction}&euro;`;
			}
		}
		//to set decimal number 
		summaryPrice = Math.round(summaryPrice * 100) / 100;
		

		document.getElementById('summaryPrice').innerHTML = `Prix du panier: ${summaryPrice}&euro;`;
		//TODO debloquer avant envoyer a Loic
		//alert(' Vous avez ajouté une boite au panier. Continuez les courses. Pour le panier superieur a 50€, 20% de r€duction vous attend');
		document.getElementById('btnCom').style.display = 'block';
	});

	divDes.appendChild(btnA);
	divM.appendChild(divDes);
}


//   ****************   FOOTER  ************************
const footer = document.createElement('footer');

const basket = document.createElement('p');
basket.innerHTML = 'PANIER : ';
footer.appendChild(basket);

const orders_list = document.createElement('ul');
orders_list.id = 'orders_list';
footer.appendChild(orders_list);

const summaryPrice = document.createElement('h2');
summaryPrice.id = 'summaryPrice';
footer.appendChild(summaryPrice);

//   -------------- BONUS REDUCTION ---------------------
const reduction = document.createElement('h2');
reduction.id = 'reduction';
footer.appendChild(reduction);


// 
const btnCom = document.createElement('button');
btnCom.id = 'btnCom';
btnCom.type = 'submit';
btnCom.innerHTML = 'Commander';
footer.appendChild(btnCom);

app.appendChild(footer);

//   -------------- ON CLICK COMMANDER CLEAR WEBSITE ---------------------
btnCom.addEventListener('click', function (e) {
	e.preventDefault();
	const nrBoite = localStorage.setItem();
	app.innerHTML = '';
	const h2II = document.createElement('h2');
	h2II.innerText = 'Votre commande est en cours de livraison. Elle arrivera dans `x` minutes';
	app.appendChild(h2II);
});
