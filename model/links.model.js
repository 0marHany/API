
const mongoose = require('mongoose')


const linkSchema = mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    UserData: {
        type: mongoose.Schema.Types.ObjectId, ref: "user",
        required: true
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model('link', linkSchema)