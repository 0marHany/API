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
    pdfRouter
} = require('./router/allRouter');
const app = express();
const cors = require('cors'); //  for cross origin resource sharing  
require("dotenv").config(); // for reading the .env file
// for creating pdf
// var Python = require("python-runner");
const sendEmail = require('./common/service/sendEmail');
const { PythonShell } = require('python-shell');
// const speedsModel = require('./model/speeds.model');
const linksModel = require('./model/links.model');
// const path = require('path');
// speedsModel
app.use(express.json())
app.use(cors({ origin: '*' }))

app.use(
    userRouter,
    ALLRouter,
    SecurityRouter,
    speedRouter,
    SEO,
    linkRouter,
    pdfRouter
)

app.post('/sendEmail/:id', async (req, res) => {
    const { listEmail, content } = req.body;
    const attach = [{
        // const myPath = './Pdf/';

        filename: 'STA.pdf',
        contentType: 'application/pdf',
        path: './Pdf/' + `${req.params.id}.pdf`
    }]
    let info = await sendEmail(listEmail, content, attach);
    res.send(info);
})

const links = async (req, res) => {
    let hamda = await linksModel.findOne({ _id: req.params.id });
    let get = hamda._id;
    let options = {
        args: [`-p ${get}`]
    };

    PythonShell.run('script.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);

        res.json(results);
    }
    );
}
app.get('/zhkt/:id', links)

mongoose.connect(process.env.MONGOO_CONNECTION);
app.listen(process.env.PORT || 4000)