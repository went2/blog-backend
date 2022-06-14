/**
 * @file Article routes: serve '/api/articles' endpoint
 * @module routes/articles
 * @author James <https://github.com/went2>
 */
import express from 'express';
import articleService from '../services/article.service';


const router = express.Router();

router.get('/', articleService.articleList);

router.get('/:id', articleService.articleDetail);

router.post('/', articleService.articleCreate);

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  articleService.deleteById(id);

  res.status(204).end();
});


export default router;
