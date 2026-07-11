const path = require('path')
const rootDir = require('../utils/path.js')


// loginPostRouter
exports.loginPostRouter = (req,res,next)=>{
    console.log(" Data coming ..........");
    console.log(req.body);
    
}

// submitRouter
exports.submitRouter = (req,res,next)=>{
    console.log("on the submit details page");
    console.log("data is coming from user.......");
    console.log(req.body);

    res.sendFile(path.join(rootDir, 'views', 'submit-details.html'))
}

// thankContactRouter
exports.thankContactRouter = (req,res,next)=>{
    console.log("student query is coming.......");
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views' , 'thank-contact-us.html'))

}