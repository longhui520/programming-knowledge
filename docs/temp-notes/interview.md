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

