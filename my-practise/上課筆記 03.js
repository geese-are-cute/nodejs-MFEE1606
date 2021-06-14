//ll 2021/06/05 上午

/* 
ll 00-00-00 ~ 00-50-00 老師問了一個問題，並檢討
    -- 老師：猜猜看這個程式碼的執行順序
    -- 給同學思考時間

    jj 00-03-10 ~ 00-10-30 老師總結前幾堂課程的內容：為什麼 JS 要非同步？
      因為 JS is single-thread
        --> 外包給暗樁（browser webapi, nodejs libus）
        --> 需要一個機制把控制權拿回來
          --> 所以，你會給暗樁一個回呼函式 (callback)
          --> 當暗樁做完事情後，暗樁會把回呼函式放進 queue
            --> event loop 會檢查 stack 是否空了
              --> 如果是，event loop 會把 queue 裡的 cb 搬回 stack 準備執行
                  (注意 queue 不止一個，且有優先順序)
      
    因為 callback --> 產生 callback hell 
    為了解決 callback hell --> promise, then 在語法上比 callback 直覺
    但是 Promise 本質上還是跟 callback 一樣，是在處理非同步的問題
    Promise 沒有改變非同步的本質，他只是讓語法變得比較好看
    
    ll 00-13-43 為什麼要學基礎（作業系統、資料結構、演算法）、資深工程師的定義

    ll 00-23-21 回到原本程式碼執行順序的問題 ....
    jj 00-28-35 解釋程式碼執行順序，感覺很重要(之後再看一遍，跟著做)
    jj 00-39-33 以上程式碼執行順序的另一個版本(之後再看一遍，跟著做)
    ll 00-50-00 程式碼執行順序的問題討論，結束


ll 00-53-13 Example Time Scale of System latencies
ll 00-58-18 CPU-bound vs IO-bound 效能瓶頸在哪裡？ NodeJS 是 CPU-bound 還是 IO-bound？（IO-bound）


ll 01-04-39 同學作業心得分享
ll 01-10-30 ~ 01-20-39
老師推薦 PHP 框架 Laravel - Laravel 台灣、社群經驗分享、工作經驗分享

-> 01-35-50 休息 + 閒聊結束，回來上課 

ll 01-37-25 fs.readFile 也有 Promise 版本
    ll 01-37-25 ~ 01-41-21 將 app-promise-version 改寫成使用 fs.readFile 的 Promise 版本（fs-promise.js)
    ll 01-41-39 app-await.js 改寫成使用 fs.readFile 的 Promise 版本（fs-awaitcd.js)
    -> 01-44-19 ~ 01-54-30 練習時間

! 2021/06/14 閱讀進度
jj 01-55-03 ~ 02-09-24 bluebird 套件介紹
    -> http://bluebirdjs.com/docs/getting-started.html 官網
    -> 業界裡面使用 bluebird 比自己包的人多
    -> 聽說早期 bluebird 的效能比 JS 原生的自己包 promise 來的好，現在狀況不確定
    -> 沒有教學文件，必須直接去看 API
    ll 01-59-05 安裝 npm install bluebird
    ll 02-01-10 建立 app-bluebird.js，將 app-promise.js 的內容複製貼上
    ll 02-01-45 一個有趣測試
      -> const Promise = require("bluebird");
      -> 像以上那樣引入 bluebird 之前和之後，再 console.log(Promise)，看看印出的結果是否不同

    -> fs 在某個 nodeJS 版本之後，是有 promise 版的
    -> 但如果沒有提供 promise 功能的函式，可以自己手動包裝成 promise 版本，或是使用 bluebird 來包裝成 promise 版本
    1. 安裝 bluebird
      -> npm install bluebird
    2. 在檔案中引入 bluebird
      -> const Promise = require("bluebird")
      -> const readFileBlueBird = Promise.promisify(fs.readFile)
    3. 使用 promise 化的函式
      -> readFileBlueBird("stock.txt","utf-8").then ...........

    ll 02-09-20 ~ 02-20-30  練習時間

    





*/
