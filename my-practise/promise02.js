// JJ doWork 的 Callback 寫法

let doWork = function (job, timer, cb) {
  setTimeout(() => {
    let dt = new Date();
    cb(null, `完成工作: ${job} at ${dt.toLocaleTimeString()}`);
  }, timer);
};

// JJ doWork 的 Promise 寫法

let doWorkPromise = function (job, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dt = new Date();
      resolve(
        `完成工作了！工作名稱：${job} 完成時間：${dt.toLocaleTimeString()}`
      );
    }, timer);
  });
};

// JJ Promise 的基本寫法，以 doWork 為例子（依序執行多項工作）
// JJ 這裡 catch((err)=>{.....}) 裡面的內容不會執行，因為原本的 Code 不可能發生錯誤

let dt = new Date();
console.log(`Start! ${dt.toLocaleTimeString()}`);

doWorkPromise("刷牙", 2000)
  .then((result) => {
    console.log(result);
    return doWorkPromise("吃早餐", 3000);
  })
  .then((result) => {
    console.log(result);
    return doWorkPromise("寫功課", 4000);
  })
  .then((result) => {
    console.log(result);
    console.log("End");
  })
  .catch((err) => {
    console.error("糟糕，發生錯誤了！", err);
  });
