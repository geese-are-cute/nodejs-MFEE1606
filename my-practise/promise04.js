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

// JJ 以下是將原本是 Promise Chain 裡面的 doWorkPromise 函式們分開，變成三個獨立的非同步的函式

//KK 如果沒有執行以下區塊的 Code，請 Comment out
// let dt = new Date();
// console.log(`Start! ${dt.toLocaleTimeString()}`);

// doWorkPromise("寫功課", 2000, true).then((result) => {
//   console.log(result);
// });

// doWorkPromise("聽音樂", 3000, true).then((result) => {
//   console.log(result);
// });

// doWorkPromise("聊天", 4000, true).then((result) => {
//   console.log(result);
// });

// JJ 我們想要做的：
// JJ 1. 並行地做（非同步）
// JJ 2. 三件事 ”都“ 做完的時候通知我

//JJ 可以使用 promise().all() 來達成
let dt = new Date();
console.log(`Start! ${dt.toLocaleTimeString()}`);

let p1 = doWorkPromise("寫功課", 2000, true);
let p2 = doWorkPromise("聽音樂", 3000, true);
let p3 = doWorkPromise("打嘴炮", 4000, false);

Promise.all([p1, p2, p3])
  .then((result) => {
    let dt = new Date();
    console.log(`工作都完成了！ 完成時間：${dt.toLocaleTimeString()}`);
    //LL 注意，“工作都完成了！完成時間”是三項工作都做完的時間！
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
  })
  .catch((error) => {
    console.log(error);
    //LL 注意，promise.all() 執行的 promise 裡面如果有一個 promise 有錯誤，就會進入catch (有成功的 promise 會被無視)
  });
