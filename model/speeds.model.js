
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
        type: String,
        required: true
    },
    LH_SI: {
        type: String,
        required: true
    },
    LH_FCP: {
        type: String,
        required: true
    },
    LH_TTI: {
        type: String,
        required: true
    },
    LH_CLS: {
        type: String,
        required: true
    },
    LH_LCP: {
        type: String,
        required: true
    },
    PR_Precentage: {
        type: String,
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