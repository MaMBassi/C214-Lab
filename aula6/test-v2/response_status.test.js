const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/constants');

//Teste 04: status code de sucesso
it('Status Code OK', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

//Teste 05: status code BAD REQUEST
it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

//Teste 06: status code NOT FOUND
it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorNotFound.name);
    expect(result).toEqual(404);
});

//Teste 07: status code CONFLICT
it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorDuplicate.name);
    expect(result).toEqual(409);
});
