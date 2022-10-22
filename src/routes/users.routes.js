import { Router } from 'express'
import UserController from '../controllers/users.controllers';

const router = Router();
const controller = new UserController();

router.get('/', (req, res) => controller.all(req, res));
router.post('/', (req, res) => controller.createDocument(req, res));

export default router;