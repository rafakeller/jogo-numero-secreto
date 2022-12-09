"use strict"


export const exibeChuteNaTela = (chute, elementoChute)=> {
  elementoChute.innerHTML = `
<div>Você disse:</div>
<span class="box">${chute}</span>
`;
}