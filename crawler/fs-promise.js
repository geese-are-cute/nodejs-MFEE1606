const axios = require("axios");
const moment = require("moment");

const fs = require("fs/promises");
//jj ----- 將 fs 改寫成 fs/promises
//jj ----- 引入 promise 版本的 fs
//jj ----- 注意舊的 nodeJS 版本可能沒有 promise 版本的 fs

//
// let readFileStockCode = (fileName, format) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, format, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(data);
//     });
//   });
// };
//jj ----- 因為引入了 promise 版本的 fs，不需要再自己包裝了

//
//jj ----- 因為是 promise 版本，所以會回傳 promise 物件
fs.readFile("stock.txt", "utf8")
  .then((result) => {
    console.log("----- 開始工作 -----");
    console.log(`從 stock.txt 讀到的資料是: ${result}`);

    return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      method: "get",
      params: {
        response: "json",
        date: moment().format("YYYYMMDD"), //JJ 這裡改寫原本寫死的日期
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
