const linkModel = require('../../../model/links.model');

const addLink = async (req, res) => {
    const { link } = req.body;
    const newLink = await linkModel.insertMany({
        link,
        UserData: req.params.id
    });
    res.json({ message: "Done", Link: newLink });
}

const getLinkSoftware = async (req, res) => {
    const get = await linkModel.findOne({ _id: req.params.id }, {}, { sort: { 'createdAt': -1 } });
    res.json({ message: "Done", get });
}

const getSoftware = async (req, res) => {
    const get = await linkModel.findOne({}, {}, { sort: { 'createdAt': -1 } });
    res.json({ message: "Done", get });
}

const updateLink = async (req, res) => {

    const { link } = req.body;
    const Updated = await linkModel.findByIdAndUpdate({ _id: req.params.id }, { link })
    res.json({ message: "Done", Updated })
}

const deleteLink = async (req, res) => {
    const deleted = await linkModel.deleteMany({
        _id: req.params.id
    })
    res.json({ message: "Succesful", deleted })
}

module.exports = {
    addLink,
    updateLink,
    deleteLink,
    getLinkSoftware,
    getSoftware
}