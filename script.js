function main() {
  setupResetButton();
  drawGrid(n=16);
}

function setupResetButton() {
  const resetButton = document.querySelector("button");
  resetButton.addEventListener("click", () => {
    removeGrid();
    let toContinue = "yes";
    while (toContinue == "yes") {
      const n = prompt("Number of Squares? (Max: 100)");
      if (n>=1 && n<=100) {
        toContinue = "no";
        console.log("Working");
        drawGrid(n);
      }
      else {
        alert("Invalid input: It should be 1 to 100.")
      }
    }
  });
}

function removeGrid() {
  const container = document.querySelector(".container");
  const cellsToRemove = container.querySelectorAll("div");
  for (let i=0; i<cellsToRemove.length; i++) {
    container.removeChild(cellsToRemove[i]);
  }
}

function drawGrid(n) {
  const containerSize = 960;
  const numberOfSquares = n;
  const cellSize = containerSize/numberOfSquares;

  const container = document.querySelector(".container");
  container.setAttribute("style", `width: ${containerSize}px; height: ${containerSize}px;`);
  container.classList.add("container");

  for (let i=0; i<numberOfSquares; i++) {
    for (let j=0; j<numberOfSquares; j++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("style", `width: ${cellSize}px; height: ${cellSize}px;`);
      container.appendChild(newDiv);
      newDiv.classList.add("cell");
      newDiv.addEventListener("mouseenter", () => {
        newDiv.style.backgroundColor = "red";
      })
    }
  }
}

main();