import{j as e}from"./iframe-DYg_Yz3e.js";import{S as r}from"./separator-Bksso7kF.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"M1/Data Display/Separator",component:r,parameters:{layout:"centered",docs:{description:{component:"콘텐츠 구분선입니다. 가로/세로 방향을 지원합니다."}}},tags:["autodocs"]},a={render:()=>e.jsxs("div",{className:"w-64",children:[e.jsx("p",{className:"text-sm",children:"위 콘텐츠"}),e.jsx(r,{className:"my-3"}),e.jsx("p",{className:"text-sm",children:"아래 콘텐츠"})]})},s={render:()=>e.jsxs("div",{className:"flex h-8 items-center gap-3 text-sm",children:[e.jsx("span",{children:"홈"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"문서"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"설정"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <p className="text-sm">위 콘텐츠</p>
      <Separator className="my-3" />
      <p className="text-sm">아래 콘텐츠</p>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-8 items-center gap-3 text-sm">
      <span>홈</span>
      <Separator orientation="vertical" />
      <span>문서</span>
      <Separator orientation="vertical" />
      <span>설정</span>
    </div>
}`,...s.parameters?.docs?.source}}};const i=["Horizontal","Vertical"];export{a as Horizontal,s as Vertical,i as __namedExportsOrder,c as default};
