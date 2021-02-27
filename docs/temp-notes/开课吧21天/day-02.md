1. 如何中断ajax请求
xhr.abort 方法 axios cancelToken
2. 什么是同步？什么是异步？
同步是在主线程上执行任务，前一个任务执行完毕，才能执行下一个任务
异步不在主线程，而是放入异步度队列，等主线程执行完毕后，才开始通知主线程，执行回掉
3. 什么是宏任务？什么是微任务？
宏任务 定时器，循环定时器，脚本，ui渲染，ui事件，postMeaage
微任务 Promise MutationObserver 
微任务在同步任务执行完毕后，立刻执行完微任务队列，然后执行宏任务队列。
4. 什么是回调？回调使用存在什么问题？
提供给未来可能调用的函数，可能存在回调地狱
5. Promise.allSettled 了解吗？动手实现一下 Promise.allSettled
接受一个Promise数组，返回结果也是一个promise对象,无论成功与否都会返回值，
```js
Promise.allSettled = function(arr){
  return new Promise((resolve)=>{
    const res = []
    const n = arr.length
    const j=0
    for(let i=0;i<n;i++){
      arr[i].then(data=>{
        res.push({status:'success',value:data})
        j++
        if(j==n){
          resolve(res)
        }
      ).catch(err=>{
        res.push({status:'error',value:error})
        j++
        if(j==n){
          resolve(res)
        }
      })
    }
  })
  
}
```
