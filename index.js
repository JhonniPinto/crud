const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const db = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'cadastro'
    }
})
const dependencies = {
    db
}

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const pessoas = require('./routes/pessoas')

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/pessoas', pessoas(dependencies))

const port = process.env.port || 3000
app.listen(port, () => console.log('Connected'))