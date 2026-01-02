# Door Survey – SVG Animation Checklist

목표  
문 조사하기 UI에서 **SVG 기반 애니메이션 에셋을 안정적으로 구현**한다.  
(JS 애니메이션 없이, inline SVG + CSS 방식만 사용)

---

## Phase 0. 작업 환경 준비

- [x] GitHub에서 최신 main 브랜치 pull
- [x] 새 작업 브랜치 생성  
  - 예: feature/door-survey-animation
- [x] 로컬에서 프로젝트 실행 확인 (npm run dev)
- [x] DoorSurvey 화면이 정상적으로 보이는지 확인

---

## Phase 1. 애니메이션 대상 정의 (기획 최소 단위)

- [x] 애니메이션을 적용할 문 타입 1개 선택  
  - 선택: 옆으로 미는 문 (Sliding Door, sliding_door)
- [x] 애니메이션을 적용할 요소 1개 선택  
  - 선택: 문 패널 (door-panel 그룹)
- [x] 애니메이션 트리거 1개 선택  
  - 선택: selected 상태 (doorType === option.value)
- [x] 애니메이션 목적을 한 줄로 정의  
  - 정의: 문이 살짝 옆으로 열리는 느낌

---

## Phase 2. 정적 SVG 에셋 확정

- [x] SVG는 React 컴포넌트(inline SVG)로 사용
- [x] SVG 파일을 별도 파일로 분리  
  - 생성: components/icons/SlidingDoorIcon.tsx
- [x] viewBox 설정 확인
  - 확인: viewBox="0 0 96 96" (모든 좌표가 0~96 범위 내에 적절히 배치됨)
- [x] stroke / fill 이 currentColor 기반인지 확인
  - 확인: 모든 stroke가 "currentColor" 사용, fill="none" (정상)
- [x] 애니메이션 없이 정적으로 정상 렌더링되는지 확인

---

## Phase 3. SVG 내부 구조 분리 (애니메이션 준비)

- [x] 움직일 요소를 g 태그로 감쌈
  - 확인: 이미 `<g className="door-panel">`로 문 패널과 손잡이가 묶여 있음
- [x] g 태그에 명확한 className 부여  
  - 확인: className="door-panel"이 이미 부여되어 있음
- [x] 고정 요소와 움직이는 요소가 분리되었는지 확인
  - 확인: 외곽 프레임과 상단 가로선은 고정, door-panel 그룹은 움직임 가능
- [x] 구조 변경 후 정적 렌더링 재확인

---

## Phase 4. 애니메이션 방식 결정

- [x] 애니메이션 방식 하나만 선택  
  - 선택: CSS transition
- [x] JS 애니메이션은 사용하지 않기로 결정
  - 결정: CSS transition만 사용, JavaScript 애니메이션 사용 안 함
- [x] duration / easing 값을 한 줄로 정의  
  - 정의: 200ms ease-out

---

## Phase 5. CSS에서 SVG 애니메이션 참조

- [x] CSS에서 SVG 내부 요소를 className으로 직접 참조
  - 확인: index.css에 SVG 애니메이션 스타일 섹션 추가, .door-panel 클래스로 참조 가능
- [x] 기본 상태(닫힘) 정의
  - 정의: .door-panel { transform: translateX(0); } - 문 패널이 원래 위치(왼쪽)에 있음
- [x] 활성 상태(열림) 정의
  - 정의: svg.door-selected g.door-panel { transform: translateX(16px); } - 문 패널이 오른쪽으로 16px 이동 (문 패널 너비의 약 62%, 적당한 효과)
- [x] transform 기반 애니메이션만 사용
  - 확인: 모든 애니메이션이 transform 기반으로 작성됨, left/top/margin 등 사용 안 함

---

## Phase 6. React 상태와 애니메이션 연결

- [x] SVG 최상위(svg)에 상태용 className 적용
  - 적용: SlidingDoorIcon에 selected prop 추가, selected일 때 SVG에 "selected" className 적용
