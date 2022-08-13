// Creating 16 X 16 grid

let container = document.querySelector(".container")

function makeRows(rows,cols) {
   for (let i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
   }
}
makeRows(32,32);

// HOVER

let gridMouse = document.querySelectorAll(".grid-item")

gridMouse.forEach(grid => {
   grid.addEventListener("mouseover", function() {
      grid.style.backgroundColor = "black";
   })
})

// Button

// // Selecting the button
// const button = document.querySelector("#button")

// // Event listener when clicked
// button.addEventListener("click", function() {
//    // A prompt will apear 
//    let gridSide = prompt("choose the gridsize");
//    // remove the existing grid
//    gridMouse.forEach(grid => {
//    grid.classList.remove("grid-item")
// })
//    // add the new grid with input from prompt
//    makeRows(gridSide,gridSide);
//    })
//    // makeRows(gridSide,gridSide)


// Button that will restart again 

const button = document.querySelector("#button")

button.addEventListener("click", function() {
   gridMouse.forEach(grid => {
      grid.style.backgroundColor = "white";
   })
})


