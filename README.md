# [Lettuce] 웹 풀스택 팀 프로젝트

<p align="center">
<img width="100%" alt="스크린샷 2022-11-07 16 14 58" src="https://user-images.githubusercontent.com/99636339/200247452-637668f1-5114-4799-9c9a-7017a14d49ef.png">
</p>

## 📱 프로젝트 소개
SNS 프로젝트 기획 하였습니다. ex)facebook,instargram

<br>

## 🕰️ 개발 기간
* 22.09.19일 - 22.10.03일

## 💻 기술 스택
<div>
<img src ="https://img.shields.io/badge/JS-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>
<img src ="https://img.shields.io/badge/jQuery-0769AD.svg?&style=for-the-badge&logo=jQuery&logoColor=white"/>
<img src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
<img src ="https://img.shields.io/badge/CSS-572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
<img src ="https://img.shields.io/badge/node.js-339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white"/><br>
<img src ="https://img.shields.io/badge/VScode-007ACC.svg?&style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src ="https://img.shields.io/badge/npm-CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/>
<img src ="https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=Express&logoColor=white"/>
<img src ="https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white"/><br>
<img src ="https://img.shields.io/badge/Figma-F24E1E.svg?&style=for-the-badge&logo=Figma&logoColor=white"/>
<img src ="https://img.shields.io/badge/Bootstrap-7952B3.svg?&style=for-the-badge&logo=Bootstrap&logoColor=white"/>
<img src ="https://img.shields.io/badge/Git-F05032.svg?&style=for-the-badge&logo=Git&logoColor=white"/>
<img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/>
</div><br>


## 🎨 초기 모델링
<p align="center">
<img width="100%" alt="스크린샷 2022-11-07 16 31 37" src="https://user-images.githubusercontent.com/99636339/200251370-d61b9236-a6ba-4d0e-9a37-3d40bf7fb0ac.png">
</p><br>

## 🧭 DB 설계도
<p align="center">
<img width="100%" alt="스크린샷 2022-10-02 15 49 29" src="https://user-images.githubusercontent.com/99636339/200251568-4fefa142-b36a-403a-a6dc-da533573e6ae.png">
</p><br>

Screenshot
==========

## 📌 본인 구현 기능

회원 가입
--------
<img width="600" alt="로그인" src="https://user-images.githubusercontent.com/99636339/200255921-8b40a2dd-7b27-4784-a540-d73a0319ea52.png">
-이메일, 비밀번호 validation, 정규표현식 적용<br>
-중복확인 클릭시 DB 중복여부 확인<br>
-비밀 번호 다시 확인시 일치 여부에 따른 태그 event <br>
-validation 확인 여부에 따른 회원가입 버튼 활성화/비활성화<br>
-passport 카카오,네이버 API를 이용한 소셜 로그인 연동<br><br>

로그인
-----
<img width="600" alt="로그인" src="https://user-images.githubusercontent.com/99636339/200256894-70d0d255-4301-492c-a3f6-97d5f73d3c12.png">
-로그인시 메인 페이지로 이동(DB user의 정보를 같이 넘김)<br>
-passport 소셜 로그인 연동<br><br>

로그인 및 회원가입 passport
-----------------------
-passport라는 외부 모듈을 사용하였습니다. 매 요청마다 req.user 객체에 요청을 보낸 사람의 아이디, 닉네임, 프로필 등의 정보를 담아 주어, req.session에 따로 접근할 필요가 없어,아주 편리하고 빠른 개발을 가능하게 하였습니다.
<img width="600" alt="스크린샷 2022-11-07 17 22 33" src="https://user-images.githubusercontent.com/99636339/200260830-1381906b-dd03-489c-a80a-183cff4ca16e.png"><br>
-위에 보이는 바와 같이, 어느 라우터에서나, 세션 아이디에 매칭된 유저정보를 접근할 수 있습니다.<br><br>

