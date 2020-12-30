# javascript 基础
## 函数式编程及其特点
  - 通过对面向对象和面向过程编程代码的拆分，将各个功能独立出来，从而达到功能独立，简单复用的目的
  1. 函数是一等公民
  2. 声明式
  3. 便于垃圾回收
  4. 数据不可变
  5. 无状态
  6. 无副作用
  - 纯函数:不依赖外部环境，没有副作用
##  null 和 undefiend
  -  null
  1. Number(null) == 0
  2. 函数的参数表示不是对象
  3. 最顶层的原型为null
  - undefiend
  1. Number(undefined) == NaN
  2. 函数参数未传入时
  3. 函数未返回值时
  4. 对象上未有的属性
  5. 变量未赋值时
## 判断变量类型
  1. typeof xxx ｜ typeof(xxx) 能区分除了null的基本类型，引用类型除函数外为'function' 其他为'object',
  null也为'object'
  2. xxx instanceof func 判断某个对象的原型是否在构造函数的原型链上
  3. Object.prototype.toString.call(xxx) 返回xxx对象的构造函数的字符串值
## this
  - 函数调用指向顶级对象，严格模式为undefined
  - 对象的方法调用指向对象
  - new 构造函数 方式指向生成的实例对象
  - 箭头函数 指向上层环境中的this对象的指向
  - bind call apply 可以改变this的指向


