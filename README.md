# CDN와 플러그인
## Favicon(파비콘, favorite icon)
웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.  
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로  
로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다.  
favicon.png 파일을 사용하려면 다음과 같이 `<link />`를 작성하세요.

```html
<link rel="shortcut icon" href="favicon.ico" /> 
<link rel="icon" href="./favicon.png" />
```

favicon.ico 64 x 64 (px) 또는 32 x 32 또는 16 x 16  
favicon.png 500 x 500 (px)


## Reset.css
> 각 브라우저의 기본 스타일을 초기화합니다.  
[jsdeliver이동](https://www.jsdelivr.com/package/npm/the-new-css-reset)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```


## Google icon
웹페이지 내의 폰트와 작은 아이콘들을 구글에서 제공받을 수 있습니다.
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
[구글에서 제공하는 폰트와 아이콘 확인하기](https://fonts.google.com/)


## 오픈 그래프(The Open Graph protocol)
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.  
[더 많은 오픈그래프 속성 보기](https://ogp.me/)
```
og:type: 페이지의 유형(E.g, website, video.movie)
og:site_name: 속한 사이트의 이름
og:title: 페이지의 이름(제목)
og:description: 페이지의 간단한 설명
og:image: 페이지의 대표 이미지 주소(URL)
og:url: 페이지 주소(URL)
```


## 트위터 카드(Twitter Cards)
트위터 카드를 사용하면 풍부한 사진, 비디오 및 미디어 경험을 트윗에 첨부하여    
웹 사이트로 트래픽을 유도할 수 있습니다. 콘텐츠에 대한 링크를 트윗하는 사용자는    
팔로워에게 표시되는 트윗에 "카드"가 추가됩니다.    
[트위터 카드 속성 확인하기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary)
```
twitter:card: 카드 속성(summary값으로 설정해야 합니다.)
twitter:site: 트위터 사이트
twitter:title: 페이지의 이름(제목)
twitter:description: 페이지의 간단한 설명
twitter:image: 페이지의 대표 이미지 주소(URL)
twitter:url: 페이지 주소(URL)
```


## Lodash
array, collection, date 등 데이터의 필수적인 구조를    
쉽게 다룰 수 있게끔 하는데에 사용됩니다.    
ㅡ.(변수)으로 작성되며 lodash wrapper로 변수를 감싸게 되면서    
해당 변수에 대한 chaining을 시작합니다.    
[lodash CDN 확인하기](https://cdnjs.com/libraries/lodash.js)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```


## Gsap
복잡한 애니메이션을 구현할 때 사용합니다.    
[gsap CDN 확인하기](https://cdnjs.com/libraries/lodash.js)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

gsap.to(대상, 속성)함수로 애니메이션을 작성하였습니다.    
[gsap의 더 많은 프로퍼티 확인하기](https://greensock.com/docs/v3/GSAP/gsap.to())


## Scrollmagic
스크롤에 따른 애니메이션을 구현할 때 사용합니다.    
[scrollmagic CDN 확인하기](https://scrollmagic.io/)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

```javascript
new ScrollMagic.Scene({
triggerElement : 요소, //스크롤 애니메이션 시작 지점 설정
}) 
.addTo(new ScrollMagic.Controller());
```



## Swiper
슬라이드와 슬라이드의 다양한 형식을 작성할 때 사용합니다.

```html
<!-- Link Swiper's CSS -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<!-- Swiper JS -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
```
[swiper 기능 확인하기](https://swiperjs.com/)
    
        
    
# 함수
## addEventListener
특정 요소에 이벤트를 발생하게 합니다.    
요소.addEventListener('메소드', 함수);


## 배열로서 작동하는 함수
forEach문은 주어진 함수를 배열 요소 각각에 대해 실행합니다.    
```javascript
arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
//배열.forEach(실행할 함수(처리할 요소, 인덱스, 호출한 배열)),this로 실행할 값
```
