function parse(str) {
  const startTag = /^<([-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/
  const endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/
  const attr = /([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g
  function core(html, handler) {
    let index
    let chars
    let match
    const stack = []
    let last = html
    while (html) {
      chars = true
      if (html.indexOf('<!--') === 0) {
        index = html.indexOf('-->')
        if (index >= 0) {
          handler.comment(4, index)
          html = html.slice(index + 3)
          chars = false
        }
      } else if (html.indexOf('</') === 0) {
        match = html.match(endTag)
        if (match) {
          html = html.slice(match[0].length)
          match[0].replace(endTag, parseEndTag)
          chars = false
        }
      } else if (html.indexOf('<' === 0)) {
        match = html.match(startTag)
        if (match) {
          html = html.slice(match[0].length)
          match[0].replace(startTag, parseStartTag)
          chars = false
        }
      }
      if (chars) {
        index = html.indexOf('<')
        const text = index < 0 ? html : html.slice(0, index)
        html = index < 0 ? '' : html.slice(index)
        handler.chars(text)
      }
      if (last === html) {
        throw new Error(`解析错误${html}`)
      } else {
        last = html
      }
    }
    function parseStartTag(all, tagName, props, unary) {
      handler.start(tagName, props, unary)
    }
    function parseEndTag(all, tagName) {
      handler.end(tagName)
    }
  }
  const createNode = function createNode(tag, props, children) {
    return {
      tag,
      props,
      children
    }
  }
  const defaultNode = createNode('root', '', [])
  const Nodes = [defaultNode]
  core(str, {
    start(tag, props, unary) {
      let node
      let parentNode
      if (unary) {
        node = createNode(tag, props, null)
        parentNode = Nodes[Nodes.length - 1]
        parentNode.children.push(node)
      } else {
        node = createNode(tag, props, [])
        parentNode = Nodes[Nodes.length - 1]
        parentNode.children.push(node)
        Nodes.push(node)
      }
    },
    end(tag) {
      const parentNode = Nodes[Nodes.length - 1]
      if (parentNode.tag === tag) {
        Nodes.pop()
      }
    },
    chars(text) {
      Nodes[Nodes.length - 1].children.push(text)
    },
    comment(text) {
      Nodes[Nodes.length - 1].children.push(text)
    }
  })
  return JSON.stringify(Nodes, null, 2)
}
console.log(parse('<div>2222</div>'))
