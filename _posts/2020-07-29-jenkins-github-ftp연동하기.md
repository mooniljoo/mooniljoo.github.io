---
layout: post
title: "Jenkins를 활용해 Github Repo가 푸시되면 ftp서버에 업로드 되도록 구성"
date: 2020-07-29
excerpt: "Jenkins"
tags: ["ci", "jenkins", "github", "ftp", "publishoverftp"]
comments: true
---

1. Jenkins의 'Publish over FTP' 플러그인 설치<br/>
   'Jenkins 관리' → '플러그인 관리' → 설치가능Tab 에서 'publish over ftp' 검색 후 설치

2. 'Jenkins 관리'의 '시스템 설정'의 Publish over FTP 항목의 FTP Server 구성<br/>
   Name : 임의로 입력<br/>
   Hostname : ftp server IP나 url 입력<br/>
   Username : ftp ID<br/>
   Password : ftp PW<br/>
   Remote Directory : / (해당 경로가 있어야 함)<br/><br/>
   필요하다면 '고급...'버튼을 눌러<br/>
   Port : ftp 서버포트입력<br/><br/>
   'Test Configuration' 버튼을 눌러 Success메세지가 출력되면 설정 완료<br/>

3. '새로운 Item'을 눌러 아이템 생성<br/>
   Item 이름을 입력하고 제일 처음의 'Freestyle project' 선택

4. Project 구성<br/>
   Github Project 항목의<br/>
   Proejct url에 깃헙 저장소 url 입력<br/><br/>
   소스코드 관리에서<br/>
   Git 선택<br/>
   Repositories의 Repository URL 에 .git으로 끝나는 저장소 git url 입력<br/>
   (저장소가 public이 아니라면, Credentials 설정을 해줘야 한다.<br/>
   Add▼ 버튼을 눌러 Add Credentials 모달창에서 Kind 에 Username with password를 선택하고<br/>
   Username : github username<br/>
   Password : github password<br/>
   ID : github id<br/><br/>
   'Add'버튼 눌러 추가.)<br/><br/>
   빌드 유발에서<br/>
   Github hook trigger for GITScm polling 체크<br/><br/>
   '빌드 후 조치 추가'버튼을 눌러 빌드 후 조치 에서<br/>
   FTP Publishers의 FTP Server에<br/>
   Name에 아까 설정해둔 서버네임 선택<br/>
   Transfers의 Transfer Set에<br/>
   Source files : 옮겨질 소스파일(/ 는 전체)<br/>
   Remove prefix : 필요없는 소스의 경로(비워도 무방)<br/>
   Remote directory : 옮겨질 폴더이름 (해당 폴더가 경로에 없으면 자동 생성)<br/><br/>
   '저장'
