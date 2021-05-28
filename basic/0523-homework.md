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
