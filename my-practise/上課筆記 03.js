//kk 2021/06/05 上午

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

! 2021/06/15 閱讀進度
    ll 02-20-30 ~ 02-22-43  再說一次，不要隨便 update npm package 的原因 npm install / npm update

    ll 02-22-43 ~ 02-30-10
      -> bluebird 功能就不一一講了，自己需要再去看
      -> bluebird 的功能比原生 JS Promise 還要多，其本上可以完全取代了
      ll 02-25-27 Promise 雖然是 JS 的物件，但他其實是個規範
      ll 02-26-30 ~ 02-30-10 bluebird 除了可以把函式包成 promise 版本之外，也可以把一整個 module 的函式全包成 promise 版本。
          promisifyAll

ll 02-32-55 Laravel 很慢，但是為什麼還是推薦這個框架？
    -> 需要建立非常快網站的機會不多
    -> 通用，接案神器，老師三天可以做完一個網站

ll 02-37-15 Promise介紹 這裡正式結束

*/

//kk  2021/06/05 下午
/* 
這節會講到資料庫和正規化

ll 00-02-55 ~ 00-03-30 大概提到 websocket

ll 00-03-30 ~ 00-53-14  資料庫正規化
    -> 00-04-15 why 降低 ”重複性“ 和避免 ”更新異常“？
    -> 00-05-41 給大家一個概念
        -> load balencer 復載均衡器: 有多個伺服器的話，可以使用 load balencer 
            -> nginx
            -> 講到一半提到 aws 和他的方便性
        -> scale up / scale out
            -> scale up 升級一台機器（伺服器）以提升整體效能
            -> scale out 多增加一台機器（伺服器）以提升整體效能
            -> 一般來說，比較鼓勵 scale out 而非 scale up，因為：一台壞了還有別台可以用（容錯能力高）
        -> 我們有 3 個伺服器，現在來了一個 Request，誰處理？ Load Balencer 決定
            -> Load Balencer 的演算法決定哪個伺服器處理
                -> 依照順序分配
                -> 依照 request 地區來源分配給不同地區server
        -> 伺服器可以擴充多台，資料庫也可以嗎？
            -> 資料庫也可以擴充多台，但是很困難（讓多個資料庫的資料一致很困難）
            -> 伺服器擴充多台必須盡可能做到 stateless --- state、stateless 意思是什麼？
                -> 00-12-05 ~ 00-13-10 PHP 以上傳圖片為例
                -> 00-13-10 以登入session 為例解釋
                -> 我問了一個岔題的問題
                ll 00-16-00 應盡量將伺服器裡的狀態 state 移到別的地方
                    -> redis. database in memeory
                    -> memecache
            ll 00-18-30 資料庫的無狀態更難處理 > 所以一般來說只會有一個資料庫
                -> 兩個資料庫之間的內容要如何 sync？不是不可能，但很難
                ll 00-20-20 資料庫很難 scale out，相較於 web server困難很多，成本較高（但不是不可能）
                    -> 因為只有一台資料庫，所以他的資源有限，必須盡可能節省使用他的資源
                    jj 透過正規化來降低重複性、避免更新異常，可以節省資料庫資源
    ll 00-22-25 投影片 - “正規化的規則”
        -> 實務上正規化做到 3 或 BCNF 就差不多了

    ll 00-23-53 投影片 - 正規化步驟
        -> 此圖表可當做面試的小抄

    ll 00-24-24 投影片 - 第一正規化
        kk 00-25-27 基元值就是一個欄位（資料格 ）只能存一個值

    jj 00-27-26 投影片 - 第一正規化的規則

    ll 00-29-38 投影片 - 第二正規化
        jj 00-30-58 一個資料表可以有多個 PK (Primary Key)

    ll 00-31-37 投影片 - 第二正規化的規則
        jj 不允許 “部分功能相依”
    
        ! 2021/06/16 學習記錄

    ll 00-34-17 投影片 - 第三正規化的規則 
        jj 不允許 ”遞移相依“  / ”間接相依“

    ll 00-35-53 注意：實務上不一定會嚴格遵守正規化的規範

    ll 00-36-30 投影片 - 正規化的代價
        -> 查詢多個關聯資料表：在 SQL 是使用 JOIN 指令，效率較差 
        -> 要不要正規化？見仁見智

    ll 00-38-07 投影片 - 反正規化 

    ll 00-39-09 設計資料庫時要思考的：
        -> 讀多寫少？ ex. SELECT 以及各種 query
        -> 寫多讀少？ ex. INSERT, UPDATE, DELETE etc.
        -> 大部分網站（電商、官網）是讀多寫少
            -> 舉例電商網站：讀多寫少
                -> 瀏覽商品：讀多寫少
                -> 下訂單：一半一半吧？
        -> 寫多讀少的網站，舉例：
            -> Google Map App 持續不斷記錄你的軌跡（寫多讀少）
            -> 有些網站會記錄你的瀏覽歷程，類似 GA（寫多讀少）
        -> 讀多寫少 vs 寫多讀少：設計資料庫方式大不同
        ll 00-44-28 舉例：幫網站文章加上 tag 分類的功能，要如何設計資料庫來達成？
            -> 解釋不同資料庫設計方式（正規化、非正規化）及優缺點
        ll 00-53-14 正規化講到這裡

jj 00-53-30 ~  將前的爬蟲程式改寫成可以將資料存入資料庫
    -> 00-54-01 將 app.js 改寫成 ”把爬回來的資料存進資料庫 DB“
    *  建立新的檔案 app-0616.js
    -> 00-56-50 ~ 01-00-00 討論資料庫如何設計；各組私下討論；說明作業方式
    ll 需求：要可以存不同股票的股價資料
    ll 資料來源 https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210523&stockNo=2610
    -> 01-00-00 ~ 01-31-00 各組私下討論 

    ll 01-31-00檢討各組寫出的資料表
        -> 第一組 overdesign
        -> 第二組 和老師想象的差不多
        ll 01-46-50 第五組（我們組）一下子就講完了
        -> 最後老師使用了第二組的資料表格式來建資料庫

    ll 01-51-55 介紹 phpadmin 以外的資料庫軟體：php adminer
        -> phpadmin 太胖了，但是 PHP adminer 只有一個檔案！

    ll 01-54-20 建立新資料庫，選擇編碼格式 - utf8mb4_unicode_ci（建議使用這個格式）
        ll 01-55-45 挖掘 API 的方式： Chrome DevTool 的 network 視窗
        ll 01-57-25 開始建立資料庫的欄位 .....
        ll 02-00-40 delta 代表兩數相差的意思
! 2021/06/17 
        jj 02-04-58 問題：
        ll 要如何透過 Git 和同事協作資料庫？ 不可以將表格資料上傳 Git，但是表格結構可以上傳。
        ll Migration 表格的新建/表格的變更
        ll 老師展示 laravel 有關 migration 的套件
        kk 這裡沒有聽得很懂
        ll 02-15-05 老師建立了練習用的資料表結構 stock.sql，讓我們下載用 



*/ 
