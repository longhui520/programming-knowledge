// setTimeout 实现  setInterval

function setInterval2(fn,delay){
  var list = []
  var _fn = ()=>{
    list.push(setTimeout(_fn,delay))
  }
  list.push(setTimeout(_fn,delay))
  return list
}
function clearInterval2(list){
  list.forEach(item => {
    clearTimeout(item)
  });
}
// 手写bind 
Function.prototype.mybind = function(ctx=globalThis){
  const fn = this
  const args1 = [...arguments].slice(1)
  const result = function(){
    const args2 = args1.concat(...arguments)
    const context = this instanceof result?this:ctx
    return fn.apply(context,args2)
  }
  result.prototype = Object.create(fn.prototype)
  return result
}
Function.prototype.myCall = function(ctx=globalThis){
  ctx.fn = this
  const args = [...arguments].slice(1)
  const result = ctx.fn(args)
  delete ctx.fn
  return result
}
Function.prototype.myApply = function(ctx=globalThis){
  ctx.fn = this
  const args = [...arguments][1]||[]
  const result = ctx.fn(...args)
  delete ctx.fn
  return result
}
function myNew(func,...args){
  if(typeof func!== 'function'){
    throw '第一个参数必须是方法体'
  }
  const obj = {}
  obj.__proto__ = Object.create(func.prototype)
  let result = func.apply(obj,args)
  const isObject = typeof result === 'object' && result !=null
  const isFunction = typeof result === 'function' 
  return isObject || isFunction ?result:obj
}

function debounce(fn,delay){
  let timer = null
  return function(){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn(...this.arguments)
    },delay)
  }
}
function throttle(fn,delay){
  let timer = null
  return function(){
    if(timer){
      return 
    }
    timer = setTimeout(()=>{
      fn(...this.arguments)
      timer = null
    },delay)
  }
}
