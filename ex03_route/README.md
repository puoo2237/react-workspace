## 구성 

```text
src
 ├─ components
 │   ├─ common
 │   │   ├─ HeaderCom.js    // 공통 내용
 │   │   └─ NotFound.js     // 잘못된 경로
 │   └─ member
 │       ├─ MListCom.js     // 전체 회원 조회
 │       ├─ MOneCom.js      // 단일 회원 조회
 │       └─ MUpdateCom.js   // 회원 정보 업데이트
 │
 ├─ containers
 │   └─ member
 │       ├─ MDeleteCon.js   // 회원 삭제
 │       ├─ MListCon.js     // 전체 회원 조회
 │       ├─ MOneCon.js      // 단일 회원 조회
 │       └─ MUpdateCon.js   // 회원 정보 업데이트
 │
 ├─ pages
 │   └─ member
 │       ├─ MDeletePage.js  // 회원 삭제 화면
 │       ├─ MListPage.js    // 전체 회원 조회 화면
 │       ├─ MOnePage.js     // 단일 회원 조회 화면
 │       ├─ MUpdatePage.js  // 회원 정보 업데이트 화면
 │       └─ IndexPage.js    // HOME 화면
 │
 └─ service
     └─ member.js           // 회원 정보
```
