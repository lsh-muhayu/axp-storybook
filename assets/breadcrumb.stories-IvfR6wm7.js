import{j as r,c as n,S as B}from"./iframe-DYg_Yz3e.js";import{C as x}from"./chevron-right-BXlepNiG.js";import{E as h}from"./ellipsis-DiZ3DrZU.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Bn7NS9Re.js";function i({className:e,...a}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",className:n(e),...a})}function u({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:n("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words",e),...a})}function s({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:n("inline-flex items-center gap-1",e),...a})}function m({asChild:e,className:a,...o}){const p=e?B:"a";return r.jsx(p,{"data-slot":"breadcrumb-link",className:n("hover:text-foreground transition-colors",a),...o})}function l({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:n("text-foreground font-normal",e),...a})}function d({children:e,className:a,...o}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:n("[&>svg]:size-3.5",a),...o,children:e??r.jsx(x,{})})}function b({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:n("flex size-5 items-center justify-center [&>svg]:size-4",e),...a,children:[r.jsx(h,{}),r.jsx("span",{className:"sr-only",children:"More"})]})}i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const _={title:"M1/Navigation/Breadcrumb",component:i,parameters:{layout:"padded",docs:{description:{component:"현재 위치를 계층 경로로 표시하는 브레드크럼입니다."}}},tags:["autodocs"]},t={render:()=>r.jsx(i,{children:r.jsxs(u,{children:[r.jsx(s,{children:r.jsx(m,{href:"#",children:"워크스페이스"})}),r.jsx(d,{}),r.jsx(s,{children:r.jsx(m,{href:"#",children:"프로젝트"})}),r.jsx(d,{}),r.jsx(s,{children:r.jsx(l,{children:"발명 컨텍스트"})})]})})},c={render:()=>r.jsx(i,{children:r.jsxs(u,{children:[r.jsx(s,{children:r.jsx(m,{href:"#",children:"홈"})}),r.jsx(d,{}),r.jsx(s,{children:r.jsx(b,{})}),r.jsx(d,{}),r.jsx(s,{children:r.jsx(l,{children:"현재 페이지"})})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">워크스페이스</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">프로젝트</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>발명 컨텍스트</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">홈</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>현재 페이지</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...c.parameters?.docs?.source}}};const L=["Playground","WithEllipsis"];export{t as Playground,c as WithEllipsis,L as __namedExportsOrder,_ as default};
