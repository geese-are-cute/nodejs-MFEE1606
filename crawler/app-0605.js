const axios = require("axios");
const fs = require("fs/promises");
const moment = require("moment");
const mysql = require("mysql");
const Promise = require("bluebird");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "JOCK*sess8heak5foot",
  database: "stock",
});

/* 
jj 說明
connection = Promise.promisifyAll(connection);
    jj 這個是把 mysql 物件變成 promise 版本的寫法（比較不太一樣）
.....
await connection.connectAsync();
    JJ 用 bluebird promise化之後，他原本的方法後面加 Async 就會使 promise 化的方法
    
*/

connection = Promise.promisifyAll(connection);

(async function () {
  try {
    await connection.connectAsync();

    let stockCode = await fs.readFile("stock.txt", "utf8");
    console.log(`\n讀到的股票代碼: ${stockCode}`);

    let stock = await connection.queryAsync(
      `SELECT stock_id FROM stock WHERE stock_id = ${stockCode}`
    );

    if (stock.length <= 0) {
      let response = await axios.get(
        `https://www.twse.com.tw/zh/api/codeQuery?query=${stockCode}`
      );

      let answer = response.data.suggestions.shift();
      let answers = answer.split("\t");
      if (answers.length > 1) {
        let sqlCode = `INSERT INTO stock (stock_id, stock_name) VALUES ('${answers[0]}','${answers[1]}')`;
        await connection.queryAsync(sqlCode);
        // 這裡我自己擅自加了一個 await（但是老師的 code 裡面沒有加）
        console.log(`成功將 ${answers[0]} ${answers[1]} 資料存入資料庫中！`);
      } else {
        throw "查無此股票代碼的資料！";
      }
    } else {
      console.log(`此股票代碼 ${stockCode} 已存在資料庫中！`);
    }
  } catch (error) {
    console.error(error);
  } finally {
    connection.end();
  }
})();
