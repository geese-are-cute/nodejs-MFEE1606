// LL 2021-05-30 下午 NodeJS
/* 
LL 00-00-00 ~ 00-12-42
解答將 fs.readFile() 改寫成 promise 的形式，再將他跟 axios 串接起來的方法。
我寫的跟老師有點不太一樣，但是我應該是寫對了，檔案是在 app02.js

LL 00-17-05 
將 app02.js 裡面爬蟲程式碼裡，日期的部分改成活的（自動變化的）
JavaScript 的 Date 物件超難用，所以我們會引入 moment.js 套件
我寫在另一個檔案 app03.js

LL 00-19-15 
JJ 原來在 function 以外，任一行加一個 return 就可以讓程式結束在那一行！！

LL 00-25-00 ~ 00-41-40
JJ 回到  Promise --- Promise.all()
  LL 00-26-54
  建立 promise04.js（將 promise03.js 改寫成 三個非同步 doWorkPromise()）

LL 00-41-40 ~  00-46-50
老師示範了兩 個 promise 的方法
JJ Promise.race()   並行（非同步）執行數個 Promise，回傳第一個成功或失敗的 Promise 結果
JJ Promise.any()    並行（非同步）執行數個 Promise，回傳第一個成功的 Promise 結果

LL 00-48-50 ~ 01-09-30
建立 await.js 檔案

ll Async and Await
    ll  JS 
    ll  -> single thread
    ll  -> 大量的非同步
    ll  –> 依賴 callback
    ll    –> callback hell
    ll----> Promise (resolve, reject)
    ll  ----> then / catch
    ll  ----> 「希望」可以把程式寫得像同步程式，但他又是非同步、不阻塞 

  ll 00-59-30 - await 和沒有 await 的區別

ll 01-09-30 
課堂作業

    研究一下 Syntax Candy

    01-06-54









*/
