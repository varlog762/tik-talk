export interface UserProfileInterface {
  id: number;
  username: string;
  avatarUrl: string | null;
  subscribersAmount: number | null;
  firstName: string | null;
  lastName: string | null;
  isActive: boolean | null;
  stack: Array<string> | null;
  city: string | null;
  description: string | null;
}
