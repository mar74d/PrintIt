const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let flecheDroite = document.querySelector("#banner .arrow_right");
	console.log(flecheDroite);

let flecheGauche = document.querySelector("#banner .arrow_left");
	console.log(flecheGauche);


flecheDroite.addEventListener("click",function() { //Event Listener 'click' flèche droite
	ClicADroite();
	console.log("clic droit ok")
});


let IndexCourant=0; //Initialise l'index courant à 0 pour débuter les boucles

function ClicADroite() { //Fonction sur le bouton flèche droite

let imageAffichee = document.querySelector(".banner-img");//déclare variable imageAffichee
let texteAffiche = document.querySelector("#banner p");//déclare variable texteAffiche
	
	IndexCourant = IndexCourant+1;

if(IndexCourant===slides.length){
	IndexCourant=0;
}
const slideAffichee = slides[IndexCourant];
	imageAffichee.src = "./assets/images/slideshow/" + slideAffichee.image;//affiche l'image correspondante
	texteAffiche.innerHTML = slideAffichee.tagLine;//affiche le texte tagline correspondant
						
bulletSelection();	
						}


flecheGauche.addEventListener("click",function() { //Event Listener flèche gauche
	ClicAGauche();
	console.log("clic gauche ok")
});


function ClicAGauche() { //Fonction sur le bouton flèche gauche

let imageAffichee = document.querySelector(".banner-img");
let texteAffiche = document.querySelector("#banner p");

	IndexCourant = IndexCourant-1;

if (IndexCourant<0) {
	IndexCourant = slides.length-1;
}
const slideAffichee = slides[IndexCourant];
	imageAffichee.src = "./assets/images/slideshow/" + slideAffichee.image;
	texteAffiche.innerHTML = slideAffichee.tagLine;		

bulletSelection();
						}

// Ajout bullets :

for (let i = 0; i < slides.length; i++) { //boucle pour ajouter des dots

let dot = document.createElement("span"); // création div dot
dot.setAttribute("id","dot"+i);
dot.setAttribute("class","dot");
document.getElementById("dots").appendChild(dot);//ajout enfant
										}
document.getElementById("dot0").classList.add("dot_selected");

function bulletSelection(){ //ajout bullet remplis

let Dots = document.querySelectorAll(".dot");
console.log(Dots);

Dots.forEach((div,index) => {
	
	if (index === IndexCourant){
		div.classList.add("dot_selected");
	}

	else {
		div.classList.remove("dot_selected");
	}

})};
