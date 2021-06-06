let doWork = function (job, timer, cb) {
  setTimeout(() => {
    let dt = new Date();
    cb(null, `完成工作: ${job} at ${dt.toLocaleTimeString()}`);
  }, timer);
};

// * 這個是 Promise 的基本寫法 new Promise(function(resolve, reject){});

let doWorkPromise = function (job, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 剛好我們這個情境不會失敗
      // if (err) {
      //   return reject(`工作失敗: ${job} at ${dt.toLocaleTimeString()}`);
      // }
      //成功
      let dt = new Date();
      // !注意一下底下兩行 resolve 和 reject 選擇一個執行看看
      // resolve(
      //   `完成工作了！工作名稱：${job} 完成時間：${dt.toLocaleTimeString()}`
      // );
      reject(`測試用，故意產生的錯誤`);
      //失敗
    }, timer);
  });
};

let brushTeethPromise = doWorkPromise("刷牙", 2000);

console.log(brushTeethPromise); // 印出 Promise 物件，狀態為 pending

brushTeethPromise // doWorkPromise("刷牙", 2000) 也可以替換成 brushTeethPromise
  .then((result) => {
    // fulfilled 處理成功 resolve
    console.log(result);
    console.log(brushTeethPromise); // 印出 Promise 物件，狀態為 成功？
  })
  .catch((err) => {
    // rejected 處理失敗 reject
    console.error("糟糕，發生錯誤了！", err);
  });
