const {
    addTest,
    getLasttest,
    updateTest,
    deleteTest } = require('./../controller/selenium');


const router = require('express').Router();

router.post('/selenium', addTest)
router.get('/selenium/:id', getLasttest)
router.put('/selenium/:id', updateTest)
router.delete("/selenium/:id", deleteTest)
module.exports = router
