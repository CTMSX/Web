const express = require('express')

const router = require('./routers/index')

module.exports = function() {
    const app = express()

    app.use(router())

    app.listen(8080, () => {
        console.log('App listen on 8080')
    })
}