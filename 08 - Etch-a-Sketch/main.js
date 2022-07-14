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
};
makeGrid()

//Creating Draw Function//
square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", color);
    event.target.classList.replace("bg-dark", color);
    event.target.classList.replace("bg-light", color);
    event.target.classList.replace("bg-info", color);
    event.target.classList.replace("bg-danger", color);
});


//Creating Color Change//
document.querySelector("#bg-dark").addEventListener("click", function(e) {
    color = 'bg-dark';
});
document.querySelector("#bg-light").addEventListener("click", function(e) {
    color = 'bg-light';
});
document.querySelector("#bg-info").addEventListener("click", function(e) {
    color = 'bg-info';
});
document.querySelector("#bg-danger").addEventListener("click", function(e) {
    color = 'bg-danger';
});


// //Creating Grid Reset//

// let reset = document.querySelector('#reset');
// reset.addEventListener("click", clear);

// function clear(){
//     let squares = grid.querySelectorAll('div');
//     squares.remove();
// }



