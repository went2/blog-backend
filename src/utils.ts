import { IUserInputBlogItem } from './types/blogs';
import { isString, isDate } from './helpers/strHelpers';

type UserInputBlogEntityField = {
  title: unknown,
  abstract: unknown,
  date: unknown
};

/**
 * 验证请求体 blog 内容的各个字段，并返回验证后的对象供下一步存储
 * @param obj 
 */
export const parseUserInputBlogEntity = (obj: UserInputBlogEntityField): IUserInputBlogItem => {
  const newBlogEntity: IUserInputBlogItem  = {
    title: parseTitle(obj.title),
    abstract: parseAbstract(obj.abstract),
    date: parseDate(obj.date)
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



