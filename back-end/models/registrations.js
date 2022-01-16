const mongoose = require('mongoose')
const RegistrationSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    enroll_no: {
        type: String
    }
});
const RegistrationModel = mongoose.model("registrations", RegistrationSchema)
module.exports = RegistrationModel;