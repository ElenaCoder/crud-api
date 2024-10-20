import { User } from '../models/userModel';

const users: User[] = [];

export const db = {
  getUsers: (): User[] => users,
  getUserById: (id: string): User | undefined => users.find(user => user.id === id),
  addUser: (user: User): void => {
    users.push(user);
  },
  updateUser: (id: string, updatedUser: Partial<User>): User | undefined => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return undefined;
    users[index] = { ...users[index], ...updatedUser };
    return users[index];
  },
  deleteUser: (id: string): boolean => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  },
};