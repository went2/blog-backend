/**
 * @file Article routes: serve '/api/articles' endpoint
 * @module routes/articles
 * @author James <https://github.com/went2>
 */
import express from 'express';
import articleService from '../services/article.service';
import { parseUserInputArticleEntity } from '../utils';


const router = express.Router();

router.get('/', articleService.articleList);

router.get('/:id', articleService.articleDetail);

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  articleService.deleteById(id);

  res.status(204).end();
});

// CREATE Article
router.post('/', (req, res) => {
  try {
    // validate fields
    const newArticle = parseUserInputArticleEntity(req.body);

    // saved to db
    const addedArticle = articleService.addItem(newArticle);

    res.json(addedArticle);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong';
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(400).send(errorMessage);
  }

});

export default router;
