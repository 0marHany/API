
const allModel = require('../../../model/ALL.model');

const addTest = async (req, res) => {
    const {
        loadingExperince,
        OriginLoadingExperince,
        PR_Precentage,
        total_traffic,
        key_Word,
        total_traffic_cost,
        final_score,
        software_found,
        software_outdated,
        software_vulnerabil,
        LinkOwner
    } = req.body;
    const new_Test = await allModel.insertMany({
        loadingExperince,
        OriginLoadingExperince,
        PR_Precentage,
        total_traffic,
        key_Word,
        total_traffic_cost,
        final_score,
        software_found,
        software_outdated,
        software_vulnerabil,
        LinkOwner
    });
    res.json({ message: "Done", new_Test });
}
const getLasttest = async (req, res) => {
    try {
        // const get = await allModel.findOne({ LinkOwner: req.params.id }, {}, { sort: { 'createdAt': -1 } }).populate("LinkOwner");
        const get = await allModel.findOne({ LinkOwner: req.params.id }, {}, { sort: { 'createdAt': -1 } }).populate("LinkOwner");
        res.json({ message: "Done", get });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const updateTest = async (req, res) => {
    const {

        loadingExperince,
        OriginLoadingExperince,
        PR_Precentage,
        total_traffic,
        key_Word,
        total_traffic_cost,
        final_score,
        software_found,
        software_outdated,
        software_vulnerabil,
    } = req.body;
    const Updated = await allModel.findByIdAndUpdate({ _id: req.params.id }, {

        loadingExperince,
        OriginLoadingExperince,
        PR_Precentage,
        total_traffic,
        key_Word,
        total_traffic_cost,
        final_score,
        software_found,
        software_outdated,
        software_vulnerabil,
    })
    res.json({ message: "Done", Updated })
}

const deleteTest = async (req, res) => {
    const deleted = await allModel.deleteMany({
        _id: req.params.id
    })
    res.json({ message: "Succesful", deleted })
}

module.exports = {
    addTest,
    getLasttest,
    updateTest,
    deleteTest
}