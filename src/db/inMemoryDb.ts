import { User } from '../models/userModel';

const users: User[] = [];

export const db = {
  getUsers: (): User[] => users,
  getUserById: (id: string): User | undefined => users.find(user => user.id === id),
  addUser: (user: User): void => {
    users.push(user);
  },
};