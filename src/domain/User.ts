import { Post } from "./Post";
import { Content, Email, ID, Name, PostMeta, Title } from "./vo";

export class User {
  constructor(
    readonly email: Email,
    readonly id?: ID,
    readonly name?: Name,
    readonly posts?: Post[]
  ) {}

  addPost(postTitle: Title, postContent: Content) {
    const meta = new PostMeta();
    const postID = ID.create();
    const post = new Post(postID, postTitle, this, postContent, meta);
    this.posts.push(post);
  }
}
