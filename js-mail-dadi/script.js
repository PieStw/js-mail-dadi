/* Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */


const emailAccettate = ["paolo@boolean.com", "michele@boolean.com", "tiziano@boolean.com",];
const tuaEmail = prompt("Inserisci la tua email");
let accettato = false;

for(let i = 0; i < emailAccettate.length; i++){

    if(emailAccettate[i] == tuaEmail)
        accettato = true;

}

console.log(accettato ? "Ammesso" : "Non ammesso");