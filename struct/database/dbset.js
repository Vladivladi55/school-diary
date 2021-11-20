const mongoose = require('mongoose');

module.exports = function database_check()
{
    mongoose.connect('mongodb://localhost:27017/url', {
        useUnifiedTopology: true, useNewUrlParser: true
    })
    
    const db = mongoose.connection;
    
    db.on('error', (error)=> {
        console.error('error');
    });

    db.once('open', (err)=>{
        console.log('connected to database');
    });
}
