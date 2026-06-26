import{j as o,c as b}from"./iframe-DYg_Yz3e.js";import{I as y}from"./input-Dh4jYs3n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jsBJ0-f-.js";const c={NUMBER_INPUT_KEYS:["-","e","E","+","."],NUMBER_INPUT_REGEX:/[^0-9]/g},a=({className:r,onInput:p,onKeyDown:m,...i})=>{const l=e=>{const t=e.currentTarget;t.blur(),requestAnimationFrame(()=>t.focus())},u=e=>{c.NUMBER_INPUT_KEYS.includes(e.key)&&e.preventDefault(),m?.(e)},d=e=>{const t=e.currentTarget,s=t.value.replace(c.NUMBER_INPUT_REGEX,"");t.value!==s&&(t.value=s),p?.(e)};return o.jsx(y,{type:"number",className:b("[&::-webkit-inner-spin-button]:opacity-100",r),onKeyDown:u,onInput:d,onCompositionStart:l,...i})};a.displayName="NumberInput";a.__docgenInfo={description:`NumberInput - 숫자 전용 입력 컴포넌트

특징:
- 한글 입력 자동 차단 (onCompositionStart)
- 특수 문자 입력 방지 (e, +, -, . 등)
- 정규식 기반 숫자 외 문자 필터링

@example
<NumberInput
  min={0}
  max={100}
  step={1}
  placeholder="숫자를 입력하세요"
/>`,methods:[],displayName:"NumberInput",props:{min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onInput:{required:!1,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""}},composes:["Omit"]};const f={title:"M1/Forms/NumberInput",component:a,parameters:{layout:"centered",docs:{description:{component:"숫자 전용 입력 컴포넌트입니다. 한글/특수문자 입력을 차단하고 숫자만 허용합니다."}}},tags:["autodocs"],argTypes:{min:{control:"number",table:{category:"동작"}},max:{control:"number",table:{category:"동작"}},step:{control:"number",table:{category:"동작"}},placeholder:{control:"text",table:{category:"내용"}},disabled:{control:"boolean",description:"비활성화",table:{category:"상태"}}},args:{min:0,max:100,step:1,placeholder:"숫자를 입력하세요",disabled:!1},decorators:[r=>o.jsx("div",{className:"w-72",children:o.jsx(r,{})})]},n={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};const T=["Playground"];export{n as Playground,T as __namedExportsOrder,f as default};
