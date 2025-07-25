# Next.js Template Project

Next.js + TypeScript + Zustand + Testing 예제 프로젝트입니다.

> 이 프로젝트는 [o-az/nextjs-template](https://github.com/o-az/nextjs-template)을 참고하여 만들어졌습니다.

## 기능

- App Router
- Server-Side Rendering (Posts Page)
- Client-Side Rendering (Bears Page)
- TypeScript
- Zustand State Management
- Tailwind CSS
- Testing with Vitest

## 시작하기

먼저, 의존성을 설치합니다:

```bash
pnpm install
```

그런 다음 개발 서버를 실행합니다:

```bash
pnpm dev
```

[http://localhost:3003](http://localhost:3003)에서 결과를 확인할 수 있습니다.

## 스크립트

- `pnpm dev` - 개발 서버 실행
- `pnpm build` - 프로덕션용 빌드
- `pnpm start` - 프로덕션 모드로 실행
- `pnpm lint` - 린트 검사 및 수정
- `pnpm format` - 코드 포맷팅
- `pnpm typecheck` - TypeScript 타입 검사
- `pnpm test` - 테스트 실행
- `pnpm test:watch` - 테스트 감시 모드로 실행
- `pnpm test:coverage` - 테스트 커버리지 리포트 생성
- `pnpm test:ui` - Vitest UI로 테스트 실행
- `pnpm analyze` - 번들 분석

## 프로젝트 구조

```
src/
├── app/                    # Next.js 13 App Router
│   ├── bears/             # Bears 페이지 (CSR 예제)
│   ├── posts/             # Posts 페이지 (SSR 예제)
│   └── server-state/      # Server State 페이지
├── components/            # 재사용 가능한 컴포넌트
├── store/                # Zustand 스토어
├── styles/               # 전역 스타일
├── test/                 # 테스트 유틸리티
└── utilities/            # 유틸리티 함수
```

## 테스트

이 프로젝트는 Vitest를 사용하여 테스트를 실행합니다. 다음 명령어로 테스트를 실행할 수 있습니다:

```bash
# 모든 테스트 실행
pnpm test

# 테스트 커버리지 확인
pnpm test:coverage

# 테스트 UI 모드로 실행
pnpm test:ui
```

## 기술 스택

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
