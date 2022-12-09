"use strict"

import { exibeChuteNaTela } from "./exibeChuteNaTela.js";
import { verificaSeValido } from "./verificaSeValido.js";

const elementoChute = document.getElementById("chute");

export const onSpeak = (event)=>{
  const chute = event.results[0][0].transcript;

    exibeChuteNaTela(chute, elementoChute);
    verificaSeValido(chute, elementoChute);
   
}