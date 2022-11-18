const express = require('express')

module.exports = function() {
    const router = express.Router()

    router.get('/', (req, res) => {
        res.render('index', {
            testVal: "ctms"
        })
    })

    return router
}