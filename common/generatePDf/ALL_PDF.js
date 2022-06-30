const fs = require("fs");
const PDFDocument = require("pdfkit");
const { generateHeader } = require("./Header");
const { generateScore } = require("./Secur_PDF");
const { createResulte } = require("./SEO_PDF");


let SEO_data;
async function ALL_PDF(Resulte, path) {
    let doc = new PDFDocument({ size: "A4", margin: 50 });
    await generateHeader(doc, Resulte);
    SEO_data = createResulte(Resulte)
    console.log(SEO_data);
    // createResulte(Resulte);
    generateALL(doc, Resulte);
    generateScore(doc, Resulte, 430, 470)
    doc.end();
    doc.pipe(fs.createWriteStream(path));
}


function generateALL(doc, Resulte) {
    console.log(Resulte);
    doc
        .addPage()
        .fontSize(20)
        .fillColor("red")
        .text("Performance :", 50, 70)
        //                  x  y
        .fillColor("black")
        .fontSize(18)
        .text(Resulte.PR_Precentage, 280, 100)
        //
        .fontSize(11)
        .text("loading Experince :", 50, 125)
        .text(Resulte.loadingExperince, 144, 125)
        //
        .text("OriginLoadingExperince :", 207, 125)
        .text(Resulte.OriginLoadingExperince, 331, 125)
        //
        // Light House : FAST
        .text("Light House :", 420, 125)
        .text("FAST", 485, 125)
        //
        .fontSize(20)
        .fillColor("red")
        .text("SEO :", 50, 180)
        .fontSize(11)
        .fillColor("black")
    for (let i = 0; i < SEO_data.length; i++) {
        let x = 50;
        let xDesc = x + 100;
        let xValue = x + 500;
        let y = 210 + i * 70;
        if (SEO_data[i].Name == "Backlinks") {
            i++
        }
        doc
            //                  x  y
            .text(SEO_data[i].Name, x, y)
            .text(SEO_data[i].desc, xDesc, y)
            .text(SEO_data[i].Value, xValue, y)//resulte
    }
    //
    doc
        .fontSize(20)
        .fillColor("red")
        .text("Security :", 50, 400)
        .fillColor("black")
        .fontSize(35)
}
module.exports = {
    ALL_PDF
};
