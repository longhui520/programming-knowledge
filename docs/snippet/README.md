# 代码片段
## compose的几种实现
```javascript
const app = {
    middleWares: [],
    use(middleWarwe) {
        this.middleWares.push(middleWarwe)
    }
}
app.use((next) => {
    console.log(1);
    next();
    console.log(2);
});
app.use((next) => {
    console.log(3);
    next();
    console.log(4);
});

app.use((next) => {
    console.log(5);
    next();
    console.log(6);
});
// koa 同步实现
app.compose = function () {
    const middleWares = this.middleWares
    function dispatch(index) {
        if (index === middleWares.length) return;
        const middleWare = middleWares[index]
        return middleWare(() => dispatch(index + 1))
    }
    dispatch(0)
}
// koa 异步实现
app.compose = function () {
    const middleWares = this.middleWares
    function dispatch(index) {
        if (index === middleWares.length) return Promise.resolve();
        const middleWare = middleWares[index]
        return Promise.resolve(middleWare(() => dispatch(index + 1)))
    }
    dispatch(0)
}
//reduce 同步
app.compose = function(){
    const middleWares = this.middleWares
    return middleWares.reduceRight((a,b)=>()=>b(a),()=>{})()
}
//reduce 异步
app.compose = function(){
    const middleWares = this.middleWares
    return Promise.resolve(middleWares.reduceRight((a,b)=>()=>Promise.resolve(b(a)),()=>Promise.resolve())())
}
//新reduce 同步
app.compose = function() {
    const middleWares = this.middleWares
    return middleWares.reduce((a, b) => arg => a(() => b(arg)))(() => {});
};
//新reduce 异步
app.compose = function() {
    const middleWares = this.middleWares
    return Promise.resolve(middleWares.reduce((a, b) => arg => Promise.resolve(a(() => b(arg))))(() => Promise.resolve()));
};
// async 
app.compose = function(){
    const middleWares = this.middleWares
    return (async ()=>{
        let next = ()=>Promise.resolve()
        function createNext(middleWare,oldNext){
            return async ()=>{
                return await middleWarwe(oldNext)
            }
        }
        for(let i=middleWarwes.length-1;i>=0;i--){
            next = createNext(middleWarwes[i],next)
        }
    })()
}
app.compose()

```


