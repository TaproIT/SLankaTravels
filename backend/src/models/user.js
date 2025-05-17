import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userRole :{
        type: String,
        enum:['admin', 'user'],
        default: 'user',
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    refreshToken:{
        type: String,
        default: null
    }
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;