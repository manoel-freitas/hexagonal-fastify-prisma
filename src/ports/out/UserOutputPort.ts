import { Post } from "../../domain/Post";
import { User } from "../../domain/User";
import { ID } from "../../domain/vo";

export interface UserInputPort {
  createUser(user: User): User;
  getUser(id: ID): User;
  getUsers(): User[];
  getUserDrafts(id: ID): Post[];
}
