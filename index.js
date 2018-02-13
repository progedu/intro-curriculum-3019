// 厳密モードに設定
'use strict';
// httpモジュール呼び出し
const http = require('http');
// サーバー作成
// 第一引数：リクエストがあったときに実行する関数
const server = http.createServer((req, res) => {
    // レスポンスヘッドにステータスコード302と
    // Locationの値を書き込んでリダイレクトを実現する
    res.writeHead(302, {
        'Location': 'http://www.nicovideo.jp/'
    });
    // 書き出し終了
    res.end();
});
// ポート番号
const port = 8000;
// サーバーを起動する
// 第一引数：ポート番号
// 第二引数：サーバー起動時に実行する関数
server.listen(port, () => {
    console.info('Listening on ' + port);
});