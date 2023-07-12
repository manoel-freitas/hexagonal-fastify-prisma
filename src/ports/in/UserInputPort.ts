import { Post } from "../../domain/Post";
import { User } from "../../domain/User";

export interface UserInputPort {
  createUser(name: string | null, email: string, posts: Post[]): User;
  getUser(id: string): User;
  getUsers(): User[];
  getUserDrafts(id: string): Post[];
}
