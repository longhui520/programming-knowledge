// 根据json生成 常用工具栏文档
const fs = require("fs")
const path = require("path")
const pretty = require("pretty")
const template = require("art-template")
const templateStr = fs.readFileSync(path.join(__dirname,'template.html')).toString()
const json = JSON.parse(fs.readFileSync(path.join(__dirname,'data.json')).toString())
const data2 = JSON.parse(fs.readFileSync(path.join(__dirname,'data2.json')).toString())
var obj = {
    groupName:"阮一峰周刊工具",
    list:[]
}
for(let i=0;i<data2.length;i++){
    data2[i].forEach(item=>{
        obj.list.push({
            href:item.url,
            title:item.title,
            intro:item.dec
        })
    })
}
json.push(obj)
const rootPath=path.join(__dirname,'../../');
fs.writeFileSync(path.join(rootPath,'docs/tools/README.md'),pretty(template.render(templateStr,{groups:json})))