"use strict";

import { numeroSecreto } from "../main.js";

export const verificaSeAcertou = (numero, elementoChute) => {
  if (numero === numeroSecreto) {
    document.body.innerHTML = `<h2> Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor<i class="fa-solid fa-arrow-down-long"></i></div>`;
  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior<i class="fa-solid fa-arrow-up-long"></i></div>`;
  }
};
