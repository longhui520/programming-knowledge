## 错误
- 监控错误
  - js 运行错误
    try catch winodw.onerror
  - 资源加载错误
    object.onerror performance.getEntries 捕获型错误
  - 跨域脚本错误
    - 不能获取错误实际信息
    - crossorigin 允许跨域 响应头 access-control-allow-orgin:*
- 错误上报
  - ajax 通信
  - image 通信（new Image).src
## 浏览器
  - 渲染机制 js运行机制 页面性能 错误监控
### 渲染机制
  1. 什么好似doctype
  2. 有哪些文档类型
    html5 html4.01 stict html4.01 transitional
## js运行机制
  1. js 单线程
  2. 异步任务
  3. 事件循环
  4. 宏任务与微任务
## 页面优化
  1. 合并请求，压缩资源
  2. 非核心代码，异步加载
  3. 浏览器缓存
  4. cdn
  5. dns 预解析
  `<meta http-equiv="x-dns-prefetch-control" content="on"` 强制打开a标签预解析
  `<link rel="dns-prefetch" href="//www.baidu.com"`
  6. 构建优化

  ## 面试题
  1. 浏览器是如何渲染页面的？
  - 构建dom树，构建cssom树，两者合并生成 renderTree layout布局，绘制，渲染。
  - [参考文章](https://mp.weixin.qq.com/s?__biz=MzI1NTcxOTQ1Nw==&mid=2247488098&idx=1&sn=4b3aa76c0fa88b4635e5600c527d52c9&chksm=ea30f32cdd477a3a70311e854688a666122403d75d9cc946abf70a47785be6cf93414be51e1c&scene=0&xtrack=1&key=356b05d5108fb12a499c4c9d55edba47f0a0eb915248395f4b3af47ac4d968421a6fe4dbd75024d744f4d2d8927603bdda21aa9e7429131935bd2d2216c53960ecf84236e553b1cf09c29e86f398b165&ascene=1&uin=MjA4MDcyMTA0MQ%3D%3D&devicetype=Windows+10&version=62080079&lang=zh_CN&exportkey=Ayry5ifA8LGhzXnf7bLqTGE%3D&pass_ticket=lFg1lJpe%2Fw9WCgSfc0Ljwx%2BqkZid1gl1oySrwMHl%2FVUwrQh6P5Jdqn9joOpQ0cvv)
  2. 请解释写CSS3 flex(弹性盒布局模型)，以及应用场景。
  - 弹性盒模型是具有主轴和交叉轴可伸缩的二维布局方案
  - 可用于自适应，响应式布局，垂直居中，水平居中
  3. 用正则表达式实现分隔数字 “123456789” 已 “，”号分隔开
  - `"123456789".replace(/\B(?=(?:\d{3}\b))/,",")`

