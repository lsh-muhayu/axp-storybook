import{j as n,c as o,r as p}from"./iframe-DYg_Yz3e.js";import{b as f}from"./button-dK5a1hsY.js";import{c as x}from"./createLucideIcon-Bn7NS9Re.js";import{E as h}from"./ellipsis-DiZ3DrZU.js";import{C as u}from"./chevron-right-BXlepNiG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4i-suBA.js";import"./index-jsBJ0-f-.js";const N=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],j=x("chevron-left",N),c=({className:i,...a})=>n.jsx("nav",{"aria-label":"pagination",className:o("mx-auto flex w-full justify-center",i),...a});c.displayName="Pagination";const l=p.forwardRef(({className:i,...a},s)=>n.jsx("ul",{ref:s,className:o("flex flex-row items-center gap-1",i),...a}));l.displayName="PaginationContent";const e=p.forwardRef(({className:i,...a},s)=>n.jsx("li",{ref:s,className:o("",i),...a}));e.displayName="PaginationItem";const t=({className:i,isActive:a,size:s="icon",...P})=>n.jsx("a",{"aria-current":a?"page":void 0,className:o(f({variant:a?"outline":"ghost",size:s}),i),...P});t.displayName="PaginationLink";const d=({className:i,...a})=>n.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 pl-2.5",i),...a,children:[n.jsx(j,{className:"size-4"}),n.jsx("span",{children:"Previous"})]});d.displayName="PaginationPrevious";const m=({className:i,...a})=>n.jsxs(t,{"aria-label":"Go to next page",size:"default",className:o("gap-1 pr-2.5",i),...a,children:[n.jsx("span",{children:"Next"}),n.jsx(u,{className:"size-4"})]});m.displayName="PaginationNext";const g=({className:i,...a})=>n.jsxs("span",{"aria-hidden":!0,className:o("flex size-9 items-center justify-center",i),...a,children:[n.jsx(h,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]});g.displayName="PaginationEllipsis";c.__docgenInfo={description:"",methods:[],displayName:"Pagination"};l.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:"'icon'",computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};d.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const z={title:"M1/Navigation/Pagination",component:c,parameters:{layout:"padded",docs:{description:{component:"페이지 네비게이션입니다. `PaginationLink`의 `isActive`로 현재 페이지를 표시합니다."}}},tags:["autodocs"]},r={render:()=>n.jsx(c,{children:n.jsxs(l,{children:[n.jsx(e,{children:n.jsx(d,{href:"#"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(e,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(e,{children:n.jsx(g,{})}),n.jsx(e,{children:n.jsx(m,{href:"#"})})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...r.parameters?.docs?.source}}};const b=["Playground"];export{r as Playground,b as __namedExportsOrder,z as default};
