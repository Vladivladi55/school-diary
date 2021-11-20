const mongoose = require('mongoose');
const shortid = require('shortid');

const studentSchema = new mongoose.Schema ({
    firstname: {
        type: String, 
        required: true
    }, 
        lastname: {
            type: String,
            required: true
        },
           email : {
                type: String,
                required: true,
                unique: true
            }, 
                password: {
                    type: String,
                    required: true
                }, 
                    id: {
                        type: String,
                        default: shortid.generate(),
                        required: true,
                        unique: true
                    }, 
                        notes: {
                            type: Number,
                            default: 0
                        }
});

module.exports = mongoose.model('Student', studentSchema);