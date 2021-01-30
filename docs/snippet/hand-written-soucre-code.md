# 手写源码
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