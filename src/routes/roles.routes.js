import { Router } from 'express'
import RoleController from '../controllers/roles.controllers'
import validation from '../middlewares/validation'
import { allSchema, createSchema, getByFieldSchema, updateSchema, deleteSchema } from '../validators/roles.validators'

const router = Router();
const controller = new RoleController();

router.get('/', validation(allSchema), (req, res) => controller.all(req, res));
router.post('/', validation(createSchema), (req, res) => controller.createDocument(req, res));
router.get('/:code', validation(getByFieldSchema), (req, res) => controller.getByField(req, res));
router.put('/:code', validation(updateSchema), (req, res) => controller.updateDocument(req, res));
router.delete('/:code', validation(deleteSchema), (req, res) => controller.deleteDocument(req, res));

export default router;