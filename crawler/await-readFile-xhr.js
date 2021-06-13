// const fs = require("fs");
// const moment = require("moment");
// const XMLHttpRequest = require("xmlhttprequest");

// // let readFileStockCode = (fileName, format) => {
// //   return new Promise((resolve, reject) => {
// //     fs.readFile(fileName, format, (err, data) => {
// //       if (err) {
// //         reject(err);
// //         return;
// //       }
// //       resolve(data);
// //     });
// //   });
// // };

// function xhrPromise() {
//   return new Promise((resolve, reject) => {
//     var xhr = new XMLHttpRequest();
//     // let date = moment().format(YYYYMMDD);
//     xhr.open(
//       "GET",
//       `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210610&stockNo=0050`,
//       true
//     );
//     xhr.send();
//     xhr.oneror = () => {
//       reject(xhr.statusText);
//     };
//     xhr.onload = function () {
//       resolve(xhr);
//       // if (this.status === 200) {
//       //   resolve(this.responseText);
//       // } else {
//       //   reject(this.status);
//       // }
//     };
//   });
// }

// xhrPromise()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // readFileStockCode("stock.txt", "utf8")
// //   .then((result) => {
// //     console.log("----- 開始工作 -----");
// //     console.log(`從 stock.txt 讀到的資料是: ${result}`);

// //     return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
// //       method: "get",
// //       params: {
// //         response: "json",
// //         date: moment().format("YYYYMMDD"), //JJ 這裡改寫原本寫死的日期
// //         stockNo: result,
// //       },
// //     });
// //   })
// //   .then((response) => {
// //     if (response.data.stat === "OK") {
// //       console.log("\n爬蟲爬到的資料:");
// //       console.log(response.data.date);
// //       console.log(response.data.title);
// //       console.log(response.data.fields);
// //       console.log(response.data.data.pop());
// //     }
// //   })
// //   .catch((error) => {
// //     console.error(`發生錯誤了~~~ : ${error}`);
// //   })
// //   .finally(() => {
// //     console.log("----- 工作結束 -----");
// //   });
