const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const dbset = require('./struct/database/dbset')
const passport = require('passport')

const mongoose = require('mongoose')
const Student = require('./struct/database/student');
dbset();

//const login_validation = require('./struct/authentication/authentication')
//const registration = require('./struct/authentication/authentication')

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const path = require('path')
const { validate } = require('./struct/database/student')
const root = path.dirname(require.main.filename)

app.get('/', (req, res)=> {
    res.render(root + '/struct/frontend/register.ejs')
})

//app.post('/indexlogin', (req, res)=>{
    //login_validation();
//})

app.listen('3000', () => console.log('litening to port 3000'))