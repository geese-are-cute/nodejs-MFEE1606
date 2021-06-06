let doWork = function (job, timer, cb) {
  setTimeout(() => {
    let dt = new Date();
    cb(null, `完成工作: ${job} at ${dt.toLocaleTimeString()}`);
  }, timer);
};

// * 這個是 Promise 的基本寫法 new Promise(function(resolve, reject){});

// jj asdfasdfasdfasdfasdfasdfa
// kk asdfasdfkj;alskdjf;alksj;d
// ll a;lskdjf;alkjsd;flkaj;skldjf;aksj;d
// asdjf;aljs;dfkja;skdjf;akjs;df

let doWorkPromise = function (job, timer, success) {
  return new Promise((resolve, reject) => {   
    setTimeout(() => {
      let dt = new Date();
      if (success) {
        return resolve(
          `完成工作了！工作名稱：${job} 完成時間：${dt.toLocaleTimeString()}`
        );
      }
      reject(`工作失敗: ${job} at ${dt.toLocaleTimeString()}`);
    }, timer);
  });
};

let dt = new Date();
console.log(`Start! ${dt.toLocaleTimeString()}`);

doWorkPromise("刷牙", 2000, true)
  .then((result) => {
    console.log(result);
    return doWorkPromise("吃早餐", 3000, true);
  })
  .then((result) => {
    console.log(result);
    return doWorkPromise("寫功課", 3000, true);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("！發生錯誤！ - ", err);
  })
  .finally(() => {
    let dt = new Date();
    console.log(`End! ${dt.toLocaleTimeString()}`);
  });
