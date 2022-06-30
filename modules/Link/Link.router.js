const { addLink,
    updateLink,
    deleteLink,
    getLinkSoftware } = require('./controller/link');

const validationResult = require("../../common/validateRequest")
const { addLinkSchema, updateLinkSchema } = require('./controller/joi/urlValidation');

const router = require('express').Router();

router.post('/Url/:id', validationResult(addLinkSchema), addLink)
router.get('/Url', getLinkSoftware)
router.put('/Url/:id', validationResult(updateLinkSchema), updateLink)
router.delete("/Url/:id", deleteLink)
module.exports = router