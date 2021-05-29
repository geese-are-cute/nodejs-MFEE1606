(1) 請問下列程式執行後的結果為何？為什麼？

```js
console.log("start");

(function () {
  console.log("IIFE");
  setTimeout(function () {
    console.log("Timeout");
  }, 1000);
})();

console.log("end");
```

```js
/*答：以上程式碼執行結果如下：
start
IIFE
end
undefined
Timout

所有的 console.log 指令都按照排列順序執行。
除了 console.log("Timeout") 以外，因為setTimeout 的關係使得 console.log("Timeout") 至少延遲一秒後才執行。
undefined 為什麼出現我不知道。
*/
```

(2) 請問下列程式執行的結果為何？為什麼？

```js
console.log("start");

(function () {
  console.log("IIFE");
  setTimeout(function () {
    console.log("Timeout");
  }, 0);
})();

console.log("end");
```

```js
/* 
答：以上程式碼執行結果如下：

start
IIFE
end
undefined
Timeout

所有的 console.log 指令都按照排列順序執行。
console.log("Timeout") 是例外。 
因為 setTimeout 其實是 webAPI 的函數，當呼叫他時，他是交給 webAPI 處理（不是 JS 的 callstack）。 
等處理完成之後，console.log("Timeout") 會被排入 Task Queque，然後 Event loop 查看 Call Stack 是空的，才會將 console.log("Timeout") 排入 Call Stack 執行。 
這就是為什麼雖然 setTimeout 的延遲時間是 0，但 console.log("Timeout") 還是在 console.log("end") 之後執行。
undefined 為什麼出現我不知道。
*/
```

(3) 請問下列程式執行的結果為何？為什麼？

```js
const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  bar();
  baz();
};

foo();
```

```
所有的 console.log 指令都按照排列順序被呼叫執行了。
```

(4) 請問下列程式執行的結果為何？為什麼？

```js
const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  baz();
};

foo();
```

```
各個的 console.log 指令都按照排列順序被呼叫執行，但是 console.log("bar") 是例外。
原因和第二題一樣。
undefined 為什麼出現我不知道，但是我發現這個 undefined 都是出現在被 setTimeout 的 callback function 執行之前。
```








## 作業

1. https://www.youtube.com/watch?v=8aGhZQkoFbQ
about 20mins

寫一篇筆記: 網址 or 內容寄給我

解釋一下自己對講者所分享的內容的理解？
試著用自己的話來解釋什麼是 event loop?

Deadline: 5/26 (三) 之前寄給我

3. [quiz.md](https://github.com/azole/nodejs-mfee16/blob/master/basic/quiz.md)


2. 為自己的 crawler 建立 package.json 並且安裝 axios

```bash
# 在 crawler 目錄底下
npm init
npm install axios
```

https://github.com/azole/nodejs-mfee16/tree/master/crawler

Deadline: 5/28 (五)


4. (optional) 

自己讀 axios 的文件練習拿到交易所的資料，實作在 app.js，推上 github


5. (optional) 挑戰題，寫完後可以推到 github 上，就放到專案 basic 檔案夾裡，檔名請用 fibonacci.js，謝謝。

費波納數列(fibonacci): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...

其規則為:

```javascript=
F(0) = 0;
F(1) = 1;
F(n) = F(n-1) + F(n-2)
```

以下程式實作了費波納數列，但其執行加法運算的次數為 177 次，請問可否讓運算次數大幅減少？

```javascript=

// 負責計數執行次數
let counter = 0;

let fibonacci = function (n) {
  counter++;
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("fib(10) = " + fibonacci(10)); // 55
console.log("counter: " + counter); // 177
```
