const {
    addTest,
    getLasttest,
    updateTest,
    deleteTest } = require('./../controller/ALL');


const router = require('express').Router();

router.post('/ALL', addTest)
router.get('/ALL/id', getLasttest,)
router.put('/ALL/:id', updateTest)
router.delete("/ALL/:id", deleteTest)
module.exports = router
