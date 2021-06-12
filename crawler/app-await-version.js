const axios = require("axios");
const fs = require("fs");
const moment = require("moment");

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

(async function () {
  try {
    console.log(`日期: ${moment().format("YYYY/MM/DD")}`);

    console.log(`開始工作: ${moment().format("HH:mm:ss:SS")}`);

    let stockCode = await readFileStockCode("stock.txt", "utf8");

    let response = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        method: "get",
        params: {
          response: "json",
          date: moment().format("YYYYMMDD"), //JJ 這裡改寫原本寫死的日期
          stockNo: stockCode,
        },
      }
    );

    if (response.data.stat === "OK") {
      console.log("\n爬蟲爬到的資料:");
      console.log(response.data.date);
      console.log(response.data.title);
      console.log(response.data.fields);
      console.log(response.data.data.pop());
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`\n結束工作: ${moment().format("HH:mm:ss:SS")}`);
  }
})();

