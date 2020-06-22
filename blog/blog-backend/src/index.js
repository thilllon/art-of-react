// require('dotenv').config();
import dotenv from 'dotenv';
// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// const mongoose = require('mongoose');
// debugger;
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
// ************************
// const apiRouter = require('./api');
import apiRouter from './api/index.js';
// import postsRouter from './api/posts/index.js';
// ************************

dotenv.config();
const app = new Koa();
const router = new Router();
const { PORT, MONGO_URI } = process.env;
console.info(PORT, MONGO_URI);
console.info(PORT, MONGO_URI);
console.info(PORT, MONGO_URI);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.info('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(err);
  });
const port = PORT || 3000;
// ************************
// use : middleware 함수를 application에 등록하는 기능
// 미들웨어 함수 (ctx, next)=>{ // do something; next();}

// 라우터 적용
router.get('/', (ctx) => {
  ctx.body = 'Hello World!';
});
app.use(bodyParser());
// router.use('/', defaultRouter.routes());
router.use('/api', apiRouter.routes());
// router.use('/aaa', aaaRouter.routes());
// router.use('/bbb', bbbRouter.routes());
// router.use('/ccc', cccRouter.routes());
// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => console.log(`Listening to port ${port}`));
