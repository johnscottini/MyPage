let primeiroNumero = prompt("Informe um número: ");
let primeiroNumeroConvertido = Number(primeiroNumero);
let segundoNumero = prompt("Informe outro número: ");
let segundoNumeroConvertido = Number(segundoNumero);

let operacao = prompt("Digite a operação matemática: (adição/multiplicação/subtração/divisão)");
if (operacao === "adição") {
  let resultadoSoma = primeiroNumeroConvertido + segundoNumeroConvertido;
  alert("Resultado da soma: " + resultadoSoma);
} else if (operacao === "subtração") {
  let resultadoSubtracao = primeiroNumeroConvertido - segundoNumeroConvertido;
  alert("Resultado da subtração: " + resultadoSubtracao);
} else if (operacao === "multiplicação") {
  let resultadoMultiplicacao = primeiroNumeroConvertido * segundoNumeroConvertido;
  alert("Resultado da multiplicação: " + resultadoMultiplicacao);
} else if (operacao === "divisão") {
  let resultadoDivisao = primeiroNumeroConvertido / segundoNumeroConvertido;
  alert("Resultado da divisão: " + resultadoDivisao);
} else {
  alert("Erro! Operaçao inválida ou digitada incorretamente!");
}
