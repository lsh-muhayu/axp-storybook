import{j as r,S as x,c as b}from"./iframe-DYg_Yz3e.js";import{c as v}from"./index-jsBJ0-f-.js";import{C as k}from"./check-CuVRHmkI.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Bn7NS9Re.js";const h=v("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-3 py-1 text-xs font-semibold whitespace-nowrap shadow-sm transition-all duration-200 focus-visible:ring-[3px] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&>svg]:pointer-events-none [&>svg]:size-3!",{variants:{variant:{default:"bg-primary text-primary-foreground [a]:hover:bg-primary/80",filled:"bg-primary text-primary-foreground [a]:hover:bg-primary/80",secondary:"bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",soft:"bg-secondary/50 text-secondary-foreground [a]:hover:bg-secondary/70",destructive:"bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",outline:"border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",ghost:"hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-6 px-3 py-1 text-xs",md:"h-6 px-3 py-1 text-xs",sm:"h-5 px-2 py-0.5 text-[10px]",lg:"h-7 px-4 py-1.5 text-sm"}},defaultVariants:{variant:"default",size:"default"}}),y={default:{filled:"",soft:"",outline:"",ghost:"",link:""},primary:{filled:"bg-primary-600 text-white border-primary-600 dark:bg-primary-500 dark:border-primary-500",soft:"bg-primary-50 text-primary-700 border-primary-100 dark:bg-primary-950 dark:text-primary-300 dark:border-primary-900",outline:"bg-transparent border-primary-500 text-primary-700 dark:border-primary-400 dark:text-primary-300",ghost:"text-primary-700 dark:text-primary-300",link:"text-primary-700 dark:text-primary-300"},info:{filled:"bg-information-600 text-white border-information-600 dark:bg-information-500 dark:border-information-500",soft:"bg-information-50 text-information-700 border-information-100 dark:bg-information-950 dark:text-information-300 dark:border-information-900",outline:"bg-transparent border-information-500 text-information-700 dark:border-information-400 dark:text-information-300",ghost:"text-information-700 dark:text-information-300",link:"text-information-700 dark:text-information-300"},success:{filled:"bg-success-600 text-white border-success-600 dark:bg-success-500 dark:border-success-500",soft:"bg-success-50 text-success-700 border-success-100 dark:bg-success-950 dark:text-success-300 dark:border-success-900",outline:"bg-transparent border-success-500 text-success-700 dark:border-success-400 dark:text-success-300",ghost:"text-success-700 dark:text-success-300",link:"text-success-700 dark:text-success-300"},warning:{filled:"bg-warning-700 text-white border-warning-700 dark:bg-warning-400 dark:text-warning-950 dark:border-warning-400",soft:"bg-warning-50 text-warning-700 border-warning-100 dark:bg-warning-950 dark:text-warning-300 dark:border-warning-900",outline:"bg-transparent border-warning-500 text-warning-700 dark:border-warning-400 dark:text-warning-300",ghost:"text-warning-700 dark:text-warning-300",link:"text-warning-700 dark:text-warning-300"},danger:{filled:"bg-danger-600 text-white border-danger-600 dark:bg-danger-400 dark:text-danger-950 dark:border-danger-400",soft:"bg-danger-50 text-danger-700 border-danger-100 dark:bg-danger-950 dark:text-danger-300 dark:border-danger-900",outline:"bg-transparent border-danger-500 text-danger-700 dark:border-danger-400 dark:text-danger-300",ghost:"text-danger-700 dark:text-danger-300",link:"text-danger-700 dark:text-danger-300"}};function w(e){switch(e){case"filled":case"default":return"filled";case"secondary":case"soft":return"soft";case"destructive":return"soft";case"outline":return"outline";case"ghost":return"ghost";case"link":return"link";default:return"filled"}}function B(e,s){const t=s;let n="";if(t&&t!=="default"){const g=w(e);n=y[t][g]}return{cvaVariant:e,intentClass:n}}function a({className:e,variant:s="default",size:t="default",asChild:n=!1,intent:g,...f}){const m=n?x:"span",{cvaVariant:u,intentClass:p}=B(s,g);return r.jsx(m,{"data-slot":"badge","data-variant":u,className:b(h({variant:u,size:t}),p,e),...f})}a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},intent:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:`의미론적 색상 의도를 지정합니다.
variant(시각적 형태)와 조합하여 사용합니다.

@example
<Badge variant="filled" intent="success">완료</Badge>
<Badge variant="soft" intent="danger">실패</Badge>
<Badge variant="outline" intent="info">정보</Badge>`},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};const q={title:"M1/Data Display/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:"상태/카테고리 표시용 배지입니다. `variant`(형태)와 `intent`(색상)를 독립적으로 조합합니다."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","soft","outline","ghost","link","secondary","destructive"],description:"시각적 형태",table:{category:"스타일",defaultValue:{summary:"default(=filled)"}}},intent:{control:"select",options:["default","primary","info","success","warning","danger"],description:"의미론적 색상 의도",table:{category:"스타일",defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","default","lg"],description:"크기",table:{category:"스타일",defaultValue:{summary:"default"}}},children:{control:"text",table:{category:"내용"}}},args:{children:"배지",variant:"filled",intent:"default",size:"default"}},j=({label:e,children:s})=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("span",{className:"w-16 shrink-0 text-xs font-medium text-text-sub",children:e}),r.jsx("div",{className:"flex flex-wrap items-center gap-2",children:s})]}),i={},d={render:e=>r.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.jsx(a,{...e,variant:"filled",children:"filled"}),r.jsx(a,{...e,variant:"soft",children:"soft"}),r.jsx(a,{...e,variant:"outline",children:"outline"}),r.jsx(a,{...e,variant:"ghost",children:"ghost"}),r.jsx(a,{...e,variant:"link",children:"link"})]})},o={render:()=>{const e=["filled","soft","outline","ghost"],s=["primary","info","success","warning","danger"];return r.jsx("div",{className:"flex flex-col gap-3",children:e.map(t=>r.jsx(j,{label:t,children:s.map(n=>r.jsx(a,{variant:t,intent:n,children:n},n))},t))})}},l={render:e=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(a,{...e,size:"sm",children:"sm"}),r.jsx(a,{...e,size:"default",children:"default"}),r.jsx(a,{...e,size:"lg",children:"lg"})]})},c={render:e=>r.jsxs(a,{...e,intent:"success",variant:"soft",children:[r.jsx(k,{}),"완료"]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-2">
      <Badge {...args} variant="filled">
        filled
      </Badge>
      <Badge {...args} variant="soft">
        soft
      </Badge>
      <Badge {...args} variant="outline">
        outline
      </Badge>
      <Badge {...args} variant="ghost">
        ghost
      </Badge>
      <Badge {...args} variant="link">
        link
      </Badge>
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = ['filled', 'soft', 'outline', 'ghost'] as const;
    const intents = ['primary', 'info', 'success', 'warning', 'danger'] as const;
    return <div className="flex flex-col gap-3">
        {variants.map(variant => <Row key={variant} label={variant}>
            {intents.map(intent => <Badge key={intent} variant={variant} intent={intent}>
                {intent}
              </Badge>)}
          </Row>)}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-2">
      <Badge {...args} size="sm">
        sm
      </Badge>
      <Badge {...args} size="default">
        default
      </Badge>
      <Badge {...args} size="lg">
        lg
      </Badge>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Badge {...args} intent="success" variant="soft">
      <Check />
      완료
    </Badge>
}`,...c.parameters?.docs?.source}}};const I=["Playground","Variants","Matrix","Sizes","WithIcon"];export{o as Matrix,i as Playground,l as Sizes,d as Variants,c as WithIcon,I as __namedExportsOrder,q as default};
