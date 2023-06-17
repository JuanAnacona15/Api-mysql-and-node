const express = require('express');
const mysql = require('mysql')
const myconn = require('express-myconnection') 
//require routes for the routes
const routes = require('./routes')

//Config
const app = express();
console.log('You are inside')
app.set('port', process.env.PORT || 9000) 

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ju4n4n4con4',
    database: 'usuarios'
}

//Midelwares
app.use(myconn(mysql, dbOptions, 'single'))

//routes
app.use('/api', routes)

//Server running
app.listen(9000, () => {
    console.log('Server in port 9000')
})