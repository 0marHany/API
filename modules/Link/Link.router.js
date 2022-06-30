const { addLink,
    updateLink,
    deleteLink,
    getLinkSoftware,
    getSoftware } = require('./controller/link');

const validationResult = require("../../common/validateRequest")
const { addLinkSchema, updateLinkSchema } = require('./controller/joi/urlValidation');

const router = require('express').Router();

router.post('/Url/:id', validationResult(addLinkSchema), addLink)

router.get('/Url/:id', getLinkSoftware)
router.get('/Url', getSoftware)

router.put('/Url/:id', validationResult(updateLinkSchema), updateLink)
router.delete("/Url/:id", deleteLink)
module.exports = router