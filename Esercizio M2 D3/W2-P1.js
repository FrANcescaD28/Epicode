/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


function trovaNumeroGrande(num1, num2){
if ( num1 > num2){
  return num1;
}else{
  return num2;
}
}
const num1 = 9;
const num2 = 6;
const largestNumber = trovaNumeroGrande(num1, num2);
console.log(largestNumber);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


function controlNumber(e) {
  if (e!== 5) {
    console.log("not equal");
  }
}
const e= 5;
controlNumber(e);
console.log(e);


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 15;
if (num % 5 === 0) {
  console.log("divisible by 5");
} else {
  console.log("not divisible by 5");
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 5;
let b = 10;
let c = 7;

if (a > b && a > c) {
  if (b > c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else {
  if (a > b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let d= 5.5;

if (typeof d === 'number' && d % 1 === 0) {
  console.log(d + " è un intero");
} else {
  console.log(d + " non è un intero");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 8;
if (numero % 2 === 0) {
  console.log(`${numero} è un numero pari.`);
} else {
  console.log(`${numero} è un numero dispari.`);
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <= 10; i++) {
  console.log(i);
}


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let day = 5;
let dayName;

switch (day) {
  case 1:
    dayName = "Lunedì";
    break;
  case 2:
    dayName = "Martedì";
    break;
  case 3:
    dayName = "Mercoledì";
    break;
  case 4:
    dayName = "Giovedì";
    break;
  case 5:
    dayName = "Venerdì";
    break;
  case 6:
    dayName = "Sabato";
    break;
  case 7:
    dayName = "Domenica";
    break;
  default:
    dayName = "Valore non valido";
}

console.log(dayName);