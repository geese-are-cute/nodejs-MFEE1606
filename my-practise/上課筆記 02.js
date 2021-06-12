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



LL 00-48-50 ~ 01-09-30  Async and Await
建立 await.js 檔案
研究一下 Syntax Candy

ll Async and Await （老師筆記）
    ll  JS 
    ll  -> single thread
    ll  -> 大量的非同步
    ll  –> 依賴 callback
    ll    –> callback hell
    ll----> Promise (resolve, reject)
    ll  ----> then / catch
    ll  ----> 「希望」可以把程式寫得像同步程式，但他又是非同步、不阻塞 
  ll 00-59-30 - await 和沒有 await 的區別
  ll - 建立 await2.js - 立即執行函式（2021-06-11）


ll 01-09-30 ~ 01-13-10
課堂作業說明：將 APP-Promise 改成 Async/Await 版
  ll 注意：改成 Async/Await 版後就不會有 then 了
ll 建立 app-promise-await.js


ll 01-47-44 ~ 02-00-00
檢討剛剛的課堂-作業

ll 02-03-06 ~ 02-37-35   老師分享架伺服器和 AWS lambda 的資訊
    介紹 crontab 這個是 Linux 的例行性工作排程工具
    JJ 跟老師要 AWS 的講義
    找找看 Windows 有沒有類似的工具，就可以寫一個自動打卡工具了！！！

    ll 老師示範 AWS EC2(server) 起一個機器，起一個伺服器，這個是機器開多久，計費就多久
    價格等等
      serverless 無伺服器，以 AWS 為例，有一個服務 Lambda ，他的計費方式是按照實際使用量計費，還有每個月免費請求次數
    https://aws.amazon.com/tw/lambda/pricing/

      cloudwatch (Rules) 可以幫你做類似排程的工作，類似 crontab
      Lambda + cloudwatch (Rules)   超省錢的定時爬蟲程式           好棒棒！！！！！！

    ll 02-23-00 老師分享之前幫朋友架 Lambda 收集問卷資料的過程（投影片）
    ll 02-36-11 lambda 不支援 PHP，但是有支援 nodeJS
    ll azole.medium.com


ll 02-37-35 Windows 的排程工具：工作排程器

ll 02-38-20  交代回家作業
  需繳交：
  5/29 - 5/30 的上課筆記與心得，請盡量在週三 6/2 前 email 給小賴。
  jj XMLHttpRequest 的 promise 與 await 版本
  jj crawler 裡 readFile 的 promise 與 await 版本
  jj 用 moment 或是其他處理時間的 package 來加強 crawler 裡的時間處理

      進階挑戰題: 可選擇要不要做
      被同學發現 then 其實有第二個參數，而且還是用來處理 reject 的，同學問那錯誤到底是要在這邊處理，還是在我們一直說的 catch 處理呢？為了回答同學這個問題，只好增加這個挑戰題
      先閱讀文件 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
      題目在 https://github.com/azole/nodejs-mfee16/blob/master/basic/promise-reject.js
      繳交方式，以下二擇一：
      (1) 在自己的 repo 上傳 promise-reject.js，問題的答覆以註解的方式撰寫。
      (2) 補充進作業一，上課筆記中。
      有興趣的可以試試看，一樣做好的同學幫我在 excel 打個勾。

  其他:
  jj 複習 sql 語法，下週會用到
      create table, insert, update, delete, select, join
      table schema design (補充: 正規化)
  jj 練習 pug 樣板語法，下週會用到
  https://pugjs.org/language/attributes.html
  https://pug.vercel.app/


ll 02-42-55 介紹 Pug  
    jj Pug 很好用，以後會用到 Express 會用到
    ll 02-58-55  現在業界已經沒有人把 HTML 和 PHP 寫在一起了，這很難維護（十年前寫法）
*/
