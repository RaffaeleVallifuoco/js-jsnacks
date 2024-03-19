console.log('CONSOLE TEST');
console.log('');

// 1) L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.
// console.log('Snack 1');
// let numberOne = prompt('Inserisci il primo numero : ');
// numberOne = parseFloat(numberOne);
// console.log('primo numero : ', numberOne);
// numberTwo = parseFloat(numberTwo);
// let numberTwo = prompt('Inserisci il secondo numero : ');
// console.log('secondo numero : ', numberTwo);

// if (numberOne > numberTwo) {
//     console.log('Il numero maggiore è : ',numberOne);
// } else {
//     console.log('Il numero maggiore è : ', numberTwo);
// };
// console.log('End snack 1');
// console.log('');


// 2) L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
// console.log('Snack 2');
// const stringOne = prompt ('Inserisci la orima frase : ');
// console.log('stringa 1 : ',stringOne);
// const stringTwo = prompt('Inserisci la seconda frase : ');
// console.log('stringa 2 : ',stringTwo);
// const lenghtOne = parseInt(stringOne.length);
// const lenghtTwo = parseInt(stringTwo.length);
// if(lenghtOne > lenghtTwo) {
//     console.log(stringTwo);
// } else {lenghtOne < lenghtTwo} {
//     console.log(stringTwo);
// };
// console.log('End snack 2');
// console.log('');




// 3) Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// console.log('Snack 3')
// let somma = 0;
// for (let i = 0; i < 10; i ++) {
//     let number = parseInt(prompt ('Inserisci il numero '+ (i + 1)));
//     console.log('il numero ' ,(i + 1) ,' è : ', number);
//     somma += number;
// }
// console.log('La somma dei numeri inseriti è : ' ,somma);
// console.log('');



// 4) In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// console.log('Snack 4');
// console.log('Party List :')
// let partyList = ["Raffaele" , "Eliana" , "Andrea" , "Sara" , "Simone" , "Gianluca" , "Olga" , "Gianfraschio" , "ElBarto" , "Ajeje"]
// for(let i = 0; i < partyList.length; i ++) {
//     console.log(partyList[i]);
// };
// const user = prompt('Inserisci il tuo nome');
// let validation = false ;
// console.log('Il nome inserito è :  ' , user);
// for(let i = 0; i < partyList.length ; i ++) {
//     if(user == partyList[i]) {
//         let validatio = true;
//     } 
// }
// if (validation = true) {
//     console.log(user, ' puoi entrare.');
// } else {
//     console.log(user, ' non puoi entrare');
// }
// console.log('End snack 4');



// 5)Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
//     se è dispari inseriscilo nell’array.Stampa l'array alla fine.
// console.log('Snack 5');
// let numbersArray = [];
// for(let i = 0; i < 6; i ++) {
//     let number = prompt ('Inserisci il numero ' +(i + 1) + ' di 6');
//     console.log('numero inserito : ' , number);
//     if((number % 2) != 0 ) {
//         numbersArray.push(number);
//     }
// }
// console.log('Array dei numeri dispari :');

// for(let j = 0; j < numbersArray.length; j ++) {
//     console.log(numbersArray[j]);
// }
// console.log('End snack 5');
// console.log('');



// 6) Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso.
// console.log('Snack 6');
// const randomNumber = Math.round(Math.random()*10);
// console.log(randomNumber);
// const choice = parseInt(prompt('Indovina quale numero sto pensando'));
// console.log('Hai scelto il : ' +choice);
// if(randomNumber == choice) {

//     console.log('YOU WIN');
// } else {
//     console.log('YOU LOSE')
// }
// console.log('End snack 6');


// 7) Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
// Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.