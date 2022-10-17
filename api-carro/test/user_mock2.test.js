const { CarroModel } = require('../src/infrastructure/database');
const user = require('../src/port/user_repository');

describe('create', () => {
    it('Carro Valido', async () => {
        CarroModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                marca: "volkswagen",
                modelo: "polo",
                combustivel: "gasolina",
                ano: "2019",
                cor: "branco"
            }),
        }));

        expect(await user.create({
            id: 1,
            marca: "volkswagen",
            modelo: "polo",
            combustivel: "gasolina",
            ano: "2019",
            cor: "branco"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                marca: expect.any(String),
                modelo: expect.any(String),
                combustivel: expect.any(String),
                ano: expect.any(String),
                cor: expect.any(String),
            }),
        );
    });
});