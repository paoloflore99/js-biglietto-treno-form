const chilometriInputElement = document.querySelector("[name='chilomeri']");
const etaInputElement = document.querySelector("[name='eta']");;
const nomeInputElement = document.querySelector("[name='nome']");
const cognomeInputElement = document.querySelector("[name='cognome']");

console.dir(cognomeInputElement)

const tuttoElement = document.getElementById("biglietto")

const btnElement = document.querySelector(".btnJs");
console.log(btnElement);

btnElement.addEventListener("click", function () {
    
    console.log("funziona ?");
    const chilomeri = chilometriInputElement.value;
    const eta = etaInputElement.value;
    const nome = nomeInputElement.value;
    const cognome = cognomeInputElement.value;
    const prezzo = 0.21;
    const discointanziani = (chilomeri * prezzo) / 0.40;
    const scontoNormale = (chilomeri * prezzo) / 0.20;
    const senzaSconto = chilomeri * 0.21;

    console.log(tuttoElement)

    if (eta < "18") {
        // alert("sconosciuto")
        tuttoElement.innerHTML =  "ciao" + " " + nome + " " + cognome + " il biglietto costa e di " + discointanziani + " $";
        // alert("va la 1")
    }else if ( eta > 65){
        tuttoElement.innerHTML =  "ciao" + " " + nome + " " + cognome + " il biglietto costa e di " + scontoNormale + " $";
        // alert("ciao paolo")
        // tuttoElement.innerHTML = "ciao" + " " + nome + " " + cognome ;
    }else {
        tuttoElement.innerHTML =  "ciao" + " " + nome + " " + cognome + " il biglietto costa e di " + senzaSconto + " $";
    }
});