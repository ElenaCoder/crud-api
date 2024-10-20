import express from 'express';
import { userController } from '../controllers/userController';

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:userId', userController.updateUser);

export default router;