/**
 * @file Article services aka Controller
 * @module services/article.service
 * @author James <https://github.com/went2>
 */

import articleList from '../../data/blogList.json';
import { IArticle } from '../types/article';
import { RequestHandler } from 'express';
import Article from '../models/Article.model';

// @ts-ignore
let articles: IArticle[] = articleList;

const articleList: RequestHandler = (_req, res) => {
  Article.find()
    .then(list => {
      console.log('Article.find()==>', list);
      res.send(list);
    })
    .catch(err => {
      console.log('fetch article list failed', err);
    });
};

const articleDetail: RequestHandler = (req, res) => {
  const id = Number(req.params.id);
  Article.find({ id: id })
    .then(data => {
      console.log('article detail', data);
      res.send(data);
    })
    .catch(err => {
      console.log(`ERR When Fetch Detail of article ${id}`, err);
      res.sendStatus(404);
    });
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
  articleList,
  articleDetail,
  addItem,
  getById,
  deleteById
};