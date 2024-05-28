#### 一、项目初始化

##### 1 npm初始化

``` 
npm init -y
```

生成`package.json`文件

- 记录项目依赖

##### 2 git初始化

``` 
git init
```

生成`.git`隐藏文件夹，git的本地仓库

##### 3 创建readMe.md文件

#### 二、搭建项目

##### 1 安装Koa

``` 
npm i koa
```

##### 2 编写基本的app

创建`src/main.js`

##### 3 运行app

``` 
node scr/main.js
```

#### 三、项目基本优化

##### 1 自动重启服务

安装nodemon工具

```
npm i nodemon
```

修改`package.json`

```json
 "scripts": {
    "dev":"nodemon ./src/main.js",
    ...
  }
```

使用`npm run dev`启动服务

##### 2 读取配置文件

安装`dotenv`，读取根目录下的`.env`文件，将配置写到`process.env`中

```
npm i dotenv
```

创建`.env`文件

```
APP_PORT = 8000
```

创建`src/config/config.default.js`文件

```js
const dotenv = require('dotenv')

dotenv.config()

module.exports = process.env
```

修改`main.js`文件

```js
const {APP_PORT} = require('./config/config.default')
...
app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
```

#### 四、添加路由

路由：根据不同的URL，调用对应的处理函数

