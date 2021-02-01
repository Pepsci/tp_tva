var tout_les_input = document.querySelectorAll('input[type="text"]');
for(var index = 0; index < tout_les_input.length; index++){

	tout_les_input[index].addEventListener('keyup', calculeTTC )

}
function calculeTTC(){


var	taux = document.getElementById('taux').value;
var	montant = document.getElementById('montant').value;	
var	montanttva = document.querySelector('.montanttva').value;
	
	resulttva = taux* montant / 100;

montant = parseInt(montant);

	resultttc = montant+ (taux* montant / 100);
	document.querySelector('.montanttva').value = resulttva;
	document.getElementById('resultat').value = resultttc;

}



var les_tva = document.querySelectorAll('input[type="button"]');

for(var index = 0; index < les_tva.length; index++){
	les_tva[index].addEventListener('click', function () {

	document.getElementById('taux').value = parseInt(this.value);

	calculeTTC();
});
}





var	montant = document.getElementById('montant').value;	
var montantHorsTaxe = document.createElement('p');
montantHorsTaxe.append(document.createTextNode('Montant Hors Taxes: '+ montant +'€'));
document.querySelector('.container').append(montantHorsTaxe);

	// 	var montantTVA = document.createElement('p');
	// montantTVA.append(document.createTextNode('Montant Hors Taxes: '+ montant +'€'));
	// document.querySelector('.container').append(montantTVA);

	// 	var montantHorsTaxe = document.createElement('p');
	// montantHorsTaxe.append(document.createTextNode('Montant Hors Taxes: '+ montant +'€'));
	// document.querySelector('.container').append(montantHorsTaxe);
	// 