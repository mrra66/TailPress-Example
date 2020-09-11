const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = process.env.PORT || 1000

// Server configuration
app.enable('trust proxy')
app.use(express.urlencoded({ extended: true }))
app.use(express.json(), cors())
app.use(express.static('public'))

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express) 

// Route management
const Routes = require('./routes')
Routes.initialize(app)

app.listen(port, () => console.log(`Server running on port ${port}!`))