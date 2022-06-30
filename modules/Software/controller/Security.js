const SecurityModel = require("../../../model/Security.model");

const addTest = async (req, res) => {
    const {
        final_score,
        server_ip,
        software_found,
        software_outdated,
        software_vulnerabil,
        lib_json,
        LinkOwner,
    } = req.body;
    const new_Test = await SecurityModel.insertMany({
        final_score,
        server_ip,
        software_found,
        software_outdated,
        software_vulnerabil,
        lib_json,
        LinkOwner,
    });
    res.json({ message: "Done", new_Test });
}
const getLasttest = async (req, res) => {
    try {
        const get = await SecurityModel.findOne({ LinkOwner: req.params.id }, {}, { sort: { 'createdAt': -1 } }).populate("LinkOwner");
        res.json({ message: "Done", get });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const updateTest = async (req, res) => {
    const {
        final_score,
        server_ip,
        software_found,
        software_outdated,
        software_vulnerabil,
        lib_json,
        LinkOwner,
    } = req.body;
    const Updated = await SecurityModel.findByIdAndUpdate({ _id: req.params.id }, {
        final_score,
        server_ip,
        software_found,
        software_outdated,
        software_vulnerabil,
        lib_json,
        LinkOwner,
    })
    res.json({ message: "Done", Updated })
}

const deleteTest = async (req, res) => {
    const deleted = await SecurityModel.deleteMany({
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