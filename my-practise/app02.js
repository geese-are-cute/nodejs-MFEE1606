// JJ 上課作業
// JJ 這裡我先把 fs.readFile 改寫成 promise 的形式
// JJ 再把改成 promise 形式的 js.readFile 跟 axios 連起來
// 看一下 fs.readFile
// 不可以用 fs 的 promise，自己把 fs.readFile 包成 promise
// 要可以跟 axios 串接，做出 promise chain

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

// let readStockTxt = readFileStockCode("stock.txt", "utf8");

readFileStockCode("stock.txt", "utf8")
  .then((result) => {
    console.log("----- 開始工作 -----");
    console.log(`從 stock.txt 讀到的資料是: ${result}`);

    return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      method: "get",
      params: {
        response: "json",
        date: "20210607",
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
