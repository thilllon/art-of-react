// const Router = require('koa-router');
// const postsRouter = require('./posts');
import Router from 'koa-router';
import postsRouter from './posts/index.js';
// ************************
const apiRouter = new Router();
apiRouter.use('/posts', postsRouter.routes());

// module.exports = apiRouter;
export default apiRouter;
