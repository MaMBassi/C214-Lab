const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

//Teste 01: criar o carro com sucesso
it('Caso válido', () => {
    const result = Validation.create({
        marca: "volkswagen",
        modelo: "polo",
        combustivel: "gasolina",
        ano: "2019",
        cor: "branco"
    });
    expect(result).toEqual(undefined);
});

//Teste 02: criar o carro com campos sem informação
it('Caso inválido - sem os parâmetros marca e modelo', () => {
    const result = Validation.create({
        combustivel: "gasolina",
        ano: "2019",
        cor: "branco"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

//Teste 03: criar o carro com um parametro com tipo da variável errado
it('Caso válido', () => {
    const result = Validation.create({
        marca: "volkswagen",
        modelo: "polo",
        combustivel: "gasolina",
        ano: 2019,
        cor: "branco"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});