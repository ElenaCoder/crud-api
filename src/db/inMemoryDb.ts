import { User } from '../models/userModel';

const users: User[] = [];

export const db = {
  getUsers: (): User[] => users,
  addUser: (user: User): void => {
    users.push(user);
  },
};