module.exports = (schema) => {
    return (req, res, next) => {
        const validationResult = schema.body.validate(req.body)
        const validationArr = []
        if (validationResult.error) {
            validationArr.push(validationResult.error.details[0].message)
            res.json({ error: validationArr })
        }
        else {
            next();
        }
    }
};