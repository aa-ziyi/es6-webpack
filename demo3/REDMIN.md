# demo3
创建demo3文件夹,直接拷贝demo2文件
```
cp -r demo2 demo3
```
## 多文件输出的动态命名
```js 
'use strict';

const path = require('path');

module.exports = {
- entry: './app/index.js',  
+ entry: {
    './app/index.js',  
    './app/print.js'
  },
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
+   filename: 'bundle.js',
-   filename:  '[name].bundle.js'
    publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: [{
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader',
      ]
    }, {
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
重新编译后活生成新的文件
```

```