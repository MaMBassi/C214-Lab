const create = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    combustivel: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};