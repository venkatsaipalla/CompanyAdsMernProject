const mongoose = require('mongoose');
const addSchema = new mongoose.Schema({
    _id:{
        type: 'string',
        required: true
    },
    companyId:{
        type: "string",
        ref: 'company'
    },
    primaryText:{
        type: 'string',
        required: true
    },
    headline:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
    },
    cta:{
        type: 'string',
        required: true
    },
    imageUrl:{
        type: 'string',
        required: true
    }
});

module.exports = Addshow = mongoose.model("addshow",addSchema);