- [x] 선택/클릭 상태에 따라 className 토글
  - 확인: 버튼 클릭 시 doorType 변경 → selected 값 변경 → Icon에 selected prop 전달 → SVG className 토글
- [x] 애니메이션 로직을 JS로 작성하지 않음
  - 확인: 모든 애니메이션이 CSS transition으로 처리됨, JavaScript 애니메이션 코드 없음

---

## Phase 7. 크기 및 정렬 조정

- [x] SVG 크기는 className(w / h)로만 조절
  - 확인: Icon에 className="w-6 h-6"로 크기 조절, viewBox는 수정하지 않음
- [x] viewBox는 수정하지 않음
  - 확인: viewBox="0 0 96 96"이 그대로 유지됨
- [x] 버튼 텍스트와 수직 정렬 확인
  - 확인: 아이콘과 텍스트가 수직으로 잘 정렬되어 있음
- [x] 모바일 화면에서 잘림 여부 확인
  - 확인: 모바일 화면에서도 정상적으로 표시됨
- [x] 애니메이션 에셋 크기 조정
  - 변경: w-6 h-6 (24px × 24px) → w-10 h-10 (40px × 40px)
  - 방법: DoorSurvey.tsx에서 모든 Icon의 className을 !w-10 !h-10으로 변경
  - 문제: Button 컴포넌트의 [&_svg]:size-4 스타일이 아이콘 크기를 오버라이드함
  - 해결: Tailwind의 ! prefix를 사용하여 important 적용 (!w-10 !h-10)
  - 주의: viewBox는 수정하지 않음, className만 변경
- [x] SwingDoorIcon 디자인 개선
  - 변경: 기존 단순한 디자인에서 상세한 디자인으로 개선
  - 추가 요소: Frame, Hinge line (왼쪽 경첩선), Door leaf (문 패널, door-leaf 클래스), Handle (손잡이), Small motion hint (스윙 호)
  - 특징: door-leaf 그룹에 transform-origin="30px 48px" 설정으로 경첩 기준 회전 가능
  - 위치: components/icons/SwingDoorIcon.tsx 파일로 분리됨
- [x] SwingDoorIcon 별도 파일로 분리
  - 생성: components/icons/SwingDoorIcon.tsx
  - DoorSurvey.tsx에서 SwingDoorIcon 코드 제거 및 import로 변경

---

## Phase 8. 안정성 점검 (중요)

- [x] SVG 아이콘 코드는 페이지 파일에 직접 포함되지 않음
  - 확인: SlidingDoorIcon과 SwingDoorIcon이 별도 파일에서 import됨
  - SlidingDoorIcon: components/icons/SlidingDoorIcon.tsx
  - SwingDoorIcon: components/icons/SwingDoorIcon.tsx
- [x] 아이콘은 반드시 별도 파일에서 import 됨
  - 확인: DoorSurvey.tsx에서 SlidingDoorIcon과 SwingDoorIcon을 import하여 사용함
- [ ] 저장 / 새로고침 / 재실행 시 코드가 사라지지 않음
- [ ] 다른 버튼이나 UI에 영향이 없는지 확인

---

## Phase 9. 코드 정리 및 커밋

- [ ] 사용하지 않는 class / prop 제거
- [ ] 애니메이션 관련 코드에 한 줄 주석 추가
- [ ] 변경 파일 확인 (git status)
- [ ] 커밋 메시지 작성  
  - 예: Add sliding door SVG animation to DoorSurvey
- [ ] 브랜치 push 및 PR 생성

---

## 작업 원칙 요약

- 한 번에 체크리스트 1칸만 처리
- SVG는 이미지가 아닌 DOM 요소로 다룬다
- 애니메이션은 CSS만 사용
- 구조 → 스타일 → 상태 연결 순서를 지킨다

---

## 완료 기준

- [ ] 문 아이콘이 정상 렌더링된다
- [ ] 상태 변경 시 애니메이션이 자연스럽다
- [ ] 코드 유실 없이 안정적으로 저장된다

---

다음 단계  
- [ ] hover 애니메이션 추가 여부 결정
