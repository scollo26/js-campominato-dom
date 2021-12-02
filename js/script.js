


let containerCell = document.querySelector('.container-cell');
let button = document.querySelector('.controls  button');
const select = document.getElementById('level');
console.log(containerCell);
console.log(button);

// const row = 10;
// const col = 10;
// let numberSquare = row * col;
// let maxNumber = numberSquare;


// function arrayNumber(min, max) {
    
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// button

button.addEventListener('click', function() {

    const select = document.getElementById('level');

    // easy

    if( select.value == "easy"){
        containerCell.innerHTML ='';

        for (let i = 1; i <= 100; i++) {
            const square = document.createElement('div');
            square.classList.add('easy');
            square.append(i);
            containerCell.append(square);

            // click-cambia-colore-blu
            square.addEventListener('click', function(){
                this.classList.add('blue');
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






