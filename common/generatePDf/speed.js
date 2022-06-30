const fs = require("fs");
const PDFDocument = require("pdfkit");
const { generateHeader } = require("./Header");

async function speedPdf(Resulte, path) {
    let doc = new PDFDocument({ size: "A4", margin: 50 });
    console.log(Resulte);
    await generateHeader(doc, Resulte);
    createResulte(Resulte);
    generatePerformace(doc, Resulte);
    doc.end();
    doc.pipe(fs.createWriteStream(path));

}

let resulte;
function createResulte(Resulte) {
    resulte = [
        LE_CLS = Resulte.LE_CLS,
        LE_FCP = Resulte.LE_FCP,
        LE_FID = Resulte.LE_FID,
        LE_LCP = Resulte.LE_LCP,
        LH_CLS = Resulte.LH_CLS,
        LH_FCP = Resulte.LH_FCP,
        LH_SI = Resulte.LH_SI,
        LH_LCP = Resulte.LH_LCP,
        LH_TBT = Resulte.LH_TBT,
        LH_TTI = Resulte.LH_TTI,
        OLE_CLS = Resulte.OLE_CLS,
        OLE_FCP = Resulte.OLE_FCP,
        OLE_FID = Resulte.OLE_FID,
        OLE_LCP = Resulte.OLE_LCP,
    ]
    for (let i = 0; i < resulte.length; i++) {
        if (resulte[i] === "FAST") {
            resulte[i] = 'green'
        } else if (resulte[i] === "SLOW") {
            resulte[i] = 'red'
        } else {
            resulte[i] = '#ad7900'
        }
    }
    console.log(resulte);
}
function generatePerformace(doc, Resulte) {
    doc
        /*
         x+25
         xResult+15
         y=95 - 145
     
         new collect y*3
         */
        .addPage()
        .fontSize(12)
        //LE                         x   y
        .fillColor('black')
        .text('Loading Experience:', 50, 70)
        // row 1 col 2
        .fillColor('black')
        .text(`FIRST CONTENTFUL PAINT MS:`, 52, 95)
        .fillColor(resulte[1])
        .text(Resulte.LE_FCP, 52, 110)//resulte
        //
        .fillColor('black')
        .text(`FIRST INPUT DELAY MS:`, 330, 95)
        .fillColor(resulte[2])
        .text(Resulte.LE_FID, 330, 110)//resulte

        // row 2 col 4
        .fillColor('black')
        .text(`LARGEST CONTENTFUL PAINT MS:`, 52, 145)
        .fillColor(resulte[3])
        .text(Resulte.LE_LCP, 52, 160)//resulte
        //
        .fillColor('black')
        .text(`CUMULATIVE LAYOUT SHIFT SCORE:`, 330, 145)
        .fillColor(resulte[0])
        .text(Resulte.LE_CLS, 330, 160)//resulte
        //------------------------------------------------------

        //OLE                                    x   y
        .fillColor('black')
        .text('Origin Loading Experience:', 50, 210)
        // row 1 col 2 
        .fillColor('black')
        .text(`FIRST CONTENTFUL PAINT MS:`, 52, 235)
        .fillColor(resulte[11])
        .text(Resulte.OLE_FCP, 52, 250)//resulte
        //
        .fillColor('black')
        .text(`FIRST INPUT DELAY MS:`, 330, 235)
        .fillColor(resulte[12])
        .text(Resulte.OLE_FID, 330, 250)//resulte

        // row 2 col 4 
        .fillColor('black')
        .text(`LARGEST CONTENTFUL PAINT MS:`, 52, 285)
        .fillColor(resulte[13])
        .text(Resulte.OLE_LCP, 52, 300)//resulte
        //
        .fillColor('black')
        .text(`CUMULATIVE LAYOUT SHIFT SCORE:`, 330, 285)
        .fillColor(resulte[10])
        .text(Resulte.OLE_CLS, 330, 300)//resulte
        //------------------------------------------------------
        .fillColor('black')
        .text('Light House:', 50, 360)
        // row 1 col 2 
        .fillColor('black')
        .text(`first contentful paint:`, 51, 385)
        .fillColor(resulte[5])
        .text(Resulte.LH_FCP, 51, 400)//resulte
        //
        .fillColor('black')
        .text(`interactive:`, 224, 385)
        .fillColor(resulte[9])
        .text(Resulte.LH_TTI, 224, 400)//resulte
        //
        .fillColor('black')
        .text(`largest-contentful-paint:`, 400, 385)
        .fillColor(resulte[7])
        .text(Resulte.LH_LCP, 400, 400)//resulte
        //------------------------------------------------------
        // // row 2 col 4     
        .fillColor('black')
        .text(`cumulative layout shift:`, 51, 435)
        .fillColor(resulte[4])
        .text(Resulte.LH_CLS, 51, 450)//resulte
        //
        .fillColor('black')
        .text(`total blocking time:`, 224, 435)
        .fillColor(resulte[8])
        .text(Resulte.LH_TBT, 224, 450)//resulte
        //
        .fillColor('black')
        .text(`speed index:`, 400, 435)
        .fillColor(resulte[6])
        .text(Resulte.LH_SI, 400, 450)//resulte
}
module.exports = {
    speedPdf
};