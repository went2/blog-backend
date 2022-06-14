import articleList from '../../data/blogList.json';
import { IArticle } from '../types/article';

let articles: IArticle[] = articleList;

const getList = (): Array<IArticle> => {
  return articles;
};

const getById = (id: number): IArticle | undefined => {
  const result = articles.find((item) => item.id === id);
  return result;
};

const addItem = (newItem: IArticle) => {
  const newEntry = {
    id: Math.max(...articles.map(d => <number>d.id)) + 1,
    createdAt: Date.now(),
    ...newItem
  };

  articles = [...articles, newEntry];

  return newEntry;
};

const deleteById = (id: number): IArticle[] => {
  return articles.filter(blog => blog.id !== id);
};

export default {
  getList,
  addItem,
  getById,
  deleteById
};