// core module
const path = require('path')

// external module
const express = require('express')
const app = express()

// path of root directory
const rootDir = path.dirname(require.main.filename)

// adding all css folder because we link all css file with their on respective html file
app.use(express.static(path.join(rootDir, 'public')))

// all routes
const {portalRoutes} = require('./routes/portalRoutes.js')

// data encoding
app.use(express.urlencoded());

// calling all routes
app.use(portalRoutes)
// when anonymous request is coming
app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'))
})

// server listening
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server Running on address http://localhost:${PORT}`);
})