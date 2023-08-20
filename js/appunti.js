//lezzione del 03lug 
//drive 19js
//paggina da 5 - 
//progetto js-biglietto-treno-from


//creazione variabbile , piu inserimento nel html grazie al id
const jsappunti = document.getElementById("jselement");


//CLASSLIST

//cosi modifico il contenuto html 
jsappunti.innerHTML = "modificato da js";

//cosi aggiungoo un elememento (stringa) al html 
jsappunti.innerHTML = jsappunti.innerHTML + " . " + "aggiunto da js";

//mette le cose aggiuntive alla fine del'elemnto html 
jsappunti.append("   . testo aggiunto con append    .");

//aggiunge lelemnto all'inizio del html
jsappunti.prepend("   testo aggiunto con prepend   .");

//aggiunge una classe 
jsappunti.classList.add("aggiunto-da-js" , "seconda-classe");

//remuove la classe inserita
jsappunti.classList.remove("seconda-classe");

//sostituisce una classe esistente 
jsappunti.classList.replace("aggiunto-da-js" , "sostituito-js");

//se lelemento a gia la classe qui inserita la toglie , 
//se non ce la mette
jsappunti.classList.toggle("bg-dark");



//MANIPOLAZIONE DEGLI STILI 

//cambia lo stile dei caratteri
jsappunti.style.fontStyle = "italic";

//cambia il colore
jsappunti.style.color = "white";

//cabia lo sfondo
jsappunti.style.backgroundColor = "red";