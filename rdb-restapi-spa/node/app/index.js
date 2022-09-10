const mysql = require('mysql')
const express = require('express')
const { faker } = require('@faker-js/faker')

const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sandbox',
})

connection.connect((error) => {
    if (error) throw error
    console.log('Connected!')
})

const app = express()

app.get('/', function (req, res) {
    res.send({
        message: 'Hello World',
        name: faker.name.fullName(),
        email: faker.internet.email()
    })
})

app.listen(3000, () => {
    console.log('api running...')
})
