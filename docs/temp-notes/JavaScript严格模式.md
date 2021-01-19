# JavaScript 严格模式
- 严格模式是在 JavaScript 1.8.5(ECMAScript5)中新增
- 开启严格模式后代码将在严格模式下执行
## 如何启用
在脚本或函数的开头的开头添加`use strict;`
## 严格模式规则
 1. 变量或函数必须声明后才能使用
 2. 变量或函数声明后不会添加到顶级对象(window)上
 3. 不能使用 delete 删除变量
 4. 不能使用 delete 删除对象上不可配置的属性
 5. 不能使用保留的关键字作为变量名
 implements interface let package private protected public static yeild
 6. 对象字面量不能有相同的属性
 7. parseInt解析前导0认为10进制
 8. eval arguments 不能被修改，声明为变量。
 9. 不能读取 arguments.callee arguments.caller
 10. 不能使用with
 11. 函数不能有相同的参数
 12. 不能使用前缀 0 表示八进制数
 13. 语句块中不能声明函数
 14. this 不指向 window
 15. eval 中声明的变量外部无法使用
 16. 不能对只读属性复值