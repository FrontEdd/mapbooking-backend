import { Schema, model } from 'mongoose'
import { hashSync, genSaltSync } from 'bcrypt'
import { rounds } from '../config/auth'

const schema = new Schema(
    {   
        username : {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
    }, {
        collection: 'users',
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

schema.methods.hashPassword = async function () {
    let passwordHash = hashSync(this.password, genSaltSync(rounds));
    this.password = passwordHash;
};

const users = model('users', schema)

export default users;