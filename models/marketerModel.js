const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const marketerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        validate: [validator.isEmail, 'Please Provide a valid Email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        min: [8, 'Password should be atleast 8 characters'],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'PasswordConfirm is required'],
        validate: {
            validator: function(el) {
                return el === this.password
            },
            message: 'Passwords do not match'
        }
    },
    role: {
        type: String,
        default: 'marketer'
    }
})

//! Encrypting Password
marketerSchema.pre('save', async function(next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined
    next()
})

//! Schema Methode
marketerSchema.methods.correctPassword = async (candidatePassword, userPassword) => {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const Marketer = mongoose.model('Marketer', marketerSchema)

module.exports = Marketer