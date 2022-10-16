const Constants = {
    ErrorValidation: {
        name: 'ValidationError',
        message: 'Erro no tipo da variavel',
    },

    ErrorDB: {
        name: 'MongoError',
        message: 'MongoDB Error',
    },

    ErrorNotFound: {
        name: 'NotFound',
        message: 'Filme nao encontrado!',
    },

    ErrorDuplicate: {
        name: 'Duplicate',
        message: 'Filme ja cadastrado!',
    }
};

module.exports = Constants;