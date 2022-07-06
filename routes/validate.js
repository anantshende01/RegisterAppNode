const Joi = require('joi');

module.exports = function validateData(data) {
    const schema = Joi.object({
        email: Joi.string().min(3).required(),
        name: Joi.string().min(3).required()
    });

    return schema.validate(data);
};