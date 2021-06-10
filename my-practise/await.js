/* 
JJ Asynch / Await
為什麼使用 await （老師筆記）
JS 
  -> single thread
  -> 大量的非同步
  –> 依賴 callback
    –> callback hell
----> Promise (resolve, reject)
----> then / catch
----> 「希望」可以把程式寫得像同步程式，但他又是非同步、不阻塞 

KK await 的限制
await 只能用在 asynch function 裡 
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

async function manager() {
  // asynch function

  let workBegin = new Date();
  console.log(`Start! ${workBegin.toLocaleTimeString()}`);

  let withAwait1 = await doWorkPromise("刷牙", 2000, true);
  console.log("await1: ", withAwait1);

  console.log("早上起床刷刷牙~");

  let withAwait2 = await doWorkPromise("吃飯", 3000, true);
  console.log("await2: ", withAwait2);

  let noAwait = doWorkPromise("喝湯", 3000, true);
  console.log("noAwait: ", noAwait);

  let withAwait3 = await doWorkPromise("洗碗", 4000, true);
  console.log("await3: ", withAwait3);

  let workEnd = new Date();
  console.log(`工作結束，結束時間：${workEnd.toLocaleTimeString()}`);
}

async function manager2() {
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

manager();

manager2();

/* 
manager() 沒有 exception handling
manager2() 有

ll 注意當你不 comment out 其中一個，而執行 manager() 和 manager2() 的時候，他們的指令會交叉在一起執行！

*/
