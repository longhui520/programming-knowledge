# react
## react 绑定事件this三种方式
  1. 构造函数中使用bind函数 `this.handler=this`
  2. 使用实验性质的 public class fields 语法 `handle=()=>{}`
  3. 在jsx中使用箭头函数 `onClick=()=>{this.handler}`