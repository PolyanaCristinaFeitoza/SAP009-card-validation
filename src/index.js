import validator from './validator.js';
const nome = window.prompt('Bem vinda(o) a Loja Laboratória! Qual o seu nome?')
alert(`Olá, ${nome}!`)

document.querySelector('#botao').onclick = () => {
  const divResultado = document.querySelector('#resultado')
  const valor = document.querySelector('#inputEscondido').value
  //se o valor digitado for menor que 1, irá retornar um alert
  if (valor.length < 1) {
    alert('Digite um número válido')
    return
  }
  const numeroValido = validator.isValid(valor)
  if (numeroValido === true) {
    divResultado.innerHTML = 'Compra realizada com sucesso.'
  } else {
    divResultado.innerHTML = 'Número inválido, digite novamente.'
  }
}
document.querySelector('#input').oninput = (value) => {
  const inputEscondido = document.querySelector('#inputEscondido')
  const valorInputEscondido = inputEscondido.value

  if (value.data === null && valorInputEscondido.length > 0) {
    inputEscondido.value = inputEscondido.value.slice(0, -1)
  } else {
    inputEscondido.value += value.data
  }

  const valor = document.querySelector('#input').value
  const valorFormatado = validator.maskify(valor)
  document.querySelector('#input').value = valorFormatado
}






