const {
    addTest,
    getLasttest,
    updateTest,
    deleteTest } = require('./../controller/Security');


const router = require('express').Router();

router.post('/Security', addTest)
router.get('/Security/:id', getLasttest)
router.put('/Security/:id', updateTest)
router.delete("/Security/:id", deleteTest)
module.exports = router
