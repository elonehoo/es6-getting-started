import { defineConfig } from 'vitepress'

export default defineConfig({
  base:"/",
  lang:"zh-CN",
  title:"ECMAScript 6",
  description:"ES6 Getting Started Tutorial",
  head:[
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/logo.svg'
      }
    ]
  ],
  themeConfig:{
    logo:"logo.svg",
    sidebar:[
      {
        text:"简介",
        link:"index"
      },
      {
        text: "let 和 const 命令",
        link: "docs/let"
      }
    ]
  }
})
