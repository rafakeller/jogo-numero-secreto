function verificaSeValido(chute) {
  const numero = parseInt(chute);

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div> Valor inválido</div>`;
  }

  if (numeroMaiorOuMenor(numero)) {
      elementoChute.innerHTML += `<div> Valor inválido: escolha um número entre ${menorValor} e ${maiorValor}</div>`
    ;
  }

  if(numero === numeroSecreto){
    document.body.innerHTML = `<h2> Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`

  }else if(numero > numeroSecreto){
    elementoChute.innerHTML += `<div>O número secreto é menor<i class="fa-solid fa-arrow-down-long"></i></div>`

  }else{
    elementoChute.innerHTML += `<div>O número secreto é maior<i class="fa-solid fa-arrow-up-long"></i></div>`
  }

}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", event =>{
   if(event.target.id == 'jogar-novamente'){
    window.location.reload()
   }
})
