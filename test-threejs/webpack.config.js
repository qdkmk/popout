module.exports = {
  mode: 'development',


  devServer: {
    open: true, //ブラウザを自動で開く
    openPage: "index.html", //自動で指定したページを開く
    watchContentBase: true, //コンテンツの変更監視をする
    port: 3000, // ポート番号


  }

};