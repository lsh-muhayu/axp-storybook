import{j as e}from"./iframe-DYg_Yz3e.js";import{A as t,a as l,b as o,c as a,d as i,e as n,f as s,g as c,h as g}from"./alert-dialog-B3zoYWew.js";import{B as A}from"./button-dK5a1hsY.js";import"./preload-helper-PPVm8Dsz.js";import"./focusFirstInput-B80sQiYJ.js";import"./index-D8v3JIQ2.js";import"./index-C4i-suBA.js";import"./index-jsBJ0-f-.js";const v={title:"M1/Overlay/AlertDialog",component:t,parameters:{layout:"centered",docs:{description:{component:"확인이 필요한 작업에 사용하는 경고 다이얼로그입니다. `AlertDialogAction`/`AlertDialogCancel`은 Button 스타일을 받습니다."}}},tags:["autodocs"]},r={render:()=>e.jsxs(t,{children:[e.jsx(l,{asChild:!0,children:e.jsx(A,{variant:"destructive",children:"계정 삭제"})}),e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsx(i,{children:"정말 삭제하시겠습니까?"}),e.jsx(n,{children:"삭제된 계정은 복구할 수 없습니다."})]}),e.jsxs(s,{children:[e.jsx(c,{children:"취소"}),e.jsx(g,{variant:"destructive",children:"삭제"})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">계정 삭제</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>삭제된 계정은 복구할 수 없습니다.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction variant="destructive">삭제</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...r.parameters?.docs?.source}}};const C=["Playground"];export{r as Playground,C as __namedExportsOrder,v as default};
