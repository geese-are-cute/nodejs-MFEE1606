const axios = require("axios");
const fs = require("fs/promises");
const moment = require("moment");

fs.readFile("stock.txt", "utf8")
  .then((stockCode) => {
    console.log(`\n讀到的股票代碼: ${stockCode}`);
    return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      method: "get",
      params: {
        response: "json",
        date: moment().format("YYYYMMDD"),
        stockNo: stockCode,
      },
    });
  })
  .then(function (response) {
    if (response.data.stat == "OK") {
      console.log(`\n日期: ${response.data.date}`);
      console.log(response.data.title);
      console.log(response.data.fields);
      console.log(response.data.data.pop());
    }
  });
