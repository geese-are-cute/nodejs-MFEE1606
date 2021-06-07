// JJ doWork 的 Callback 寫法

let doWork = function (job, timer, cb) {
  setTimeout(() => {
    let dt = new Date();
    cb(null, `完成工作: ${job} at ${dt.toLocaleTimeString()}`);
  }, timer);
};

// JJ doWork 的 Promise 寫法
// JJ 加入了第三個參數 true/false 可以讓我們模擬出現錯誤的情況

let doWorkPromise = function (job, timer, success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dt = new Date();
      if (success) {
        return resolve(
          `完成工作！ 工作名稱：${job} 完成時間：${dt.toLocaleTimeString()}`
        );
      }
      reject(`工作失敗：${job} at ${dt.toLocaleTimeString()}`);
    }, timer);
  });
};

// JJ Promise 基本寫法，以 doWork 為例子（依序執行多項工作）
// JJ doWork 加入了第三個參數 true/false 可以讓我們模擬出現錯誤的情況

let dt = new Date();
console.log(`Start! ${dt.toLocaleTimeString()}`);

doWorkPromise("刷牙", 2000, true)
  .then((result) => {
    console.log(result);
    return doWorkPromise("吃早餐", 3000, true);
  })
  .then((result) => {
    console.log(result);
    return doWorkPromise("寫功課", 4000, false);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("發生錯誤！", err);
  })
  .finally(() => {
    let dt = new Date();
    console.log(`End! ${dt.toLocaleTimeString()}`);
  });
