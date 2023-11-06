let numero;
let numPari = 0;
let numDispari = 0;
numero = parseInt(prompt('inserisci un numero'));
for (let i = 0; i < 5; i++) {
    
    if (numero % 2 == 0) {
        
        console.log('e pari');
    } else  {
        
        console.log('e dispari');
    } 
}

console.log(numPari);
console.log(numDispari);
