import { Router } from 'express'
import PinController from '../controllers/pin.controllers'
import validation from '../middlewares/validation'
import { allSchema } from '../validators/pin.validators'

const router = Router();
const controller = new PinController();

router.get('/', validation(allSchema), (req, res) => controller.all(req, res));

export default router;