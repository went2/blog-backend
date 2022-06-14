import { IArticle } from './types/article';
import { isString, isDate } from './helpers/strHelpers';

type UserCreateArticleField = {
  title: unknown,
  abstract: unknown,
  date: unknown,
  content: unknown,
  category: unknown,
  lang: unknown,
  isOriginal: unknown,
  tag: unknown,
  keywords: unknown
};

/**
 * 验证请求体 blog 内容的各个字段，并返回验证后的对象
 * @param obj 
 */
export const parseUserInputBlogEntity = (obj: UserCreateArticleField): IArticle => {
  const newBlogEntity: IArticle = {
    title: parseTitle(obj.title),
    abstract: parseAbstract(obj.abstract),
    date: parseDate(obj.date),
    content: parseContent(obj.content)
  };

  return newBlogEntity;
};

const parseTitle = (title: unknown): string => {
  if (!title || !isString(title)) {
    throw new Error('Incorrect or missing title');
  }
  if (title.length >= 65) {
    throw new Error('Title should be in 65 characters' + title);
  }
  return title;
};

const parseContent = (content: unknown): string => {
  if (!content || !isString(content)) {
    throw new Error('Incorrect or missing content');
  }
  return content;
};

const parseAbstract = (abstract: unknown): string => {
  if (!abstract || !isString(abstract)) {
    throw new Error('Incorrect or missing abstract');
  }
  return abstract;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date');
  }
  return date;
};



