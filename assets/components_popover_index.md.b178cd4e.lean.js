import{V as F,_ as T,c as U,a as V,w as q,b as n,d as s,r as B,o as x}from"./app.8d181190.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:k,withCtx:p,createVNode:l,createElementVNode:w,openBlock:y,createElementBlock:h}=F,r=e("host"),f=e("overlay");function C(u,v){const i=k("s-button"),g=k("s-popover");return y(),h("div",null,[w("div",null,[l(i,{ref:"host",onClick:u.open},{default:p(()=>[r]),_:1},8,["onClick"]),l(g,{modelValue:u.visible,"onUpdate:modelValue":v[0]||(v[0]=_=>u.visible=_),host:u.host,title:"title","show-arrow":""},{default:p(()=>[f]),_:1},8,["modelValue","host"])])])}const{ref:b}=F;return{render:C,...{setup(u,{expose:v}){v();const i=b(!1),g=()=>{i.value=!i.value},_=b(),c={visible:i,open:g,host:_,ref:b};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}}}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:k,withCtx:p,createVNode:l,createElementVNode:w,openBlock:y,createElementBlock:h}=F,r={style:{display:"flex","justify-content":"space-around"}},f=e("host"),C=e("overlay1"),b=e("host"),A=e("overlay2"),u=e("host"),v=e("overlay3"),i=e("host"),g=e("overlay4");function _(t,a){const d=k("s-button"),m=k("s-popover");return y(),h("div",null,[w("div",r,[l(d,{ref:"host1",onClick:a[0]||(a[0]=o=>t.visible1=!t.visible1)},{default:p(()=>[f]),_:1},512),l(m,{modelValue:t.visible1,"onUpdate:modelValue":a[1]||(a[1]=o=>t.visible1=o),host:t.host1,title:"title","show-arrow":"",placement:"top"},{default:p(()=>[C]),_:1},8,["modelValue","host"]),l(d,{ref:"host2",onClick:a[2]||(a[2]=o=>t.visible2=!t.visible2)},{default:p(()=>[b]),_:1},512),l(m,{modelValue:t.visible2,"onUpdate:modelValue":a[3]||(a[3]=o=>t.visible2=o),host:t.host2,title:"title","show-arrow":"",placement:"bottom"},{default:p(()=>[A]),_:1},8,["modelValue","host"]),l(d,{ref:"host3",onClick:a[4]||(a[4]=o=>t.visible3=!t.visible3)},{default:p(()=>[u]),_:1},512),l(m,{modelValue:t.visible3,"onUpdate:modelValue":a[5]||(a[5]=o=>t.visible3=o),host:t.host3,title:"title","show-arrow":"",placement:"left"},{default:p(()=>[v]),_:1},8,["modelValue","host"]),l(d,{ref:"host4",onClick:a[6]||(a[6]=o=>t.visible4=!t.visible4)},{default:p(()=>[i]),_:1},512),l(m,{modelValue:t.visible4,"onUpdate:modelValue":a[7]||(a[7]=o=>t.visible4=o),host:t.host4,title:"title","show-arrow":"",placement:"right"},{default:p(()=>[g]),_:1},8,["modelValue","host"])])])}const{ref:c}=F;return{render:_,...{setup(t,{expose:a}){a();const d=c(!1),m=c(!1),o=c(!1),E=c(!1),D=c(),$=c(),j=c(),S=c(),N={visible1:d,visible2:m,visible3:o,visible4:E,host1:D,host2:$,host3:j,host4:S,ref:c};return Object.defineProperty(N,"__isScriptSetup",{enumerable:!1,value:!0}),N}}}}()}},Q=JSON.parse('{"title":"\u5F39\u51FA\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u5F39\u51FA\u65B9\u4F4D","slug":"\u5F39\u51FA\u65B9\u4F4D"}],"relativePath":"components/popover/index.md"}'),P=n("h1",{id:"\u5F39\u51FA\u6846",tabindex:"-1"},[s("\u5F39\u51FA\u6846 "),n("a",{class:"header-anchor",href:"#\u5F39\u51FA\u6846","aria-hidden":"true"},"#")],-1),J=n("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[s("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-button")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("host"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-popover")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":host"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("title"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"show-arrow"),s(`
      `),n("span",{class:"token punctuation"},">")]),s("overlay"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-popover")]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" visible "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"open"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  visible`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("visible"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" host "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),G=n("h3",{id:"\u5F39\u51FA\u65B9\u4F4D",tabindex:"-1"},[s("\u5F39\u51FA\u65B9\u4F4D "),n("a",{class:"header-anchor",href:"#\u5F39\u51FA\u65B9\u4F4D","aria-hidden":"true"},"#")],-1),H=n("p",null,[s("\u8BBE\u7F6E"),n("code",null,"placement"),s("\u6765\u63A7\u5236\u5F39\u51FA\u6846\u7684\u65B9\u4F4D")],-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s("flex"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" space-around"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-button")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host1"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible1 = !visible1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("host"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-popover")]),s(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible1"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":host"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host1"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("title"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"show-arrow"),s(`
      `),n("span",{class:"token attr-name"},"placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("top"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s("overlay1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-popover")]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-button")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host2"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible2 = !visible2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("host"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-popover")]),s(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible2"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":host"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host2"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("title"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"show-arrow"),s(`
      `),n("span",{class:"token attr-name"},"placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bottom"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s("overlay2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-popover")]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-button")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host3"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible3 = !visible3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("host"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-popover")]),s(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible3"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":host"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host3"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("title"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"show-arrow"),s(`
      `),n("span",{class:"token attr-name"},"placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("left"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s("overlay3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-popover")]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-button")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host4"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible4 = !visible4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("host"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("s-popover")]),s(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("visible4"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":host"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("host4"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("title"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"show-arrow"),s(`
      `),n("span",{class:"token attr-name"},"placement"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("right"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s("overlay4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("s-popover")]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" visible1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" visible2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" visible3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" visible4 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" host1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" host2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" host3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" host4 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function K(e,k,p,l,w,y){const h=B("render-demo-0"),r=B("demo"),f=B("render-demo-1");return x(),U("div",null,[P,J,V(r,{sourceCode:`<template>
  <div>
    <s-button ref="host" @click="open">host</s-button>
    <s-popover v-model="visible" :host="host" title="title" show-arrow
      >overlay</s-popover
    >
  </div>
</template>
<script setup>
import { ref } from "vue";

const visible = ref(false);
const open = () => {
  visible.value = !visible.value;
};
const host = ref();
<\/script>
`},{highlight:q(()=>[z]),default:q(()=>[V(h)]),_:1}),G,H,V(r,{sourceCode:`<template>
  <div style="display:flex;justify-content: space-around;">
    <s-button ref="host1" @click="visible1 = !visible1">host</s-button>
    <s-popover
      v-model="visible1"
      :host="host1"
      title="title"
      show-arrow
      placement="top"
      >overlay1</s-popover
    >
    <s-button ref="host2" @click="visible2 = !visible2">host</s-button>
    <s-popover
      v-model="visible2"
      :host="host2"
      title="title"
      show-arrow
      placement="bottom"
      >overlay2</s-popover
    >
    <s-button ref="host3" @click="visible3 = !visible3">host</s-button>
    <s-popover
      v-model="visible3"
      :host="host3"
      title="title"
      show-arrow
      placement="left"
      >overlay3</s-popover
    >
    <s-button ref="host4" @click="visible4 = !visible4">host</s-button>
    <s-popover
      v-model="visible4"
      :host="host4"
      title="title"
      show-arrow
      placement="right"
      >overlay4</s-popover
    >
  </div>
</template>
<script setup>
import { ref } from "vue";

const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const visible4 = ref(false);

const host1 = ref();
const host2 = ref();
const host3 = ref();
const host4 = ref();
<\/script>
`},{highlight:q(()=>[I]),default:q(()=>[V(f)]),_:1})])}const R=T(O,[["render",K]]);export{Q as __pageData,R as default};
