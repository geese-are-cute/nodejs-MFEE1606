let doWork = function (job, timer, cb) {
  setTimeout(() => {
    let dt = new Date();
    cb(null, `完成工作: ${job} at ${dt.toLocaleTimeString()}`);
  }, timer);
};

// ! 以下這段 code 是我想出來的解法，可以解決問題，但是不正確
// let dt = new Date();
// console.log(`開始工作 at ${dt.toISOString()}`);
// doWork("刷牙", 2000, function (err, result) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(result);
// });

// doWork("吃早餐", 5000, function (err, result) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(result);
// });

// doWork("寫功課", 8000, function (err, result) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(result);
// });

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
      let dt = new Date();
      console.log(`工作結束 at ${dt.toLocaleTimeString()}`);
    });
  });
});
