import { Router } from 'express'
import PinController from '../controllers/pin.controllers'

const router = Router();
const controller = new PinController();

router.get('/', (req, res) => controller.all(req, res));

export default router;