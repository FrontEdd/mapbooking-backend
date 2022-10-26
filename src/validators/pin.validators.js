import { query } from 'express-validator'

const allSchema = [
    query('page').isInt({ min: 1 }),
    query('per_page').isInt({ min: 1 }),
];

export { allSchema };