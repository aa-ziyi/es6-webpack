# demo2
创建demo2文件夹,直接拷贝demo2文件
```
cp -r demo1 demo2
```

## 添加loader
```js
<!-- webpack.config.js -->
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
    rules: [{
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader',
      ]
    }]//  添加rule
  },
  resolve: {},
  devtool: 'source-map',
  plugins: []
};
```

## 添加css文件
```css
body {
  background: red;
}
```
文件目录
```
  |- app
    |- index.js
  + |- index.html
    |- index.css
  |- webpack.config.js
  |- dist
    |- bundle.js
    |- bundle.js.map
```

## 在js中引入css
```js
// index.js
import './index.css';
let a = 1;
console.log(a);
```

## 安装loader
```bash
cnpm i style-loader css-loader
```

## 打包&预览
```
npm run build
```
在浏览器中打开html文件查看样式文件被编译···

## 加载图片
```css
/* index.css */
body {
  /* background: red; */
  background-image: url('./demo.png');
}
```
然后打包npm run buil出现报错
```bash
ERROR in ./app/demo.png 1:0
Module parse failed: Unexpected character '�' (1:0)
You may need an appropriate loader to handle this file type.
(Source code omitted for this binary file)
 @ ./app/index.css (./node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js!./app/index.css) 4:41-62
 @ ./app/index.css
 @ ./app/index.js`

```
添加图片加载的loader, webpack.config.js修改如下，并执行npm i file-loader --save --dev
```js 
// webpack.config.js
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
    rules: [{
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader',
      ]
    }, { // add file-loader
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  resolve: {},
  devtool: 'source-map',
  plugins: []
};
```
编译后，dist目录生成png
```
  |- app
    |- index.js
    |- index.html
    |- index.css
  |- webpack.config.js
  |- dist
    |- bundle.js
    |- bundle.js.map
  + |- 生成的随机数的图片名称.png
```
在浏览器浏览html,发现提示图片文件找不到，因index.html在app目录下，所以路径不对，到这里我们就发现一个需求，
html文件引入了生成的dist文件，但是都是相对路径的饮用，导致图片加载不到，所以我们希望自动生成一个html文件然后自动引入打包后的文件`这就涉及到demo3中的自动生成html文件并引入打包后的文件`；


## 全局资源 （引入官网文档）
上述所有内容中最出色之处是，以这种方式加载资源，你可以以更直观的方式将模块和资源组合在一起。无需依赖于含有全部资源的 /assets 目录，而是将资源与代码组合在一起。例如，类似这样的结构会非常有用：

- |- /assets
+ |– /components
+ |  |– /my-component
+ |  |  |– index.jsx
+ |  |  |– index.css
+ |  |  |– icon.svg
+ |  |  |– img.png
这种配置方式会使你的代码更具备可移植性，因为现有的统一放置的方式会造成所有资源紧密耦合在一起。假如你想在另一个项目中使用 /my-component，只需将其复制或移动到 /components 目录下。只要你已经安装了任何扩展依赖(external dependencies)，并且你已经在配置中定义过相同的 loader，那么项目应该能够良好运行。

但是，假如你无法使用新的开发方式，只能被固定于旧有开发方式，或者你有一些在多个组件（视图、模板、模块等）之间共享的资源。你仍然可以将这些资源存储在公共目录(base directory)中，甚至配合使用 alias 来使它们更方便 import 导入。

## 问题探讨/思考
1. loader 作用，以及在webpack中的作用；
2. 使用css,为什么需要引入两个loader,两个loader分别做了什么····