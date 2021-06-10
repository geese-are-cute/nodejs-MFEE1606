// 引入 axios
const axios = require("axios");

// 這個 fs 是 node JS 原本就有的 module，fs = file system
const fs = require("fs");

//
//
//

// JJ 接下來有同版本不同變化的 Code
// JJ 執行其一版本時，剩餘版本請記得 comment out
//

// LL ---------- Version 1: 讀檔和爬蟲兩個都是非同步執行 ----------
// LL 這裡讀檔和爬蟲是非同步執行，兩個動作是同時做的，何者先完成取決於許多因素

fs.readFile("stoc.txt", "utf8", (err, data) => {
  if (err) {
    return console.error("讀檔錯誤", err);
  }
  console.log(`從 stock.txt 讀到的資料: ${data}`);
});

axios
  .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    method: "get", // 看 axios官方文件加入的（不過default本就是 get)
    params: {
      // 這裡可以加入params，看老師的 code 學的
      response: "json",
      date: "20210607",
      stockNo: "2330",
    },
  })
  .then(function (response) {
    if (response.data.stat === "OK") {
      console.log(response.data.date);
      console.log(response.data.title);
      console.log(response.data.fields);
      console.log(response.data.data.pop());
    }
  });

// LL ---------- Version 2: 讀檔和爬蟲兩個同步（依序）執行 ----------
// LL 這裡是將 axios 放在 readFile 的 callback 裡面

// fs.readFile("stock.txt", "utf8", (err, data) => {
//   if (err) {
//     return console.error("讀檔錯誤", err);
//   }

//   console.log(`從 stock.txt 讀到的資料: ${data}`);

//   axios
//     .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//       method: "get", // 看 axios官方文件加入的（不過default本就是 get)
//       params: {
//         // 這裡可以加入params，看老師的 code 學的
//         response: "json",
//         date: "20210609",
//         stockNo: data,
//       },
//     })
//     .then(function (response) {
//       if (response.data.stat === "OK") {
//         console.log(response.data.date);
//         console.log(response.data.title);
//         console.log(response.data.fields);
//         console.log(response.data.data.pop());
//       }
//     });
// });
