function sulclick() {


  document.getElementsByClassName("btn").innerHTML = confirm("Commento inviato, premi'ok' per continuare");
  console.log("Inviato");

}






function cambioTitolo() {

  let nomeNegozio = document.querySelector('#titolo');

  nomeNegozio.innerHTML = "h1 cambiato";

  console.log(nomeNegozio);

}
cambioTitolo();







function colorChange() {

  let body = document.querySelector("body");

  body.style.backgroundColor = "pink";
}

colorChange();







function cambioIndirizzoTdUno() {

  let newAddress = document.querySelector("#tdUno");

  newAddress.innerHTML = "nuovo cambio -> Porco che vola n°50";

  console.log("newAddresstd1");

}

cambioIndirizzoTdUno();






function cambioIndirizzoTdDue() {

  let secondoTd = document.querySelector("#tdDue");

  secondoTd.innerHTML = "citta qualsiasi";

  console.log("newAddresstd2");

}
cambioIndirizzoTdDue();






function immagini() {


  let scompariImg = document.querySelector(".immagineProdotti");
  /*Ho provato a usare "querySelectorAll ma non ottengo ciò che voglio
  avrei fatto un ciclo for per far si che tutte le immagini scompaiano ma non riesco*/

  scompariImg.style.visibility= "hidden"; 

  console.log('scomparsi');


}

immagini();


