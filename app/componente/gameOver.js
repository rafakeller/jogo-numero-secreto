"use strict";

export const gameOver = (chute) => {
  if (chute === "game over") {
    document.body.style.backgroundColor = "var(--game-over-color)";
    document.body.innerHTML = `<h2> Game Over!</h2>
  <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`;
  }
};
