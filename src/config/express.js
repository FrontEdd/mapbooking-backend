import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routes from '../routes'

const port = process.env.NODE_PORT || 8001;
const app = express();

// Middlewares
app.use(morgan('dev')); // |-> 'morgan' nos ayuda a visualizar todo el camino HTTP, lo que ejecutamos desde nuestros clientes
app.use(express.json());
app.use(cors({ origin: '*' }));

// Routes
routes(app);

export default async () => {
    app.listen(port, () => {
        console.log(`Backend Express server is running, PORT: ${port}`);
    });
    return app;
};