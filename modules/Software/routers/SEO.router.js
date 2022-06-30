const {
    addTest,
    getLasttest,
    updateTest,
    deleteTest } = require('./../controller/SEO');


const router = require('express').Router();

router.post('/SEO', addTest)
router.get('/SEO/:id', getLasttest)
router.put('/SEO/:id', updateTest)
router.delete("/SEO/:id", deleteTest)
module.exports = router
