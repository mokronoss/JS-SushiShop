## Question d'entretien d'embauche (sans l'ordinateur) - 1h - 20/100pts

- Est-ce que JavaScript est un langage orienté objet ?
- Est-ce qu'on peut faire des serveurs avec JavaScript ?
- Quel est le scope des variables avec JavaScript ?
- types primitifs vs objects ? quelle différence ?
- Qu'est ce qu'une promesse (Promise) ?
- Citez 2 grands framework JavaScript ? Qu'est ce qu'un framework ?
- Citez 2 grandes librairies JavaScript. A quoi servent-elle ?
- Que veut dire ES6 ?
- Une fonction peut-elle prendre comme argument une fonction ?
- Quel est votre langage de programmation préféré ?

## Exercice - 5h - 80/100pts

Pour cette exercice, vous avez droit a toutes les sources d'information, mais pas à la communication.

Les copier/coller de code d'internet seront sanctionné.

Dans `./src/data/makis.js`, une liste de makis japonais est exportée.

- Ajouter des makis à cette listes sur le même modèle (avocat, concombre, omelette).

Dans `./public/index.html` (la page d'accueil) il y une `div` a l'id `app`. Le script `./src/index.js` est déjà lié à cette page grâce à webpack.

L'exercice est la création dynamique d'un magasin en ligne de maki (type Makisu ou Sushishop).

Sans JAMAIS toucher le HTML:

- présentez la carte des makis et toutes leurs infos utiles dans la page d'accueil.
- le prix d'un seul maki est donné dans la liste, mais les makis se vendent par 8: affichez ce nombre et le prix correct dans votre HTML.
- Dans le header, un maki pris au hasard est mis en avant (une simple copie de celui de la carte)
- Chaque boite de 8 makis a un bouton "acheter"
- Dans le footer de la page, il y a un panier (vide au début). Il ne présentera que le nom et le prix des makis réservés, ainsi que le prix total de la commande et un bouton "commander"
- On peut aussi supprimer un maki avant la commande
- lorqu'on clic sur un bouton "acheter", une copie du maki est mis dans le panier
- Lorqu'on clic sur "commander" dans le footer, la page entière se vide, et affiche "Votre commande est en cours de livraison. Elle arrivera dans `x` minutes", ou `x` est le nombre de boite de maxi \* 6.

Bonus (pas compté dans le points, sauf en bonus):
- Améliorer l'affichage de votre site grâce au css
- Mettez les makis dans un fichier JSON valide, dans les assets, et requêtez le avec `fetch` ou `axios` au début du code
- Un bouton permet de vider tout le panier
- Les sushis végétariens ont une bordure verte
- Si l'utilisateur achète plus de 50€ de sushi, il a un discount de 20% sur sa commande
