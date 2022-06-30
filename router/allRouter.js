const userRouter = require('../modules/user/user.router');

const SecurityRouter = require('../modules/Software/routers/Security.router');
const speedRouter = require('../modules/Software/routers/speed.router');
const SEO = require('../modules/Software/routers/SEO.router');
const ALLRouter = require('../modules/Software/routers/ALL.router');

const linkRouter = require('../modules/Link/Link.router');
const pdfRouter = require('../modules/Pdfs/Pdf.router');
module.exports = {
    userRouter,
    ALLRouter,
    SecurityRouter,
    speedRouter,
    SEO,
    linkRouter,
    pdfRouter
}