const express = require('express')
const portalRoutes = express.Router()

const getRequestController = require('../controllers/getRequests')
const postRequestController = require('../controllers/postRequests')

// home page
portalRoutes.get('/', getRequestController.homeRouter)

// login portal
portalRoutes.get('/login', getRequestController.loginGetRouter)
portalRoutes.post('/login',postRequestController.loginPostRouter)

// registration portal
portalRoutes.get('/register-portal',getRequestController.registerRouter)

//contact us 
portalRoutes.get('/problem-submit', getRequestController.contactRouter)

// submit details
portalRoutes.post('/submit-details',postRequestController.submitRouter)

// thank page
portalRoutes.post('/problem-submit',postRequestController.thankContactRouter )

exports.portalRoutes = portalRoutes;



