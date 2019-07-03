const express = require('express')
const pessoasControllers = require('../controllers/pessoas')

const pessoasRouter = ({ db }) => {
    const router = express.Router()

    router.get('/', pessoasControllers.index.bind(null, db))
    router.get('/delete/:id', pessoasControllers.deleteOne.bind(null, db))
    router.get('/create', pessoasControllers.createForm)
    router.post('/create', pessoasControllers.createProcess.bind(null, db))
    router.get('/update/:id', pessoasControllers.updateForm.bind(null, db))
    router.post('/update/:id', pessoasControllers.updateProcess.bind(null, db))

    return router
}

module.exports = pessoasRouter