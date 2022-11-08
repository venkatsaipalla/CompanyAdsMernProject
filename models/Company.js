const mongoose = require('mongoose');
const addSchema = new mongoose.Schema({
    _id:{
        type: 'string',
        required: true
    },
    name:{
        type: 'string',
        required: true
    },
    url:{
        type: 'string',
        required: true
    }
});

module.exports = Company = mongoose.model("company",addSchema);