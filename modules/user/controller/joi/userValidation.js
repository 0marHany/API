const joi = require("joi");

module.exports = {
    addUserSchema: {
        body: joi.object().required().keys({
            name: joi.string().required(),
            email: joi.string().required(),
            password: joi.string().required(),
        })
    },
    signInSchema: {
        body: joi.object().required().keys({
            email: joi.string().required(),
            password: joi.string().required()
        })
    },
    updateUserSchema: {
        body: joi.object().required().keys({
            name: joi.string().optional(),
            password: joi.string().optional()
        })
    }
}