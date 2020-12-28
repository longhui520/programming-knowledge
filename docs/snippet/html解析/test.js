class Element {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children || []
  }

  appendChild(element) {
    this.children.push(element)
  }

  toHtml() {
    let propsArr = []
    for(let prop in this.props){
      propsArr.push(`${prop}="${this.props[prop]}"`)
    }
    let childrenStr=""
    if(this.children&&this.children.length>0){
      childrenStr = this.children.map(item=>item.toHtml()).join()
    }
    const t = `<${this.type} ${propsArr.join(" ")}>${childrenStr}</${this.type}>`
    return t
  }
}
function createElement(type, props, children) {
  return new Element(type, props, children)
}

var a = createElement('div',{id:1})
var b = createElement('span',{id:2})
a.appendChild(b)
console.log(a.toHtml())