## 编写一个方法，该方法接收两个参数，分别为 k 和 一个无序的纯数字数组。该方法在执行后，会返回数组中第 k 大的数字。特别注意，如果数组中，有两位数值一样的数字，同数值数字排名并列。如 [3,1,3,2,5,4,5] 中，第 1 大的数字为 5，第2大的数字为 4，第5大的数字为 1。
```js
function getMaxK(k,arr){
  if(k<=0){
    throw new Error('k 必须是大于零的整数')
  }
  function swap(arr,i,j){
    const temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
  }
  for(let i=0;i<arr.length;i++){
    let max = i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]>arr[max]){
        max = j
      }
    }
    if(i!=0&&arr[max]!=arr[i-1]){
      k--
    }
    if(k==1){
      return arr[max]
    }
    swap(arr,i,max)
  }
}
```
## __proto__ 和 prototype 之前有什么关系？
__proto__是实例对象的原型 prototype 是构造函数的原型，当实例是构造函数 new出来的，两者相等
## .call(), .apply() .bind() 的区别和作用？bind 方法如何来实现？
call 绑定this为第一个参数，并且传入call除了第一个参数外的所有其他参数调用函数
apply与call效果相同，只是传入的是apply的第二个参数的数组解构值调用函数