소셜로그인
-------
<img width="600" alt="스크린샷 2022-11-07 17 24 12" src="https://user-images.githubusercontent.com/99636339/200261195-d025dbf3-103b-4ecf-a9d2-3a01172da9de.png">
-카카오 와 네이버 또한 passport와 연동이 되는 모듈을 지원 하여, 복잡한 인증절차 없이,<br> 네이버 또는 카카오에서 발급 받은 토큰으로 인증을 거친 후, 카카오 또는 네이버에서 보내 준,<br> 이메일, 프로필, 닉네임 정보를 받아 DB에 저장하면 회원가입이 완료되고, 그 후로는 한번의 클릭으로 로그인이 가능합니다.<br><br>

메인 페이지
--------
<img width="600" alt="메인페이지" src="https://user-images.githubusercontent.com/99636339/200261554-4dcf43d0-2012-4a57-bf13-b64b208a7f35.png">
-bootstrap5를 이용한 네비바 구현<br>
-최신 게시물 순으로 정렬<br>
-무한 스크롤링 적용<br><br>

무한 스크롤링
----------
<img width="600" alt="스크린샷 2022-11-07 17 30 25" src="https://user-images.githubusercontent.com/99636339/200262383-7271c952-1d81-4dbb-aeec-088d026ebef9.png"><br>
-<Intersection Observer API>적용
기존의 scrollY값을 통해, 스크롤을 감지하면, 리소스의 낭비가 심하고, 사이트가 느려지는 문제점을 해결하기 위해 나온 API<br><br>

메인 게시글
--------
<img width="600" alt="게시글 작성" src="https://user-images.githubusercontent.com/99636339/200262564-e0372ba1-0953-471f-ab8e-67f9f0a23807.png">
-multer를 사용 하여 여러 이미지 비디오 파일을 선택 가능<br>
-#서울 과 같이 #해시태그 적용<br>
-req 요청시 파일 확장자 명으로 비디오 파일인지 이미지 파일인지 데이터 재 가공후 res 실행<br><br>

댓글 및 좋아요
-----------
<img width="836" alt="스크린샷 2022-10-17 16 42 40" src="https://user-images.githubusercontent.com/99636339/200262996-7aaea105-3d55-4610-9ca8-0dc808097ad7.png">
-하트 클릭시  DB에서 존재 유무 판단 후 있다면 delete 없다면 create (onclick event 실행)<br>
-좋아요 버튼을 누른 유저들의 프로필 리스트 innerHtml로 생성<br>
-좋아요 리스트 프로필 클릭시 해당 하든 유저의 프로필 url로 이동<br>
-해시태그 클릭시 해당하는 url이 담긴 모든 해시태그 페이지로 이동<br>
-해당 게시물의 댓글 갯수와 작성자 프로필 제공(클릭시 해당 하든 유저의 프로필 url로 이동)<br>
-creacte 된 순서에 따라 최 상단에 댓글 추가 (해당 댓글의 본인과 일치 하면 innerHtml로 destroy하는 삭제 버튼 생성)<br><br>

up,dow버튼
---------
<img width="402" alt="스크린샷 2022-11-07 17 43 16" src="https://user-images.githubusercontent.com/99636339/200264947-c1bdac93-ae20-4543-92cf-1734da4da782.png">
-up 클릭시 화면 최상단으로 이동하는 event 발생
-down 클릭시 무한 스크롤로 불러온 파일 최하단으로 이동하는 event 발생<br><br>

유저검색
------
<img width="1355" alt="스크린샷 2022-11-07 17 45 56" src="https://user-images.githubusercontent.com/99636339/200265490-70b7afa2-33f8-4115-af91-5f5ded961be4.png">
-nav에 있는 search 부분에 nickname이나 e-mail 검색 기능<br>
-keydown event 적용으로 키보드를 누를 때 마다 keydown event 발생<br>
-keydow event 발생시 해당하는 value의 값을 계속 req 하여 res시 DB에 like 쿼리를 보내어 해당하는 프로필 사진, 닉네임, e-mail res,
-res시 search창에 프로필 정보 기재<br><br>











## 🔗 링크
- **웹 URL** - <a href="http://49.50.167.217:8000/auth/login"> Lettuce 로 이동</a>
- **Notion** - <a href="https://www.notion.so/1-Lettuce-5735f374fb9243eaba03b49a003ffff3" >Lettuce Notion으로 이동</a>


