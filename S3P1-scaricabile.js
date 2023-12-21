/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* function crazySum(){
   
    const num = 10;
    const num1 = 15;

    let somma = num+num1;



if( somma !== num){

    console.log( somma * 3);
    return;

}else{
    console.log('rivedi i numeri');
}
}

crazySum(); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* function boundary(){

    const valore = 400;

    if(valore >= 20 && valore <= 100 || valore === 400){
        
        console.log('true');
    
    } else{ 
        console.log('rivedi il quanto');
    }

}

boundary(); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* function reverseString(){
    let stringa = "questaFrase";

    console.log(stringa.split("").reverse().join(""));
   
}

reverseString(); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* function giveMeRandom(n){



    let nCasuali = [0,1,2,3,4,5,6,7,8,9,10];
    let casuale = (Math.random(nCasuali) * 10);
    let aCaso = [casuale]

    console.log([aCaso]);
    

}

giveMeRandom(); */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area(l1,l2){
    const base = 5;
    const altezza = 9;
    
    totaleArea = base * altezza;
    console.log(totaleArea);
}

area(); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff() {

    const fornito = 300;
    const num = 19;

    let differenza = fornito / num;

    let assoluto = Math.abs(differenza);
      
    if(assoluto <= 19){
        console.log(assoluto * 3);
    }else{
        console.log('puoi aggiungere qualcosa');
    }
}

crazyDiff();

 */


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* function codify() {

    let parolaCasuale = "codetext";

    if (parolaCasuale !== "code") {


        let parola = [parolaCasuale];
        let addParola = parola.push('code');
        let fraseUnica = parola.reverse().join("");

        console.log(fraseUnica);


    } else {

        

        console.log(parolaCasuale);

    }
}
codify();*/



/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* function check3and7() {
    let numPositivo = 40;
    const divisore1 = 3;
    const divisore2 = 7;


    if (numPositivo % divisore1 || numPositivo % divisore2) {
        console.log('true');

    } else {
        console.log('false');
    }
}
check3and7(); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* function cutString(){

    const stringa = "sonoUnaStringa";
    let istringa = stringa.slice( 1, stringa.length -1)
    console.log(istringa);

}
cutString(); */
