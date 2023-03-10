# 원티드 프리온보딩 6팀 2주차 과제

## 📝 과제 소개 및 목적

> TravelTech 스타트업 '라이크어로컬'의 기업과제로 여행 상품 목록과 장바구니를 구현하며 모범사례 도출과 동료학습을 목적으로 했습니다.

<br/>
<br/>

## 🕹️ **프로젝트 실행 방법**

```
git clone https://github.com/wanted-pre-onboarding-internship-team-6/pre-onboarding-9th-2-6.git
cd pre-onboarding-9th-2-6
npm install
npm start
```
<br/>
<br/>

## 🔗 배포 링크

[https://pre-onboarding-9th-2-6.vercel.app/](https://pre-onboarding-9th-2-6.vercel.app/)

<br/>
<br/>

# 🛠️ 기술 스택
![CRA](https://img.shields.io/badge/CRA-09D3AC?style=for-the-badge&logo=React)
![ReduxToolkit](https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=fff)
![React-router](https://img.shields.io/badge/REACT--ROUTER--DOM-343a40?style=for-the-badge&logo=ReactRouter&logoColor=CA4245)
<br/>
![Chakra-UI](https://img.shields.io/badge/Chakra-UI-319795?style=for-the-badge&logo=Chakra-UI)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=fff)

<br/>
<br/>


## 📂 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📂ModalContents
 ┃ ┃ ┃ ┗ 📜ProductDetail.jsx
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂ProductCard
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂ProductFilter
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂ProductList
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜NavBar.jsx
 ┃ ┣ 📜Payment.jsx
 ┃ ┣ 📜ReservedProduct.jsx
 ┃ ┗ 📜ReservedProductList.jsx
 ┣ 📂constants
 ┃ ┗ 📜index.js
 ┣ 📂hooks
 ┃ ┣ 📜index.js
 ┃ ┣ 📜useModal.js
 ┃ ┗ 📜useProduct.js
 ┣ 📂pages
 ┃ ┣ 📜index.js
 ┃ ┣ 📜MainPage.jsx
 ┃ ┗ 📜ReservationsPage.jsx
 ┣ 📂router
 ┃ ┗ 📜index.js
 ┣ 📂store
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜categorySlice.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜modalSlice.js
 ┃ ┃ ┣ 📜productSlice.js
 ┃ ┃ ┗ 📜reservationSlice.js
 ┃ ┗ 📜index.js
 ┣ 📂styles
 ┃ ┗ 📜index.css
 ┣ 📂utils
 ┃ ┗ 📜index.js
 ┣ 📜App.js
 ┗ 📜index.js
```

<br/>
<br/>

## 📈 Best Practice Process

1. 프로젝트의 전반적인 이해와 모범사례 도출을 위해 각자 요구사항 전체를 구현해보는 시간을 가졌습니다.
2. 구현해본 경험을 바탕으로 구현시 고민했던 사항들에 대해 토론하며 UI, 컨벤션, 구조 등 각 항목의 모범 사례를 선정했습니다.
3. 선정 사항을 기반으로 프로젝트 초기 셋팅을 마치고, 둘로 나뉘는 주요 기능에 따라 두 팀으로 나뉘어 라이브 쉐어 기능을 활용해 페어프로그래밍을 수행했습니다.

<br/>
<br/>

## 🚀 요구사항

- `/main` 페이지
    - [x] 사용자의 방문시 `/`으로부터 리다이렉트
    - [x] 여행 상품 목록 출력
    - [x] 예약 버튼 클릭시 장바구니에 상품 데이터 저장
    - [x] 여행 상품 정보 클릭 시 모달창으로 상세 정보 표시
    - [x] 여행 상품 리스트의 가격(price), 공간(spaceCategory) 필터링
    
        - [x] 개별 필터링, 다중 필터링
        - [x] 예시) [0 ~ 3000] 또는 [서울, 부산] 또는 [0 ~ 3000] && [서울, 부산]
      <br/>
- `/reservations` 페이지
    - [x] 예약한 여행 상품 목록 출력
    - [x] 예약한 상품 삭제
    - [x] 여행 상품의 구매 수량 변경 가능
    - [x] 장바구니 여행 상품의 총 결제액수 계산 및 표시

<br/>
<br/>

## 🤝🏼 **협업 방법 & 협업 툴**

- 공지사항 및 일반 채팅: `discord`
- 페어 프로그래밍: `live share`
- 워크플로우
    - 각 팀이 수행해야 하는 일을 이슈로 만들어 발행
    - 이슈에 따르는 브랜치를 만들어 작업 (feature/#이슈번호)
    - 커밋 컨벤션을 준수해 커밋한 뒤 오리진에 푸쉬
    - 업스트림의 develop에 풀 리퀘스트 및 머지

<br/>
<br/>

# 🎉 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/ggongjukim"><img src="https://avatars.githubusercontent.com/u/75241542?v=4" width="100px;" alt=""/><br /><sub><b>김채현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/dong-geon-Lee"><img src="https://avatars.githubusercontent.com/u/71866185?v=4" width="100px;" alt=""/><br /><sub><b>이동건</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/bymine"><img src="https://avatars.githubusercontent.com/u/71866185?v=4" width="100px;" alt=""/><br /><sub><b>박수빈</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Chun-gu"><img src="https://avatars.githubusercontent.com/u/60649092?v=4" width="100px;" alt=""/><br /><sub><b>이춘구</b></sub></a><br /></td>
     <tr/>
     <td align="center"><a href="https://github.com/pji0219"><img src="https://avatars.githubusercontent.com/u/66911726?v=4" width="100px;" alt=""/><br /><sub><b>박종익</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/theo-jin"><img src="https://avatars.githubusercontent.com/u/83561523?v=4" width="100px;" alt=""/><br /><sub><b>진형빈</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dlwnstjrzz"><img src="https://avatars.githubusercontent.com/u/95525638?v=4" width="100px;" alt=""/><br /><sub><b>이준석</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Sungrinhan"><img src="https://avatars.githubusercontent.com/u/78065205?v=4" width="100px;" alt=""/><br /><sub><b>한성린</b></sub></a><br /></td>
     </tr>
  </tbody>
</table>
