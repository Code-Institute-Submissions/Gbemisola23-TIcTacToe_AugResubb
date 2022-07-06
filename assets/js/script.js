 /* jshint esversion: 6 */
/* globals $:false */

let playerText = document.getElementById('playerText')
let cells = document.querySelectorAll('.cell')
let winnerIndicator = getComputedStyle(document.body).getPropertyValue( '--winning-blocks')
cells = Array.from(cells)
let currentPlayer = "x"
const restarBtn = document.getElementById('restarBtn')

const winningCombinations =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function checkForWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
    if(check){
        highlightCells(combination);
        playerText.innerHTML =`${currentPlayer} has won!`;
    }
  
  })
}



function highlightCells(combination){
combination.forEach(function(idx){
  cells[idx].classList.add("highlight");
})
}

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cell.innerText.trim() != "")return;
       cell.innerText = currentPlayer

       if(playerHasWon()!== false){
        playerText.innerHTML =`${currentPlayer}has won!`
        let winning_blocks = playerHasWon() 
     }
      
       currentPlayer = currentPlayer == "x" ? "o" : "x"
       checkForWinner()
    })
})

function playerHasWon(){
     for (const condition of winningCombinations) {
        let[a,b,c] = condition
        if (cells[a] && cells[a] == cells[b] && cells[a]== cells[c]){
            return[a,b,c]
        }

     }
     return false
}

restarBtn.addEventListener('click', Restart)

function Restart() {
   location.reload()

}

 
  
  
  