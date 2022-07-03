
const mongoose = require('mongoose')

const speedSchema = mongoose.Schema({
    loadingExperince: {
        type: String,
        required: true
    },
    LE_FCP: {
        type: String,
        required: true
    },
    LE_FID: {
        type: String,
        required: true
    },
    LE_CLS: {
        type: String,
        required: true
    },
    LE_LCP: {
        type: String,
        required: true
    },
    OriginLoadingExperince: {
        type: String,
        required: true
    },
    OLE_FCP: {
        type: String,
        required: true
    },
    OLE_FID: {
        type: String,
        required: true
    },
    OLE_CLS: {
        type: String,
        required: true
    },
    OLE_LCP: {
        type: String,
        required: true
    },
    LH_TBT: {
        type: Number,
        required: true
    },
    LH_SI: {
        type: Number,
        required: true
    },
    LH_FCP: {
        type: Number,
        required: true
    },
    LH_TTI: {
        type: Number,
        required: true
    },
    LH_CLS: {
        type: Number,
        required: true
    },
    LH_LCP: {
        type: Number,
        required: true
    },
    PR_Precentage: {
        type: Number,
        required: true
    },
    LinkOwner: {
        type: mongoose.Schema.Types.ObjectId, ref: "link",
        required: true
    }
}
    , {
        timestamps: true
    })

module.exports = mongoose.model('speed', speedSchema)