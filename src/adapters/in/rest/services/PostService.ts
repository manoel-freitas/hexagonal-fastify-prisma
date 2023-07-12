import { PostInputPort } from "../../../../ports/in/PostInputPort";
import { Post } from "../../../../domain/Post";
import { PostOutputPort } from "../../../../ports/out/PostOutputPort";
import { Content, Email, ID, Title } from "../../../../domain/vo";
import { User } from "../../../../domain/User";

export class PostService implements PostInputPort {
  constructor(private output: PostOutputPort) {}

  async createPost(
    title: string,
    content: string,
    authorEmail: string
  ): Promise<Post> {
    const post = new Post(
      ID.create(),
      new Title(title),
      new User(new Email(authorEmail)),
      new Content(content)
    );
    const postCreated = await this.output.createPost(post);
    return postCreated;
  }

  getUniqPost(id: string): Promise<Post> {
    throw new Error("Method not implemented.");
  }
  deletePost(id: string): void {
    throw new Error("Method not implemented.");
  }
}
