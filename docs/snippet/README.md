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
      })
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


