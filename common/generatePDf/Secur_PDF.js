const fs = require("fs");
const PDFDocument = require("pdfkit");
const { generateHeader } = require("./Header");

async function Secur_PDF(Resulte, path) {
    let doc = new PDFDocument({ size: "A4", margin: 50 });
    await generateHeader(doc, Resulte);
    doc.addPage()
    generateScore(doc, Resulte, 60, 125);
    generateInvoiceTable(doc, Resulte);
    doc.end();
    doc.pipe(fs.createWriteStream(path));
}

function generateScore(doc, Resulte, yHdr, y) {
    doc
        .fillColor("black")
        .fontSize(45)
        .text(Resulte.final_score, 280, yHdr)//50, 70 //40
        .fontSize(11)
        .text("Software Found : ", 50, y)
        .text(Resulte.software_found, 134, y)
        //
        .text("Software Outdated : ", 222, y)
        .text(Resulte.software_outdated, 321, y)
        //
        // Light House : FAST
        .text("Software Vulnerabil : ", 420, y)
        .text(Resulte.software_vulnerabil, 520, y)

}

//table 
function generateInvoiceTable(doc, Resulte) {
    const invoiceTableTop = 250;
    console.log(Resulte.lib_json[0].vulnerabil[0]);
    doc.font("Helvetica-Bold");
    generateTableRow(
        doc,
        invoiceTableTop,
        "Score",
        "CVE",
        "type",
    );
    generateHr(doc, invoiceTableTop + 20);
    doc.font("Helvetica");
    console.log(Resulte.lib_json[1].vulnerabil.length);
    for (let i = 0; i < Resulte.lib_json.length; i++) {
        if (i == 0) {
            doc
                .text(`Name : ${Resulte.lib_json[i].name}`, 50, invoiceTableTop - 80)
                .text(`version:${Resulte.lib_json[i].version}`, 50, invoiceTableTop - 60)
                .text(Resulte.lib_json[i].message, 50, invoiceTableTop - 40)
        }
        else {
            doc
                .text(`Name : ${Resulte.lib_json[i].name}`, 50, invoiceTableTop + 190)
                .text(`version:${Resulte.lib_json[i].version}`, 50, invoiceTableTop + 210)
                .text(Resulte.lib_json[i].message, 50, invoiceTableTop + 230)
        }
        for (let j = 0; j < Resulte.lib_json[i].vulnerabil.length; j++) {
            const item = Resulte.lib_json[i].vulnerabil[j];
            console.log(item);
            if (i == 0) {
                const position = invoiceTableTop + (j + 1) * 30;//row 160 , 190 ,220 ,250
                //row2 330 , 360 ,390 ,420  
                generateTableRow(
                    doc,
                    position,
                    item.score,
                    item.cve,
                    item.type,
                );

                generateHr(doc, position + 20);
            }
            else {
                const position = invoiceTableTop + (j + 10) * 30;

                generateTableRow(
                    doc,
                    invoiceTableTop + 270,
                    "Score",
                    "CVE",
                    "type",
                );
                generateHr(doc, invoiceTableTop + 270 + 20);
                generateTableRow(
                    doc,
                    position,
                    item.score,
                    item.cve,
                    item.type,
                );

                generateHr(doc, position + 20);
            }
        }
    }
}

// data in Row
function generateTableRow(
    doc,
    y,
    score,
    cve,
    type
) {
    doc
        .fontSize(10)
        .text(score, 50, y)
        .text(cve, 250, y)
        .text(type, 490, y)
}

// line
function generateHr(doc, y) {
    doc
        // color line
        .strokeColor("#000")
        .lineWidth(1)
        .moveTo(50, y)
        .lineTo(550, y)
        .stroke();
}

module.exports = {
    Secur_PDF,
    generateScore,
};