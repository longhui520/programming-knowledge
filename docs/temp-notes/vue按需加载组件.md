# vue按需加载组件的四种方式
1. 函数式
```js
Vue.component('async-comp',function(resolve,reject){
  resove({name:'async-comp'})
})
```
2. webpack
```js
Vue.component('async-comp',function(resolve){
 require(['./async-comp.vue'], resolve)
})
```
3. import
```js
const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
const Foo = () => import('./Foo.vue')
```
4. webpck chunks
```js
const Province = r => require.ensure([], () => r(require('@/components/Province.vue')), 'chunkname1')
const Segment = r => require.ensure([], () => r(require('@/components/Segment.vue')), 'chunkname1')
```
[参考文章](https://blog.csdn.net/qq_31965515/article/details/80092849)