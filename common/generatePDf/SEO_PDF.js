const fs = require("fs");
const PDFDocument = require("pdfkit");
const { generateHeader } = require("./Header");


async function SEO_PDF(Resulte, path) {
    let doc = new PDFDocument({ size: "A4", margin: 50 });
    // // userUrl = await linksModel.findOne({ _id: Resulte.LinkOwner })
    // const LinkOwner = Resulte.LinkOwner;
    await generateHeader(doc, Resulte);
    createResulte(Resulte);
    generateSEO(doc);
    doc.end();
    doc.pipe(fs.createWriteStream(path));

}
let data = [];

function createResulte(Resulte) {
    data = [
        {
            Name: 'Total Traffic',
            Value: Resulte.total_traffic,
            desc: 'The estimated number of clicks the analyzed website will get on Google based on the current rankings of the discovered keywords',
        },
        {
            Name: 'Total Traffic Cost',
            Value: Resulte.total_traffic_cost,
            desc: 'The estimated cost of traffic the analyzed website would get by targeting every discovered keyword expressed in the equivalent of Google Ads prices',
        },
        {
            Name: 'Backlinks',
            Value: Resulte.backlinks,
            desc: 'History of acquired backlinks for the analyzed domain',
        },
        {
            Name: 'KEYWORDS',
            Value: Resulte.key_Word,
            desc: 'The total number of keywords the analyzed website ranks for in organic search',
        }
    ]
    key = Resulte.keyWord
    return data;
}
function generateSEO(doc) {
    doc
        .addPage()
        .fontSize(12)

    for (let i = 0; i < data.length; i++) {
        let x = 50;
        let xDesc = x + 100;
        let xValue = x + 500;
        let y = 70 + i * 70;
        doc
            //                  x  y
            .text(data[i].Name, x, y)
            .text(data[i].desc, xDesc, y)
            .text(data[i].Value, xValue, y)//resulte
    }
    for (let i = 0; i < key.length; i++) {
        let y = 380 + i * 20;
        doc
            .text("sample keyWord :", 50, 350)
            .text(key[i], 250, y)
    }

}
module.exports = {
    SEO_PDF,
    createResulte,
};
