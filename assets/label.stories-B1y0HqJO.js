import{j as o}from"./iframe-DYg_Yz3e.js";import{I as t}from"./input-Dh4jYs3n.js";import{L as a}from"./label-CpaAzMCy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jsBJ0-f-.js";const m={title:"M1/Forms/Label",component:a,parameters:{layout:"centered",docs:{description:{component:"폼 라벨 컴포넌트입니다. `required`를 켜면 빨간 별표(*)를 표시합니다."}}},tags:["autodocs"],argTypes:{required:{control:"boolean",description:"필수 표시(*)",table:{category:"스타일"}},children:{control:"text",table:{category:"내용"}}},args:{children:"이메일",required:!1}},e={},r={render:()=>o.jsxs("div",{className:"flex w-72 flex-col gap-1.5",children:[o.jsx(a,{htmlFor:"email",required:!0,children:"이메일"}),o.jsx(t,{id:"email",placeholder:"you@example.com"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-1.5">
      <Label htmlFor="email" required>
        이메일
      </Label>
      <Input id="email" placeholder="you@example.com" />
    </div>
}`,...r.parameters?.docs?.source}}};const d=["Playground","WithInput"];export{e as Playground,r as WithInput,d as __namedExportsOrder,m as default};
