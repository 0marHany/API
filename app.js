const express = require('express');
// mongoose is a library for mongoDB that helps us to work with mongoDB in Node.js applications
const mongoose = require('mongoose')
const {
    userRouter,
    ALLRouter,
    SecurityRouter,
    speedRouter,
    SEO,
    linkRouter,
    pdfRouter,
    seleniumRouter
} = require('./router/allRouter');
const app = express();
const cors = require('cors'); //  for cross origin resource sharing  
require("dotenv").config(); // for reading the .env file
const sendEmail = require('./common/service/sendEmail');
app.use(express.json())
app.use(cors({ origin: '*' }))

app.use(
    userRouter,
    ALLRouter,
    SecurityRouter,
    speedRouter,
    SEO,
    linkRouter,
    pdfRouter,
    seleniumRouter
)

app.post('/sendEmail/:id', async (req, res) => {
    const { listEmail, content } = req.body;
    const attach = [{
        filename: 'STA.pdf',
        contentType: 'application/pdf',
        path: './Pdf/' + `${req.params.id}.pdf`
    }]
    let info = await sendEmail(listEmail, content, attach);
    res.send(info);
})

mongoose.connect(process.env.MONGOO_CONNECTION);
app.listen(process.env.PORT || 4000)