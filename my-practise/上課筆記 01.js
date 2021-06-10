// 2021-05-30 上午 NodeJS

/* 

LL 00 05 04  
callback 不一定是非同步，但是你要做成非同步幾乎都是要使用 callback

LL 00 07 33  
吊軌： JS 是 Non Blocking 但是我們有時候又需要 blocking

LL 00 08 30 ~ 00 23 17 
以建立帳號（查詢資料庫、檢查帳號是否重複、建立帳號）為例，示範三種做法(假code) 1 callback 2 promise 3 PHP
講解同步、非同步的差別


LL 00-26-11 ~ 00-37-54
Javascript 和 PHP（C語言系列）的物件導向很不一樣，老師大概帶到一下
JavaScript Prototype
最後講到學習語言的建議：先專精一門語言

LL 00-37-54 ~ 00-42-00
閒聊

LL 00-42-00
解釋 Promise 物件是什麼
JJ Promise 是一個表示非同步運算的 ”最終“ “完成或失敗” 的 “物件”
00-54-05 ~ 00-58-50
命名變數/寫程式習慣 + 閒聊 

00-59-25 ~ 01-05-05
上課作業說明：
把寫成 basic/index.html 裡面一段寫成 Promise 的形式，新的檔案是 xhr-promise.html

KK https://medium.com/itsems-frontend/javascript-sync-async-22e75e1ca1dc
KK 一次搞懂同步與非同步的一切(不錯的參考文章)

01-05-05 ~ 01-35-03
同學們練習時間，可跳過

LL 01-35-03 ~ 01-44-10
把寫成 basic/index.html 裡面一段寫成 Promise 的形式 >>> 老師的解答
    JJ https://javascript.info/xmlhttprequest 
    KK 這個連結是在講 XMLhttpRequest 我覺得講的還不錯 


LL 01-46-01 ~
爬蟲程式
  有關 require() 的補充資訊
  https://www.w3schools.com/nodejs/nodejs_modules.asp
  https://ithelp.ithome.com.tw/articles/10184564

  axios
    .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      method: "get", 
      params: {
        response: "json",
        date: "20210607",
        stockNo: "2330",
      }, 
    })...........

  以上這段程式碼 params 的寫法可以參考以下 axios 官方文件
  https://axios-http.com/docs/req_config   

  
  LL 01-50-50 
  ? 要修改一段程式結果不慎刪掉另一段程式，造成災難，這叫 side effect
  因為直接在爬蟲程式裡修改股票代碼等參數有造成 side effect 的危險
  所以要把那些參數寫在外部的設定檔(stock.txt)
  試著從 stock.txt 讀股票代碼進來

  LL 01-52-07 關於 Node JS 的 Module/library 的引入方法

  這個是 Node JS 的文件
  https://nodejs.org/dist/latest-v14.x/docs/api/index.html

  LL 01-56-24 使用 fs 讀檔

  JJ 02-01-35 ~ 02-10-00
  JJ fs.readFile() 和 axios 是同時做還是接續做？同步/非同步概念複習

  LL 02-14-00 
  交代隨堂練習：把 app.js 改成 promise chain 版本





*/
