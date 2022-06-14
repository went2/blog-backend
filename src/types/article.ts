import { Types } from "mongoose";
import { ICategory } from './category';
import { ITag } from "./tag";

// interface representing a document in MongoDB
export interface IArticle {
  abstract: string;
  category?: Types.DocumentArray<ICategory>;
  content: string;
  date: string;
  id?: number;
  keywords?: Types.Array<string>;
  lang?: string;
  isOriginal?: number;
  tag?: Types.DocumentArray<ITag>;
  title: string;
}

export type IUserCreatedArticle = Omit<IArticle, 'id' | 'category' | 'keywords' | 'lang' | 'isOriginal' | 'tag'>;