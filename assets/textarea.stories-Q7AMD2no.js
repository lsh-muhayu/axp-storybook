import{j as e}from"./iframe-DYg_Yz3e.js";import{T as r}from"./textarea-zAKLvqw8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jsBJ0-f-.js";const n={title:"M1/Forms/Textarea",component:r,parameters:{layout:"centered",docs:{description:{component:"여러 줄 텍스트 입력 컴포넌트입니다. `size`로 최소 높이를 조절합니다."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","default","lg"],description:"크기(최소 높이)",table:{category:"스타일",defaultValue:{summary:"default"}}},disabled:{control:"boolean",description:"비활성화",table:{category:"상태"}},placeholder:{control:"text",table:{category:"내용"}}},args:{size:"default",placeholder:"내용을 입력하세요",disabled:!1},decorators:[a=>e.jsx("div",{className:"w-80",children:e.jsx(a,{})})]},s={},l={render:a=>e.jsxs("div",{className:"flex w-80 flex-col gap-3",children:[e.jsx(r,{...a,size:"sm",placeholder:"sm"}),e.jsx(r,{...a,size:"default",placeholder:"default"}),e.jsx(r,{...a,size:"lg",placeholder:"lg"})]})},o={render:a=>e.jsxs("div",{className:"flex w-80 flex-col gap-3",children:[e.jsx(r,{...a,defaultValue:"입력된 내용입니다."}),e.jsx(r,{...a,disabled:!0,placeholder:"비활성화"}),e.jsx(r,{...a,"aria-invalid":!0,placeholder:"오류 상태"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-80 flex-col gap-3">
      <Textarea {...args} size="sm" placeholder="sm" />
      <Textarea {...args} size="default" placeholder="default" />
      <Textarea {...args} size="lg" placeholder="lg" />
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-80 flex-col gap-3">
      <Textarea {...args} defaultValue="입력된 내용입니다." />
      <Textarea {...args} disabled placeholder="비활성화" />
      <Textarea {...args} aria-invalid placeholder="오류 상태" />
    </div>
}`,...o.parameters?.docs?.source}}};const p=["Playground","Sizes","States"];export{s as Playground,l as Sizes,o as States,p as __namedExportsOrder,n as default};
