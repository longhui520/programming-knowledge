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
## JavaScript
### JavaScript 基本类型
number,string,boolean,null,undefined,Symbol,bigInt
### JavaScript 引用类型
Function，Object，Array，Date，RegExp,Map,Set,WeakMap,WeakSet
