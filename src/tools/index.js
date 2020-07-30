// 常用工具生成函数
const fs = require("fs")
const pretty = require("pretty")
const template = require("art-template")
const templateStr = fs.readFileSync('template.html').toString()
const json = JSON.parse(fs.readFileSync('data.json').toString())
// console.log(template.render(templateStr,{groups:json}))
fs.writeFileSync('1.md',pretty(template.render(templateStr,{groups:json})))
