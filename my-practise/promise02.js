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
      let dt = new Date();
      resolve(
        `完成工作了！工作名稱：${job} 完成時間：${dt.toLocaleTimeString()}`
      );
    }, timer);
  });
};

let dt = new Date();
console.log(`Start! ${dt.toLocaleTimeString()}`);

doWorkPromise("刷牙", 2000)
  .then((result) => {
    console.log(result);
    return doWorkPromise("吃早餐", 3000);
  })
  .then((result) => {
    console.log(result);
    return doWorkPromise("寫功課", 3000);
  })
  .then((result) => {
    console.log(result);
    console.log("End");
  })
  .catch((err) => {
    console.error("糟糕，發生錯誤了！", err);
  });
