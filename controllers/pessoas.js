const pessoasModels = require('../models/pessoas')

const index = async(db, req, res) => {
    const pessoas = await pessoasModels.findAll(db)
    res.render('pessoas/index', {pessoas})
}

const deleteOne = async(db, req, res) => {
    await pessoasModels.deleteOne(db, req.params.id)
    res.redirect('/pessoas')
}

const createForm = (req, res) => res.render('pessoas/create')

const createProcess = async(db, req, res) => {
    await pessoasModels.create(db, req.body)
    res.redirect('/pessoas')
}

const updateForm = async(db, req, res) => {
    const pessoa = await pessoasModels.updateForm(db, req.params.id)
    res.render('pessoas/update', {pessoa: pessoa[0]})
}

const updateProcess = async(db, req, res) => {
    const data = req.body
    await pessoasModels.updateProcess(db, data, req.params.id)
    res.redirect('/pessoas')
}


module.exports = {
    index,
    deleteOne,
    createForm,
    createProcess,
    updateForm,
    updateProcess
}