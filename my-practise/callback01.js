//JJ 將 callback01.js 非同步執行的程式碼改成同步執行。


let doWork = function (job, timer, cb) {
  setTimeout(() => {
    let dt = new Date();
    cb(null, `完成工作: ${job} at ${dt.toLocaleTimeString()}`);
  }, timer);
};

let dt = new Date();
console.log(`開始工作 at ${dt.toLocaleTimeString()}`);

doWork("刷牙", 2000, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result); 

  doWork("吃早餐", 3000, function (err, result) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);

    doWork("寫功課", 4000, function (err, result) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(result);
    });
  });
});


