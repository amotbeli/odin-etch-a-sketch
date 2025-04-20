function main() {
  drawGrid();
}

function drawGrid() {
  const containerSize = 500;
  const numberOfSquares = 16;
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