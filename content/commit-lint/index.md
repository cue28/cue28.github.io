---
emoji: ๐
title: Husky & commitlint
date: '2021-12-31 19:00:00'
author: Siyoon Jeon
tags: blog
categories: blog
---

### Commint Lint

- ์ปค๋ฐํ๊ธฐ์ ์ ๋ฐ๋ ๋ถ๋ถ์ ๋ํด lint ๊ฒ์ฌ ํต๊ณผํด์ผ ์์ฑ ๊ฐ๋ฅ
- @commitlint๋ฅผ ์ฌ์ฉํด์ ํด๋น commit title๋ง ์ปค๋ฐ์ด ๊ฐ๋ฅ

### Husky

- ํ๋ก ํธ์๋ ๊ฐ๋ฐ ํ๊ฒฝ์์ git hook๋ฅผ ์ฝ๊ฒ ์ ์ดํ  ์ ์๋๋ก ํด์ฃผ๋ ๋งค๋์ 
- ์ฆ, **eslint๊ฐ ๊นจ์ง๋ฉด commit ์์ฒด๋ฅผ ๋ง๋ ๋ฐฉ๋ฒ**
- commit ์, commit ์์ฒด๋ฅผ ๋ง๊ณ  ์ด๋๊ฐ ์๋ชป๋์๋์ง ํ์ํด์ค
- ๋ฆฌ๋ทฐ ์, lint์ ๋ํ ๋ถ๋ถ์ ๊ณ ๋ คํ์ง ์์ ์ฝ๋์ ์ง์คํ  ์ ์๋ค๋ ์ฅ์ ์ด ์์.
- ๋ฐ๋ฉด, husky๋ง ์ ์ฉํ  ๋์ ๋ชจ๋  ํ์ผ์ ๋ชจ๋ commit๋ง๋ค ๊ฒ์ฌํ์ฌ ์๊ฐ์ด ์ค๋๊ฑธ๋ฆฐ๋ค๋ ๋จ์ ์ด ์กด์ฌํจ.
- ์ด์ [lint-staged](https://www.notion.so/b64b9ddd79e5472cb2b9813d669bcd6e)๋ฅผ ์ฌ์ฉํ์ฌ ์คํ์ด์ง์ ์ฌ๋ผ์จ ํ์ผ๋ง ๊ฒ์ฌํ๋๋ก ๋ณด์ํจ.

### Git Hook

git์ ์ฐ๋ค๊ฐ ํน์  ์ด๋ฒคํธ(commit, push ๋ฑ)๊ฐ ๋ฒ์ด์ก์ ๋, ๊ทธ ์๊ฐ โ๊ฐ๊ณ ๋ฆฌโ๋ฅผ ๊ฑธ์ด ์คํธ๋ฆฝํธ๊ฐ ์คํ๋๋๋ก ๋์์ฃผ๋ ๊ฒ

![githook](./githook.png)

- Git Hook ๋จ๊ณ๋ณ ํน์ฑ
    - **pre-commit** : ์ปค๋ฐ ๋ฉ์ธ์ง๋ฅผ ์์ฑํ๊ธฐ ์ ์ ํธ์ถ๋๋ค.
    - prepare-commit-msg : ์ปค๋ฐ ๋ฉ์ธ์ง์ ๊ด๋ จ๋ ๋ช๋ น์ ๋ฃ์ ๋ ํธ์ถ๋๋ค.
    - commit-msg : ์ปค๋ฐ ๋ฉ์ธ์ง์ ๊ด๋ จ๋ ๋ช๋ น์ ๋ฃ์ ๋ ํธ์ถ๋๋ค.
    - post-commit : ์ปค๋ฐ์ด ์๋ฃ๋๋ฉด ํธ์ถ๋๋ค.

### Version

- v4 : package.json ๋๋ .huskyrc ํ์ผ์ ์ต์์ ๊ฒฝ๋ก์ ๋ง๋ค์ด์ ๊ด๋ฆฌ
- v7 : git hook shell ์คํฌ๋ฆฝํธ๋ฅผ ์์ฑํ์ฌ .exe ํ์ผ์ ์์ฑํด์ฃผ๋ฏ ํด๋น ํ๋ก์ ํธ์ ์ ์ฉ

```bash
## ์๋ฐ์ดํธ 4 to 7
npm install husky@latest --save-dev \
  && npx husky-init \
  && npm exec -- github:typicode/husky-4-to-7 --remove-v4-config

## init ๊ณผ์ ์์ 7.0.0 ๋ฒ์ ์ผ๋ก ๋ค์ด๊ทธ๋ ์ด๋ ๋๊ธฐ ๋๋ฌธ
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

๐ย  [Husky ๊ณต์๋ฌธ์](https://typicode.github.io/husky/#/)

### lint-staged

- stage์ํ์ git ํ์ผ์ ๋ํด์๋ง lint์ ์ค์ ํด๋ ๋ช๋ น์ด๋ฅผ ์คํํด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
- git add๋ก ์ปค๋ฐ ๋์์ด ๋ ์ํ์ธ stage ์ํ๋ผ๊ณ  ํจ.

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

๐ย [lint-staged](https://www.npmjs.com/package/lint-staged)

### @commitlint

- ์ปค๋ฐ ๋ฉ์ธ์ง์ ๋ํด์ lint๋ฅผ ํ  ์ ์๊ฒ ํด์ฃผ๋ ํด
- ๊น๋ํ ์ปค๋ฐ ๋ฉ์ธ์ง๋ก ์ ์ง ๋ณด์์ ํฐ ๋์์ด ๋๋ ์ฅ์ ์ด ์์.

### Version

- @commitlint/cli **v15.0.0**
    - v16 ์ผ๋ถ ํ๋ก์ ํธ์์ ts ์ค๋ฅ๊ฐ ๋ฐ์ํจ โ ์ ์ฒด commitlint v15๋ก ๋ค์ด๊ทธ๋ ์ด๋
- @commitlint/config-conventional **v.16.0.0**

```bash
npm uninstall @commitlint/cli @commitlint/config-conventional
npm install @commitlint/cli@15 --save-dev
npm install @commitlint/config-conventional@latest --save-dev
```

๐ย [@commitlint](https://commitlint.js.org/#/)

---

### ์ฐธ๊ณ 

- https://github.com/typicode/husky-4-to-7
- [https://www.huskyhoochu.com/npm-husky-the-git-hook-manager/](https://www.huskyhoochu.com/npm-husky-the-git-hook-manager/)
- [https://www.huskyhoochu.com/how-to-use-lint-staged/](https://www.huskyhoochu.com/how-to-use-lint-staged/)
- [https://medium.com/@pranne1224/๊ฒฝํ๋ด-husky-v7-git-hook-์ฌ์ฉ๋ฐฉ๋ฒ-a9c380e17b30](https://medium.com/@pranne1224/%EA%B2%BD%ED%97%98%EB%8B%B4-husky-v7-git-hook-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95-a9c380e17b30)
- [https://luniverse.io/2021/05/12/simple-git-hooks/?lang=ko](https://luniverse.io/2021/05/12/simple-git-hooks/?lang=ko)

```toc
```