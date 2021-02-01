function calculeTTC(){

var resultttc = 0;
var resulttva = 0;
let calculeTTC = 0


var	taux = parseFloat(document.getElementById('taux').value);
var	montant = parseFloat(document.getElementById('montant').value);	
var	montanttva = parseFloat(document.querySelector('.montanttva').value);


	// while (calculeTTC < 4) {
	
	resulttva = taux* montant / 100;
	resultttc = montant + (montant * taux / 100);

	document.querySelector('.montanttva').value = resulttva;
	document.getElementById('resultat').value = resultttc;
	
	// calculeTTC++;
	// }
}

var les_tva = document.querySelectorAll('.tva');

function clique() {
	var getValue = this.getAttribute('value');

	document.getElementById('taux').value = getValue;
}

for(var index = 0; index < les_tva.length; index++){
	les_tva[index].addEventListener('click', clique);

}


	// var montantHorsTaxe = document.createElement('p');
	// montantHorsTaxe.append(document.createTextNode('Montant Hors Taxes: '+ montant +'€'));
	// document.querySelector('.container').append(montantHorsTaxe);

	// 	var montantTVA = document.createElement('p');
	// montantTVA.append(document.createTextNode('Montant Hors Taxes: '+ montant +'€'));
	// document.querySelector('.container').append(montantTVA);

	// 	var montantHorsTaxe = document.createElement('p');
	// montantHorsTaxe.append(document.createTextNode('Montant Hors Taxes: '+ montant +'€'));
	// document.querySelector('.container').append(montantHorsTaxe);
	// 