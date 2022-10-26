import { Schema, model } from 'mongoose'

// * rol: Corporativo -> CORP
// * rol: Usuario -> USER
const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        code: {
            type: String,
            required: true,
            unique: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
    }, {
        collection: 'roles',
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

const roles = model('roles', schema);

export default roles;