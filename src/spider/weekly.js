const axios = require("axios").default
const fs = require('fs')


function getJson(text,id){
  const regTool = /(?<=##\s*(工具)|(软件))([\s\S]*?)(?=##)/g
  const arr = text.match(regTool) || [""]
  const list  = arr[0].match(/(?<=\n\d+、)([\s\S]*?)(?=(\n\d+)|$)/g) ||[]
  const res = list.map(item=>{
    const arr = item.split("\n").filter(item=>item)
    let one = ""
    let two = ""
    let title = ""
    try{
      one = arr[0]
      arr.shift()
      two = arr.join("").replace(/\!?\[[\s\S]*?\]\([\s\S]*?\)/g,"")
      title = one.match(/(?<=\[)[\s\S]*?(?=\])/g)
      url = one.match(/(?<=\()[\s\S]*?(?=\))/g)
    }catch(e){
      console.log(e)
    }
   
    return {title:String(title),url:String(url),dec:two,id:id}
  })
  return res
}

const get = async (i)=> {
  return axios.get(`https://raw.githubusercontent.com/ruanyf/weekly/master/docs/issue-${i}.md`).catch(e=>{
    console.log('重试中',e)
    return get(i)
  })
}
async function createJSON(){
  let arr = []
  for(let i =1;i<205;i++){
    const res = await get(i)
    console.log(i)
    const json = getJson(res.data)
    arr = arr.concat(json)
    
  }
  fs.writeFileSync('.data.json',JSON.stringify(arr))
}
createJSON()