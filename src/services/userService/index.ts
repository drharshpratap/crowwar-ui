import { users } from '../../mock/users';
import type { UserProfile } from '../../types';

export const userService = {
  fetchProfile: async (userId: string): Promise<UserProfile | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 80));
    return users.find((user) => user.id === userId);
  }
};
