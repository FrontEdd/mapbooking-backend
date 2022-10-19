import { readdirSync } from 'fs'
import { resolve } from 'path';

export default (express) => {
    readdirSync(__dirname)
    .filter((file) => {
        let filesplit = file.split('.');
        return filesplit.length === 3 && filesplit[1] === 'routes';
    })
    .forEach((file) => {
        const contex = file.split('.')[0];
        const route = require(resolve(__dirname, file));
        express.use(`/${contex}`, route.default);
    });
}