import { Request, Response } from 'express';
import { userService } from '../services/userService';

export const userController = {
  getAllUsers: (req: Request, res: Response): void => {
    const users = userService.getAllUsers();
    res.status(200).json(users);
  },

  createUser: (req: Request, res: Response): void => {
    const { username, age, hobbies } = req.body;
    if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
      res.status(400).json({ message: 'Invalid input data' });
      return;
    }
    const newUser = userService.createUser(username, age, hobbies);
    res.status(201).json(newUser);
  },
};
