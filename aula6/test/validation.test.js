const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');
const Constraints = require('./user_validation');

it('Caso válido - criar filme', () => {
    const result = Validation.create({
        nome: "A lenda dos guardioes",
        diretor: "Zack Snyder",
        duracao: "96",
        genero: "Infantil/Aventura"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido - procurar filme com o banco vazio', () => {
    const result = Constraints.get({
        genero: "Aventura"
    });
    expect(result).toBeNull();
});

it('Caso válido - procurar filme e ter resultados', () => {
    const result = Constraints.get({
        genero: "Infantil/Aventura"
    });
    expect(result).not.toBeNull();
});

it('Caso inválido - sem o parâmetro diretor', () => {
    const result = Validation.create({
        nome: "A lenda dos guardioes",
        duracao: "96",
        genero: "Infantil/Aventura"
    });
    expect(result.diretor).toEqual(Constants.ErrorValidation.diretor);
});

it('Caso inválido - sem o parâmetro genero', () => {
    const result = Validation.create({
        nome: "A lenda dos guardioes",
        diretor: "Zack Snyder",
        duracao: "96"
    });
    expect(result.genero).toEqual(Constants.ErrorValidation.genero);
});

it('Caso inválido - sem o parâmetro diretor', () => {
    const result = Validation.create({
        nome: "A lenda dos guardioes",
        duracao: "96",
        genero: "Infantil/Aventura"
    });
    expect(result.diretor).toEqual(Constants.ErrorValidation.diretor);
});
