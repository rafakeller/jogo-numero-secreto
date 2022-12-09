"use strict";

import { gameOver } from "../componente/gameOver.js";
import { loadPage } from "../componente/loadPage.js";
import { maiorValor, menorValor } from "../main.js";
import { verificaSeAcertou } from "./verificaSeAcertou.js";

export const verificaSeValido = (chute, elementoChute) => {
  gameOver(chute);

  const numero = parseInt(chute);

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div> Valor inválido</div>`;
  }

  if (numeroMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div> Valor inválido: escolha um número entre ${menorValor} e ${maiorValor}</div>`;
  }

  verificaSeAcertou(numero, elementoChute);

  loadPage();
};

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

