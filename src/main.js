const Koa = require("koa");
const { APP_PORT } = require("./config/config.default");

const app = new Koa();
const usersRouter = require("./router/user");
//  ctx:http的上下文
app.use(usersRouter.routes());

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
