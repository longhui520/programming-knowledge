---
sidebar: auto
---
# 前端基础
## HTML
### HTML 是什么
HTML(HyperText Markup Language)不是一门标记语言，而是一种告诉浏览器如何组织页面的标记语言。
::: tip 提示
本文无特殊说明，HTML的版本均是HTML5。
:::
### HTML 的特点
- 标签不区分大小写
- 属性名不区分大写
- 单标签可以不闭合（推荐闭合）
### HTML 文档
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>标题</title>
  </head>
  <body>
  </body>
</html>
```
上面便是一个基本的html文档，分析如下
- `<!DOCTYPE html>`:文档类型声明
- `<html></html>`:文档的根元素
- `<head></head>`:包含了页面不显示的内容，用来定义标题，页面字符集，引入CSS和JavaScript等
- `<body></body>`:文档的正文内容，文本，图片，视频，音频等
### HTML 空格
默认情况下，HTML会将多个连续的空白字符合并成一个。
### HTML 特殊字符
在HTML 中，有些是特殊字符，它们是标签语法的一部分，当我们用在文本中时，
为了避免冲突需要用这些字符的转义字符。
|原义字符|转义字符|
|:---:|:---:|
|<|&lt;|
|>|&gt;|
|"|&quot;|
|'|&apos|
|&|&amp;|
### HTML 注释
可以使用特殊的记号`<!--`和`-->`将一段HTML中的内容置为注释，例如：
```html
<p>我没被注释</p>
<!--<p>我被注释了</p>-->
```
### PWA
渐进式网络应用（PWA）是谷歌在 2015 年底提出的概念。基本上算是 Web 应用程序，但在外观和感觉上与原生 App 类似。支持 PWA 的网站可以提供脱机工作、推送通知和设备硬件访问等功能。
- 优点
  - 更小更快
  - 响应式界面
  - 无需更新
  - 高性价比
  - SEO优势
  - 可离线
  - 安全性
  - 推送通知
  - 不需要应用商店
  - 不需要安装
- 缺点
  - 对系统功能的访问权限低
  - 没有审核机制
## CSS
### CSS是什么
CSS 是指层叠样式表(Cascading Style Sheets)
### CSS特点
- 层叠性
作用于同一个元素的同一个样式，后面的覆盖前面的样式
- 继承性
某些样式可以继承父级元素的样式，例如 字体颜色，大小，行高。
- 优先级
!important>行内样式>Id选择器>类选择器=属性选择器=伪类选择器>标签选择器=伪元素选择器>默认样式
### DIV+CSS 布局的优缺点
优点
1. 结构与样式分离，易于维护
2. 对SEO搜索引擎更加友好，HTML5的语义化标签也是如此
缺点
1. 不同浏览器对Web 标准的默认值不同，容易出现兼容性问题
### a链接后hover样式失效
样式的先后顺序应该遵循`a:link a:visited a:hover a:active`的顺序
### 脱离文档流
文档流:从上到下，从左到右一次排列元素
脱离文档流:脱离文档流的元素，将不再在文档流占据空间，而是漂浮在文档上空
脱离文档流的2种方式
- `float:left/right` 
- `position:fixed/absolute`
### 回流/重排和重绘
  当渲染树的元素的位置，尺寸，布局，显示隐藏改变而需要重新构建，这个构成叫重排
  何时发生重排
  - 添加或删除可见的DOM元素
  - 元素的位置发生变化
  - 元素的尺寸发生变化
  - 内容发生变化
  - 激活伪类
  - 切换类名
  - 页面初始化
  - 浏览器resize
  - 计算offsetWidth 和 OffsetHeight
  当渲染树种的元更新新属性，这些属性只是影响元素的外观，风格等 这个过程叫重绘。
  重排和重绘
  重排一定引起重绘，重绘不一定会重排
### 块级格式化上下文（BFC）
BFC 布局规则 是页面上一个独立隔离的容器，容器内的元素不会影响容器外的元素，而且容器外的元素不会影响容器内
BFC的特点
- BFC里的子元素垂直排列
- BFC里的子元素的左边与包括块元素的左边接触
- BFC里的浮动元素计算宽高
- BFC区域不会与浮动元素重叠（用来清除浮动）
- 同一个BFC里的子元素margin垂直方向上合并
BFC触发条件
- 根元素
- float 属性不为none
- display 属性为 inline-block table-cell，inline-flex，flex
- position属性不为 static，relactive
- overflow 不为 visiable
### 层叠上下文
层叠上下文（stacking context）是HTML中的一个三维的概念，每个元素的位置是三维的，分别是平面画布上的
X轴，Y轴，以及表示层叠的Z轴
触发条件
- 根元素
- position 不为static，z-index不为auto
- CSS3属性
  - flex z-index 不为auto
  - transform 不为none
  - opacity 小于1
  - filter 不为 none
  - will-change
  - -webkit-overflow-scroll 属性为touch
  - mix-blend-mode
  - perspectie 不为 normal
七层层叠等级
`z-index>0,z-index=0|auto,行内元素，浮动元素 块级元素，z-index<0,背景和边框`
同一个上下文中按照上面顺序显示，同一个层次则后面覆盖前面，不同层则安装上级层叠上下文比较。



## JavaScript
### JavaScript 基本类型
number,string,boolean,null,undefined,Symbol,bigInt
- `null` 和 `undefined` 的区别
  - `null`
  1. `Number(null)` 得到 0
  2. 作为函数的参数，表示该参数不是对象
  3. 作为原型链的终点
  - `undefined`
  1. `Number(undefined)` 得到 `NaN`
  2. 变量已声明但是没有赋值时为 `undefined`
  3. 调用函数时，未传入参数时，改值为 `undefined`
  4. 访问对象的属性不存时，值为 `undefined`
  5. 函数没有返回值，默认返回 `undefined`
### JavaScript 引用类型
Function，Object，Array，Date，RegExp,Map,Set,WeakMap,WeakSet
### 类型判断
  - typeof 判断基础类型，不能精准判断引用类型
  - instanceof 判断某个对象的原型是否是这个类型的原型
  - Object.prototype.toString.call(obj) 基础类型和引用类型都能判断
### this的指向
this总是指向调用函数的对象
  - 普通函数调用时，严格模式指向undefined,普通模式指向全局变量
  - 对象的方法调用时，指向对象
  - 箭头函数调用时，指向函数定义的上下文中的this
  - 被call，apply ，bind 函数转换后的函数指向绑定的对象
  - 实例化构造函数时，指向实例对象 
### 执行上下文
JavaScript 中有三种执行上下文，执行上文中包含 活动对象，this ，作用域链
- 全局执行上下文
- 函数执行上下文
- eval 函数执行上下文
### 执行栈
执行栈，也就是在其它编程语言中所说的 “调用栈”，是一种拥有 LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文。
### 函数式编程
- 函数式编程特点
1. 函数优先
2. 便于垃圾回收
3. 数据不可变
4. 无状态
5. 无副作用
### JavaScript 模块化
- CommonJS AMD CMD UMD ES6 Module
## DOM
### DOM 操作常用API 
- DOM元素增删改查
  - document.createElement(tag) 根据标签名创建一个元素
  - Node.innterHTML= html 重新设置节点的html
  - Node.insertBefore(node) 在当前节点前插入一个元素
  - Node.appendChild(node) 将一个子节点追加到子节点末尾
  - Node.removeChild(node) 移除某个子节点
  - document.querySelector(selectors) 获取某个匹配选择器的第一个DOM元素
  - document.querySelectorAll(selectors) 获取某个匹配选择器的所有DOM元素
  - document.getElementById(id) 根据id获取DOM元素
  - document.getElementsByClassName(className) 根据类名获取DOM元素
  - document.getElementsByTagName(tag) 根据标签名获取DOM元素
  - document.getElementsByName(name) 根据name获取DOM元素
### DOM 事件
- `DOM 2` 事件流的三个阶段
  - 事件捕获阶段
  - 事件目标阶段
  - 事件冒泡阶段
- addEventListener
  语法：`target.addEventListener(type,listener,options/useCapture)`
  - `type` 事件类型
  - `listener` 事件回调函数
  - `options` 一个指定`listener`属性的可选选项；
  `capture`(事件是否在捕获阶段执行)；
  `once`(事件回调函数只执行一次)；
  `passive`(是否默认执行默认动作，为true时，调用preventDefault()也不能阻止)
  - `event.stopPropagation` 阻止事件冒泡
  - `event.preventDefault`  阻止默认事件
- mouseover 和 mouseenter 区别
  - mouseover  鼠标移入本身或子元素上都会触发
  - mouseenter 鼠标移入到本身元素才会触发
- 小知识
  - 并不是所有的元素都会冒泡，`blur focus mouseenter mouseleave`都不会冒泡
### DOM 元素的位置和大小
  - client 系列
    - clientHeight 元素可视区域的高度，不包含边框，滚动条的高度
    - clientWidth  元素可视区域的宽度，不包含边框，滚动条的宽度
    - clientTop    元素的上边框的高度
    - clientLeft   元素的左边框的宽度
    - 对于 inline   元素都为0
  - offset 系列
    - offsetHeight 元素可视区域的高度，包含边框，滚动条的高度
    - offsetWidth  元素可视区域的宽度，包含边框，滚动条的高度
    - offsetTop    元素顶部距离最近定位父元素顶部的距离,和有没有滚动条没有关
    - offsetLeft   元素顶部距离最近定位父元素左边的距离,和有没有滚动条没有关
  - scroll 系列
    - scrollHeight 元素全部的高度，包含边框，滚动条，隐藏的高度
    - scrollWidth  元素全部的宽度，包含边框，滚动条，隐藏的宽度
    - scrollTop    元素可视区域顶部到元素的顶部的高度
    - scrollLeft   元素可视区域左侧到元素的左侧的宽度
### DOM元素拖拽
  - 通过 mousedown,mouseup,mousemove 实现
  - 通过 HTML5 Drag 和 Drop 实现