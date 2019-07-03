// const findAll = (connection) => new Promise((resolve, reject) => {
//     connection.query('select * from pessoas', (err, results) => {
//         if (err) {
//             reject(err)
//         } else {
//             resolve(results)
//         }
//     })
// })
const findAll = (db) => db('pessoas').select('*')

// const deleteOne = (connection, id) => new Promise((resolve, reject) => {
//     connection.query(`delete from pessoas where id = ${id}`, (err) => {
//         if (err) {
//             reject(err)
//         } else {
//             resolve()
//         }
//     })
// })
const deleteOne = (db, id) => db('pessoas').where({id: id}).del()

// const create = (connection, data) => new Promise((resolve, reject) => {
//     connection.query(`insert into pessoas (nome, nascimento, cargo) values('${data.nome}', '${data.nascimento}', '${data.cargo}')`, (err) => {
//         if (err) {
//             reject(err)
//         } else {
//             resolve()
//         }
//     })
// })
const create = (db, data) => {
    return db('pessoas').insert({
        nome: data.nome,
        nascimento: data.nascimento,
        cargo: data.cargo
    })
}

// const updateForm = (connection, id) => new Promise((resolve, reject) => {
//     connection.query(`select * from pessoas where id = ${id}`, (err, results) => {
//         if (err) {
//             reject(err)
//         } else {
//             resolve(results)
//         }
//     })
// })
const updateForm = (db, id) => db('pessoas').select('*').where({id: id})

// const updateProcess = (connection, data, id) => new Promise((resolve, reject) => {
//     connection.query(`update pessoas set nome='${data.nome}', nascimento='${data.nascimento}', cargo='${data.cargo}' where id = ${id}`, (err) => {
//         if (err) {
//             reject(err)
//         } else {
//             resolve()
//         }
//     })
// })
const updateProcess = (db, data, id) => {
    return db('pessoas').update({
        nome: data.nome,
        nascimento: data.nascimento,
        cargo: data.cargo
    }).where({id: id})
}

module.exports = {
    findAll,
    deleteOne,
    create,
    updateForm,
    updateProcess
}