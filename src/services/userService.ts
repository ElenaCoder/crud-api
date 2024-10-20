import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/userModel';
import { db } from '../db/inMemoryDb';

export const userService = {
  getAllUsers: (): User[] => db.getUsers(),

  getUserById: (id: string): User | undefined => db.getUserById(id),

  createUser: (username: string, age: number, hobbies: string[]): User => {
    const newUser: User = {
      id: uuidv4(),
      username,
      age,
      hobbies,
    };
    db.addUser(newUser);
    return newUser;
  },

};