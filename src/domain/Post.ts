import { User } from "./User";
import { Content, ID, PostMeta, Title } from "./vo";

export class Post {
  constructor(
    readonly id?: ID,
    readonly title?: Title,
    readonly author?: User,
    readonly content?: Content,
    readonly meta?: PostMeta
  ) {}
}
