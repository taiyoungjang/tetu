# têtu — Timeless by nature

Scrolltide Coffee의 공개 미리보기에서 참고한 짙은 브라운 배경, 둥근 메뉴, 대형 제품 비주얼, 느린 움직임을 떼뚜 브랜드에 맞게 새로 구현했습니다. 유료 템플릿 코드나 프롬프트는 사용하지 않았습니다.

## 실행
Node.js가 설치된 환경에서 `npm start` 후 http://localhost:3000 접속. 추가 패키지는 필요 없습니다. `index.html` 직접 열기도 가능합니다.

## 기능
- 의류 비주얼 히어로, 움직임 재생·일시정지, 스크롤 비주얼 이동
- 고정 헤더, 현재 섹션 표시, 모바일 펼침 메뉴
- 카테고리 필터, 상품 미리보기, 한국어·영어 카테고리 검색
- 컬렉션, 브랜드 스토리, FAQ, 공식몰 연결
- 움직임 줄이기 시스템 설정, 키보드 탐색, 모달 Escape 닫기·초점 복원

가격, 재고, 사이즈, 구매 및 계정 기능은 떼뚜 공식몰로 연결됩니다. 로컬에서 주문·결제·로그인 정보를 처리하지 않습니다. 히어로는 AI 콘셉트 이미지로 실제 판매 상품을 나타내지 않습니다. 카테고리 이미지와 캠페인 이미지는 공개된 떼뚜 공식몰 자료입니다.

## 기존 작업
이전 개선 제안 페이지는 `previous-proposal/index.html`에 보관했습니다. http://localhost:3000/previous-proposal/index.html 에서 확인할 수 있습니다.

## 이미지 제작
내장 image_gen 도구 사용. 최종 이미지: `assets/wardrobe-hero.png`. 전체 프롬프트: `assets/hero-prompt.md`.

## 참고
- https://www.scrolltide.co/templates/coffee (공개 영상·포스터)
- https://www.tetu.co.kr/ (브랜드·캠페인)
- https://www.tetu.co.kr/service/company.php (브랜드 스토리)
- https://www.tetu.co.kr/goods/goods_list.php?cateCd=016 (Outer)
- https://www.tetu.co.kr/goods/goods_list.php?cateCd=017 (Knit)
- https://www.tetu.co.kr/goods/goods_list.php?cateCd=020 (Dress)

웹폰트는 Google Fonts에서 로드하며 연결되지 않으면 시스템 글꼴로 표시합니다.
