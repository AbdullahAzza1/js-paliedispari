const parola = prompt("inserisci una parola")

let parolaInvertita = invParola(parola)

if (parola == parolaInvertita) {
    console.log('la parola e Palindroma');
} else {
    console.log('la parola non e Palindroma');
}
function invParola(str) {
    let strInversa = str.split('').reverse().join('');
    return strInversa;
}



