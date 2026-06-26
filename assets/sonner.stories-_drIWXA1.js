import{T as r,j as t,t as o}from"./iframe-DYg_Yz3e.js";import{B as n}from"./button-dK5a1hsY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4i-suBA.js";import"./index-jsBJ0-f-.js";const u={title:"M1/Feedback/Sonner",component:r,parameters:{layout:"centered",docs:{description:{component:"토스트 알림(sonner)입니다. `Toaster`는 앱/스토리 전역에 1회 마운트되며, `toast()` 호출로 알림을 띄웁니다."}}},tags:["autodocs"]},a={render:()=>t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(n,{variant:"outline",onClick:()=>o("기본 알림입니다."),children:"기본"}),t.jsx(n,{variant:"outline",onClick:()=>o.success("성공했습니다."),children:"성공"}),t.jsx(n,{variant:"outline",onClick:()=>o.error("오류가 발생했습니다."),children:"오류"}),t.jsx(n,{variant:"outline",onClick:()=>o.warning("주의하세요."),children:"경고"}),t.jsx(n,{variant:"outline",onClick:()=>o.info("정보 메시지입니다."),children:"정보"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast('기본 알림입니다.')}>
        기본
      </Button>
      <Button variant="outline" onClick={() => toast.success('성공했습니다.')}>
        성공
      </Button>
      <Button variant="outline" onClick={() => toast.error('오류가 발생했습니다.')}>
        오류
      </Button>
      <Button variant="outline" onClick={() => toast.warning('주의하세요.')}>
        경고
      </Button>
      <Button variant="outline" onClick={() => toast.info('정보 메시지입니다.')}>
        정보
      </Button>
    </div>
}`,...a.parameters?.docs?.source}}};const d=["Playground"];export{a as Playground,d as __namedExportsOrder,u as default};
