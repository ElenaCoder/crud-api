import { Request, Response } from 'express';
import { userService } from '../services/userService';

export const userController = {
  getAllUsers: (req: Request, res: Response): void => {
    const users = userService.getAllUsers();
    res.status(200).json(users);
  },

  getUserById: (req: Request, res: Response): void => {
    const { userId } = req.params;
    const user = userService.getUserById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
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

  updateUser: (req: Request, res: Response): void => {
    const { userId } = req.params;
    const { username, age, hobbies } = req.body;
    const updatedUser = userService.updateUser(userId, username, age, hobbies);
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(updatedUser);
  },

};
