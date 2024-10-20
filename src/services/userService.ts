import { User } from '../models/userModel';
import { db } from '../db/inMemoryDb';

export const userService = {
  getAllUsers: (): User[] => db.getUsers(),
};