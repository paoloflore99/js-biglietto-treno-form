console.log("bellaaaaa")

//const generatore = alert.value   prova ma fallimentare

//const eta = prompt("inserire la tua eta")
//const chilometri = prompt("inserire il numero di chilometri")


/*document.getElementById("eta").innerHTML = eta
document.getElementById("nome").innerHTML = nome
document.getElementById("chilometri").innerHTML = chilometri
document.getElementById("prezzoFinale").innerHTML = (chilometri * 0.21).toFixed(2);
document.getElementById("prezzoFinale2").innerHTML = ((chilometri * 0.21) * 40 ) / 100 .toFixed(2);*/



//nota bene per usare un elemento html id class bisogna prima scriverlo qui sotto

const nome = document.querySelector("[name=Username]")
const eta = document.querySelector("[name=anni]")
const km = document.querySelector("[name=chilometri]")

const random = document.querySelector("random") 


const sconto20=((km * 0.21) * 20 ) / 100 // lo sconto applicato
const sconto40=((km * 0.21) * 40 ) / 100


document.getElementById("prezzoFinale").innerHTML = (km * 0.21).toFixed(2);                 //.toFixed(2); serve mer mettere un numero massimo di decimali 
document.getElementById("prezzoFinale2").innerHTML = ((km * 0.21) * 40 ) / 100 .toFixed(2);   //perche non vaiiiii

if (eta < 18) {
    document.getElementById("prezzoFinale2").innerHTML = ((km * 0.21) * 20 ) / 100;//sconto del 20%
} else if ( eta >= 65 ) {
    document.getElementById("prezzoFinale2").innerHTML = ((km * 0.21) * 40 ) / 100; //sconto del 40%
} 

let sconto =0;




var randInt = Math.floor(Math.random()*100000);  //  gene numero random   //generatore di numero per il biglietto

console.log(randInt);  //generatore di numero per il biglietto    //capisci bene come far a mettere questo risultato nella paggina


//generatore
//btn js



const generatore = document.querySelector(".generatore")  //cerca la classe non id con il . inizziale 

generatore.addEventListener("click", function () { //serve per quando si fa clik 

    console.log("funziona") //serve per vedere se funziona il tasto 
    const eta = nome.Value;//prova da rivedere in classe oppure dasolo


//   if (nome !== "paolo") //{ se vuoi else leva le // perche non va , e da chiedere IMPORTANTE
//    alert("nome sbagliato") ; // si puo usare anche con le passord per far in modo che se mettiamo una cosa diversa esce un riprova
    //}else{  se vuoi else leva le //

    //}  se vuoi else leva le //
})




/*DUBBI 
    1   perche non mi fa accceder anche se ho impostato
        la scritta per accedere riga da 54 a 65 


    2   perche adesso in va piu il calcolo dello sconto 
        del biglietto nonostatente e collegato js con html
        perche sulla paggian infatti esce n&n quindi 
        sta dicendo non e un numero
*/ 