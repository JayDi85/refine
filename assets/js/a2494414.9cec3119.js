"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,g=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={},s=void 0,l={unversionedId:"core/hooks/data/use-infinite-list/basic-usage-live-preview",id:"core/hooks/data/use-infinite-list/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/core/hooks/data/use-infinite-list/basic-usage-live-preview.md",sourceDirName:"core/hooks/data/use-infinite-list",slug:"/core/hooks/data/use-infinite-list/basic-usage-live-preview",permalink:"/docs/core/hooks/data/use-infinite-list/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/data/use-infinite-list/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1702633865,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{}},p={},u=[],f={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/categories previewHeight=300px",live:!0,url:"http://localhost:3000/categories",previewHeight:"300px"},'import React from "react";\nimport { Refine } from "@refinedev/core";\n\nsetInitialRoutes(["/posts"]);\n// visible-block-start\nimport React from "react";\nimport { useInfiniteList } from "@refinedev/core";\n\nconst PostList = () => {\n  const { data, isError, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteList({\n    resource: "categories",\n    pagination: {\n      pageSize: 4,\n    },\n  });\n\n  if (isLoading) {\n    return <p>Loading</p>;\n  }\n  if (isError) {\n    return <p>Something went wrong</p>;\n  }\n\n  const allPages = [].concat(...(data?.pages ?? []).map((page) => page.data));\n\n  return (\n    <div>\n      <ul>\n        {allPages.map(({ id, title }) => (\n          <li key={id}>\n            {id}.{title}\n          </li>\n        ))}\n      </ul>\n      {hasNextPage && (\n        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>\n          {isFetchingNextPage ? "Loading more..." : "Load More"}\n        </button>\n      )}\n    </div>\n  );\n};\n// visible-block-end\n\nsetRefineProps({\n  // Layout: (props: LayoutProps) => <Layout {...props} />,\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n    },\n  ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}d.isMDXComponent=!0}}]);