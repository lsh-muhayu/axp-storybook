import{r as d,j as e,c as x}from"./iframe-DYg_Yz3e.js";import{C as v}from"./chevron-down-HDs8rbtQ.js";import{C as A}from"./chevron-right-BXlepNiG.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Bn7NS9Re.js";const f=d.createContext(null);function g({children:n,className:i,defaultValue:t}){const[c,l]=d.useState(t??null),u=r=>{l(p=>p===r?null:r)};return e.jsx(f.Provider,{value:{openValue:c,toggle:u},children:e.jsx("div",{className:x("space-y-3",i),children:n})})}function s({value:n,title:i,summary:t,children:c,className:l,defaultOpen:u=!1}){const r=d.useContext(f),[p,h]=d.useState(u),m=r&&n?r.openValue===n:p,y=()=>{r&&n?r.toggle(n):h(j=>!j)};return e.jsxs("div",{className:x("overflow-hidden rounded-lg border border-border-default",l),children:[e.jsxs("button",{type:"button",className:"hover:bg-muted/50 flex w-full items-center justify-between px-5 py-4 text-left transition-colors",onClick:y,"aria-expanded":m,children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-text-main",children:i}),t&&e.jsx("p",{className:"text-muted-foreground mt-0.5 text-sm",children:t})]}),m?e.jsx(v,{className:"text-muted-foreground size-4 shrink-0"}):e.jsx(A,{className:"text-muted-foreground size-4 shrink-0"})]}),m&&e.jsx("div",{className:"bg-muted/20 border-t border-border-default px-5 pb-5",children:c})]})}g.__docgenInfo={description:"",methods:[],displayName:"AccordionGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"AccordionPanel",props:{value:{required:!1,tsType:{name:"string"},description:"그룹 내에서 패널을 식별하는 값 (AccordionGroup 내부 사용 시 필수)"},title:{required:!0,tsType:{name:"string"},description:""},summary:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"기본 열림 상태 (단독 사용 시)",defaultValue:{value:"false",computed:!1}}}};const q={title:"M1/Data Display/AccordionPanel",component:s,parameters:{layout:"padded",docs:{description:{component:"토글 가능한 아코디언 패널입니다. 단독 사용 또는 `AccordionGroup`으로 단일 선택 그룹을 구성합니다."}}},tags:["autodocs"],args:{title:"패널 제목",children:"패널 내부 콘텐츠입니다."}},o={render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(s,{title:"패널 제목",summary:"요약 설명",defaultOpen:!0,children:"패널 내부 콘텐츠입니다."})})},a={render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(g,{defaultValue:"a",children:[e.jsx(s,{value:"a",title:"첫 번째",summary:"단일 선택 그룹",children:"A 콘텐츠"}),e.jsx(s,{value:"b",title:"두 번째",children:"B 콘텐츠"}),e.jsx(s,{value:"c",title:"세 번째",children:"C 콘텐츠"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <AccordionPanel title="패널 제목" summary="요약 설명" defaultOpen>
        패널 내부 콘텐츠입니다.
      </AccordionPanel>
    </div>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <AccordionGroup defaultValue="a">
        <AccordionPanel value="a" title="첫 번째" summary="단일 선택 그룹">
          A 콘텐츠
        </AccordionPanel>
        <AccordionPanel value="b" title="두 번째">
          B 콘텐츠
        </AccordionPanel>
        <AccordionPanel value="c" title="세 번째">
          C 콘텐츠
        </AccordionPanel>
      </AccordionGroup>
    </div>
}`,...a.parameters?.docs?.source}}};const G=["Single","Group"];export{a as Group,o as Single,G as __namedExportsOrder,q as default};
