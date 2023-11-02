import mongoose from './index.js'

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required: [true, "First Name is required"]
    },
      lastName : {
        type : String,
        required: [true, "last Name is required"]
    },
   email : {
        type : String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, "Email is required"],
    
    },
    password : {
        type: String,
        required : [true, "Password is required"]
    },
    status : {
        type : Boolean,
        default : true
    },
    role : {
        type : String,
        default : 'customer'
    },
    createdAt : {
        type: Date,
        default : Date.now()
    }
})

const userModel = mongoose.model('user',userSchema)

export default  userModel
