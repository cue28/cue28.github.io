---
emoji: 💄
title: Husky & commitlint
date: '2021-12-31 19:00:00'
author: Siyoon Jeon
tags: blog
categories: blog
---

### Commint Lint

- 커밋하기전에 바뀐 부분에 대해 lint 검사 통과해야 작성 가능
- @commitlint를 사용해서 해당 commit title만 커밋이 가능

### Husky

- 프론트엔드 개발 환경에서 git hook를 쉽게 제어할 수 있도록 해주는 매니저
- 즉, **eslint가 깨지면 commit 자체를 막는 방법**
- commit 시, commit 자체를 막고 어디가 잘못되었는지 표시해줌
- 리뷰 시, lint에 대한 부분을 고려하지 않아 코드에 집중할 수 있다는 장점이 있음.
- 반면, husky만 적용할 때에 모든 파일을 모두 commit마다 검사하여 시간이 오래걸린다는 단점이 존재함.
- 이에 [lint-staged](https://www.notion.so/b64b9ddd79e5472cb2b9813d669bcd6e)를 사용하여 스테이지에 올라온 파일만 검사하도록 보완함.

### Git Hook

git을 쓰다가 특정 이벤트(commit, push 등)가 벌어졌을 때, 그 순간 ‘갈고리’를 걸어 스트립트가 실행되도록 도와주는 것

![githook](./githook.png)

- Git Hook 단계별 특성
    - **pre-commit** : 커밋 메세지를 작성하기 전에 호출된다.
    - prepare-commit-msg : 커밋 메세지와 관련된 명령을 넣을 때 호출된다.
    - commit-msg : 커밋 메세지와 관련된 명령을 넣을 때 호출된다.
    - post-commit : 커밋이 완료되면 호출된다.

### Version

- v4 : package.json 또는 .huskyrc 파일을 최상위 경로에 만들어서 관리
- v7 : git hook shell 스크립트를 작성하여 .exe 파일을 생성해주듯 해당 프로젝트에 적용

```bash
## 업데이트 4 to 7
npm install husky@latest --save-dev \
  && npx husky-init \
  && npm exec -- github:typicode/husky-4-to-7 --remove-v4-config

## init 과정에서 7.0.0 버전으로 다운그레이드 되기 때문
npm install husky@latest --save-dev
```

```bash
# .husky/commit-msg (v7)
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1

# .husky/pre-commit (v7)
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

📖  [Husky 공식문서](https://typicode.github.io/husky/#/)

### lint-staged

- stage상태의 git 파일에 대해서만 lint와 설정해둔 명령어를 실행해주는 라이브러리
- git add로 커밋 대상이 된 상태인 stage 상태라고 함.

### Version

```bash
npm install lint-staged@12.1.4
```

```jsx
//.lintstagedrc
{
  "*.{js,jsx,ts,tsx}": "eslint"
}
```

📖 [lint-staged](https://www.npmjs.com/package/lint-staged)

### @commitlint

- 커밋 메세지에 대해서 lint를 할 수 있게 해주는 툴
- 깔끔한 커밋 메세지로 유지 보수에 큰 도움이 되는 장점이 있음.

### Version

- @commitlint/cli **v15.0.0**
    - v16 일부 프로젝트에서 ts 오류가 발생함 → 전체 commitlint v15로 다운그레이드
- @commitlint/config-conventional **v.16.0.0**

```bash
npm uninstall @commitlint/cli @commitlint/config-conventional
npm install @commitlint/cli@15 --save-dev
npm install @commitlint/config-conventional@latest --save-dev
```

📖 [@commitlint](https://commitlint.js.org/#/)

---

### 참고

- https://github.com/typicode/husky-4-to-7
- [https://www.huskyhoochu.com/npm-husky-the-git-hook-manager/](https://www.huskyhoochu.com/npm-husky-the-git-hook-manager/)
- [https://www.huskyhoochu.com/how-to-use-lint-staged/](https://www.huskyhoochu.com/how-to-use-lint-staged/)
- [https://medium.com/@pranne1224/경험담-husky-v7-git-hook-사용방법-a9c380e17b30](https://medium.com/@pranne1224/%EA%B2%BD%ED%97%98%EB%8B%B4-husky-v7-git-hook-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95-a9c380e17b30)
- [https://luniverse.io/2021/05/12/simple-git-hooks/?lang=ko](https://luniverse.io/2021/05/12/simple-git-hooks/?lang=ko)

```toc
```