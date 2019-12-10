const path = require('path')

// 0.line-fadeout:"0\.line-fadeout"
const TARGET = "0\.line-fadeout"

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  devServer: {
    contentBase: `${__dirname}/${TARGET}/dist`,
    port: 9000,
    open: true
  },

  // メインとなるJavaScriptファイル（エントリーポイント）
  //  entry: "./src/main.ts",
  entry: `./${TARGET}/js/main.ts`,
 target: 'node',
  output: {
    //  出力ファイルのディレクトリ名
    //path: `${__dirname}/dist`,
    path: `${__dirname}/${TARGET}/dist`,

    // 出力ファイル名
    filename: "main.js"
  },
  module: {
    rules: [{
      // 拡張子 .ts の場合
      test: /\.ts$/,
      // TypeScript をコンパイルする
      use: "ts-loader"
    }]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts"],
    modules: ['node_modules']
  }
};