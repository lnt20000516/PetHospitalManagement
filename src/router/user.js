const Router = require("koa-router");

const router = new Router({ prefix: "/users" });  //prefix：路由前缀

//GET '/users/' 
router.get("/", (ctx, next) => {
  ctx.body="hello users";
});

module.exports = router