---
title: "Failed to load plugin 'prettier' declared in 'CLIOptions'. Cannot find module eslint-plugin-prettier."
date: 2020-02-25 16:59:00 -0400
categories: prettier debug
---

vscode의 esLint 설정에서 auto-fixing on Save를 체크하면

```
Failed to load plugin 'prettier' declared in 'CLIOptions'. Cannot find module eslint-plugin-prettier.
```

에러가 발생한다.

아마 esLint가 버전 6.x로 업데이트된 과정에서 충돌이 일어난 듯하다.

vscode의 setting.json에

```
"eslint.workingDirectories": ["./backend", "./frontend"],
```

를 추가해준다.
