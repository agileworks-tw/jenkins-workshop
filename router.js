'use strict';

const Router = require('koa-router');
const router = new Router({
//  prefix: '/users'
});

router.get('/', async (ctx, next) => {
  await ctx.render('index', { msg: ctx.request.query.msg });
});

router.get('/dashboard', async (ctx, next) => {
  await ctx.render('dashboard');
});

module.exports = router;
