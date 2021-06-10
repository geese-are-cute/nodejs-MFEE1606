// JJ 上課作業
// JJ 這裡我先把 fs.readFile 改寫成 promise 的形式
// JJ app02.js 我再把改成 promise 形式的 js.readFile 跟 axios 連起來
// 看一下 fs.readFile
// 不可以用 fs 的 promise，自己把 fs.readFile 包成 promise
// 要可以跟 axios 串接，做出 promise chain

// 引入 axios
const axios = require("axios");
const fs = require("fs");

let readFileStockCode = (fileName, format) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, format, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

let readStockTxt = readFileStockCode("stock.txt", "utf8");

readStockTxt
  .then((result) => {
    console.log("----- 開始工作 -----");
    console.log(`從 stock.txt 讀到的資料是:\n${result}`);
  })
  .catch((error) => {
    console.log(`發生錯誤: ${error}`);
  })
  .finally(() => {
    console.log("----- 工作結束 -----");
  });

// axios
//   .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//     method: "get", // 看 axios官方文件加入的（不過default本就是 get)
//     params: {
//       // 這裡可以加入params，看老師的 code 學的
//       response: "json",
//       date: "20210607",
//       stockNo: "2330",
//     },
//   })
//   .then(function (response) {
//     if (response.data.stat === "OK") {
//       console.log(response.data.date);
//       console.log(response.data.title);
//       console.log(response.data.fields);
//       console.log(response.data.data.pop());
//     }
//   });
