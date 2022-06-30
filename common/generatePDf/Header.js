// const linksModel = require("../../model/links.model");

async function generateHeader(doc, Resulte) {
    // const userUrl = await linksModel.findOne({ _id: Resulte.LinkOwner })
    // const URL = userUrl.link;
    doc
        .image("logo.png", 50, 45, { width: 100 })
        .fillColor("#444444")
        .fontSize(20)
        .text("SOFTWARE TESTING AUTOMATION", 200, 160)
        .fontSize(23)
        .text("Site Audit: Overview", 200, 420)
        .fontSize(20)
        .text(Resulte.LinkOwner.link, 220, 450)
}

module.exports = {
    generateHeader
}