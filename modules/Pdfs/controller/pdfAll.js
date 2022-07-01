
const { ALL_PDF } = require('../../../common/generatePDf/ALL_PDF');
const { speedPdf } = require('../../../common/generatePDf/speed');
const { SEO_PDF } = require('../../../common/generatePDf/SEO_PDF');
const { Secur_PDF } = require('../../../common/generatePDf/Secur_PDF');

const speedsModel = require('../../../model/speeds.model')
const SEOModal = require('../../../model/SEO.modal');
const SecurityModel = require('../../../model/Security.model');
const ALLModel = require('../../../model/ALL.model');
const seleniumModal = require('../../../model/Selenium.model');
// const linksModel = require('../../../model/links.model');

const myPath = './Pdf/';



const speed = async (req, res) => {
    // req.query
    try {
        // await SEOModal.findOne({LinkOwner: req.params.id }, {}, { sort: { 'createdAt': -1 } }).populate("LinkOwner");
        const Resulte = await speedsModel.findOne({ LinkOwner: req.params.id }).populate("LinkOwner");
        speedPdf(Resulte, myPath + `${Resulte.LinkOwner.id}.pdf`)
        res.end();
    } catch (error) {
        res.json({ Error: error.message })
    }
}


const SEO = async (req, res) => {
    console.log(myPath);
    try {
        const Resulte = await SEOModal.findOne({ LinkOwner: req.params.id }).populate("LinkOwner");
        // linnkmod
        SEO_PDF(Resulte, myPath + `${Resulte.LinkOwner.id}.pdf`);
        res.json({ "data": Resulte.LinkOwner });
    } catch (error) {
        res.json({ Error: error.message })
    }

}
const ALL = async (req, res) => {
    try {

        const Resulte = await ALLModel.findOne({ LinkOwner: req.params.id }).populate("LinkOwner");
        const selenium = await seleniumModal.findOne({ LinkOwner: req.params.id }).populate("LinkOwner");
        ALL_PDF(selenium, Resulte, myPath + `${Resulte.LinkOwner.id}.pdf`);

        res.end();
    } catch (error) {
        res.json({ Error: error.message })
    }
}

const Security = async (req, res) => {
    try {
        const Resulte = await SecurityModel.findOne({ LinkOwner: req.params.id }).populate("LinkOwner");
        Secur_PDF(Resulte, myPath + `${Resulte.LinkOwner.id}.pdf`);
        res.end("done");
    } catch (error) {
        res.json({ Error: error.message })
    }
}
module.exports = {
    speed, SEO, ALL, Security
}