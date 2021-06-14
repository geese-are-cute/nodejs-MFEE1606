/* 
ll bluebird

-> fs 在某個 nodeJS 版本之後，是有 promise 版的
-> 但如果沒有提供 promise 功能的函式，可以自己手動包裝成 promise 版本，或是使用 bluebird 來包裝成 promise 版本
  1. 安裝 bluebird
    -> npm install bluebird
  2. 在檔案中引入 bluebird
    -> const Promise = require("bluebird")
    -> const readFileBlueBird = Promise.promisify(fs.readFile)
  3. 使用 promise 化的函式
    -> readFileBlueBird("stock.txt","utf-8").then ...........

*/



const axios = require("axios");
const fs = require("fs"); //jj 這裡使用 fs 原來的版本（非promise版），因為我們等等要練習用 bluebird 包 callback
const moment = require("moment");

const Promise = require("bluebird"); //JJ 這裡引入了 bluebird，並且覆蓋了原生的 Promise（因為變數名稱故意設為 Promise）

// let readFileStockCode = (fileName, format) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, format, (err, data) => {
//       if (err) {
//         reject(err);     //JJ 因為用 bluebird 所以不用自己把 fs.readFile包成 promise
//         return;
//       }
//       resolve(data);
//     });
//   });
// };

//jj 用 bluebird 包 callback 版本的 readFile
const readFileBlueBird = Promise.promisify(fs.readFile);

readFileBlueBird("stock.txt", "utf8")
  .then((result) => {
    console.log("----- 開始工作 -----");
    console.log(`從 stock.txt 讀到的資料是: ${result}`);

    return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      method: "get",
      params: {
        response: "json",
        date: moment().format("YYYYMMDD"),
        stockNo: result,
      },
    });
  })
  .then((response) => {
    if (response.data.stat === "OK") {
      console.log("\n爬蟲爬到的資料:");
      console.log(response.data.date);
      console.log(response.data.title);
      console.log(response.data.fields);
      console.log(response.data.data.pop());
    }
  })
  .catch((error) => {
    console.error(`發生錯誤了~~~ : ${error}`);
  })
  .finally(() => {
    console.log("----- 工作結束 -----");
  });
