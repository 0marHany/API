const {
    addTest,
    getLasttest,
    updateTest,
    deleteTest } = require('./../controller/speed');


const router = require('express').Router();

router.post('/performance', addTest)
router.get('/performance/:id', getLasttest)
router.put('/performance/:id', updateTest)
router.delete("/performance/:id", deleteTest)
module.exports = router
