const joi = require("joi");

module.exports = {
    addLinkSchema: {
        body: joi.object().required().keys({
            link: joi.string().regex(/(https+:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/).required(),
        })
    },
    updateLinkSchema: {
        body: joi.object().required().keys({
            link: joi.string().regex(/(https+:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/).required(),
        })
    }
}