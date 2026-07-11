const path = require('path')
const rootDir = require('../utils/path.js')



// homeRouter
exports.homeRouter =  (req,res,next)=>{
    console.log("on the home page");
    res.sendFile(path.join(rootDir, 'views', 'home-page.html'))
}

// contact us
exports.contactRouter = (req,res,next)=>{
    console.log("on the contact page");
    res.sendFile(path.join(rootDir, 'views','contact-us.html'))
}

// registerRouter
exports.registerRouter = (req,res,next)=>{
    console.log("on the register portal");
    res.sendFile(path.join(rootDir, 'views','register-portal.html'))
}

// loginGetRouter
exports.loginGetRouter = (req,res,next)=>{
    console.log("ont the login portal");
    res.sendFile(path.join(rootDir, 'views', 'login-portal.html'))
    
}