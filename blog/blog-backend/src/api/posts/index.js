// const Router = require('koa-router');
// const postsCtrl = require('./posts.ctrl');
// const { list, write, read, remove, replace, update } = postsCtrl;
import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl.js';
const { list, write, read, remove, replace, update } = postsCtrl;

// ************************
const postsRouter = new Router();
const printInfo = (ctx) => {
  const { method, path, params, query } = ctx;
  console.info(method, path, params, query);
  ctx.body = {
    method,
    path,
    params,
    query,
  };
};
// postsRouter.get('/', printInfo);
// postsRouter.post('/', printInfo);
// postsRouter.get('/:id', printInfo);
// postsRouter.delete('/:id', printInfo);
// postsRouter.put('/:id', printInfo);
// postsRouter.patch('/:id', printInfo);
postsRouter.get('/', list);
postsRouter.post('/', write);
postsRouter.get('/:id', read);
postsRouter.delete('/:id', remove);
postsRouter.put('/:id', replace);
postsRouter.patch('/:id', update);

// module.exports = postsRouter;
export default postsRouter;
