/**
 * @file Article services aka Controller
 * @module services/article.service
 * @author James <https://github.com/went2>
 */
import { RequestHandler } from 'express';
import Article from '../models/Article.model';
import { parseUserInputArticleEntity } from '../utils';

const articleCreate: RequestHandler = (req, res) => {
  try {
    // validate fields
    const newArticle = parseUserInputArticleEntity(req.body);

    Article.find().then((data) => {
      const newId = data.length;

      Article.create({ ...newArticle, id: newId })
        .then(data => {
          const responseMessage = {
            data: data,
            message: 'Create Article Success',
            status: 'success'
          };
          res.json(responseMessage);
        })
        .catch((err: unknown) => {
          console.error('Unable to Save', err);
          throw new Error('Unable to Save');
        });

    }).catch(err => console.log('获取全部 articles 失败', err));

  } catch (error: unknown) {
    let errorMessage = 'Something went wrong when saving data';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send(errorMessage);
  }
};

const articleUpdate: RequestHandler = (req, res) => {
  try {
    const id = req.params.id;
    const updatedArticle = parseUserInputArticleEntity(req.body);

    Article.findByIdAndUpdate(id, updatedArticle)
      .then(data => {
        const responseMessage = {
          message: 'update article success',
          status: 'success',
          data: data
        };
        res.json(responseMessage);
      })
      .catch((err: unknown) => {
        console.error('Database Error when updating', err);
        throw new Error('Database Error when updating');
      });

  } catch (error: unknown) {
    let errorMessage = 'Something went wrong';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send(errorMessage);
  }
};

const articleDelete: RequestHandler = (req, res) => {
  const id = req.params.id;
  Article.findOneAndDelete({ _id: id })
    .then(() => {
      const responseMessage = {
        message: 'delete article success',
        data: {},
        status: 'success'
      };
      res.json(responseMessage).status(204);
    })
    .catch(err => console.error(err));
};

const articleList: RequestHandler = (_req, res) => {
  Article.find()
    .then(list => {
      const responseMessage = {
        status: 'success',
        message: 'get article list success',
        data: list
      };
      res.send(responseMessage);
    })
    .catch(err => {
      console.log('fetch article list failed', err);
    });
};

const articleDetail: RequestHandler = (req, res) => {
  const id = Number(req.params.id);

  Article.findById({ id: id })
    .then(data => {
      console.log('article detail', data);
      res.send({
        ...data,
        views: data!.views + 1
      });
    })
    .catch(err => {
      console.log(`ERR When Fetch Detail of article ${id}`, err);
      res.sendStatus(404);
    });
};


export default {
  articleList,
  articleDetail,
  articleCreate,
  articleDelete,
  articleUpdate
};