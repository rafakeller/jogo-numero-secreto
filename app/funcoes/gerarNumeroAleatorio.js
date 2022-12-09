"use strict"

export const gerarNumeroAleatorio = (maiorValor)=> {
  return parseInt(Math.random() * maiorValor + 1);
}