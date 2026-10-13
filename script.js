/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const persona={
   nome:`gabriele`,
   cognome:`raggi`,
   eta:`26`,
   citta:`roma`,


}
console.log(`
   ${persona.nome} 
   ${persona.cognome}
   ${persona.citta}
   ${persona.eta}`);





/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete persona.eta;
persona.email=`email`
console.log(persona.email);






/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const persona1={
   nome:`gabriele`,
   cognome:`raggi`,

   eta:`26`,
   citta:`roma`,
   indirizzo:{
      via:`via giacomo del duca`,
      citta:`Roma`,
      cap:`00155`,
   }


}


/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const chiave = "nome";
console.log(persona[chiave]);




/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 5
let b = 30
let c = 40

if (a>=b){
   if (a>=c){
      if(a == b){
         console.log(`pareggio con ${a} e ${b}`)
      }
      else if (a == c){
         console.log(`pareggio con ${a} e ${c}`)
      
      }else{
         console.log(`il piu grande e ${a}`)
      }
   }   else{
      console.log(`il pi grande e ${c}`)

   }
   
}else if (b>=c){
   if (b==c){
      console.log(`${b} e ${c} sono uguali`)

   }else{
      console.log(`il piu grande e ${b}`)

   }
   

   
}else if (c>a) {
   console.log (`il piu grande e ${c}`)
}








/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const tot=50













/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const lista=[42,`ciao`,true]

for (let i in lista){
   console.log(typeof lista[i]);

}
/* let serve a creare una variabile, cioè a riservare una scatola 
nella memoria del computer per salvare un'informazione che potrà cambiare
valore in futuro nel corso del programma.


/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const lista1=[]
lista1.push(1,2,3,4,5)
console.log(lista1)

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 const spesa = ['Penna', 'Quaderno', 'Zaino', 'Astuccio']
spesa.splice(1,1,'Diario')
console.log(spesa)





/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = ['Penna', 'Quaderno', 'Zaino']
console.log (prodotti.indexOf('Zaino'))



/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const utenti = [
  { nome: 'Mario', eta: 25 },
  { nome: 'Anna', eta: 30 },
  { nome: 'Luca', eta: 22 }
];

for (const utente of utenti) {
  console.log(`${utente.nome} (${utente.eta} anni)`);
}



/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const n=[ 
   {marmelata:`disponibile`,prezzo:11},
   {pane:`disponibile2`,prezzo: 4},
   {pesce:`disponibile3`,prezzo: 22}
   {carne:`disponibile3`,prezzo: 15}
]





/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
