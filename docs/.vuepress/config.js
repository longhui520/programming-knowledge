module.exports = {
  title:"龙辉",
  description:"a collection of programming knowledge",
  themeConfig: {
    logo: '/assets/images/logo.png',
    nav: [
      { text:'常用工具',link:'/tools/'},
      { text:'学习文章',items:[
        {
          text:'vue源码系列',
          link:'/article/vue/'
        },
        {
          text:'webpack源码系列',
          link:'/article/webpack/'
        },
        {
          text:'web',
          link:'/article/web/'
        },
        {
          text:"前端面试",
          link:'/article/front-interview'
        }
      ]},
      { text: 'vuepress', link: 'https://www.vuepress.cn/' }
    ]
  }
}