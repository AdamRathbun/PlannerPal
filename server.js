const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
const methodOverride = require('method-override')

require('dotenv').config({ path: './config/.env' })

// Passport config
require('./config/passport')(passport)

connectDB()

// app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(
    methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            let method = req.body._method
            delete req.body._method
            return method
        }
    })
)
// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes used
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})


// Passport is an authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. Diff kinds use diff strategies.
// Mongoose for models (schemas and such)
// Passport of auth. Look up 
// session keeps user logged in and it works with MongoStore to store the client cookies in the database as session info (they have the same unique Id).
// Flash is a flash notification for like if you login or sign up and type the wrong info in.
// Morgan is a simple log/debugr for requests.
// connectDB is for connecting to the database, some of it is outdated.
// And then main and todo routes for each one.
//express.urlencoded and the express.json allow me to look at diff parts of requests coming through