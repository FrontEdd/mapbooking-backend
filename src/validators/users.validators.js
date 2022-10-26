import { body } from 'express-validator'

const createSchema = [
    body('username')
        .notEmpty()
        .withMessage('username is required')
        .isLength({ min: 6, max: 12 }),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail(),
    body('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 5, max: 8 }),
];

export { createSchema };