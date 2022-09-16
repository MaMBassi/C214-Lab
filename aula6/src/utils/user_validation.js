const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    diretor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    duracao: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    genero: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};


module.exports = {
    create,
    get,
};