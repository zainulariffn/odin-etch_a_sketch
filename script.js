const cntr = document.querySelector(".container");
const btn = document.querySelector(".btn");

const createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-container");

    div.addEventListener("mouseover", () => {
      const random = genRandomColor();
      div.style.backgroundColor = random;
    });
    cntr.append(div);
  }
};
createGrid();

const genRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
