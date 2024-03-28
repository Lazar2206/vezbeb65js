
//console.log(obrisiDugmad);
//iyvrsna funkcija
function menjanjeBoje(boja) {
    let obrisiDugmad =document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
} 

//menjanjeBoje("green");

//arrow

let menjanjeBojeA =(boja)=> {
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}
//menjanjeBojeA("orange");
let menjanjeBojeB=(boja)=> Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=>dugme.style.backgroundColor=boja);
menjanjeBojeB("pink");

// 3. tip - callback funkcija

let obrisiDugmad=document.getElementsByClassName("obrisi");

for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click",function(e) {
console.log(this);
console.log(this.parentNode);
let elementZaBrisanje = this.parentNode;
elementZaBrisanje.remove();
    }) 
    }

    function dodajDestinaciju(event) {
        event.preventDefault();
        let inputPolje=document.querySelector("#dodaj-destinaciju input");
        let nazivNoveDest=inputPolje.value;
        if (nazivNoveDest) {
            let ul=document.getElementById("lista");
            let noviLi=document.createElement("li");
            noviLi.innerHTML= `<span class="naziv">${nazivNoveDest}</span>
            <span class="obrisi">obriši</span>`;
            ul.appendChild(noviLi);
            inputPolje.value="";
    }
    
    }
    function pozivCallBack(){
        let forma=document.forms["dodaj-destinaciju"];
        forma.addEventListener("submit",dodajDestinaciju);
    }


    document.addEventListener("DOMContentLoaded",pozivCallBack);
