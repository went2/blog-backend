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
  keywords: unknown,
  views: unknown
};

/**
 * 验证请求体 article 内容的各个字段，返回验证后的对象
 * @param obj 
 */
export const parseUserInputArticleEntity = (obj: UserCreateArticleField): IArticle => {
  const newArticle: IArticle = {
    title: parseTitle(obj.title),
    abstract: parseAbstract(obj.abstract),
    date: parseDate(obj.date),
    content: parseContent(obj.content),
    category: parseNumberArray(obj.category),
    keywords: parseStringArray(obj.keywords),
    isOriginal: parseIsOrioginal(obj.isOriginal),
    tag: parseNumberArray(obj.tag),
    lang: parseLang(obj.lang),
    views: parseViews(obj.views)
  };

  return newArticle;
};

const parseLang = (lang: unknown): string => {
  if (lang && isString(lang)) {
    return lang;
  }
  return "zh";
};

const parseViews = (views: unknown): number => {
  if (isNumber(Number(views))) {
    return Number(views);
  }
  return 0;
};


const parseNumberArray = (arr: unknown): number[] => {
  if (arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      return arr as number[];
    }
  }
  return [];
};

const parseStringArray = (arr: unknown): string[] => {
  if (arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      return arr as string[];
    }
  }
  return [];
};

const parseIsOrioginal = (isOriginal: unknown): 1 | 2 => {
  if (isOriginal === 1 || isOriginal === 2) {
    return isOriginal;
  }
  return 1;
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

const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value);
};



