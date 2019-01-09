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

## 下一题
1. loader 作用
2. 为什么需要引入两个loader,两个loader分别做了什么