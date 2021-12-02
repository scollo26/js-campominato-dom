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

// const row = 10;
// const col = 10;
// let numberSquare = row * col;
// let maxNumber = numberSquare;


function arrayNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// button

button.addEventListener('click', function() {


    let bomb = [];
        while(bomb.length < 16){
        let random = Math.floor(Math.random() * 100) + 1;
        if(bomb.indexOf(random) === -1) bomb.push(random);
        }
        console.log(bomb);
    

    const select = document.getElementById('level');

    // easy

    if( select.value == "easy"){
        containerCell.innerHTML ='';

        for (let i = 1; i <= 100; i++) {
            const square = document.createElement('div');
            square.classList.add('easy');
            square.append(i );
            containerCell.append(square)

            // click-cambia-colore-blu
            square.addEventListener('click', function(){
                if ( bomb.includes(i)){
                    
                 

                }else{
                    this.classList.add('blue');
                }
                
            });
        
        }
    // medium
    }else if( select.value == "medium"){
        containerCell.innerHTML ='';
    
        for (let i = 1; i <= 81; i++) {
            const square = document.createElement('div');
            square.classList.add('medium');
            square.append(i);
            containerCell.append(square);

            // click-cambia-colore-blu
            square.addEventListener('click', function(){
                this.classList.add('blue');
            });
        
        
        }

    // hard

    }else{
        containerCell.innerHTML ='';
        for (let i = 1; i <= 49; i++) {
            const square = document.createElement('div');
            square.classList.add('hard');
            square.append(i);
            containerCell.append(square);

            // click-cambia-colore-blu
            square.addEventListener('click', function(){
                this.classList.add('blue');
            });
        
            
        }
    
    }
    
});


// function arrayNumber(numberQ) {

//     let arr = [];
//     while(arr.length < numberQ){
//     let random = Math.floor(Math.random() * 100) + 1;
//     if(arr.indexOf(random) === -1) arr.push(random);
//     }
//     console.log(arr);
    
//     return arr;
// }


// Esercizio-con-funzione

// let button = document.querySelector('.controls  button');

// button.addEventListener('click', function() {
//     let numberEasy = 100;
//     let numberMedium = 81;
//     let numberHard = 49;
//     let easy = "easy";
//     let medium = "medium";
//     let hard= "hard";
//     const select = document.getElementById('level');

//     function addDiv(number, level){
//         let containerCell = document.querySelector('.container-cell');
        
        
//         containerCell.innerHTML ='';

//         for (let i = 1; i <= number; i++) {
//             const square = document.createElement('div');
//             square.classList.add(level);
//             square.append(i);
//             containerCell.append(square);

//             // click-cambia-colore-blu
//             square.addEventListener('click', function(){
//                 this.classList.add('blue');
//             });
    
//         }

//     }

//     if( select.value == "easy"){
//         addDiv(numberEasy,easy);
//     }else if( select.value == "medium"){
//         addDiv(numberMedium,medium);
//     }else{
//         addDiv(numberHard,hard);
//     }

// });





