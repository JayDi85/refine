"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Pilot & refine architecture",description:"We'll be taking a look at the architecture of refine and how week of refineWeek series will be structured.",slug:"refine-react-invoice-generator-1",authors:"abdullah_numan",tags:["refine-week","refine","strapi","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-04-10-refine-invoicer-1%2Fsocial.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/blog/refine-react-invoice-generator-1",source:"@site/blog/2023-04-10-refine-invoicer-1.md",title:"Pilot & refine architecture",description:"We'll be taking a look at the architecture of refine and how week of refineWeek series will be structured.",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:9.195,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Pilot & refine architecture",description:"We'll be taking a look at the architecture of refine and how week of refineWeek series will be structured.",slug:"refine-react-invoice-generator-1",authors:"abdullah_numan",tags:["refine-week","refine","strapi","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-04-10-refine-invoicer-1%2Fsocial.png",hide_table_of_contents:!1},prevItem:{title:"Setting Up the Invoicer App",permalink:"/blog/refine-react-invoice-generator-2"},nextItem:{title:"Building a React Admin Dashboard with refine",permalink:"/blog/building-react-admin-dashboard"},relatedPosts:[{title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.105,date:"2021-10-25T00:00:00.000Z"},{title:"refine.new - Introducing the Fastest Way to Create refine Apps",description:"Discover how refine.new and the refine framework are transforming the way developers create front-end applications in the React ecosystem",permalink:"/blog/what-is-refine-new",formattedDate:"May 10, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:3.98,date:"2023-05-10T00:00:00.000Z"},{title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:14.095,date:"2022-09-22T00:00:00.000Z"}],authorPosts:[{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.935,date:"2023-04-13T00:00:00.000Z"},{title:"Audit Log With refine",description:"We'll apply refine's built-in audit logging functionality",permalink:"/blog/refine-pixels-7",formattedDate:"February 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:15.525,date:"2023-02-20T00:00:00.000Z"},{title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",permalink:"/blog/refine-pixels-4",formattedDate:"February 17, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.15,date:"2023-02-17T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"What is <strong>refine</strong> ?",id:"what-is-refine-",level:2},{value:"What is Strapi ?",id:"what-is-strapi-",level:2},{value:"refine Architecture",id:"refine-architecture",level:2},{value:"Providers and Hooks",id:"providers-and-hooks",level:2},{value:"Support Packages",id:"support-packages",level:2},{value:"A week of refine ft. Strapi",id:"a-week-of-refine-ft-strapi",level:2},{value:"Day One - On This #refineWeek",id:"day-one---on-this-refineweek",level:3},{value:"Day Two - Setting Up the App",id:"day-two---setting-up-the-app",level:3},{value:"Day Three - Adding CRUD Actions &amp; Authentication",id:"day-three---adding-crud-actions--authentication",level:3},{value:"Day Four - Adding Mission and Invoice Pages",id:"day-four---adding-mission-and-invoice-pages",level:3},{value:"Day Five - Adding PDF Renderer",id:"day-five---adding-pdf-renderer",level:3},{value:"Summary",id:"summary",level:2}],u={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the opening post of another 2023 ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-strapi/"},(0,a.kt)("strong",{parentName:"a"},"#refineWeek"))," series. It is intended to provide an introduction to the series itself as well as to present ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,a.kt)("strong",{parentName:"a"},"refine")),", a React framework that is used to rapidly build any data heavy CRUD apps like dashboards, admin panels and e-commerce storefronts."),(0,a.kt)("p",null,"This five part guide aims to help developers learn the ins-and-outs of ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s powerful capabilities and get going with ",(0,a.kt)("strong",{parentName:"p"},"refine")," within a week."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center",width:"600px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-04-10-refine-invoicer-1%2Fmultiple_logo.png",alt:"refine banner"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"In this series we are going to build a ",(0,a.kt)("strong",{parentName:"p"},"Invoicer - React PDF Invoice Generator")," app with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,a.kt)("strong",{parentName:"a"},"refine")),", ",(0,a.kt)("a",{parentName:"p",href:"https://strapi.io/"},(0,a.kt)("strong",{parentName:"a"},"Strapi"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/"},(0,a.kt)("strong",{parentName:"a"},"Ant Design")),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://invoice-generator.refine.dev/"},"\ud83d\udc49 The live version of the app is be available here.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/refine-week-invoice-generator"},"\ud83d\udc49 The final apps source code is available on GitHub.")),(0,a.kt)("p",null,"To get completed client source code simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," npm create refine-app@latest -- --example refine-week-invoice-generator\n")),(0,a.kt)("h2",{id:"what-is-refine-"},"What is ",(0,a.kt)("strong",{parentName:"h2"},"refine")," ?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,a.kt)("strong",{parentName:"a"},"refine"))," is a highly customizable ",(0,a.kt)("strong",{parentName:"p"},"React")," based framework that has a headless core package and comes with a myriad of supplementary modules for the UI, backend API clients and Internationalization support."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine"),"'s (intentionally decapitalized) core is strongly opinionated about RESTful conventions, HTTPS networking, state management, authentication and authorization. It is, however, unopinionated about the UI and render logic. This makes it customizable according to one's choice of UI library and frameworks."),(0,a.kt)("h2",{id:"what-is-strapi-"},"What is Strapi ?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://strapi.io"},(0,a.kt)("strong",{parentName:"a"},"Strapi"))," is an open source content management system ( CMS ) which allows us to build headless backend services for creating and managing content."),(0,a.kt)("p",null,"It is highly customizable and can be hosted locally as well as in the cloud. ",(0,a.kt)("strong",{parentName:"p"},"Strapi")," is especially useful for building readily available RESTful APIs available for consumption from a frontend app."),(0,a.kt)("h2",{id:"refine-architecture"},"refine Architecture"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"refine")," app is centered mainly around the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component, which is mostly configured via a set of provider props that each requires a provider object to be passed in. An example usage of providers on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { DataProvider } from "@refinedev/strapi-v4";\nimport routerBindings from "@refinedev/react-router-v6";\n\n<Refine\n  dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}\n  authProvider={authProvider}\n  routerProvider={{ routerProvider }}\n  resources={[]}\n  // ... etc.\n/>;\n')),(0,a.kt)("p",null,"The code above shows a few of the props and their assigned objects. As can be inferred from this, rather than precisely being a component, ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/components/refine-config/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine />"))," is largely a monolith of provider configurations backed by a context for each.",(0,a.kt)("br",{parentName:"p"}),"\n","Hence, inside ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/tutorial/understanding-dataprovider/index/"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")),", we should have a standard set of methods for making API requests; inside ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/tutorial/understanding-authprovider/index/#what-is-auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider")),", we should have methods for dealing with authentication and authorization; inside ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/routers/"},(0,a.kt)("inlineCode",{parentName:"a"},"routerProvider")),", we should have methods for dealing with standard routing - both RESTful and non-RESTful, etc. And each of these providers should have their own set of conventions and type definitions."),(0,a.kt)("p",null,"For example, a ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," object should have the following signature to which any definition of a data provider object should conform:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title=" Data provider object signature"',title:'"',Data:!0,provider:!0,object:!0,'signature"':!0},'const dataProvider: DataProvider = {\n  // required methods\n  getList: ({ resource, pagination, sorters, filters, meta }) => Promise,\n  create: ({ resource, variables, meta }) => Promise,\n  update: ({ resource, id, variables, meta }) => Promise,\n  deleteOne: ({ resource, id, variables, meta }) => Promise,\n  getOne: ({ resource, id, meta }) => Promise,\n  getApiUrl: () => "",\n\n  // optional methods\n  getMany: ({ resource, ids, meta }) => Promise,\n  createMany: ({ resource, variables, meta }) => Promise,\n  deleteMany: ({ resource, ids, variables, meta }) => Promise,\n  updateMany: ({ resource, ids, variables, meta }) => Promise,\n  custom: ({ url, method, filters, sorters, payload, query, headers, meta }) => Promise,\n};\n')),(0,a.kt)("p",null,"The underlying architecture facilitates any presentational component passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," to be able to consume these configured methods via corresponding hooks. Each method in a provider has appropriate hooks via which a consumer component is able to fetch data from the backend. For instance, ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/hooks/list/useSimpleList/"},(0,a.kt)("inlineCode",{parentName:"a"},"useSimpleList()"))," is a high level data and UI hook via which the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/tutorial/understanding-dataprovider/create-dataprovider/#getlist"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider.getList()"))," provider method can be accessed."),(0,a.kt)("p",null,"An example hook usage from a UI component looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { listProps } = useSimpleList<IClient>({\n  meta: { populate: ["contacts"] },\n});\n')),(0,a.kt)("p",null,"The above ",(0,a.kt)("inlineCode",{parentName:"p"},"useSimpleList()")," hook is a ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," UI hook that is built on top of the low level ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useList/"},(0,a.kt)("inlineCode",{parentName:"a"},"useList()"))," data hook. Low level hooks, in turn, leverage ",(0,a.kt)("strong",{parentName:"p"},"React Query")," hooks in order to make API calls invoked from inside the provider methods. Here's an early sneak peek into the action under the hood:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Inside useList() hook"',title:'"Inside',"useList()":!0,'hook"':!0},'const queryResponse = useQuery<GetListResponse<TData>, TError>(\n  queryKey.list(config),\n  ({ queryKey, pageParam, signal }) => {\n    const { hasPagination, ...restConfig } = config || {};\n    return getList<TData>({\n      resource,\n      ...restConfig,\n      hasPagination,\n      metaData: {\n        ...metaData,\n        queryContext: {\n          queryKey,\n          pageParam,\n          signal,\n        },\n      },\n    });\n  },\n  {\n    ...queryOptions,\n    onSuccess: (data) => {\n      queryOptions?.onSuccess?.(data);\n\n      const notificationConfig =\n        typeof successNotification === "function"\n          ? successNotification(data, { metaData, config }, resource)\n          : successNotification;\n\n      handleNotification(notificationConfig);\n    },\n    onError: (err: TError) => {\n      checkError(err);\n      queryOptions?.onError?.(err);\n\n      const notificationConfig =\n        typeof errorNotification === "function"\n          ? errorNotification(err, { metaData, config }, resource)\n          : errorNotification;\n\n      handleNotification(notificationConfig, {\n        key: `${resource}-useList-notification`,\n        message: translate(\n          "common:notifications.error",\n          { statusCode: err.statusCode },\n          `Error (status code: ${err.statusCode})`,\n        ),\n        description: err.message,\n        type: "error",\n      });\n    },\n  },\n);\n')),(0,a.kt)("p",null,"We'll be visiting code like this on Day 4, but if we examine the snippet above closely we can see that ",(0,a.kt)("strong",{parentName:"p"},"refine")," uses ",(0,a.kt)("strong",{parentName:"p"},"React Query")," to handle caching, state management as well as errors out-of-the-box."),(0,a.kt)("p",null,"The following diagram illustrates the interactions:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/providers/data-provider/api-consuming-flow.png",alt:"1-refine-week"})),(0,a.kt)("h2",{id:"providers-and-hooks"},"Providers and Hooks"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine"),"'s power lies in the abstraction of various app component logic such as authentication, authorization, routing and data fetching - inside individual providers and their corresponding hooks."),(0,a.kt)("p",null,"Common providers include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/docs/tutorial/understanding-authprovider/index/#what-is-auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider"))," - for authentication and authorization."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/docs/tutorial/understanding-dataprovider/index/"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider"))," - for CRUD operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/docs/packages/documentation/routers/"},(0,a.kt)("inlineCode",{parentName:"a"},"routerProvider"))," - for dealing with routing.")),(0,a.kt)("p",null,"For an exhaustive list of providers, please visit the ",(0,a.kt)("strong",{parentName:"p"},"refine")," providers documentation from ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/"},"here"),"."),(0,a.kt)("p",null,"As part of the core package, each method in these providers comes with a corresponding low level hook to be used from inside higher level hooks, partial UI components and pages. As mentioned above with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSimpleList()")," hook, higher level hooks can be built on top of lower level hooks such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()")," hook. For more details, please refer to the ",(0,a.kt)("strong",{parentName:"p"},"refine")," hooks documentation starting ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/accessControl/useCan/"},"here"),"."),(0,a.kt)("h2",{id:"support-packages"},"Support Packages"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is inherently headless in its core API and deliberately agnostic about the UI and backend layers. Being so, it is able to provide fantastic support for major UI libraries and frameworks as well as popular backend frameworks and services. To name a few, ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s UI support packages include ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/"},(0,a.kt)("strong",{parentName:"a"},"Ant Design"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mui/"},(0,a.kt)("strong",{parentName:"a"},"Material UI")),". Backend supplementary modules include ",(0,a.kt)("a",{parentName:"p",href:"https://strapi.io/"},(0,a.kt)("strong",{parentName:"a"},"Strapi")),", ",(0,a.kt)("strong",{parentName:"p"},"GraphQL"),", ",(0,a.kt)("strong",{parentName:"p"},"NestJS")," and ."),(0,a.kt)("p",null,"For a complete list of all these modules, check out ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/list-of-packages/"},"this page"),"."),(0,a.kt)("h2",{id:"a-week-of-refine-ft-strapi"},"A week of refine ft. Strapi"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center",width:"600px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-04-10-refine-invoicer-1%2Finvoicer_logo.png",alt:"refine banner"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"In this tutorial series, we will be going through a few vital features of ",(0,a.kt)("strong",{parentName:"p"},"refine")," by building a basic ",(0,a.kt)("strong",{parentName:"p"},"Invoicer - Pdf Invoice Generator")," app. This section is intended to provide more details."),(0,a.kt)("p",null,"The final version of the ",(0,a.kt)("strong",{parentName:"p"},"Invoicer")," comprises of a dashboard that allows users to register their companies, add their clients and contacts, create tasks (missions) that they do for their clients and issue invoices for the tasks. Users are also able to generate a pdf document of the invoice."),(0,a.kt)("p",null,"We will be building this app day-by-day over a period of 5 days. And while doing so, we will dive deep into the details of related providers, hooks, UI components and how ",(0,a.kt)("strong",{parentName:"p"},"refine")," works behind the scenes."),(0,a.kt)("p",null,"As far as our features and functionalities go, we will cover some key concepts including ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," props of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />"),", the provider objects and their associated hooks. For the UI side, we will be using the optional ",(0,a.kt)("strong",{parentName:"p"},"Ant Design")," package supported by ",(0,a.kt)("strong",{parentName:"p"},"refine"),". For the backend, we will use a ",(0,a.kt)("a",{parentName:"p",href:"https://strapi.io"},(0,a.kt)("strong",{parentName:"a"},"Strapi"))," content management system."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here are the detailed outlines split per day:"),(0,a.kt)("h3",{id:"day-one---on-this-refineweek"},"Day One - On This #refineWeek"),(0,a.kt)("p",null,"This opening post. Hello! \ud83d\udc4b \ud83d\udc4b We are here! \ud83d\ude04 \ud83d\ude04"),(0,a.kt)("h3",{id:"day-two---setting-up-the-app"},"Day Two - Setting Up the App"),(0,a.kt)("p",null,"We start with setting up the ",(0,a.kt)("strong",{parentName:"p"},"React Pdf Invoice Generator")," app using ",(0,a.kt)("strong",{parentName:"p"},"refine")," ",(0,a.kt)("strong",{parentName:"p"},"CLI Wizard"),". We choose ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s optional ",(0,a.kt)("strong",{parentName:"p"},"Ant Design")," and ",(0,a.kt)("strong",{parentName:"p"},"Strapi")," modules as support packages. After initialization, we explore the boilerplate code created by the ",(0,a.kt)("strong",{parentName:"p"},"CLI Wizard"),", look into the details of the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," objects and briefly discuss their mechanisms."),(0,a.kt)("p",null,"In the later sections, we also initialize the ",(0,a.kt)("strong",{parentName:"p"},"Strapi")," backend app for our ",(0,a.kt)("strong",{parentName:"p"},"React Invoice Generator"),". Here's what we do step by step after that:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start the ",(0,a.kt)("strong",{parentName:"li"},"Strapi")," server and sign up for an ",(0,a.kt)("strong",{parentName:"li"},"admin")," user to get access to the dashboard."),(0,a.kt)("li",{parentName:"ol"},"We create collections for our app using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-Type Manager"),"."),(0,a.kt)("li",{parentName:"ol"},"We set up permissions for ",(0,a.kt)("inlineCode",{parentName:"li"},"authenticated")," role for ",(0,a.kt)("strong",{parentName:"li"},"refine")," app users, i.e. our ",(0,a.kt)("strong",{parentName:"li"},"React Invoice Generator")," app users.")),(0,a.kt)("h3",{id:"day-three---adding-crud-actions--authentication"},"Day Three - Adding CRUD Actions & Authentication"),(0,a.kt)("p",null,"On Day 3, we start off with generating an API Token for our ",(0,a.kt)("strong",{parentName:"p"},"Strapi")," backend app to be accessed from our ",(0,a.kt)("strong",{parentName:"p"},"React Invoice Generator"),". We then update our ",(0,a.kt)("inlineCode",{parentName:"p"},"constants.ts")," file with them."),(0,a.kt)("p",null,"We complete the app halfway by adding CRUD pages for ",(0,a.kt)("inlineCode",{parentName:"p"},"companies"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"clients")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"contacts"),". While doing so, we get familiar with ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," methods such as ",(0,a.kt)("inlineCode",{parentName:"p"},"getList"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," and some of the corresponding low level hooks: ",(0,a.kt)("inlineCode",{parentName:"p"},"useList()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useCreate()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useDelete()"),"."),(0,a.kt)("p",null,"We also examine the use of higher level hooks such as ",(0,a.kt)("inlineCode",{parentName:"p"},"useSimpleList()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useModalForm()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useDrawerForm()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable()")," that integrate data hooks with ",(0,a.kt)("strong",{parentName:"p"},"Ant Design")," components."),(0,a.kt)("p",null,"We discuss authentication with the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," object and implement an email / password based authentication with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<AuthPage />")," component that is provided by ",(0,a.kt)("strong",{parentName:"p"},"refine-Ant Design")," (",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd"),") package."),(0,a.kt)("h3",{id:"day-four---adding-mission-and-invoice-pages"},"Day Four - Adding Mission and Invoice Pages"),(0,a.kt)("p",null,"On Day 4, we continue to add CRUD pages for ",(0,a.kt)("inlineCode",{parentName:"p"},"missions")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"invoices")," resources. We first add ",(0,a.kt)("strong",{parentName:"p"},"Strapi")," collections for ",(0,a.kt)("inlineCode",{parentName:"p"},"missions")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"invoices")," and set up permissions on them for ",(0,a.kt)("inlineCode",{parentName:"p"},"authenticated")," user role. And then we go ahead and add the resource items, routes as well as the CRUD pages."),(0,a.kt)("p",null,"We also get an opportunity to dig into some low level code to make sense of how ",(0,a.kt)("strong",{parentName:"p"},"refine")," undertakes data heavy tasks behind the scenes and presents us with convenient, highly customizable hooks like ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect()")," to be used in our app."),(0,a.kt)("p",null,"Besides the above mentioned hooks, we examine the source code for the ",(0,a.kt)("strong",{parentName:"p"},"refine-Ant Design")," ",(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton />")," component."),(0,a.kt)("h3",{id:"day-five---adding-pdf-renderer"},"Day Five - Adding PDF Renderer"),(0,a.kt)("p",null,"On the final day, we add a pdf renderer to generate pdf document and view for our invoices. We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-pdf/renderer")," ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," package for this."),(0,a.kt)("p",null,"We then wrap up the series by discussing the accomplishments we are about to achieve starting Day 2."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this post, we introduced the ",(0,a.kt)("strong",{parentName:"p"},"refine")," framework and the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-strapi/"},(0,a.kt)("strong",{parentName:"a"},"#refineWeek"))," series itself. We talked about ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s underlying architecture which consists of providers, hooks and components that help rapidly build internal tools."),(0,a.kt)("p",null,"We laid out the plans for building a ",(0,a.kt)("strong",{parentName:"p"},"React Pdf Invoice Generator")," app in considerable depth."),(0,a.kt)("p",null,"Tomorrow, on Day Two, we are ready to start ",(0,a.kt)("strong",{parentName:"p"},"Setting Up the App"),". See you soon!"))}m.isMDXComponent=!0}}]);