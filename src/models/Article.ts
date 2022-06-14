import { Schema, model, Types } from "mongoose";
import { ICategory } from "./Category";
import { ITag } from "./Tag";

// interface representing a document in MongoDB
export interface IArticle {
  abstract: string;
  category: Types.DocumentArray<ICategory>;
  content: string;
  date: string;
  id: number;
  keywords: Types.Array<string>;
  lang: string;
  isOriginal: boolean;
  tag: Types.DocumentArray<ITag>;
  title: string;
}

export type IUserCreateArticle = Omit<IArticle, 'id' | 'category' | 'keywords' | 'lang' | 'isOriginal' | 'tag'>;

// create schema
const ArticleSchema = new Schema<IArticle>({
  abstract: {
    type: String,
    default: ''
  },
  category: [{ description: String, id: Number, name: String }],
  content: { type: String, required: true },
  date: String,
  id: Number,
  keywords: [String],
  lang: { type: String, default: 'zh' },
  isOriginal: { type: Boolean, default: true },
  tag: [{ description: String, id: Number, name: String }],
  title: { type: String, required: true }
}, { timestamps: true });

const Article = model<IArticle>('Article', ArticleSchema);
export default Article;