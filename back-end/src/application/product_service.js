const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const ProductRepository = require('../port/product_repository');
const Constraints = require('../utils/product_validation');
const Validation = require('../utils/validation');

const Product = {
    async create(data) {
        try {
            const validation = Validation.create(data, Constants);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await ProductRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await ProductRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await ProductRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByDescription(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await ProductRepository.getByDescription(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await ProductRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Product;