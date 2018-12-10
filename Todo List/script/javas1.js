//EventListner che richiama la funzione 'aggiungiAzione'
// quando viene premuto INVIO/ENTER
document.addEventListener('keypress', (event)=>{
    const key= event.key;
    if(key=="Enter"){
        aggiungiAzione();
    }
});

//EventListner che richiama la funzione 'aggiungiAzione'
// quando viene premuto il BOTTONE
document.querySelector("button").addEventListener("click",aggiungiAzione);

//funzione per aggiungere le cose da fare alla lista
function aggiungiAzione(){
    //Seleziona il textBox
    var azione= document.querySelector("input");

    if(azione.value!=""){
        //crea un elemento riga della lista
        var li = document.createElement("li");

        //seleziona l'elemento insieme della riga della lista
        var ul= document.querySelector("ul");

        //aggiungi alla riga della lista un text
        //in questo caso ha preso il textbox
        li.appendChild(document.createTextNode(azione.value));

        //aggiungi il nuovo testo all'insieme
        ul.appendChild(li);

        //cancella il contenuto del textbox
        azione.value= "";
    }else{ //se la textbox risulta vuota, manda un alert
        alert("Devi inserire qualcosa!");
    }
}

//permette di eliminare l'azione eseguita tramite il click
document.getElementById("lista").addEventListener("click", function (e) {
        e.target.parentNode.removeChild(e.target);
});


