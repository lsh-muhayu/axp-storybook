import{j as e}from"./iframe-DYg_Yz3e.js";import{I as r}from"./input-Dh4jYs3n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jsBJ0-f-.js";const p={title:"M1/Forms/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"기본 텍스트 입력 컴포넌트입니다. `variant`(형태)와 `size`(크기)를 제공하며, `aria-invalid`로 오류 상태를 표현합니다."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","ghost"],description:"시각적 형태",table:{category:"스타일",defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","default","lg"],description:"크기",table:{category:"스타일",defaultValue:{summary:"default"}}},disabled:{control:"boolean",description:"비활성화",table:{category:"상태"}},placeholder:{control:"text",table:{category:"내용"}}},args:{variant:"default",size:"default",placeholder:"입력하세요",disabled:!1},decorators:[a=>e.jsx("div",{className:"w-72",children:e.jsx(a,{})})]},s={},l={render:a=>e.jsxs("div",{className:"flex w-72 flex-col gap-3",children:[e.jsx(r,{...a,variant:"default",placeholder:"default"}),e.jsx(r,{...a,variant:"outline",placeholder:"outline"}),e.jsx(r,{...a,variant:"ghost",placeholder:"ghost"})]})},t={render:a=>e.jsxs("div",{className:"flex w-72 flex-col gap-3",children:[e.jsx(r,{...a,size:"sm",placeholder:"sm"}),e.jsx(r,{...a,size:"default",placeholder:"default"}),e.jsx(r,{...a,size:"lg",placeholder:"lg"})]})},o={render:a=>e.jsxs("div",{className:"flex w-72 flex-col gap-3",children:[e.jsx(r,{...a,placeholder:"기본"}),e.jsx(r,{...a,defaultValue:"입력된 값"}),e.jsx(r,{...a,disabled:!0,placeholder:"비활성화"}),e.jsx(r,{...a,"aria-invalid":!0,placeholder:"오류 상태"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-72 flex-col gap-3">
      <Input {...args} variant="default" placeholder="default" />
      <Input {...args} variant="outline" placeholder="outline" />
      <Input {...args} variant="ghost" placeholder="ghost" />
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-72 flex-col gap-3">
      <Input {...args} size="sm" placeholder="sm" />
      <Input {...args} size="default" placeholder="default" />
      <Input {...args} size="lg" placeholder="lg" />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-72 flex-col gap-3">
      <Input {...args} placeholder="기본" />
      <Input {...args} defaultValue="입력된 값" />
      <Input {...args} disabled placeholder="비활성화" />
      <Input {...args} aria-invalid placeholder="오류 상태" />
    </div>
}`,...o.parameters?.docs?.source}}};const u=["Playground","Variants","Sizes","States"];export{s as Playground,t as Sizes,o as States,l as Variants,u as __namedExportsOrder,p as default};
