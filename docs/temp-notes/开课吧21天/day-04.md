1. React 的组件间通信都有哪些形式？
- 父传子：在React中，父组件调用子组件时把子组件需要的数据添加在子组件的属性上，子组件通过props属性接收。
- 子传父：React是单向数据流，数据永远只能是自顶向下进行传递。当子组件有些数据需要向父组件通信时，需要在父组件中定义回回调，将回调传递给子组件，子组件调用父组件的回调方法进行通信。
2. React 中如何实现路由懒加载？
React.lazy React.Suspense
```js
import {Route} from "react-router-dom";        
import React,{Suspense} from 'react';        
const HomeView = React.lazy(()=>import("./home"));        
function App(){           
  return 
  <div>              
    <h1>路由懒加载</h1>              
    <Route path="/" exact render={()=>{ 
      return <Suspense fallback={<div>组件Loading进来之前的占位内容</div>}>                   
               <HomeView />              
            </Suspense>              
      }} />           
    </div>
  }        
    
export default App;

```
3. React 的生命周期函数都有哪些，分别有什么作用？
- 挂载阶段
constructor:初始化组件，初始化组件中的state等
static getDerivedStateFromProps:将state映射到state中
reder：生成虚拟dom
componentDiMount:组件挂载完毕，可以写一些挂载后的副作用
- 更新阶段
static getDerivedStateFromProps：将state映射到state中
shouldComponentUpdate:判断是否更新组件
render：生成新的虚拟dom
getSnapshotBeforeUpdate:组件以及diff完毕，即将更新dom，可以获取上次dom，
返回值会传入 componentDidUpdate 的第三个参数
componentDidUpdate:组件更新完毕，可以进行一些副作用处理
componentWillUnmount:组件即将销毁，这里可以解除事件的监听，删除数据
