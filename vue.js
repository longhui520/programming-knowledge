let depId = 0 
class Dep {
  static target
  id
  subs
  constructor(){
    this.subs = []
    this.id = depId++
    Dep.target = null
  }
  addsub(sub){
    this.subs.push(sub)
  }
  removesub(sub){
    const index = this.subs.indexOf(sub)
    if(index>-1){
      this.subs.splice(index,1)
    }
  }
  depend(){
    if(Dep.target){
      Dep.target.addDep(this)
    }
  }
  notify(){
    const subs = this.subs.slice()
    subs.sort((a,b)=>a.id-b.id)
    subs.forEach(item=>item.update())
  }
}
class Watch{
  constructor(data,key,callback){
    Dep.target = this
    this.value = data[key]
    this.callback = callback
    Dep.target = null
  }
  addDep(dep){
    dep.addsub(this)
  }
  update(){
    this.callback()
  }
}
function defineReactive(data,key,val){
  const dep = new Dep()
  Object.defineProperty(data,key,{
    configurable:true,
    enumerable:true,
    get(){
      dep.depend()
      return val
    },
    set(newValue){
      if(newValue!=val){
        val = newValue
        dep.notify()
      }
    }
  })
}
let data = {}
defineReactive(data,'a',1)
new Watch(data,'a',function(){
  console.log(data.a)
})
data.a = 2
data.a = 4
