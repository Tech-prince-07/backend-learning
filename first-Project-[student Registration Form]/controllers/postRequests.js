const Home = require('../models/details')
const Query = require('../models/query')

const path = require('path')
const rootDir = require('../utils/path.js')
const fs = require('fs');
    

// loginPostRouter
exports.loginPostRouter = (req, res, next) => {
    console.log(" Data coming ..........");
    console.log(req.body);

}

// submitRouter
exports.submitRouter = (req, res, next) => {
    console.log("on the submit details page");
    console.log("data is coming from user.......");
    console.log(req.body)
    // a new class it is saving the students details in a file by calling save function
    const {name, email, password, gender, address} = req.body
    const home = new Home (name, email, password, gender, address);
    home.save();

    res.sendFile(path.join(rootDir, 'views', 'submit-details.html'))
}

// thankContactRouter
exports.thankContactRouter = (req, res, next) => {
    console.log("student query is coming.......");
    console.log(req.body);
    // a new class it is saving the students query in a file by calling save function

    const {studentName, email, problem} = req.body
    const query = new Query(studentName, email, problem);
    query.save();

    res.sendFile(path.join(rootDir, 'views', 'thank-contact-us.html'))

}