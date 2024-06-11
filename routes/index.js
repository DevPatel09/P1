//All the routes for the index of the application.
const express = require ('express' )


const router =  express.Router()
//Now with the router variable, i can create routes.

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router