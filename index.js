const Calculadora = require('./src/calculadora');

//Menu das Operações
console.log('-----Calculadora------');
console.log('Escolha uma das operacoes:');
console.log('1- Soma');
console.log('2- Subtraçao');
console.log('3- Multiplicaçao');
console.log('4- Divisao');
console.log('5- Exponenciaçao');

//Escolha da Opçao da Calculadora
let opcao = 4; //tentei usar o metodo prompt, mas estava dando erro
console.log('Opcao: ',opcao);
console.log('');

//Escolha dos numeros
let numero1 = 2;
let numero2 = 0;

//Calculos e Apresentaçao do Resultado
if(opcao == 1){
    let somaCalc = Calculadora.soma(numero1,numero2);
    console.log('Resultado da Soma: ',somaCalc);
}
else if(opcao == 2){
    let subCalc = Calculadora.subtracao(numero1,numero2);
    console.log('Resultado da Subtracao: ',subCalc);
}
else if(opcao == 3){
    let multiCalc = Calculadora.multiplicacao(numero1,numero2);
    console.log('Resultado da Multiplicaçao: ',multiCalc);
}
else if(opcao == 4){
    let divCalc = Calculadora.divisao(numero1,numero2);
    console.log('Resultado da Divisao: ',divCalc);
}
else if(opcao == 5){
    let expCalc = Calculadora.potenciacao(numero1,numero2);
    console.log('Resultado da Exponenciaçao: ',expCalc);
}
else{
    console.log('Opcao invalida!')
}