const Soma = (num1, num2) => ({
   num1,
   num2,
   getSoma: () => num1 + num2
})

const soma = Soma(10,20)
console.log("Resultado da soma: ",soma.getSoma())