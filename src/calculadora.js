const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(num1, num2) {
        const validateNum = validate({ num1,num2 },  CalculadoraConstraint.calcConstraint);      
        if(validateNum !== undefined){
            return 'A variavel nao e do tipo numerico!';
        }
        let soma = num1 + num2;
        return soma;
    },
    subtracao(num1, num2) {
        const validateNum = validate({ num1,num2 },  CalculadoraConstraint.calcConstraint);      
        if(validateNum !== undefined){
            return 'A variavel nao e do tipo numerico!';
        }
        let subtracao = num1 - num2;
        return subtracao;
    },
    multiplicacao(num1, num2) {
        const validateNum = validate({ num1,num2 },  CalculadoraConstraint.calcConstraint);      
        if(validateNum !== undefined){
            return 'A variavel nao e do tipo numerico!';
        }
        let multi = num1 * num2;
        return multi;
    },
    divisao(num1, num2) {
        const validateNum = validate({ num1,num2 },  CalculadoraConstraint.calcConstraint);      
        if(validateNum !== undefined){
            return 'A variavel nao e do tipo numerico!';
        }
        if(num2 !== 0){
            let divisao = num1 / num2;
            return divisao;
        }
        else{
            return 'Nao ha divisao por 0!'
        }
    },
    potenciacao(num1, num2) {
        const validateNum = validate({ num1,num2 },  CalculadoraConstraint.calcConstraint);      
        if(validateNum !== undefined){
            return 'A variavel nao e do tipo numerico!';
        }
        let pot = num1 ** num2;
        return pot;
    }
};

module.exports = Calculadora;