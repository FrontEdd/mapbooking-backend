import { Router } from 'express'
import UserController from '../controllers/users.controllers';

const router = Router();
const controller = new UserController();

router.get('/', (req, res) => controller.all(req, res));
router.post('/', (req, res) => controller.createDocument(req, res));
router.get('/:username', (req, res) => controller.getByUsername(req, res));
router.put('/:username', (req, res) => controller.updateDocument(req, res));
router.delete('/:username', (req, res) => controller.deleteDocument(req, res));

export default router;