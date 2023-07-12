import { FastifyReply, FastifyRequest } from "fastify";
import { PostInputPort } from "../../../../ports/in/PostInputPort";
import { CreatePostBody } from "../../common/interfaces/CreatePostBody";

export class PostController {
  constructor(private service: PostInputPort) {}
  async createPost(
    req: FastifyRequest<{
      Body: CreatePostBody;
    }>,
    res: FastifyReply
  ) {
    const { title, content, authorEmail } = req.body;
    const createdPost = this.service.createPost(title, content, authorEmail);
  }
  async getUniqPost(req, res) {
    const {} = req;
  }
  async deletePost(req, res) {
    const {} = req;
  }
}
