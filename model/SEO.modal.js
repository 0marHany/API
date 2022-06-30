
const mongoose = require('mongoose')


const SEOSchema = mongoose.Schema({
    total_traffic: {
        type: String,
        required: true
    },
    key_Word: {
        type: String,
        required: true
    },
    total_traffic_cost: {
        type: String,
        required: true
    },
    backlinks: {
        type: String,
        required: true
    },
    keyWord: [],
    LinkOwner: {
        type: mongoose.Schema.Types.ObjectId, ref: "link",
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('SEO', SEOSchema)