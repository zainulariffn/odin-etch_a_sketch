const cntr = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-container");

    cntr.append(div);
  }
}
createGrid();
