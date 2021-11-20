const express = require('express');
const app = express();
const mongoose = require('mongoose')
const passport = require('passport');

const Student = require('../database/student');
const dbset = require('../database/dbset');

dbset();

module.exports = function login_validation()
{
    app.post('/index-login', (req, res)=>{
    let valemail = Student.find(Student => Student.email === req.body.email)
    if(valemail == null) {
        console.log('wrong credinitals')
    } 
    try {
        
    }
});
}

module.exports = function registration() {
    //load register page
app.get('/', (res, req)=>{
    res.render('register.ejs');
});

//post the result
app.post('/register', (req, res)=> {
    let first_name = req.body.firstname;
    let last_name = req.body.lastname;
    let user_email =  req.body.email;
    let password = req.body.password

    let Student1 = new Student({
        firstname: first_name,
        lastname: last_name,
        email: user_email,
        password: password
    })

    Student.save();
});
}