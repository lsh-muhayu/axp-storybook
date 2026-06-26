import{j as e}from"./iframe-DYg_Yz3e.js";import{B as t}from"./button-dK5a1hsY.js";import{c as m}from"./createLucideIcon-Bn7NS9Re.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4i-suBA.js";import"./index-jsBJ0-f-.js";const y=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],B=m("arrow-right",y);const j=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],b=m("download",j);const w=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],v=m("plus",w);const k=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],N=m("trash-2",k),C={title:"M1/Actions/Button",component:t,parameters:{layout:"centered",docs:{description:{component:["프로젝트 공통 **Button** 컴포넌트입니다.","","- `variant`: 시각적 형태 (filled / outline / soft / ghost / destructive / link)","- `intent`: 의미론적 색상 의도 (default / primary / info / success / warning / danger) — `variant`와 조합","- `size`: 크기 (sm / md / lg, 아이콘 전용 icon / icon-sm / icon-xs)","- `loading`: 스피너 표시 + 자동 비활성화 (`isLoading` 호환 alias 제공)","- `asChild`: Radix `Slot` 으로 자식 요소(`<a>` 등)에 버튼 스타일을 위임","",'`variant`(형태)와 `intent`(색상)는 독립적으로 조합됩니다. 예) `variant="outline" intent="danger"`.'].join(`
`)}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outline","soft","ghost","destructive","link"],description:"시각적 형태",table:{category:"스타일",defaultValue:{summary:"default(=filled)"}}},intent:{control:"select",options:["default","primary","info","success","warning","danger"],description:"의미론적 색상 의도 (variant와 조합)",table:{category:"스타일",defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md","lg","icon","icon-sm","icon-xs"],description:"크기",table:{category:"스타일",defaultValue:{summary:"default(=md)"}}},loading:{control:"boolean",description:"로딩 상태 (스피너 표시 + 비활성화)",table:{category:"상태"}},disabled:{control:"boolean",description:"비활성화",table:{category:"상태"}},asChild:{control:"boolean",description:"Radix Slot 으로 자식 요소에 스타일 위임",table:{category:"동작"}},children:{control:"text",description:"버튼 내용",table:{category:"내용"}},onClick:{action:"clicked",table:{category:"이벤트"}}},args:{children:"버튼",variant:"filled",intent:"default",size:"md",loading:!1,disabled:!1,asChild:!1}},r={},p=({label:n,children:g})=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-24 shrink-0 text-xs font-medium text-text-sub",children:n}),e.jsx("div",{className:"flex flex-wrap items-center gap-3",children:g})]}),a={render:n=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(t,{...n,variant:"filled",children:"Filled"}),e.jsx(t,{...n,variant:"outline",children:"Outline"}),e.jsx(t,{...n,variant:"soft",children:"Soft"}),e.jsx(t,{...n,variant:"ghost",children:"Ghost"}),e.jsx(t,{...n,variant:"destructive",children:"Destructive"}),e.jsx(t,{...n,variant:"link",children:"Link"})]})},s={render:n=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(t,{...n,intent:"default",children:"Default"}),e.jsx(t,{...n,intent:"primary",children:"Primary"}),e.jsx(t,{...n,intent:"info",children:"Info"}),e.jsx(t,{...n,intent:"success",children:"Success"}),e.jsx(t,{...n,intent:"warning",children:"Warning"}),e.jsx(t,{...n,intent:"danger",children:"Danger"})]})},i={parameters:{docs:{description:{story:"variant(형태)와 intent(색상)를 조합한 전체 매트릭스입니다."}}},render:n=>{const g=["filled","outline","soft","ghost"],f=["primary","info","success","warning","danger"];return e.jsx("div",{className:"flex flex-col gap-4",children:g.map(x=>e.jsx(p,{label:x,children:f.map(h=>e.jsx(t,{...n,variant:x,intent:h,children:h},h))},x))})}},o={render:n=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(t,{...n,size:"sm",children:"Small"}),e.jsx(t,{...n,size:"md",children:"Medium"}),e.jsx(t,{...n,size:"lg",children:"Large"})]})},l={render:n=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(p,{label:"leading",children:[e.jsxs(t,{...n,children:[e.jsx(v,{}),"항목 추가"]}),e.jsxs(t,{...n,variant:"outline",children:[e.jsx(b,{}),"다운로드"]})]}),e.jsx(p,{label:"trailing",children:e.jsxs(t,{...n,variant:"soft",children:["다음",e.jsx(B,{})]})}),e.jsxs(p,{label:"icon only",children:[e.jsx(t,{...n,size:"icon","aria-label":"추가",children:e.jsx(v,{})}),e.jsx(t,{...n,size:"icon-sm",variant:"outline","aria-label":"삭제",children:e.jsx(N,{})}),e.jsx(t,{...n,size:"icon-xs",variant:"ghost","aria-label":"추가",children:e.jsx(v,{})})]})]})},c={args:{loading:!0,children:"처리 중"},render:n=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(t,{...n,variant:"filled"}),e.jsx(t,{...n,variant:"outline"}),e.jsx(t,{...n,variant:"soft"})]})},d={args:{disabled:!0},render:n=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(t,{...n,variant:"filled",children:"Filled"}),e.jsx(t,{...n,variant:"outline",children:"Outline"}),e.jsx(t,{...n,variant:"destructive",children:"Destructive"})]})},u={args:{asChild:!0,variant:"link",intent:"primary"},render:n=>e.jsx(t,{...n,children:e.jsx("a",{href:"https://storybook.js.org",target:"_blank",rel:"noreferrer",children:"Storybook 문서 열기"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Controls 패널로 모든 속성 조합을 자유롭게 실험합니다.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="filled">
        Filled
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="soft">
        Soft
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"시각적 형태(variant) 전체",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-3">
      <Button {...args} intent="default">
        Default
      </Button>
      <Button {...args} intent="primary">
        Primary
      </Button>
      <Button {...args} intent="info">
        Info
      </Button>
      <Button {...args} intent="success">
        Success
      </Button>
      <Button {...args} intent="warning">
        Warning
      </Button>
      <Button {...args} intent="danger">
        Danger
      </Button>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"의미론적 색상 의도(intent) — filled 형태 기준",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'variant(형태)와 intent(색상)를 조합한 전체 매트릭스입니다.'
      }
    }
  },
  render: args => {
    const variants = ['filled', 'outline', 'soft', 'ghost'] as const;
    const intents = ['primary', 'info', 'success', 'warning', 'danger'] as const;
    return <div className="flex flex-col gap-4">
        {variants.map(variant => <Row key={variant} label={variant}>
            {intents.map(intent => <Button key={intent} {...args} variant={variant} intent={intent}>
                {intent}
              </Button>)}
          </Row>)}
      </div>;
  }
}`,...i.parameters?.docs?.source},description:{story:`variant × intent 조합 매트릭스.
형태(행)와 색상(열)이 독립적으로 조합되는 방식을 한눈에 확인합니다.`,...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"크기(size) 전체",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Row label="leading">
        <Button {...args}>
          <Plus />
          항목 추가
        </Button>
        <Button {...args} variant="outline">
          <Download />
          다운로드
        </Button>
      </Row>
      <Row label="trailing">
        <Button {...args} variant="soft">
          다음
          <ArrowRight />
        </Button>
      </Row>
      <Row label="icon only">
        <Button {...args} size="icon" aria-label="추가">
          <Plus />
        </Button>
        <Button {...args} size="icon-sm" variant="outline" aria-label="삭제">
          <Trash2 />
        </Button>
        <Button {...args} size="icon-xs" variant="ghost" aria-label="추가">
          <Plus />
        </Button>
      </Row>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"아이콘과 함께 사용 (leading / trailing / 아이콘 전용)",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: '처리 중'
  },
  render: args => <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="filled" />
      <Button {...args} variant="outline" />
      <Button {...args} variant="soft" />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"로딩 상태 — 스피너 표시 및 자동 비활성화",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="filled">
        Filled
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"비활성화 상태",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: true,
    variant: 'link',
    intent: 'primary'
  },
  render: args => <Button {...args}>
      <a href="https://storybook.js.org" target="_blank" rel="noreferrer">
        Storybook 문서 열기
      </a>
    </Button>
}`,...u.parameters?.docs?.source},description:{story:"`asChild` 로 링크(`<a>`)에 버튼 스타일을 위임합니다.\n자식 요소가 실제 DOM으로 렌더링됩니다.",...u.parameters?.docs?.description}}};const L=["Playground","Variants","Intents","Matrix","Sizes","WithIcons","Loading","Disabled","AsChildLink"];export{u as AsChildLink,d as Disabled,s as Intents,c as Loading,i as Matrix,r as Playground,o as Sizes,a as Variants,l as WithIcons,L as __namedExportsOrder,C as default};
