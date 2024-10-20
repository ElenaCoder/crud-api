import { Request, Response } from 'express';
import { userService } from '../services/userService';

export const userController = {
  getAllUsers: (req: Request, res: Response): void => {
    const users = userService.getAllUsers();
    res.status(200).json(users);
  },
};
