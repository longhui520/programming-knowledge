// 根据json生成 常用工具栏文档
const fs = require("fs")
const path = require("path")
const pretty = require("pretty")
const template = require("art-template")
const templateStr = fs.readFileSync(path.join(__dirname,'template.html')).toString()
const json = JSON.parse(fs.readFileSync(path.join(__dirname,'data.json')).toString())
const rootPath=path.join(__dirname,'../../');
fs.writeFileSync(path.join(rootPath,'docs/tools/README.md'),pretty(template.render(templateStr,{groups:json})))