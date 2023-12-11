"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"useStepsForm",title:"useStepsForm"},l=void 0,p={unversionedId:"packages/documentation/react-hook-form/useStepsForm",id:"version-3.xx.xx/packages/documentation/react-hook-form/useStepsForm",title:"useStepsForm",description:"useStepsForm allows you to manage a form with multiple steps. It provides features such as which step is currently active, the ability to go to a specific step and validation when changing steps etc.",source:"@site/versioned_docs/version-3.xx.xx/packages/documentation/react-hook-form/useStepsForm.md",sourceDirName:"packages/documentation/react-hook-form",slug:"/packages/documentation/react-hook-form/useStepsForm",permalink:"/docs/3.xx.xx/packages/documentation/react-hook-form/useStepsForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/packages/documentation/react-hook-form/useStepsForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1702284931,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{id:"useStepsForm",title:"useStepsForm"},sidebar:"someSidebar",previous:{title:"useModalForm",permalink:"/docs/3.xx.xx/packages/documentation/react-hook-form/useModalForm"},next:{title:"Inferencer",permalink:"/docs/3.xx.xx/packages/documentation/inferencer"}},u={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>refineCoreProps</code>",id:"refinecoreprops",level:3},{value:"<code>stepsProps</code>",id:"stepsprops",level:3},{value:"<code>defaultStep</code>",id:"defaultstep",level:4},{value:"<code>isBackValidate</code>",id:"isbackvalidate",level:4},{value:"Return Values",id:"return-values",level:2},{value:"<code>steps</code>",id:"steps",level:3},{value:"<code>currenStep</code>",id:"currenstep",level:4},{value:"<code>gotoStep</code>",id:"gotostep",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return values",id:"return-values-1",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("Tabs"),g=c("TabItem"),f=c("PropsTable"),h=c("CodeSandboxExample"),b={toc:d};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  background: white;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { useTable, useNavigation, useMany } from "@pankod/refine-core";\nimport {\n  useSelect as useSelectShared,\n  HttpError as httpErrorShared,\n} from "@pankod/refine-core";\nimport { useStepsForm as useStepsFormShared } from "@pankod/refine-react-hook-form";\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: {\n    id: ICategory["id"];\n  };\n}\n\nconst stepTitlesShared = ["Title", "Status", "Category and content"];\n\nconst PostList: React.FC = () => {\n  const { tableQueryResult } = useTable<IPost>({\n    initialSorter: [\n      {\n        field: "id",\n        order: "desc",\n      },\n    ],\n  });\n  const { edit, create } = useNavigation();\n\n  const categoryIds =\n    tableQueryResult?.data?.data.map((item) => item.category.id) ?? [];\n  const { data, isLoading } = useMany<ICategory>({\n    resource: "categories",\n    ids: categoryIds,\n    queryOptions: {\n      enabled: categoryIds.length > 0,\n    },\n  });\n\n  return (\n    <div>\n      <button onClick={() => create("posts")}>Create Post</button>\n      <table>\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Title</th>\n            <th>Category</th>\n            <th>Status</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          {tableQueryResult.data?.data.map((post) => (\n            <tr key={post.id}>\n              <td>{post.id}</td>\n              <td>{post.title}</td>\n              <td>\n                {isLoading\n                  ? "Loading"\n                  : data?.data.find((item) => item.id == post.category.id)\n                      ?.title}\n              </td>\n              <td>{post.status}</td>\n              <td>\n                <button onClick={() => edit("posts", post.id)}>Edit</button>\n              </td>\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n};\n\nconst PostCreate: React.FC = () => {\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n    formState: { errors },\n    steps: { currentStep, gotoStep },\n  } = useStepsFormShared<IPost, HttpError, IPost>();\n\n  const { options } = useSelectShared({\n    resource: "categories",\n  });\n\n  const renderFormByStep = (step: number) => {\n    switch (step) {\n      case 0:\n        return (\n          <>\n            <label>Title: </label>\n            <input\n              {...register("title", {\n                required: "This field is required",\n              })}\n            />\n            {errors.title && <span>{errors.title.message}</span>}\n          </>\n        );\n      case 1:\n        return (\n          <>\n            <label>Status: </label>\n            <select {...register("status")}>\n              <option value="published">published</option>\n              <option value="draft">draft</option>\n              <option value="rejected">rejected</option>\n            </select>\n          </>\n        );\n      case 2:\n        return (\n          <>\n            <label>Category: </label>\n            <select\n              {...register("category.id", {\n                required: "This field is required",\n              })}\n            >\n              {options?.map((category) => (\n                <option key={category.value} value={category.value}>\n                  {category.label}\n                </option>\n              ))}\n            </select>\n            {errors.category && <span>{errors.category.message}</span>}\n            <br />\n            <br />\n            <label>Content: </label>\n            <textarea\n              {...register("content", {\n                required: "This field is required",\n              })}\n              rows={10}\n              cols={50}\n            />\n            {errors.content && <span>{errors.content.message}</span>}\n          </>\n        );\n    }\n  };\n\n  if (formLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>\n      <div style={{ display: "flex", gap: 36 }}>\n        {stepTitlesShared.map((title, index) => (\n          <button\n            key={index}\n            onClick={() => gotoStep(index)}\n            style={{\n              backgroundColor: currentStep === index ? "lightgray" : "initial",\n            }}\n          >\n            {index + 1} - {title}\n          </button>\n        ))}\n      </div>\n      <form autoComplete="off">{renderFormByStep(currentStep)}</form>\n      <div style={{ display: "flex", gap: 8 }}>\n        {currentStep > 0 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep - 1);\n            }}\n          >\n            Previous\n          </button>\n        )}\n        {currentStep < stepTitlesShared.length - 1 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep + 1);\n            }}\n          >\n            Next\n          </button>\n        )}\n        {currentStep === stepTitlesShared.length - 1 && (\n          <button onClick={handleSubmit(onFinish)}>Save</button>\n        )}\n      </div>\n    </div>\n  );\n};\n\nconst PostEdit: React.FC = () => {\n  const {\n    refineCore: { onFinish, formLoading, queryResult },\n    register,\n    handleSubmit,\n    formState: { errors },\n    steps: { currentStep, gotoStep },\n  } = useStepsFormShared<IPost, HttpError, IPost>();\n\n  const { options } = useSelectShared({\n    resource: "categories",\n    defaultValue: queryResult?.data?.data.category.id,\n  });\n\n  const renderFormByStep = (step: number) => {\n    switch (step) {\n      case 0:\n        return (\n          <>\n            <label>Title: </label>\n            <input\n              {...register("title", {\n                required: "This field is required",\n              })}\n            />\n            {errors.title && <span>{errors.title.message}</span>}\n          </>\n        );\n      case 1:\n        return (\n          <>\n            <label>Status: </label>\n            <select {...register("status")}>\n              <option value="published">published</option>\n              <option value="draft">draft</option>\n              <option value="rejected">rejected</option>\n            </select>\n          </>\n        );\n      case 2:\n        return (\n          <>\n            <label>Category: </label>\n            <select\n              {...register("category.id", {\n                required: "This field is required",\n              })}\n              defaultValue={queryResult?.data?.data.category.id}\n            >\n              {options?.map((category) => (\n                <option key={category.value} value={category.value}>\n                  {category.label}\n                </option>\n              ))}\n            </select>\n            {errors.category && <span>{errors.category.message}</span>}\n            <br />\n            <br />\n            <label>Content: </label>\n            <textarea\n              {...register("content", {\n                required: "This field is required",\n              })}\n              rows={10}\n              cols={50}\n            />\n            {errors.content && <span>{errors.content.message}</span>}\n          </>\n        );\n    }\n  };\n\n  if (formLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>\n      <div style={{ display: "flex", gap: 36 }}>\n        {stepTitlesShared.map((title, index) => (\n          <button\n            key={index}\n            onClick={() => gotoStep(index)}\n            style={{\n              backgroundColor: currentStep === index ? "lightgray" : "initial",\n            }}\n          >\n            {index + 1} - {title}\n          </button>\n        ))}\n      </div>\n      <form autoComplete="off">{renderFormByStep(currentStep)}</form>\n      <div style={{ display: "flex", gap: 8 }}>\n        {currentStep > 0 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep - 1);\n            }}\n          >\n            Previous\n          </button>\n        )}\n        {currentStep < stepTitlesShared.length - 1 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep + 1);\n            }}\n          >\n            Next\n          </button>\n        )}\n        {currentStep === stepTitlesShared.length - 1 && (\n          <button onClick={handleSubmit(onFinish)}>Save</button>\n        )}\n      </div>\n    </div>\n  );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," allows you to manage a form with multiple steps. It provides features such as which step is currently active, the ability to go to a specific step and validation when changing steps etc."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook is extended from ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-hook-form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/react-hook-form"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-hook-form"))," package. This means you can use all the features of ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-hook-form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm")),".")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is used in both."),(0,r.kt)(m,{defaultValue:"create",values:[{label:"create",value:"create"},{label:"edit",value:"edit"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"create",mdxType:"TabItem"},(0,r.kt)("p",null,"Here is the final result of the form: We will explain the code in following sections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/create previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/create",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/create"]);\n\n// visible-block-start\nimport { useSelect, HttpError } from "@pankod/refine-core";\nimport { useStepsForm } from "@pankod/refine-react-hook-form";\n\nconst stepTitles = ["Title", "Status", "Category and content"];\n\nconst PostCreatePage: React.FC = () => {\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n    formState: { errors },\n    steps: { currentStep, gotoStep },\n  } = useStepsForm<IPost, HttpError, IPost>();\n\n  const { options } = useSelect<ICategory, HttpError>({\n    resource: "categories",\n  });\n\n  const renderFormByStep = (step: number) => {\n    switch (step) {\n      case 0:\n        return (\n          <>\n            <label>Title: </label>\n            <input\n              {...register("title", {\n                required: "This field is required",\n              })}\n            />\n            {errors.title && <span>{errors.title.message}</span>}\n          </>\n        );\n      case 1:\n        return (\n          <>\n            <label>Status: </label>\n            <select {...register("status")}>\n              <option value="published">published</option>\n              <option value="draft">draft</option>\n              <option value="rejected">rejected</option>\n            </select>\n          </>\n        );\n      case 2:\n        return (\n          <>\n            <label>Category: </label>\n            <select\n              {...register("category.id", {\n                required: "This field is required",\n              })}\n            >\n              {options?.map((category) => (\n                <option key={category.value} value={category.value}>\n                  {category.label}\n                </option>\n              ))}\n            </select>\n            {errors.category && <span>{errors.category.message}</span>}\n            <br />\n            <br />\n            <label>Content: </label>\n            <textarea\n              {...register("content", {\n                required: "This field is required",\n              })}\n              rows={10}\n              cols={50}\n            />\n            {errors.content && <span>{errors.content.message}</span>}\n          </>\n        );\n    }\n  };\n\n  if (formLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>\n      <div style={{ display: "flex", gap: 36 }}>\n        {stepTitles.map((title, index) => (\n          <button\n            key={index}\n            onClick={() => gotoStep(index)}\n            style={{\n              backgroundColor: currentStep === index ? "lightgray" : "initial",\n            }}\n          >\n            {index + 1} - {title}\n          </button>\n        ))}\n      </div>\n      <form autoComplete="off">{renderFormByStep(currentStep)}</form>\n      <div style={{ display: "flex", gap: 8 }}>\n        {currentStep > 0 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep - 1);\n            }}\n          >\n            Previous\n          </button>\n        )}\n        {currentStep < stepTitles.length - 1 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep + 1);\n            }}\n          >\n            Next\n          </button>\n        )}\n        {currentStep === stepTitles.length - 1 && (\n          <button onClick={handleSubmit(onFinish)}>Save</button>\n        )}\n      </div>\n    </div>\n  );\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: {\n    id: ICategory["id"];\n  };\n}\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n      create: PostCreatePage,\n      edit: PostEdit,\n    },\n  ],\n});\n\nrender(<RefineHeadlessDemo />);\n'))),(0,r.kt)(g,{value:"edit",mdxType:"TabItem"},(0,r.kt)("p",null,"Here is the final result of the form: We will explain the code in following sections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/edit/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/edit/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/edit/123"]);\n\n// visible-block-start\nimport { useSelect, HttpError } from "@pankod/refine-core";\nimport { useStepsForm } from "@pankod/refine-react-hook-form";\n\nconst stepTitles = ["Title", "Status", "Category and content"];\n\nconst PostEditPage: React.FC = () => {\n  const {\n    refineCore: { onFinish, formLoading, queryResult },\n    register,\n    handleSubmit,\n    formState: { errors },\n    steps: { currentStep, gotoStep },\n  } = useStepsForm<IPost, HttpError, IPost>();\n\n  const { options } = useSelect<ICategory, HttpError>({\n    resource: "categories",\n    defaultValue: queryResult?.data?.data.category.id,\n  });\n\n  const renderFormByStep = (step: number) => {\n    switch (step) {\n      case 0:\n        return (\n          <>\n            <label>Title: </label>\n            <input\n              {...register("title", {\n                required: "This field is required",\n              })}\n            />\n            {errors.title && <span>{errors.title.message}</span>}\n          </>\n        );\n      case 1:\n        return (\n          <>\n            <label>Status: </label>\n            <select {...register("status")}>\n              <option value="published">published</option>\n              <option value="draft">draft</option>\n              <option value="rejected">rejected</option>\n            </select>\n          </>\n        );\n      case 2:\n        return (\n          <>\n            <label>Category: </label>\n            <select\n              {...register("category.id", {\n                required: "This field is required",\n              })}\n              defaultValue={queryResult?.data?.data.category.id}\n            >\n              {options?.map((category) => (\n                <option key={category.value} value={category.value}>\n                  {category.label}\n                </option>\n              ))}\n            </select>\n            {errors.category && <span>{errors.category.message}</span>}\n            <br />\n            <br />\n            <label>Content: </label>\n            <textarea\n              {...register("content", {\n                required: "This field is required",\n              })}\n              rows={10}\n              cols={50}\n            />\n            {errors.content && <span>{errors.content.message}</span>}\n          </>\n        );\n    }\n  };\n\n  if (formLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>\n      <div style={{ display: "flex", gap: 36 }}>\n        {stepTitles.map((title, index) => (\n          <button\n            key={index}\n            onClick={() => gotoStep(index)}\n            style={{\n              backgroundColor: currentStep === index ? "lightgray" : "initial",\n            }}\n          >\n            {index + 1} - {title}\n          </button>\n        ))}\n      </div>\n      <form autoComplete="off">{renderFormByStep(currentStep)}</form>\n      <div style={{ display: "flex", gap: 8 }}>\n        {currentStep > 0 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep - 1);\n            }}\n          >\n            Previous\n          </button>\n        )}\n        {currentStep < stepTitles.length - 1 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep + 1);\n            }}\n          >\n            Next\n          </button>\n        )}\n        {currentStep === stepTitles.length - 1 && (\n          <button onClick={handleSubmit(onFinish)}>Save</button>\n        )}\n      </div>\n    </div>\n  );\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: {\n    id: ICategory["id"];\n  };\n}\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "posts",\n      list: PostList,\n      create: PostCreate,\n      edit: PostEditPage,\n    },\n  ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))),(0,r.kt)("p",null,"In this example we're going to build a Post ",(0,r.kt)("inlineCode",{parentName:"p"},'"create"')," form. We also added a relational category field to expand our example."),(0,r.kt)("p",null,"To split your ",(0,r.kt)("inlineCode",{parentName:"p"},"<input/>")," components under a ",(0,r.kt)("inlineCode",{parentName:"p"},"<form/>")," component, first import and use ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook in your page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { HttpError, useSelect } from "@pankod/refine-core";\nimport { useStepsForm } from "@pankod/refine-react-hook-form";\n\nconst PostCreate = () => {\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n    formState: { errors },\n    steps: { currentStep, gotoStep },\n  } = useStepsForm<IPost, HttpError, IPost>();\n\n  return <div>...</div>;\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: {\n    id: ICategory["id"];\n  };\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is generic over the type form data to help you type check your code."),(0,r.kt)("p",null,"This hook returns a set of useful values to render steps form. Given current value, you should have a way to render your form items conditionally with this index value."),(0,r.kt)("p",null,"Here, we're going to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statement to render the form items based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentStep"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { HttpError, useSelect } from "@pankod/refine-core";\nimport { useStepsForm } from "@pankod/refine-react-hook-form";\n\nconst PostCreate = () => {\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n    formState: { errors },\n    steps: { currentStep, gotoStep },\n  } = useStepsForm<IPost, HttpError, IPost>();\n\n  const { options } = useSelect<ICategory, HttpError>({\n    resource: "categories",\n  });\n\n  // highlight-start\n  const renderFormByStep = (step: number) => {\n    switch (step) {\n      case 0:\n        return (\n          <>\n            <label>Title: </label>\n            <input\n              {...register("title", {\n                required: "This field is required",\n              })}\n            />\n            {errors.title && <span>{errors.title.message}</span>}\n          </>\n        );\n      case 1:\n        return (\n          <>\n            <label>Status: </label>\n            <select {...register("status")}>\n              <option value="published">published</option>\n              <option value="draft">draft</option>\n              <option value="rejected">rejected</option>\n            </select>\n          </>\n        );\n      case 2:\n        return (\n          <>\n            <label>Category: </label>\n            <select\n              {...register("category.id", {\n                required: "This field is required",\n              })}\n            >\n              {options?.map((category) => (\n                <option key={category.value} value={category.value}>\n                  {category.label}\n                </option>\n              ))}\n            </select>\n            {errors.category && <span>{errors.category.message}</span>}\n            <br />\n            <br />\n            <label>Content: </label>\n            <textarea\n              {...register("content", {\n                required: "This field is required",\n              })}\n              rows={10}\n              cols={50}\n            />\n            {errors.content && <span>{errors.content.message}</span>}\n          </>\n        );\n    }\n  };\n  // highlight-end\n\n  return <div>...</div>;\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: {\n    id: ICategory["id"];\n  };\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," is a relational data, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," to fetch its data."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/field/useSelect/"},"Refer to ",(0,r.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for detailed usage. ","\u2192"))),(0,r.kt)("p",null,"Now, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"renderFormByStep")," function to render the form items based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"currentStep")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoStep")," function to navigate between steps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { HttpError, useSelect } from "@pankod/refine-core";\nimport { useStepsForm } from "@pankod/refine-react-hook-form";\n\nconst PostCreate = () => {\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n    formState: { errors },\n    steps: { currentStep, gotoStep },\n  } = useStepsForm<IPost, HttpError, IPost>();\n\n  const { options } = useSelect<ICategory, HttpError>({\n    resource: "categories",\n  });\n\n  const renderFormByStep = (step: number) => {\n    switch (step) {\n      case 0:\n        return (\n          <>\n            <label>Title: </label>\n            <input\n              {...register("title", {\n                required: "This field is required",\n              })}\n            />\n            {errors.title && <span>{errors.title.message}</span>}\n          </>\n        );\n      case 1:\n        return (\n          <>\n            <label>Status: </label>\n            <select {...register("status")}>\n              <option value="published">published</option>\n              <option value="draft">draft</option>\n              <option value="rejected">rejected</option>\n            </select>\n          </>\n        );\n      case 2:\n        return (\n          <>\n            <label>Category: </label>\n            <select\n              {...register("category.id", {\n                required: "This field is required",\n              })}\n            >\n              {options?.map((category) => (\n                <option key={category.value} value={category.value}>\n                  {category.label}\n                </option>\n              ))}\n            </select>\n            {errors.category && <span>{errors.category.message}</span>}\n            <br />\n            <br />\n            <label>Content: </label>\n            <textarea\n              {...register("content", {\n                required: "This field is required",\n              })}\n              rows={10}\n              cols={50}\n            />\n            {errors.content && <span>{errors.content.message}</span>}\n          </>\n        );\n    }\n  };\n\n  // highlight-start\n  if (formLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>\n      <div style={{ display: "flex", gap: 36 }}>\n        {stepTitles.map((title, index) => (\n          <button\n            key={index}\n            onClick={() => gotoStep(index)}\n            style={{\n              backgroundColor: currentStep === index ? "lightgray" : "initial",\n            }}\n          >\n            {index + 1} - {title}\n          </button>\n        ))}\n      </div>\n      <form autoComplete="off">{renderFormByStep(currentStep)}</form>\n      <div style={{ display: "flex", gap: 8 }}>\n        {currentStep > 0 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep - 1);\n            }}\n          >\n            Previous\n          </button>\n        )}\n        {currentStep < stepTitles.length - 1 && (\n          <button\n            onClick={() => {\n              gotoStep(currentStep + 1);\n            }}\n          >\n            Next\n          </button>\n        )}\n        {currentStep === stepTitles.length - 1 && (\n          <button onClick={handleSubmit(onFinish)}>Save</button>\n        )}\n      </div>\n    </div>\n  );\n  // highlight-end\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: "published" | "draft" | "rejected";\n  category: {\n    id: ICategory["id"];\n  };\n}\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"refinecoreprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"refineCoreProps")),(0,r.kt)("p",null,"All ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," properties also available in ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm"),". You can find descriptions on ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useForm/#return-values"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," docs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const stepsForm = useStepsForm({\n  refineCoreProps: {\n    action: "edit",\n    resource: "posts",\n    id: "1",\n  },\n});\n')),(0,r.kt)("h3",{id:"stepsprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"stepsProps")),(0,r.kt)("p",null,"The props needed by the manage state steps."),(0,r.kt)("h4",{id:"defaultstep"},(0,r.kt)("inlineCode",{parentName:"h4"},"defaultStep")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"0"))),(0,r.kt)("p",null,"Sets the default starting step number. Counting starts from ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const stepsForm = useStepsForm({\n  stepsProps: {\n    defaultStep: 0,\n  },\n});\n")),(0,r.kt)("h4",{id:"isbackvalidate"},(0,r.kt)("inlineCode",{parentName:"h4"},"isBackValidate")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"When is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", validates a form fields when the user navigates to a previous step."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const stepsForm = useStepsForm({\n  stepsProps: {\n    isBackValidate: true,\n  },\n});\n")),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-hook-form/useForm/"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," return values also available in ",(0,r.kt)("inlineCode",{parentName:"p"},"useStepsForm"),". You can find descriptions on ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-hook-form/useForm/#return-values"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," docs.")),(0,r.kt)("h3",{id:"steps"},(0,r.kt)("inlineCode",{parentName:"h3"},"steps")),(0,r.kt)("p",null,"The return values needed by the manage state steps."),(0,r.kt)("h4",{id:"currenstep"},(0,r.kt)("inlineCode",{parentName:"h4"},"currenStep")),(0,r.kt)("p",null,"Current step, counting from ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h4",{id:"gotostep"},(0,r.kt)("inlineCode",{parentName:"h4"},"gotoStep")),(0,r.kt)("p",null,"Is a function that allows you to programmatically change the current step of a form.\nIt takes in one argument, step, which is a number representing the index of the step you want to navigate to."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(f,{module:"@pankod/refine-react-hook-form/useStepsForm",mdxType:"PropsTable"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*"),": These properties have default values in ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on the ",(0,r.kt)("strong",{parentName:"p"},"<",(0,r.kt)("a",{parentName:"strong",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},"Refine"),">")," component.")),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of ",(0,r.kt)("a",{parentName:"p",href:"https://react-hook-form.com/api/useform"},"useForm")," hook available in the ",(0,r.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"React Hook Form"),".")),(0,r.kt)("h3",{id:"return-values-1"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"steps"),(0,r.kt)("td",{parentName:"tr",align:null},"Relevant state and method to control the steps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#steps"},(0,r.kt)("inlineCode",{parentName:"a"},"StepsReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,r.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/hooks/useForm#return-values"},(0,r.kt)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React Hook Form Return Values"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://react-hook-form.com/api/useform"},"React Hook Form")," documentation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(h,{path:"form-react-hook-form-use-steps-form",mdxType:"CodeSandboxExample"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")))}k.isMDXComponent=!0}}]);