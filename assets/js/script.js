let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)
let currentPlayer = "x"

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cell.innerText.trim() != "")return
       cell.innerText = currentPlayer
       currentPlayer = currentPlayer == "x" ? "o" : "x"
    })
})