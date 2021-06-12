/*
ll --- 立即執行函式 ---
*/

let doWorkPromise = function (job, timer, success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dt = new Date();
      if (success) {
        return resolve(`完成工作：${job} 完成時間：${dt.toLocaleTimeString()}`);
      }
      reject(`工作失敗：${job} at ${dt.toLocaleTimeString()}`);
    }, timer);
  });
};

// 以下只是把 await 的 manager() 函式改成立即執行函式形態。

(async function () {
  // asynch function
  try {
    let workBegin = new Date();
    console.log(`Start! ${workBegin.toLocaleTimeString()}`);

    let withAwait = await doWorkPromise("刷牙", 2000, true);
    console.log("awaitI: ", withAwait);
    console.log("早上起床刷刷牙~2");

    withAwait = await doWorkPromise("吃飯", 3000, true);
    console.log("awaitII: ", withAwait);

    let noAwait = doWorkPromise("喝湯", 3000, true);
    console.log("noAwait: ", noAwait);

    withAwait = await doWorkPromise("洗碗", 4000, true);
    console.log("awaitIII: ", withAwait);
    //
  } catch (error) {
    console.log("發生錯誤：", error);
    //
  } finally {
    let workEnd = new Date();
    console.log(`工作結束，結束時間：${workEnd.toLocaleTimeString()}`);
  }
})();

//

/*

這邊是 manager() 函式原本的樣子

async function manager() {
  // asynch function
  try {
    let workBegin = new Date();
    console.log(`Start! ${workBegin.toLocaleTimeString()}`);

    let withAwait1 = await doWorkPromise("刷牙", 2000, true);
    console.log("awaitOne: ", withAwait1);
    console.log("早上起床刷刷牙~2");

    let withAwait2 = await doWorkPromise("吃飯", 3000, true);
    console.log("awaitTwo: ", withAwait2);

    let noAwait = doWorkPromise("喝湯", 3000, true);
    console.log("noAwait: ", noAwait);

    let withAwait3 = await doWorkPromise("洗碗", 4000, true);
    console.log("awaitThree: ", withAwait3);
    //
  } catch (error) {
    console.log("發生錯誤：", error);
    //
  } finally {
    let workEnd = new Date();
    console.log(`工作結束，結束時間：${workEnd.toLocaleTimeString()}`);
  }
}

*/
