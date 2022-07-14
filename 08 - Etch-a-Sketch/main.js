const grid = document.querySelector('.gridContainer');
const square = document.querySelector("div");
let color = 'bg-dark'


//Creating Grid//
function makeGrid() {
    for(i=0; i<1024; i++){
        let squares = document.createElement('div');
        squares.classList.add("square");
        grid.appendChild(squares);
    }
    
    //Creating Draw Function//
    square.addEventListener("mousemove", function(event) {
        event.target.classList.replace("square", color);
        event.target.classList.replace("bg-dark", color);
        event.target.classList.replace("bg-light", color);
        event.target.classList.replace("bg-info", color);
        event.target.classList.replace("bg-danger", color);
    });
};
makeGrid()


//Creating Color Change//
document.querySelector("#bg-dark").addEventListener("click", function(e) {
    color = 'bg-dark';
});
document.querySelector("#bg-white").addEventListener("click", function(e) {
    color = 'bg-light';
});
document.querySelector("#bg-blue").addEventListener("click", function(e) {
    color = 'bg-info';
});
document.querySelector("#bg-red").addEventListener("click", function(e) {
    color = 'bg-danger';
});
document.querySelector("#bg-green").addEventListener("click", function(e) {
    color = 'bg-success';
});
document.querySelector("#bg-yellow").addEventListener("click", function(e) {
    color = 'bg-warning';
});


//Creating Grid Reset//

let reset = document.querySelector('#reset').addEventListener("click", removeAllTiles);
function removeAllTiles() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    makeGrid()
}



