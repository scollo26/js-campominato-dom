// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git). L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.


let containerCell = document.querySelector('.container-cell');
let button = document.querySelector('.controls  button');
const select = document.getElementById('level');
console.log(containerCell);
console.log(button);

// funzione-per-creare-numeri-random-listNumbers
function bombFunc(min, max) {

    let listNumbers = [];

    // ciclo-per-inserire-16-numeri
    for(let i = 0; i < 16; i ++){
        min = Math.ceil(min);
        max = Math.floor(max);

        let element = listNumbers[i];
        element = Math.floor(Math.random() * (max - min + 1)) + min;

        // controllo-se-il-numero-esiste-nell'arrey
        while(listNumbers.includes(element)){
            element = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        listNumbers.push(element);
    }
    
    return listNumbers;
}

// button

button.addEventListener('click', function() {
    // funzioni con numeri random con min e max
    const bombEasy = bombFunc(1, 100);
    const bombMedium = bombFunc(1, 81);
    const bombHard = bombFunc(1, 49);
    console.log("array easy " + bombEasy);
    console.log("array medium " + bombMedium );
    console.log("array hard " + bombHard);
    
    
    const select = document.getElementById('level');

    // easy

    if( select.value == "easy"){

        // pulizia della pagina html
        containerCell.innerHTML ='';
        
        for (let i = 1; i <= 100; i++) {
            const square = document.createElement('div');
            square.classList.add('easy');
            square.append(i );
            containerCell.append(square)

            // click-cambia-colore
            square.addEventListener('click', function(){
                
                // controllo div del numero bomba con numero di i
                if (bombEasy.includes(i)){
                    for (let x = 0; x < 100; x++) {
                        const bombe = document.querySelectorAll('.easy');
                        if (bombEasy.includes(x + 1)){
                            bombe[x].classList.add('red');   
                        }
                        containerCell.replaceChild(bombe[x].cloneNode(true), bombe[x]); 
                    }
                }else{
                    this.classList.add('blue');
                }
                
            });
        
        }
    // medium
    }else if( select.value == "medium"){
        // pulizia della pagina html
        containerCell.innerHTML ='';
    
        for (let i = 1; i <= 81; i++) {
            const square = document.createElement('div');
            square.classList.add('medium');
            square.append(i);
            containerCell.append(square);

            // click-cambia-colore
            square.addEventListener('click', function(){
                if ( bombMedium.includes(i)){
                    for (let x = 0; x < 81; x++) {
                        const bombe = document.querySelectorAll('.medium');
                        if (bombMedium.includes(x + 1)){
                            bombe[x].classList.add('red');   
                        }
                        containerCell.replaceChild(bombe[x].cloneNode(true), bombe[x]); 
                    }
                }else{
                    this.classList.add('blue');
                }
                
            });
        
        
        }

    // hard

    }else{
        // pulizia della pagina html
        containerCell.innerHTML ='';
        for (let i = 1; i <= 49; i++) {
            const square = document.createElement('div');
            square.classList.add('hard');
            square.append(i);
            containerCell.append(square);

            // click-cambia-colore
            square.addEventListener('click', function(){
                if (bombHard.includes(i)){
                    for (let x = 0; x < 49; x++) {
                        const bombe = document.querySelectorAll('.hard');
                        if (bombHard.includes(x + 1)){
                            bombe[x].classList.add('red');   
                        }
                        containerCell.replaceChild(bombe[x].cloneNode(true), bombe[x]); 
                    }
                }else{
                    this.classList.add('blue');
                }
                
            });  
        }
    
    }
    
});







