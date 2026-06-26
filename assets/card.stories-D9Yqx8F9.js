import{j as a,c as t}from"./iframe-DYg_Yz3e.js";import{B as u}from"./button-dK5a1hsY.js";import{c as C}from"./index-jsBJ0-f-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4i-suBA.js";const x=C("group/card flex flex-col gap-4 overflow-hidden rounded-lg bg-surface py-5 text-sm text-text-main ring-1 ring-border-default/60 transition-shadow duration-200 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-4 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg",{variants:{variant:{default:"shadow-sm hover:shadow-md",elevated:"shadow-md ring-0 hover:shadow-lg",outlined:"shadow-none ring-1"}},defaultVariants:{variant:"default"}});function o({className:e,size:r="default",variant:f="default",...g}){return a.jsx("div",{"data-slot":"card","data-size":r,className:t(x({variant:f}),e),...g})}function n({className:e,...r}){return a.jsx("div",{"data-slot":"card-header",className:t("group/card-header @container/card-header grid auto-rows-min items-start gap-2 rounded-t-lg px-5 group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-5 group-data-[size=sm]/card:[.border-b]:pb-4",e),...r})}function i({className:e,...r}){return a.jsx("div",{"data-slot":"card-title",className:t("text-lg leading-snug font-semibold group-data-[size=sm]/card:text-base",e),...r})}function l({className:e,...r}){return a.jsx("div",{"data-slot":"card-description",className:t("text-muted-foreground text-sm leading-relaxed",e),...r})}function m({className:e,...r}){return a.jsx("div",{"data-slot":"card-action",className:t("col-start-2 row-span-2 row-start-1 self-start justify-self-end",e),...r})}function c({className:e,...r}){return a.jsx("div",{"data-slot":"card-content",className:t("px-5 group-data-[size=sm]/card:px-4",e),...r})}function p({className:e,...r}){return a.jsx("div",{"data-slot":"card-footer",className:t("bg-muted/50 flex items-center rounded-b-lg border-t p-5 group-data-[size=sm]/card:p-4",e),...r})}o.__docgenInfo={description:"",methods:[],displayName:"Card",props:{size:{required:!1,tsType:{name:"union",raw:"'default' | 'sm'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sm'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};p.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};i.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};m.__docgenInfo={description:"",methods:[],displayName:"CardAction"};l.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};c.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const N={title:"M1/Data Display/Card",component:o,parameters:{layout:"centered",docs:{description:{component:"콘텐츠 컨테이너 카드입니다. `variant`(그림자/테두리)와 `size`를 제공하며 Header/Content/Footer로 구성합니다."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","elevated","outlined"],description:"시각적 형태",table:{category:"스타일",defaultValue:{summary:"default"}}},size:{control:"select",options:["default","sm"],description:"크기(여백)",table:{category:"스타일",defaultValue:{summary:"default"}}}},args:{variant:"default",size:"default"}},d={render:e=>a.jsxs(o,{...e,className:"w-80",children:[a.jsxs(n,{children:[a.jsx(i,{children:"특허 분석 리포트"}),a.jsx(l,{children:"2026년 6월 생성된 분석 결과입니다."}),a.jsx(m,{children:a.jsx(u,{size:"icon-sm",variant:"ghost","aria-label":"더보기",children:"···"})})]}),a.jsx(c,{children:"본문 내용이 여기에 표시됩니다."}),a.jsx(p,{children:a.jsx(u,{size:"sm",children:"열기"})})]})},s={render:()=>a.jsx("div",{className:"flex flex-wrap gap-4",children:["default","elevated","outlined"].map(e=>a.jsxs(o,{variant:e,className:"w-56",children:[a.jsxs(n,{children:[a.jsx(i,{children:e}),a.jsx(l,{children:"variant 예시"})]}),a.jsx(c,{children:"카드 본문"})]},e))})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>특허 분석 리포트</CardTitle>
        <CardDescription>2026년 6월 생성된 분석 결과입니다.</CardDescription>
        <CardAction>
          <Button size="icon-sm" variant="ghost" aria-label="더보기">
            ···
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>본문 내용이 여기에 표시됩니다.</CardContent>
      <CardFooter>
        <Button size="sm">열기</Button>
      </CardFooter>
    </Card>
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      {(['default', 'elevated', 'outlined'] as const).map(variant => <Card key={variant} variant={variant} className="w-56">
          <CardHeader>
            <CardTitle>{variant}</CardTitle>
            <CardDescription>variant 예시</CardDescription>
          </CardHeader>
          <CardContent>카드 본문</CardContent>
        </Card>)}
    </div>
}`,...s.parameters?.docs?.source}}};const w=["Playground","Variants"];export{d as Playground,s as Variants,w as __namedExportsOrder,N as default};
