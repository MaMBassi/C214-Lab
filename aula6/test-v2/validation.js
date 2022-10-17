const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

//Teste 01: criar o filme com sucesso
it('Caso válido', () => {
    const result = Validation.create({
        nome: "Frozen",
        diretor: "Chris Buck, Jennifer Lee",
        genero: "Fantasia",
        ano: "2013",
        duracao: "102 min"
    });
    expect(result).toEqual(undefined);
});

//Teste 02: criar o filme com campos sem informação
it('Caso inválido - sem oss parâmetros nome, diretor e duracao', () => {
    const result = Validation.create({
        genero: "Fantasia",
        ano: "2013"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

//Teste 03: criar o filme com tipo da variável errado
it('Caso válido', () => {
    const result = Validation.create({
        nome: "Frozen",
        diretor: "Chris Buck, Jennifer Lee",
        genero: "Fantasia",
        ano: 2013,
        duracao: "102 min"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});