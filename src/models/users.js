import { Schema, model } from 'mongoose'
import { hashSync, genSaltSync } from 'bcrypt'
import { rounds } from '../config/auth'

const schema = new Schema(
    {   
        username : {
            type: String,
            required: true,
            min: 3,
            max: 20,
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
            min: 6,
        },
    }, {
        collection: 'users',
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

schema.methods.hashPassword = async () => {
    let passwordHash = hashSync(this.password, genSaltSync(rounds));
    this.password = passwordHash;
};

const users = model('users', schema)

export default users;