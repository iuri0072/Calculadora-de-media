var nome = "Iuri";
var notaPrimeiroSemestre = 9.12341;
var notaSegundoSemestre = 7.3242;
var notaTerceiroSemestre = 6.21312;
var notaQuartoSemestre = 8.3223;
var notaFinal =
  notaPrimeiroSemestre +
  notaSegundoSemestre +
  notaTerceiroSemestre +
  notaQuartoSemestre;
notaFinal = notaFinal / 4;

var notaFixada = notaFinal.toFixed(2);

console.clear();
console.log("Bem Vindo: " + nome);
console.log("Sua nota final foi de: " + notaFixada);

if (notaFinal > 6) {
  console.log("Parabéns, você passou!");
} else {
  console.log("Que pena, você falhou!");
}
