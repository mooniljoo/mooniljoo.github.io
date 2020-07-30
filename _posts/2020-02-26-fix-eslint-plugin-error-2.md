---
layout: post
title: "Failed to load plugin 'jsx-a11y' declared in eslint-config-airbnb"
date: 2020-02-26
tags: ["eslint", " webpack", " debug"]
comments: false
---

ESLint 를 적용이 안되고 계속 오류를 토해내고

```bash
Failed to load plugin 'jsx-a11y' declared in 'userful-tools\package.json » eslint-config-airbnb » ~\react-tutorial\userful-tools\node_modules\eslint-config-airbnb\rules\react-a11y.js': Cannot find module 'eslint-plugin-jsx-a11y' Require stack: - ~\react-tutorial\__placeholder__.js
```

jsx-a11y 를 못 찾는것 같아 계속 전역으로 로컬로 설치만 계속하고...
.eslintrc 파일도 만들어보고 삽질을 하다가

에러 구문을 정독을 하니 답을 찾았다
Require 하다는데 저걸 해결할 생각을 안했을까

create-react-app로 만든 두 개 앱을 하나의 git으로 관리하려고
상위폴더 하나로 VSCode 에디터를 열어서 두 개의 패키지들을 관리하니까 문제가 발생했던 것이었다.

1앱 1창을 실현하니 바로 해결🤦‍♂️🤦‍♂️
하핫😜😜
