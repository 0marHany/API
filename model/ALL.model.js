
const mongoose = require('mongoose')


const ALLSchema = mongoose.Schema({
    loadingExperince: {
        type: String,
        required: true
    },
    OriginLoadingExperince: {
        type: String,
        required: true
    },
    PR_Precentage: {
        type: String,
        required: true
    },
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
    final_score: {
        type: String,
        required: true
    },
    software_found: {
        type: Number,
        required: true
    },
    software_outdated: {
        type: Number,
        required: true
    },
    software_vulnerabil: {
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

module.exports = mongoose.model('ALL', ALLSchema)