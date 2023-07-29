import { Tag } from "./tag.model";

export type Note = {
  id: string,
  heading: string,
  content: string,
  date: string,
  tags: Tag[],
}

