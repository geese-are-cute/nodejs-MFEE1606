const axios = require("axios");

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
      console.log(response.data.data);
    }
  });
