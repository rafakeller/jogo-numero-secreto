"use strict"

import { gerarNumeroAleatorio } from "./funcoes/gerarNumeroAleatorio.js";
import { reconhecimentoDeVoz } from "./funcoes/reconhecimentoDeVoz.js";

export const menorValor = 1;
export const maiorValor = 1000;

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;

export const numeroSecreto = gerarNumeroAleatorio(maiorValor);

reconhecimentoDeVoz();

//math.randow : função nativa utilizado p conseguir valores numericos aleatorios
