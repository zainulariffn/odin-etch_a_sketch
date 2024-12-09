const cntnr = document.querySelector(".container");
const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset");

const createGrid = () => {
  cntnr.textContent = "";

  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-container");

    div.addEventListener("mouseover", () => {
      const random = genRandomColor();
      div.style.backgroundColor = random;
    });
    cntnr.append(div);
  }
};
createGrid();

const genRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

btn.onclick = () => {
  let answer = prompt(`Please enter grid size to be played: no more than 100`);
  if (isNaN(answer) || answer == 0 || answer >= 100 || answer == "") {
    alert(`Please enter a valid number`);
    answer = Number(answer);

    return;
  }
  gridSize(answer);
};

const gridSize = (size) => {
  cntnr.innerHTML = "";

  const squareSize = 100 / size;
  const totalSquare = size * size;

  for (let i = 0; i < totalSquare; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-container");

    div.style.width = `${squareSize}%`;
    div.style.height = `${squareSize}%`;
    div.style.border = ".1rem solid black";
    div.style.opacity = "1";

    div.onclick = () => {
      let currentOpacity = parseFloat(div.style.opacity);
      if (currentOpacity > 0) {
        div.style.opacity = (currentOpacity - 0.1).toFixed(1);
      }
    };

    div.addEventListener("mouseover", () => {
      const random = genRandomColor();
      div.style.backgroundColor = random;
    });

    cntnr.append(div);
  }
};

reset.onclick = () => {
  createGrid();
};
