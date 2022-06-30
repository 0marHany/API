const SEOModal = require('../../../model/SEO.modal');

const addTest = async (req, res) => {
    const {
        total_traffic,
        key_Word,
        total_traffic_cost,
        backlinks,
        keyWord,
        LinkOwner
    } = req.body;
    const new_Test = await SEOModal.insertMany({

        total_traffic,
        key_Word,
        total_traffic_cost,
        backlinks,
        keyWord,
        LinkOwner
    });
    res.json({ message: "Done", new_Test });
}
const getLasttest = async (req, res) => {
    try {
        const get = await SEOModal.findOne({ LinkOwner: req.params.id }, {}, { sort: { 'createdAt': -1 } }).populate("LinkOwner");
        // const get = await SEOModal.findOne({}, {}, { sort: { 'createdAt': -1 } }).populate("LinkOwner");
        res.json({ message: "Done", get });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const updateTest = async (req, res) => {
    const {

        total_traffic,
        key_Word,
        total_traffic_cost,
        backlinks,
        keyWord,
    } = req.body;
    const Updated = await SEOModal.findByIdAndUpdate({ _id: req.params.id }, {

        total_traffic,
        key_Word,
        total_traffic_cost,
        backlinks,
        keyWord,
    })
    res.json({ message: "Done", Updated })
}

const deleteTest = async (req, res) => {
    const deleted = await SEOModal.deleteMany({
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