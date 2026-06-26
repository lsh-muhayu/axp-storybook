import{l as i,j as o,m as s,n}from"./iframe-DYg_Yz3e.js";import{B as a}from"./button-dK5a1hsY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4i-suBA.js";import"./index-jsBJ0-f-.js";const u={title:"M1/Data Display/Tooltip",component:i,parameters:{layout:"centered",docs:{description:{component:"호버/포커스 시 보조 설명을 띄우는 툴팁입니다. `TooltipProvider`는 전역으로 제공됩니다."}}},tags:["autodocs"]},e={render:()=>o.jsxs(i,{children:[o.jsx(s,{asChild:!0,children:o.jsx(a,{variant:"outline",children:"마우스를 올려보세요"})}),o.jsx(n,{children:"도움말 텍스트입니다."})]})},r={render:()=>o.jsx("div",{className:"flex gap-4",children:["top","right","bottom","left"].map(t=>o.jsxs(i,{children:[o.jsx(s,{asChild:!0,children:o.jsx(a,{variant:"outline",size:"sm",children:t})}),o.jsxs(n,{side:t,children:[t," 방향"]})]},t))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">마우스를 올려보세요</Button>
      </TooltipTrigger>
      <TooltipContent>도움말 텍스트입니다.</TooltipContent>
    </Tooltip>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map(side => <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>{side} 방향</TooltipContent>
        </Tooltip>)}
    </div>
}`,...r.parameters?.docs?.source}}};const T=["Playground","Sides"];export{e as Playground,r as Sides,T as __namedExportsOrder,u as default};
