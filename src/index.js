const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const router = require('./routers')

module.exports = function() {
    const app = express()

    app.set('views', path.join(__dirname, '..', 'views'))
    app.set('view engine', 'ejs')
    
    app.use(express.static(path.join(__dirname, '..', 'public')))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cookieParser())

    app.use(router())

    app.listen(8080, () => {
        console.log('App listen on 8080')
    })
}