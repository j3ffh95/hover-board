const container = document.querySelector("#container");
const SQUARES_NR = 500;

for (let i = 0; i < SQUARES_NR; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);
}
