const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    class: {
        type:String,
        require:true
    },
    created_at: {
        type:Date,
        require:true,
        default: Date.now
    },
})

module.exports=mongoose.model('Student', studentSchema)