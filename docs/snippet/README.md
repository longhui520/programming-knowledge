---
sidebar: auto
---
# 代码片段
## compose的几种实现
- 测试代码
```js
const app = {
  middleWares: [],
  use(middleWarwe) {
      this.middleWares.push(middleWarwe)
  }
}
app.use((next) => {
  console.log(1);
  next();
  console.log(2);
});
app.use((next) => {
  console.log(3);
  next();
  console.log(4);
});

app.use((next) => {
  console.log(5);
  next();
  console.log(6);
});
```
- koa 同步实现
```js
app.compose = function () {
  const middleWares = this.middleWares
  function dispatch(index) {
      if (index === middleWares.length) return;
      const middleWare = middleWares[index]
      return middleWare(() => dispatch(index + 1))
  }
  dispatch(0)
}
```
- koa 异步实现
```js
app.compose = function () {
  const middleWares = this.middleWares
  function dispatch(index) {
      if (index === middleWares.length) return Promise.resolve();
      const middleWare = middleWares[index]
      return Promise.resolve(middleWare(() => dispatch(index + 1)))
  }
  dispatch(0)
}
```
- reduce 同步
```js
app.compose = function(){
  const middleWares = this.middleWares
  return middleWares.reduceRight((a,b)=>()=>b(a),()=>{})()
}
```
- reduce 异步
```js
app.compose = function(){
  const middleWares = this.middleWares
  return Promise.resolve(middleWares.reduceRight((a,b)=>()=>Promise.resolve(b(a)),()=>Promise.resolve())())
}
```
- 新reduce 同步
```js
app.compose = function() {
  const middleWares = this.middleWares
  return middleWares.reduce((a, b) => arg => a(() => b(arg)))(() => {});
};
```
- 新reduce 异步
```js
app.compose = function() {
  const middleWares = this.middleWares
  return Promise.resolve(middleWares.reduce((a, b) => arg => Promise.resolve(a(() => b(arg))))(() => Promise.resolve()));
};
```
- async
```js
app.compose = function(){
  const middleWares = this.middleWares
  return (async ()=>{
    let next = ()=>Promise.resolve()
    function createNext(middleWare,oldNext){
        return async ()=>{
            return await middleWarwe(oldNext)
        }
    }
    for(let i=middleWarwes.length-1;i>=0;i--){
        next = createNext(middleWarwes[i],next)
    }
  })()
}
```
## word 文件预览
```
 <iframe height="100%" width="100%" src="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Flonghui520%2Fprogramming-knowledge%2Fmaster%2F1.doc" frameborder="0"></iframe>
```
- [参考](https://github.com/fight1991/word-excel-ppt-view/blob/master/preview.vue)
## 离开页面事件监听
```js
    window.onbeforeunload=function(e){     
    　　var e = window.event||e;  
    　　e.returnValue=("确定离开当前页面吗？");
    } 
```
## 排列和组合
- 排列
```js
function permute(arr){
  let len = arr.length;
  let cur = []
  let res = []
  let visited = {}
  function dfs(nth){
    if(nth === len){
        res.push(cur.slice())
        return;
    }
    for(let i= 0;i<len;i++){
        if(!visited[arr[i]]){
            visited[arr[i]] = 1
            cur.push(arr[i])
            dfs(nth+1)
            cur.pop()
            visited[arr[i]] = 0
        }
    }
  }
  dfs(0)
  return res
}
```
- 组合
```js
function subsets(arr){
  const len = arr.length
  const res = []
  const cur = []
  function dfs(index){
      res.push(cur.slice())
      for(let i=index;i<len;i++){
          cur.push(arr[i])
          dfs(i+1)
          cur.pop()
      }
  }
  dfs(0)
  return res
}
```
## 图片异常处理
```js
window.addEventListener('error',function(event){
  const target = event.target
  const tagName = target.tagName
  const times = Number(target.dataset.times) || 0
  const allTimes = 3
  if(tagName.toUpperCase() === 'IMG'){
    if(times >= allTimes){
      // 空白图片
      target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }else{
       target.dataset.times = times + 1;
       target.src = '错误提示的url';
    }
  }
})
```
## 防抖与节流
- 基础防抖
```js
function debounce(fn,delay){
  let timer = null
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}
```
- 可选是否立即执行的防抖
```js
function debonce(fn,delay,immediate){
  let timer = null
  return function(...args){
    clearTimeout(timer)
    if(immediate){
      const doNow = !timer
      timer = setTimeout(()=>{timer=null},delay)
      doNow?fn.apply(this,args):""
    }else{
      timer = setTimeout(()=>{
        fn.apply(this,args)
      },delay)
    }
  }
}
```
- 时间方式的节流
```js
function throttle(fn,delay){
  let prev = Date.now()
  return function(...args){
     const now = Date.now()
     if(now-prev>=delay){
      fn.apply(this,args)
      prev = Date.now()
     }
  }
}
```
- 定时器方式的节流
```js
function throttle(fn,delay){
  let timer = null
  return function(...args){
    if(timer){return}
    timer = setTimeout(()=>{
      fn.apply(this,args)
      timer=null
    },delay)
  }
}
```



## 模拟new
```js
function newFnc(fnc,...args){
  // 1.判断是否是函数
  if(typeof fnc !== 'function'){
    throw new Error("第一个参数必须是函数")
  }  
  // 2.创建一个空对象
  const obj = {}
  // 3.空对象的原型指向构造函数的原型对象
  obj.__proto__ = Object.create(fnc.prototype)
  // 4.绑定this执行构造函数
  const res = fnc.apply(obj,args)
  // 5.判断返回值是否为对象
  if(res !==null && (typeof res === 'object' || typeof res === 'function')){
    return res
  }else{
    return obj
  }

}
```

## 深度比较
```js

  function deepCompare(x, y) {
      var i, l, leftChain, rightChain;
      function compare2Objects(x, y) {
          var p;
          if (x === y) {
            return true;
          }
          if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
          }
          if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
            return x.toString() === y.toString();
          }
          if (!(x instanceof Object && y instanceof Object)) {
            return false;
          }
          if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
            return false;
          }
          if (x.constructor !== y.constructor) {
            return false;
          }
          if (x.prototype !== y.prototype) {
            return false;
          }
          if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
            return false;
          }
          for (p in y) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
          }
          for (p in x) {
              if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                  return false;
              } else if (typeof y[p] !== typeof x[p]) {
                  return false;
              }
              switch (typeof(x[p])) {
                  case 'object':
                  case 'function':

                      leftChain.push(x);
                      rightChain.push(y);

                      if (!compare2Objects(x[p], y[p])) {
                          return false;
                      }

                      leftChain.pop();
                      rightChain.pop();
                      break;

                  default:
                      if (x[p] !== y[p]) {
                          return false;
                      }
                      break;
              }
          }
          return true;
      }

      if (arguments.length < 1) {
          return true; 
      }

      for (i = 1, l = arguments.length; i < l; i++) {
          leftChain = []; 
          rightChain = [];
          if (!compare2Objects(arguments[0], arguments[i])) {
              return false;
          }
      }
      return true;
  }
```
## 简易Promise
```js
function MyPromise(fn){
  this.cbs = []
  const resolve = (value)=>{
    this.data = value
    this.cbs.forEach(cb=>cb(value))
  }
  return fn(resolve)
}
MyPromise.prototype.then = function(onResolved){
  return new MyPromise((resolve)=>{
    this.cbs.push(value=>{
      const res = onResolved(value)
      if(res instanceof MyPromise){
        res.then(resolve)
      }else{
        resolve(res)
      }
    })
  })
}
const a = new Promise((resolve)=>{
  resolve(111)
})
a.then(value=>console.log(value))
```