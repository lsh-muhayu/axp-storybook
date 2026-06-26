import{r as o,j as e,c as t}from"./iframe-DYg_Yz3e.js";import"./preload-helper-PPVm8Dsz.js";const b=o.forwardRef(({className:a,...s},d)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:d,className:t("w-full caption-bottom text-sm",a),...s})}));b.displayName="Table";const p=o.forwardRef(({className:a,...s},d)=>e.jsx("thead",{ref:d,className:t("[&_tr]:border-b",a),...s}));p.displayName="TableHeader";const T=o.forwardRef(({className:a,...s},d)=>e.jsx("tbody",{ref:d,className:t("[&_tr:last-child]:border-0",a),...s}));T.displayName="TableBody";const x=o.forwardRef(({className:a,...s},d)=>e.jsx("tfoot",{ref:d,className:t("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",a),...s}));x.displayName="TableFooter";const c=o.forwardRef(({className:a,...s},d)=>e.jsx("tr",{ref:d,className:t("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",a),...s}));c.displayName="TableRow";const i=o.forwardRef(({className:a,...s},d)=>e.jsx("th",{ref:d,className:t("text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",a),...s}));i.displayName="TableHead";const m=o.forwardRef(({className:a,...s},d)=>e.jsx("td",{ref:d,className:t("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s}));m.displayName="TableCell";const h=o.forwardRef(({className:a,...s},d)=>e.jsx("caption",{ref:d,className:t("text-muted-foreground mt-4 text-sm",a),...s}));h.displayName="TableCaption";const y=o.forwardRef(({className:a,colSpan:s,message:d,...f},w)=>e.jsx(c,{ref:w,className:t("hover:bg-transparent",a),...f,children:e.jsx(m,{colSpan:s,className:"h-24 text-center",children:e.jsx("div",{className:"rounded-lg bg-canvas py-12",children:e.jsx("p",{className:"text-muted-foreground",children:d})})})}));y.displayName="TableEmptyRow";const l=Object.assign(b,{Header:p,Body:T,Footer:x,Row:c,Head:i,HeadCell:i,Cell:m,Caption:h,EmptyRow:y});b.__docgenInfo={description:"",methods:[],displayName:"Table"};p.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};T.__docgenInfo={description:"",methods:[],displayName:"TableBody"};x.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};i.__docgenInfo={description:"",methods:[],displayName:"TableHead"};c.__docgenInfo={description:"",methods:[],displayName:"TableRow"};m.__docgenInfo={description:"",methods:[],displayName:"TableCell"};h.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};y.__docgenInfo={description:"",methods:[],displayName:"TableEmptyRow",props:{colSpan:{required:!0,tsType:{name:"number"},description:""},message:{required:!0,tsType:{name:"string"},description:""}}};const N={title:"M1/Data Display/Table",component:l,parameters:{layout:"padded",docs:{description:{component:"컴파운드 테이블입니다. `Table.Header`/`Table.Body`/`Table.Row`/`Table.Head`/`Table.Cell` 등을 조합합니다."}}},tags:["autodocs"]},u=[{id:"P-001",title:"반도체 공정",status:"분석완료"},{id:"P-002",title:"배터리 셀",status:"진행중"},{id:"P-003",title:"디스플레이",status:"대기"}],r={render:()=>e.jsxs(l,{className:"max-w-xl",children:[e.jsx(l.Caption,{children:"특허 목록"}),e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"ID"}),e.jsx(l.Head,{children:"제목"}),e.jsx(l.Head,{children:"상태"})]})}),e.jsx(l.Body,{children:u.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.id}),e.jsx(l.Cell,{children:a.title}),e.jsx(l.Cell,{children:a.status})]},a.id))})]})},n={render:()=>e.jsxs(l,{className:"max-w-xl",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"ID"}),e.jsx(l.Head,{children:"제목"}),e.jsx(l.Head,{children:"상태"})]})}),e.jsx(l.Body,{children:e.jsx(l.EmptyRow,{colSpan:3,message:"데이터가 없습니다."})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Table className="max-w-xl">
      <Table.Caption>특허 목록</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>ID</Table.Head>
          <Table.Head>제목</Table.Head>
          <Table.Head>상태</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map(row => <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.title}</Table.Cell>
            <Table.Cell>{row.status}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Table className="max-w-xl">
      <Table.Header>
        <Table.Row>
          <Table.Head>ID</Table.Head>
          <Table.Head>제목</Table.Head>
          <Table.Head>상태</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.EmptyRow colSpan={3} message="데이터가 없습니다." />
      </Table.Body>
    </Table>
}`,...n.parameters?.docs?.source}}};const R=["Default","Empty"];export{r as Default,n as Empty,R as __namedExportsOrder,N as default};
