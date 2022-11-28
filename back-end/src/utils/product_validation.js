const create = {
    description: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    weight: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    quantitie: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    price: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    totalPrice: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const update = {
    description: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    weight: {
        presence: {
            allowEmpty: true,
        },
        type: 'number',
    },
    quantitie: {
        presence: {
            allowEmpty: true,
        },
        type: 'number',
    },
    price: {
        presence: {
            allowEmpty: true,
        },
        type: 'number',
    },
    totalPrice: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const get = {
    description: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    description: {
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