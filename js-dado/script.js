/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


let dadoPlayer = Math.floor(Math.random() * 6 + 1);
console.log(dadoPlayer);
let dadoComputer = Math.floor(Math.random() * 6 + 1);
console.log(dadoComputer);
console.log(dadoPlayer > dadoComputer ? `Ha vinto il player: ${dadoPlayer}` : `Ha vinto il computer: ${dadoComputer}`);