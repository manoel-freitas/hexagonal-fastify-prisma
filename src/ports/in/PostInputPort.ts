import { Post } from "../../domain/Post";

export interface PostInputPort {
  createPost(
    title: string,
    content: string | null,
    authorEmail: string
  ): Promise<Post>;
  getUniqPost(id: string): Promise<Post>;
  deletePost(id: string): void;
}
