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
    return;
  }
  createGrid();
};

reset.onclick = () => {
  createGrid();
};
