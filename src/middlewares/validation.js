import { validationResult } from 'express-validator'

export default (schemas) => {
    return async (req, res, next) => {
        await Promise.all(schemas.map((schema) => schema.run(req)));

        const results = validationResult(req);
        if(results.isEmpty()) return next();

        return res.status(422).json(results.array());
    };
};