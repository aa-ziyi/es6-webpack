# demo1

## 安装
```
npm install webpack -g
npm install webpack-cli -g
```

## 编译ES6
### 创建文件目录

```bash
mkdir demo1 && cd demo1
npm init 
```

### 添加app目录和webpack.config.js文件
```
|- app
  |- index.js
|- webpack.config.js
```

### 分别写入代码；


```js 
  // index.js
  let a = 1;
  console.log(a);
```
```js
// webpack.config.js
// vscode 中安装Webpack Snippets 插件,输入wpstart快速创建webpack.config.js文件，创建的代码如下
'use strict';

const path = require('path');

module.exports = {
  entry: './app/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: []
  },
  resolve: {},
  devtool: 'source-map',
  plugins: []
};

```

### 编译
在demo2的目录下输入命令
```bash
webpack --config webpack.config.js
```
按照`webpack.config.js`配置生成dist文件夹
```
  |- app
    |- index.js
  |- webpack.config.js
+ |- dist
    |- bundle.js
    |- bundle.js.map
```
### 添加html文件
```
  |- app
    |- index.js
  + |- index.html
  |- webpack.config.js
  |- dist
    |- bundle.js
    |- bundle.js.map
```
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <script src="../dist/bundle.js"></script>
</body>

</html>
```
浏览器打开html文件查看效果


### 添加启动脚本
```js
//  package.json
{
  "name": "es6-webpack",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js" // 添加build命令
  },
  "author": "",
  "license": "ISC",
  "dependencies": {}
}

```
在demo2的目录下输入命令
```
npm run build
```