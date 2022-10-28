class Soma{
    constructor (num1,num2){
        this.num1 = num1
        this.num2 = num2
    }

    getSoma(){
        return this.num1 + this.num2
    }
}

const soma = new Soma(10,20)
console.log("Resultado da soma: ",soma.getSoma())