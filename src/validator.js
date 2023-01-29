const validator = {
  isValid: (valor) => {
    let soma = 0
    for (let i = 0; i < valor.length; i++) {
      let numeros = 0
      //se o resto da divisão dos índices por 2 for diferente de 0, eles seram multiplicados por 2
      if (i % 2 !== 0) {
        numeros = parseInt(valor[i]) * 2
      } else {
        numeros = parseInt(valor[i])
      }
      //se numeros forem maiores que 9
      if (numeros > 9) {
        numeros = numeros - 9
      }
      //soma de todos os elementos
      soma += numeros
    }
    //se o resto da divisão da soma por 10 for igual a 0
    if (soma % 10 === 0) {
      return true
    } else {
      return false
    }
  },
  maskify: (valor) => {
    if (valor.length <= 4) {
      return valor
    }
    let valorComMascara = ''
    const limite = valor.length - 5
    for (let i = 0; i < valor.length; i++) {
      if (i <= limite) {
        valorComMascara = valorComMascara + '#'
      } else {
        valorComMascara = valorComMascara + valor[i]
      }
    }
    return valorComMascara
  }
};

export default validator;
