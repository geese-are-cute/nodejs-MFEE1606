const axios = require("axios");
const fs = require("fs/promises");
const moment = require("moment");
const mysql = require("mysql"); //jj 引入 mysql

let connection = mysql.createConnection({
  //jj 準備建立SQL連線
  host: "localhost",
  user: "root",
  password: "JOCK*sess8heak5foot",
  database: "stock",
});

connection.connect(); //jj 建立SQL連線

fs.readFile("stock.txt", "utf8")
  .then((stockCode) => {
    console.log(`\n讀到的股票代碼: ${stockCode}`);
    // 先檢查這個股票代碼是否已經存在資料庫
    connection.query(
      // 因為 nodeJS mysql 的套件本身不是 promise 版的，所以這裡的.query 是用 callback 方式來處理非同步
      //! 這樣程式碼會非常的混亂難閱讀，所以要包裝成 promise 版本 -> app-0616-2.js
      // 順便一提，底下的 Code 有問題，因為在一串 promise code 裡插了一串 callback，之後的then會不正常運作
      `SELECT stock_id FROM stock WHERE stock_id = ${stockCode}`,
      function (err, result) {
        if (err) {
          throw err;
        }
        if (result.length === 0) {
          // 如果股票代碼不存在資料庫
          // 用讀到的股票代碼查詢股票名稱
          // https://www.twse.com.tw/zh/api/codeQuery?query=2610  使用這個 API（老師挖到的）
          return axios.get(
            `https://www.twse.com.tw/zh/api/codeQuery?query=${stockCode}`
          );
        }
      }
    );
  })
  .then(function (response) {
    /*  
    response.data 的內容是 
      {suggestions: ['2610\t華航', '26101\t華航一', '26102\t華航二', '2610R\t華航甲', '2610S\t華航乙', '2610T\t華航丙']}
    如果輸入的股票代碼查無資料：
      { query: '1660', suggestions: [ '(無符合之代碼或名稱)' ] }
    */
    let answer = response.data.suggestions.shift();
    let answers = answer.split("\t");
    if (answers.length > 1) {
      connection.query(
        `INSERT INTO stock (stock_id, stock_name) VALUES ('${answers[0]}','${answers[1]}')`,
        function (err, result) {
          if (err) {
            throw err;
          }
          console.log(result);
        }
      );
    } else {
      throw "查不到名稱";
    }
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    connection.end();
  });
