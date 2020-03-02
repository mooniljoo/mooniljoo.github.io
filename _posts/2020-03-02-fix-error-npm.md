---
title: "npm ERROR maximum call stack size exceeded"
date: 2020-03-02 15:12:00 -0400
categories: npm reactnative debug
---

expo-cli 를 통해 리액트네이티브를 사용 중

```bash
npm install uuid
```

uuid 모듈을 설치했을 뿐인데

```bash
yarn start
ERROR! maximum call stack size exceeded
```

yarn start 를 해도
왠지 모를 오류가 생기고 실행되지 않았다!
포트 겹치는 문제일까도 다양한 시도를 해보았으나

```
npm cache clean --force
npm rebuild
rm -rf node_modules
npm install
```

그냥 깔끔히 지우고 재설치했다.
깰끔히 작동한다ㅇㅅㅇ
