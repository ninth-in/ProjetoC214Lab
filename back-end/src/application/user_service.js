const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const UserRepository = require('../port/user_repository');
const Constraints = require('../utils/user_validation');
const Validation = require('../utils/validation');

const User = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await UserRepository.create(data);

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

            const response = await UserRepository.update(data);

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

            const response = await UserRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByEmail(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await UserRepository.getByEmail(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await UserRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = User;