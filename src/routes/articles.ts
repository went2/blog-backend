/**
 * @file Article routes: serve '/api/articles' endpoint
 * @module routes/articles
 * @author James <https://github.com/went2>
 */
import express from 'express';
import articleService from '../services/articles.service';
import { parseUserInputBlogEntity } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(articleService.getList());
});

router.get('/:id', (req, res) => {
  const blog = articleService.getById(Number(req.params.id));

  if (blog) {
    res.send(blog);
  } else {
    res.sendStatus(404);
  }
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  articleService.deleteById(id);

  res.status(204).end();
});

router.post('/', (req, res) => {
  try {
    // validate fields
    const newBlogEntry = parseUserInputBlogEntity(req.body);

    // saved to db
    const { title, abstract, date, content } = newBlogEntry;
    const addedBlog = articleService.addItem({ title, abstract, date, content });
    res.json(addedBlog);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send(errorMessage);
  }

});

export default router;
