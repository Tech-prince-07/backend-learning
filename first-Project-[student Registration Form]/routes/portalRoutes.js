const express = require('express')
const portalRoutes = express.Router()

const getRequestController = require('../controllers/getRequests')
const postRequestController = require('../controllers/postRequests')

// home page
const homePage = portalRoutes.get('/', getRequestController.homeRouter)
// login portal
const loginGet = portalRoutes.get('/login', getRequestController.loginGetRouter)
const loginPost = portalRoutes.post('/login',postRequestController.loginPostRouter)
// registration portal
const registration = portalRoutes.get('/register-portal',getRequestController.registerRouter)
//contact us 
const contact = portalRoutes.get('/problem-submit', getRequestController.contactRouter)
// submit details
const submit = portalRoutes.post('/submit-details',postRequestController.submitRouter)
// thank page
const thank = portalRoutes.post('/problem-submit',postRequestController.thankContactRouter )

exports.allPortalRoutes = portalRoutes;



