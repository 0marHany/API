const { speed,
    SEO,
    ALL,
    Security } = require('./controller/pdfAll');


const router = require('express').Router();

router.get('/Speed_PDF/:id', speed)
router.get('/SEO_PDF/:id', SEO)
router.get('/ALL_PDF/:id', ALL)
router.get('/Security_PDF/:id', Security)

module.exports = router