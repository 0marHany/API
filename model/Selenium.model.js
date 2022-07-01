
const mongoose = require('mongoose')


const seleniumSchema = mongoose.Schema({
    loginPass: {
        type: Number,
        required: true
    },
    loginFailure: {
        type: Number,
        required: true
    },
    registrationPass: {
        type: Number,
        required: true
    },
    registrationFailure: {
        type: Number,
        required: true
    },
    LinkOwner: {
        type: mongoose.Schema.Types.ObjectId, ref: "link",
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Selenium', seleniumSchema)