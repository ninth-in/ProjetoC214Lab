const validate = require('validate.js');
const Constants = require('./constants');

const Validation = {
    create(data, Constraints) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    }
};
module.exports = Validation;
