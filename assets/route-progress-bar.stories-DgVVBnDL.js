import{j as a}from"./iframe-DYg_Yz3e.js";import"./preload-helper-PPVm8Dsz.js";const o={title:"M2/RouteProgressBar",parameters:{layout:"fullscreen",docs:{description:{component:`
### 라우터 네비게이션 진행 표시 바

페이지 최상단에 고정(fixed)되는 그라데이션 진행 바입니다. React Router 7의 \`useNavigation().state === 'loading'\` 상태에 연동되어 라우트 전환 중 자동으로 표시·숨김되며, 라우터 없이 직접 mount하면 아무것도 렌더하지 않습니다.

## 주요 기능

- **라우터 연동**: \`useNavigation().state === 'loading'\` 구독 — 전환 시작 시 자동 표시
- **깜빡임 방지**: DEFER_DELAY(200ms) 후에만 바를 표시 — 빠른 전환에서 불필요한 깜빡임 없음
- **자동 진행**: 전환 중 0 → 90%까지 점진적으로 증가, 완료 시 100%로 채운 뒤 300ms 후 숨김
- **로직/표현 분리**: \`useRouteProgress(isNavigating)\` 훅이 진행 상태를 담당 — 테스트 가능
- **접근성**: \`role="progressbar"\` + \`aria-valuenow/min/max\` 자동 설정
- **z-index**: \`z-global-loading\` 토큰 — 모달·토스트 아래, 일반 콘텐츠 위

> **Storybook 한계**: \`RouteProgressBar\`는 내부에서 \`useNavigation()\`을 호출하므로 라우터 컨텍스트 없이 렌더하면 \`isLoading = false\`로 고정돼 아무것도 표시되지 않습니다. 따라서 이 페이지에서는 **동일한 HTML 구조를 직접 그린 정적 프리뷰**로 외형을 시연합니다. 실제 동작(200ms 딜레이, 진행 애니메이션, 완료 후 숨김)은 앱 내 라우트 전환에서 확인하세요.

## 사용 예시

\`\`\`tsx
// MainLayout.tsx — 레이아웃 루트에 한 번만 배치
import { RouteProgressBar } from '@/shared/ui/route-progress-bar';

export function MainLayout() {
  return (
    <>
      <RouteProgressBar />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
\`\`\`
        `}}},tags:["autodocs"],argTypes:{className:{control:"text",description:"바 요소에 추가할 CSS 클래스. 높이·색상 재정의 등 예외적인 커스터마이징에 사용합니다. 일반적으로 전달할 필요가 없습니다.",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"스타일"}}}},r={parameters:{docs:{description:{story:`
라우트 전환 중 표시되는 진행 바의 외형을 **정적으로** 시연합니다.

실제 컴포넌트는 \`useNavigation()\` 상태에 따라 0→90% 자동 증가 → 완료 시 100% → 숨김 순서로 동작합니다.
아래 세 단계는 각각 전환 초반(30%) / 중반(60%) / 후반(90%) 시점의 스냅샷입니다.
        `}}},render:()=>a.jsxs("div",{className:"flex flex-col gap-10 p-8",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-sm font-semibold text-m2-gray-1",children:"30% — 전환 초반"}),a.jsx("div",{className:"relative h-4 w-full overflow-hidden rounded",children:a.jsx("div",{role:"progressbar","aria-valuenow":30,"aria-valuemin":0,"aria-valuemax":100,className:"h-1 bg-[linear-gradient(to_right,var(--color-m2-primary-light),var(--color-m2-primary),var(--color-m2-primary-dark))] shadow-[0_10px_15px_-3px_rgba(0,194,255,0.3)] transition-all duration-200 ease-out",style:{width:"30%"}})})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-sm font-semibold text-m2-gray-1",children:"60% — 전환 중반"}),a.jsx("div",{className:"relative h-4 w-full overflow-hidden rounded",children:a.jsx("div",{role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,className:"h-1 bg-[linear-gradient(to_right,var(--color-m2-primary-light),var(--color-m2-primary),var(--color-m2-primary-dark))] shadow-[0_10px_15px_-3px_rgba(0,194,255,0.3)] transition-all duration-200 ease-out",style:{width:"60%"}})})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-sm font-semibold text-m2-gray-1",children:"90% — 전환 후반(자동 증가 상한)"}),a.jsx("div",{className:"relative h-4 w-full overflow-hidden rounded",children:a.jsx("div",{role:"progressbar","aria-valuenow":90,"aria-valuemin":0,"aria-valuemax":100,className:"h-1 bg-[linear-gradient(to_right,var(--color-m2-primary-light),var(--color-m2-primary),var(--color-m2-primary-dark))] shadow-[0_10px_15px_-3px_rgba(0,194,255,0.3)] transition-all duration-200 ease-out",style:{width:"90%"}})})]})]})},e={parameters:{docs:{description:{story:`
## 라우터 연동 코드

\`\`\`tsx
// 1. 레이아웃 루트에 컴포넌트 한 번만 배치
import { RouteProgressBar } from '@/shared/ui/route-progress-bar';

export function MainLayout() {
  return (
    <>
      <RouteProgressBar />   {/* fixed — 레이아웃 흐름에 영향 없음 */}
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

// 2. 내부 동작 (자동 — 별도 설정 불필요)
//    useNavigation().state === 'loading'  →  DEFER_DELAY(200ms) 후 바 표시
//    200ms마다 0 → 90% 점진 증가
//    state → 'idle'  →  즉시 100%  →  300ms 후 숨김
\`\`\`

## 동작 단계

1. **라우트 전환 시작** — \`useNavigation().state\`가 \`'loading'\`으로 전환
2. **DEFER_DELAY(200ms) 대기** — 빠른 전환(캐시 히트 등)에서는 바가 표시되지 않아 깜빡임 방지
3. **0% → 90% 자동 증가** — 200ms 인터벌로 점진 증가. 90%에서 멈춰 완료 전 100%는 표시하지 않음
4. **전환 완료** — \`state\`가 \`'idle'\`로 복귀 → 즉시 100% 채움
5. **300ms 후 숨김** — \`isLoading = false\`로 전환, 바가 DOM에서 제거됨

## 커스터마이징

\`\`\`tsx
{/* 높이만 재정의 — 색상은 m2 그라데이션 유지 */}
<RouteProgressBar className="h-0.5" />
\`\`\`
        `}}},render:()=>a.jsx("div",{className:"p-8",children:a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("h3",{className:"text-sm font-semibold text-m2-gray-1",children:"70% 진행 중 — 실사용 외형"}),a.jsx("p",{className:"text-xs text-m2-secondary",children:"실제 앱에서는 페이지 최상단에 fixed로 표시됩니다. 여기서는 컨테이너 내 정적 프리뷰입니다."}),a.jsx("div",{className:"relative mt-2 h-4 w-full overflow-hidden rounded",children:a.jsx("div",{role:"progressbar","aria-valuenow":70,"aria-valuemin":0,"aria-valuemax":100,className:"h-1 bg-[linear-gradient(to_right,var(--color-m2-primary-light),var(--color-m2-primary),var(--color-m2-primary-dark))] shadow-[0_10px_15px_-3px_rgba(0,194,255,0.3)] transition-all duration-200 ease-out",style:{width:"70%"}})})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
라우트 전환 중 표시되는 진행 바의 외형을 **정적으로** 시연합니다.

실제 컴포넌트는 \\\`useNavigation()\\\` 상태에 따라 0→90% 자동 증가 → 완료 시 100% → 숨김 순서로 동작합니다.
아래 세 단계는 각각 전환 초반(30%) / 중반(60%) / 후반(90%) 시점의 스냅샷입니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-10 p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-m2-gray-1">30% — 전환 초반</h3>
        <div className="relative h-4 w-full overflow-hidden rounded">
          <div role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} className="h-1 bg-[linear-gradient(to_right,var(--color-m2-primary-light),var(--color-m2-primary),var(--color-m2-primary-dark))] shadow-[0_10px_15px_-3px_rgba(0,194,255,0.3)] transition-all duration-200 ease-out" style={{
          width: '30%'
        }} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-m2-gray-1">60% — 전환 중반</h3>
        <div className="relative h-4 w-full overflow-hidden rounded">
          <div role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} className="h-1 bg-[linear-gradient(to_right,var(--color-m2-primary-light),var(--color-m2-primary),var(--color-m2-primary-dark))] shadow-[0_10px_15px_-3px_rgba(0,194,255,0.3)] transition-all duration-200 ease-out" style={{
          width: '60%'
        }} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-m2-gray-1">90% — 전환 후반(자동 증가 상한)</h3>
        <div className="relative h-4 w-full overflow-hidden rounded">
          <div role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} className="h-1 bg-[linear-gradient(to_right,var(--color-m2-primary-light),var(--color-m2-primary),var(--color-m2-primary-dark))] shadow-[0_10px_15px_-3px_rgba(0,194,255,0.3)] transition-all duration-200 ease-out" style={{
          width: '90%'
        }} />
        </div>
      </div>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"진행 중 3단계 외형을 정적으로 시연한다. 실제 progress는 라우터 전환에서 동적으로 변한다.",...r.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
## 라우터 연동 코드

\\\`\\\`\\\`tsx
// 1. 레이아웃 루트에 컴포넌트 한 번만 배치
import { RouteProgressBar } from '@/shared/ui/route-progress-bar';

export function MainLayout() {
  return (
    <>
      <RouteProgressBar />   {/* fixed — 레이아웃 흐름에 영향 없음 */}
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

// 2. 내부 동작 (자동 — 별도 설정 불필요)
//    useNavigation().state === 'loading'  →  DEFER_DELAY(200ms) 후 바 표시
//    200ms마다 0 → 90% 점진 증가
//    state → 'idle'  →  즉시 100%  →  300ms 후 숨김
\\\`\\\`\\\`

## 동작 단계

1. **라우트 전환 시작** — \\\`useNavigation().state\\\`가 \\\`'loading'\\\`으로 전환
2. **DEFER_DELAY(200ms) 대기** — 빠른 전환(캐시 히트 등)에서는 바가 표시되지 않아 깜빡임 방지
3. **0% → 90% 자동 증가** — 200ms 인터벌로 점진 증가. 90%에서 멈춰 완료 전 100%는 표시하지 않음
4. **전환 완료** — \\\`state\\\`가 \\\`'idle'\\\`로 복귀 → 즉시 100% 채움
5. **300ms 후 숨김** — \\\`isLoading = false\\\`로 전환, 바가 DOM에서 제거됨

## 커스터마이징

\\\`\\\`\\\`tsx
{/* 높이만 재정의 — 색상은 m2 그라데이션 유지 */}
<RouteProgressBar className="h-0.5" />
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => <div className="p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-m2-gray-1">70% 진행 중 — 실사용 외형</h3>
        <p className="text-xs text-m2-secondary">
          실제 앱에서는 페이지 최상단에 fixed로 표시됩니다. 여기서는 컨테이너 내 정적 프리뷰입니다.
        </p>
        <div className="relative mt-2 h-4 w-full overflow-hidden rounded">
          <div role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} className="h-1 bg-[linear-gradient(to_right,var(--color-m2-primary-light),var(--color-m2-primary),var(--color-m2-primary-dark))] shadow-[0_10px_15px_-3px_rgba(0,194,255,0.3)] transition-all duration-200 ease-out" style={{
          width: '70%'
        }} />
        </div>
      </div>
    </div>
}`,...e.parameters?.docs?.source},description:{story:`라우터 연동 방법과 동작 단계를 설명하는 사용법 스토리.
렌더는 progress 70% 정적 바 1개.`,...e.parameters?.docs?.description}}};const t=["Preview","Usage"];export{r as Preview,e as Usage,t as __namedExportsOrder,o as default};
