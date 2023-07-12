import { Post } from "../../domain/Post";
import { ID } from "../../domain/vo";

// Poderiamos colocar algo mais sigficativo ao dominio aqui,mas por simplificacao do exemplo, repetimos os metodos das portas de entrada
export interface PostOutputPort {
  createPost(post: Post): Promise<Post>;
  getUniqPost(id: ID): Promise<Post>;
  deletePost(id: ID): Promise<Post>;
  getViewsPost(id: ID): Promise<Post>;
  publishPost(id: ID): Promise<Post>;
  getFeedPost(): Promise<Post[]>;
}
