// JJ 上課作業
// JJ 這裡我先把 fs.readFile 改寫成 promise 的形式
// JJ 再把改成 promise 形式的 js.readFile 跟 axios 連起來
// JJ 然後再引入 moment.js，將日期格式改成動態的
// JJ 然後再改寫成 async/await 形式

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

async function readFileThanAxios() {
  try {
    console.log("\n開始工作 at", moment().format("YYYY/MM/DD HH:mm:ss:SS"));

    let readStockCode = await readFileStockCode("stock.txt", "utf8");
    console.log("\n讀到的股票代碼:", readStockCode);

    console.log("\n傳回的資料:");
    let axiosResponse = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        method: "get",
        params: {
          response: "json",
          date: moment().format("YYYYMMDD"),
          stockNo: readStockCode,
        },
      }
    );
    if (axiosResponse.data.stat === "OK") {
      console.log("日期: ", axiosResponse.data.date);
      console.log("標題: ", axiosResponse.data.title);
      console.log("欄位: ", axiosResponse.data.fields);
      console.log("末筆資料: ", axiosResponse.data.data.pop());
    }
    //
  } catch (error) {
    console.log("發生錯誤了:", error);
    // to do
    // 通知 admin 來處理
    // 過幾分鐘後重試
    //
  } finally {
    console.log("\n工作結束 at", moment().format("YYYY/MM/DD HH:mm:ss:SS"));
  }
}

readFileThanAxios();
