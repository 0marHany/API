const seleniumModal = require('../../../model/Selenium.model');

const addTest = async (req, res) => {
    const {
        loginPass,
        loginFailure,
        registrationPass,
        registrationFailure,
        LinkOwner
    } = req.body;
    const new_Test = await seleniumModal.insertMany({

        loginPass,
        loginFailure,
        registrationPass,
        registrationFailure,
        LinkOwner
    });
    res.json({ message: "Done", new_Test });
}
const getLasttest = async (req, res) => {
    try {
        const get = await seleniumModal.findOne({ LinkOwner: req.params.id }, {}, { sort: { 'createdAt': -1 } }).populate("LinkOwner");
        res.json({ message: "Done", get });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const updateTest = async (req, res) => {
    const {
        loginPass,
        loginFailure,
        registrationPass,
        registrationFailure,
    } = req.body;
    const Updated = await seleniumModal.findByIdAndUpdate({ _id: req.params.id }, {
        loginPass,
        loginFailure,
        registrationPass,
        registrationFailure,
    })
    res.json({ message: "Done", Updated })
}

const deleteTest = async (req, res) => {
    const deleted = await seleniumModal.deleteMany({
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