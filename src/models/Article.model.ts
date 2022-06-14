import { Schema, model } from "mongoose";
import { IArticle } from '../types/article';

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
  isOriginal: { type: Number, default: 1 },
  tag: [{ description: String, id: Number, name: String }],
  title: { type: String, required: true }
}, { timestamps: true });

const Article = model<IArticle>('Article', ArticleSchema);

export default Article;