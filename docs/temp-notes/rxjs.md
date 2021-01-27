# RxJS
RxJS 是一个通过使用observable 序列来编写异步和基于事件的程序
## 核心概念
- Observable(可观察对象):可调用的未来值或事件的集合
- Observer(观察者)：监听了Observable提供的值的回调函数集合
- Subscription(订阅): 建立或取消对Observable提供的值的回调函数的方法
- Operators(操作符): 对Observable中的数据的处理方法
- Subject(主体):将多个Observable推送给多个Observer的对象
- Schedules(调度器):用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调

### Observable
惰性的多个值集合

