// Creating 16 X 16 grid

let container = document.querySelector(".container")

// let grid1 = document.createElement("div")
// grid1.setAttribute("class", "grid")
// container.append(grid1)

function makeRows(rows,cols) {
   // container.style.setProperty('--grid-rows', rows);
   // container.style.setProperty('--grid-cols', cols);
   for (let i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      // cell.innerText = (i + 1);
      container.appendChild(cell).className = "grid-item";
   }
}

makeRows(16,16);