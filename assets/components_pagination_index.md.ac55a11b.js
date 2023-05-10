import{V as f,_ as C,c as z,a as _,w as v,b as n,d as t,r as h,o as V}from"./app.8d181190.js";const w={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:i,openBlock:s,createElementBlock:e}=f;function r(k,p){const u=l("s-pagination");return s(),e("div",null,[i(u,{total:50})])}return{render:r,...{}}}(),"render-demo-1":function(){const{renderList:l,Fragment:i,openBlock:s,createElementBlock:e,toDisplayString:r,createElementVNode:c,resolveComponent:k,createVNode:p}=f,u={class:"title"};function S(o,g){const m=k("SPagination");return s(),e("div",null,[c("div",null,[c("ul",null,[(s(!0),e(i,null,l(o.articles,a=>(s(),e("li",null,[c("span",u,r(a.title),1)]))),256))])]),p(m,{total:o.sourceArticles.length,pageSize:o.pageSize,modelValue:o.pageIndex,"onUpdate:modelValue":g[0]||(g[0]=a=>o.pageIndex=a)},null,8,["total","pageSize","modelValue"])])}const{ref:d,computed:B,watch:x,onMounted:y}=f;return{render:S,...{setup(o,{expose:g}){g();const m=d([{title:"\u6761\u76EE1"},{title:"\u6761\u76EE2"},{title:"\u6761\u76EE3"},{title:"\u6761\u76EE4"},{title:"\u6761\u76EE5"}]),a=d(1),E=d(2),A=B(()=>m.value.slice((a.value-1)*E.value,a.value*E.value)),F={sourceArticles:m,pageIndex:a,pageSize:E,articles:A,ref:d,computed:B,watch:x,onMounted:y};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}}}}()}},L=JSON.parse('{"title":"\u5206\u9875","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"}],"relativePath":"components/pagination/index.md"}'),I=n("h1",{id:"\u5206\u9875",tabindex:"-1"},[t("\u5206\u9875 "),n("a",{class:"header-anchor",href:"#\u5206\u9875","aria-hidden":"true"},"#")],-1),D=n("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),N=n("p",null,[t("\u4F7F\u7528"),n("code",null,"total"),t("\u8BBE\u7F6E\u603B\u6570")],-1),b=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("s-pagination")]),t(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("50"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("s-pagination")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=n("h3",{id:"\u4F8B\u5B50",tabindex:"-1"},[t("\u4F8B\u5B50 "),n("a",{class:"header-anchor",href:"#\u4F8B\u5B50","aria-hidden":"true"},"#")],-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("article of articles"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ article.title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token comment"},"<!-- \u4F7F\u7528 Pagination \u5BF9\u6587\u7AE0\u8FDB\u884C\u5206\u9875-->"),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("SPagination")]),t(`
    `),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sourceArticles.length"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":pageSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pageSize"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pageIndex"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" computed"),n("span",{class:"token punctuation"},","),t(" watch"),n("span",{class:"token punctuation"},","),t(" onMounted "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" sourceArticles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u6761\u76EE1"'),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// \u6807\u9898"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u6761\u76EE2"'),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// \u6807\u9898"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u6761\u76EE3"'),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// \u6807\u9898"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u6761\u76EE4"'),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// \u6807\u9898"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u6761\u76EE5"'),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// \u6807\u9898"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" pageIndex "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" pageSize "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" articles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" sourceArticles"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),t(`
    `),n("span",{class:"token punctuation"},"("),t("pageIndex"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(" pageSize"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(`
    pageIndex`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"*"),t(" pageSize"),n("span",{class:"token punctuation"},"."),t(`value
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function $(l,i,s,e,r,c){const k=h("render-demo-0"),p=h("demo"),u=h("render-demo-1");return V(),z("div",null,[I,D,N,_(p,{sourceCode:`<template>
  <s-pagination :total="50"></s-pagination>
</template>
`},{highlight:v(()=>[b]),default:v(()=>[_(k)]),_:1}),P,_(p,{sourceCode:`<template>
  <div>
    <ul>
      <li v-for="article of articles">
        <span class="title">{{ article.title }}</span>
      </li>
    </ul>
  </div>
  <!-- \u4F7F\u7528 Pagination \u5BF9\u6587\u7AE0\u8FDB\u884C\u5206\u9875-->
  <SPagination
    :total="sourceArticles.length"
    :pageSize="pageSize"
    v-model="pageIndex"
  />
</template>
<script setup>
import { ref, computed, watch, onMounted } from "vue";
const sourceArticles = ref([
  {
    title: "\u6761\u76EE1", // \u6807\u9898
  },
  {
    title: "\u6761\u76EE2", // \u6807\u9898
  },
  {
    title: "\u6761\u76EE3", // \u6807\u9898
  },
  {
    title: "\u6761\u76EE4", // \u6807\u9898
  },
  {
    title: "\u6761\u76EE5", // \u6807\u9898
  },
]);

const pageIndex = ref(1);
const pageSize = ref(2);

const articles = computed(() => {
  return sourceArticles.value.slice(
    (pageIndex.value - 1) * pageSize.value,
    pageIndex.value * pageSize.value
  );
});
<\/script>
`},{highlight:v(()=>[q]),default:v(()=>[_(u)]),_:1})])}const O=C(w,[["render",$]]);export{L as __pageData,O as default};
