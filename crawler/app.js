// https://www.twse.com.tw/exchangeReport/STOCK_DAY
// ?response=json
// &date=20210523
// &stockNo=2610

// npm i axios
// 引入 axios
const axios = require("axios");

// TODO: 從 stock.txt 讀股票代碼進來
// filesystem
// npm i fs ??? -> 不用
const fs = require("fs");




fs.readFile("stock.txt", "utf8", (err, data) => {
  if (err) {
    return console.error("讀檔錯誤", err);
  }
  console.log(`讀到的 stock code: ${data}`);

  axios
    .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      params: {
        response: "json",
        date: "20210523",
        stockNo: data,
      },
    })
    .then(function (response) {
      if (response.data.stat === "OK") {
        console.log(response.data.date);
        console.log(response.data.title);
      }
    });
});






/* //! 以下是我寫的 Code (其實是抄官方的 Code)
const axios = require('axios');
// Make a request for a user with a given ID
axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210429&stockNo=2330')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
 */