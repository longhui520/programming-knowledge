# DOM 基础
## DOM 常用api
- 常用DOM选择器
```js
document.getElementById(id)
document.getElementByClassName(className)
document.getElementByName(name)
document.getQuerySelector(selector)
document.getQuerySelectorAll(selector)
```
- DOM 节点的创建，插入，删除
```js
document.createElement(tagName)
document.createText(text)
parentNode.appendChild(childNode)
parentNode.removeChild(childNode)
```
## DOM 事件
### DOM2 事件
- 事件流程：捕获阶段，事件处理阶段，事件冒泡阶段
- 绑定事件语法：`eventNode.addEventListener(eventName,eventHandle,options|useCapture)`
- 事件对象
  1. event.target 为事件触发的dom节点
  2. event.currentTarget 绑定事件的dom节点
  3. event.stopPropagation() 阻止事件冒泡
  4. evnet.preventDefault() 阻止默认行为
  5. options 选项时，passive:true 可以直接允许浏览器执行默认行为
- 鼠标事件顺序
 1. onmouseenter,onmousedown,foucus,onmouseup,onclick
- 以下事件不冒泡
  - onblur onfocus onmouseenter onmouseleave
- 以下事件会冒泡
  - onmouseover onmouseout
