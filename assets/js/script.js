 /* jshint esversion: 6 */
/* globals $:false */

/* Gamepage variables. */
let playerText = document.getElementById('playerText');
let cells = document.querySelectorAll('.cell');
cells = Array.from(cells);
let currentPlayer = "x";
const restarBtn = document.getElementById('restarBtn');
let hasGameFinished = false;

/* Wiining combinations for game boards*/
const winningCombinations =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

cells.forEach(function(cell){
  "use strict";
    cell.addEventListener('click', function(){
       if(cell.innerText.trim() != "" || hasGameFinished) return;
       cell.innerText = currentPlayer;
       checkForWinner();
    
       if(playerHasWon()!== false){
        playerText.innerHTML =`${currentPlayer}has won!`;
        }
       currentPlayer = currentPlayer == "x" ? "o" : "x";
    });
});

function checkForWinner(){
  "use strict";
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer);
        if(check){
            highlightCells(combination);
            playerText.innerHTML =`${currentPlayer} has won!`;
            hasGameFinished = true;
        }
  });
}

function highlightCells(combination){
  "use strict";
  combination.forEach(function(idx){
    cells[idx].classList.add("highlight");
  });
}

function playerHasWon(){
  "use strict";
     for (const condition of winningCombinations) {
        let[a,b,c] = condition;
        if (cells[a] && cells[a] == cells[b] && cells[a]== cells[c]){
            return[a,b,c];
        }
     }
     return false;
}

restarBtn.addEventListener('click', Restart);

function Restart() {
  "use strict";
   location.reload();
}
