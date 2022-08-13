// Creating 16 X 16 grid

let container = document.querySelector(".container")

function makeRows(rows,cols) {
   for (let i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
   }
}

makeRows(16,16);

// HOVER

let gridMouse = document.querySelectorAll(".grid-item")

console.log(gridMouse)

// gridMouse.addEventListener("mouseover", function() {
//    gridMouse.setAttribute("style", "background-color:blue;");
// })

// gridMouse.addEventListener("mouseout", function() {
//    gridMouse.setAttribute("style", "background-color: white;")
// })

gridMouse.forEach(grid => {
   grid.addEventListener("mouseover", function() {
      grid.style.backgroundColor = "black";
   })
})

gridMouse.forEach(grid => {
   grid.addEventListener("mouseout", function() {
      grid.style.backgroundColor = "white";
   })
})
