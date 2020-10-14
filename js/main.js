//chilometri
var chilometri = parseInt ( prompt('numero di chilometri da percorrere') );

//età
var età = parseInt ( prompt ('età del passeggero') );
console.log ('chilometri età', chilometri, età);

//tasso
var tasso = 0.21;

//prezzo
var prezzo = chilometri * tasso;
console.log ('prezzo', prezzo);

//sconti 
if ( età < 18) {
    sconto = ( prezzo / 100 ) * 20;
} 
else if ( età > 65) { 
    sconto = ( prezzo / 100 ) * 40; 
}
 else {
    sconto = 0;
}

//prezzofinale
var prezzoFinale = prezzo - sconto;
console.log('sconto', sconto);

var prezzoFinaleFixed = prezzoFinale.toFixed(2);


document.getElementById ('prezzo-finale').innerHTML = 'Prezzo finale' + ' ' + prezzoFinaleFixed + ' ' + '€';