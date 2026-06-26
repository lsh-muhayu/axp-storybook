import{r as d,j as e,c as g}from"./iframe-DYg_Yz3e.js";import{c as m}from"./index-jsBJ0-f-.js";import{c}from"./createLucideIcon-Bn7NS9Re.js";import"./preload-helper-PPVm8Dsz.js";const f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],A=c("circle-alert",f);const u=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],v=c("circle-check",u);const h=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],p=c("info",h);const y=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],j=c("triangle-alert",y),b=m("relative w-full rounded-xl border px-5 py-4 shadow-sm [&>svg]:absolute [&>svg]:top-5 [&>svg]:left-5 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-8",{variants:{variant:{default:"border-border-default bg-surface text-text-main [&>svg]:text-text-main",destructive:"border-danger-200 bg-danger-50 text-danger-700 [&>svg]:text-danger-600",warning:"border-warning-200 bg-warning-50 text-warning-700 [&>svg]:text-warning-600",success:"border-success-200 bg-success-50 text-success-700 [&>svg]:text-success-600",info:"border-information-200 bg-information-50 text-information-700 [&>svg]:text-information-600",information:"border-information-200 bg-information-50 text-information-700 [&>svg]:text-information-600",danger:"border-danger-200 bg-danger-50 text-danger-700 [&>svg]:text-danger-600"}},defaultVariants:{variant:"default"}}),t=d.forwardRef(({className:r,variant:s,...i},x)=>e.jsx("div",{ref:x,role:"alert",className:g(b({variant:s}),r),...i}));t.displayName="Alert";const n=d.forwardRef(({className:r,...s},i)=>e.jsx("h5",{ref:i,className:g("mb-2 text-base leading-none font-semibold tracking-tight",r),...s}));n.displayName="AlertTitle";const a=d.forwardRef(({className:r,...s},i)=>e.jsx("div",{ref:i,className:g("text-sm [&_p]:leading-relaxed",r),...s}));a.displayName="AlertDescription";t.__docgenInfo={description:"",methods:[],displayName:"Alert"};n.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};a.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const T={title:"M1/Feedback/Alert",component:t,parameters:{layout:"padded",docs:{description:{component:"인라인 알림 박스입니다. `variant`로 의미를 표현하고 좌측 아이콘을 함께 배치합니다."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","info","success","warning","danger"],description:"의미론적 형태",table:{category:"스타일",defaultValue:{summary:"default"}}},children:{control:!1,table:{disable:!0}}},args:{variant:"default"},decorators:[r=>e.jsx("div",{className:"w-96",children:e.jsx(r,{})})]},l={render:r=>e.jsxs(t,{...r,children:[e.jsx(p,{}),e.jsx(n,{children:"안내"}),e.jsx(a,{children:"기본 알림 메시지입니다."})]})},o={render:()=>e.jsxs("div",{className:"flex w-96 flex-col gap-3",children:[e.jsxs(t,{variant:"info",children:[e.jsx(p,{}),e.jsx(n,{children:"정보"}),e.jsx(a,{children:"정보성 메시지입니다."})]}),e.jsxs(t,{variant:"success",children:[e.jsx(v,{}),e.jsx(n,{children:"성공"}),e.jsx(a,{children:"작업이 완료되었습니다."})]}),e.jsxs(t,{variant:"warning",children:[e.jsx(j,{}),e.jsx(n,{children:"경고"}),e.jsx(a,{children:"주의가 필요합니다."})]}),e.jsxs(t,{variant:"danger",children:[e.jsx(A,{}),e.jsx(n,{children:"오류"}),e.jsx(a,{children:"문제가 발생했습니다."})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Alert {...args}>
      <Info />
      <AlertTitle>안내</AlertTitle>
      <AlertDescription>기본 알림 메시지입니다.</AlertDescription>
    </Alert>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-3">
      <Alert variant="info">
        <Info />
        <AlertTitle>정보</AlertTitle>
        <AlertDescription>정보성 메시지입니다.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckCircle2 />
        <AlertTitle>성공</AlertTitle>
        <AlertDescription>작업이 완료되었습니다.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>경고</AlertTitle>
        <AlertDescription>주의가 필요합니다.</AlertDescription>
      </Alert>
      <Alert variant="danger">
        <AlertCircle />
        <AlertTitle>오류</AlertTitle>
        <AlertDescription>문제가 발생했습니다.</AlertDescription>
      </Alert>
    </div>
}`,...o.parameters?.docs?.source}}};const D=["Playground","Variants"];export{l as Playground,o as Variants,D as __namedExportsOrder,T as default};
