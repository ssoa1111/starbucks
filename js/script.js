// 햄버거버튼 
const bugurBtn = document.querySelector('header .mobile .icon .btn-open');
// 닫기버튼
const closeBtn = document.querySelector('header .mobile .total-menu .btn-close');
// 메뉴 리스트 상자
const totalMenuShow = document.querySelector('header .mobile .total-menu');
// 메뉴 검은색 배경
const menuBg = document.querySelector('.menu-bg');

// 햄버거 버튼 클릭
bugurBtn.addEventListener('click',()=>{
  closeBtn.classList.remove('hide');
  totalMenuShow.classList.remove('hide');
  menuBg.classList.remove('hide');
})
// 닫기 버튼 클릭
closeBtn.addEventListener('click',()=>{
  closeBtn.classList.add('hide');
  totalMenuShow.classList.add('hide');
  menuBg.classList.add('hide');
})

// 모바일 메뉴
// 메인메뉴
const mainmenuClick = document.querySelectorAll('header .mobile .total-menu .menu-box .mainmenu .menu__textbtn');
// 서브메뉴
const submenuClick = document.querySelectorAll('header .mobile .total-menu .menu-box .mainmenu .submenu');
// 메뉴 up down 아이콘
const mainMenuDown = document.querySelectorAll('header .mobile .total-menu .menu-box .mainmenu .menu__textbtn > .menu_btn .down');
const mainMenuUp = document.querySelectorAll('header .mobile .total-menu .menu-box .mainmenu .menu__textbtn > .menu_btn .up');

// forEach문으로 이벤트를 각각 적용
mainmenuClick.forEach(function(item, index){
  // 메인메뉴 클릭 
  item.addEventListener('click',()=>{
    if(submenuClick[index].classList.contains('hide')){
      submenuClick[index].classList.remove('hide');
      mainMenuDown[index].classList.add('hide');
      mainMenuUp[index].classList.remove('hide');
    }
    else{
      submenuClick[index].classList.add('hide');
      mainMenuDown[index].classList.remove('hide');
      mainMenuUp[index].classList.add('hide');
    }
  });
});



// pc 상단메뉴 search버튼
// search 아이콘
const searchBtn = document.querySelector('header .pc .user-menu .search');
// input 상자
const searchFocus = document.querySelector('header .pc .user-menu .search form input');
// search 아이콘 누르면 input 자동 focus()
searchBtn.addEventListener('click',()=>{
  searchFocus.focus();
})
// focus되면 input상자 길어지게
searchFocus.addEventListener('focus',()=>{
  searchBtn.classList.add('active');
})
searchFocus.addEventListener('blur',()=>{
  searchBtn.classList.remove('active');
})


// 뱃지제어
const badge = document.querySelector('.badge');
window.addEventListener('scroll',_.throttle(function(){
  if(window.scrollY > 500){
    gsap.to(badge, 0.6, {
      opacity : 0,
      display : 'none'
    })
  }else{
    gsap.to(badge, 0.6, {
      opacity : 1,
      display : 'block'
    })
  }
}))


// top image 나타나기
const productMobile = document.querySelectorAll('.new-item .mobile .fade-in');
// 모바일
productMobile.forEach(function(productMobile, index){
  gsap.to(productMobile, 1, {
    delay : 0.7 * (index+1),
    opacity : 1,
  })
})
// pc
const productPc = document.querySelectorAll('.new-item .pc .fade-in');
productPc.forEach(function(productPc, index){
  gsap.to(productPc, 1, {
    delay : 0.7 * (index+1),
    opacity : 1,
  })
})


//  notice 스와이퍼
new Swiper('.notice .notice-btn .swiper', {
    // Default parameters
    slidesPerView: 1,
    direction: "vertical",
    autoplay: true,
  })

// promtion 숨기거나 나타내기
const downBtn = document.querySelectorAll('.notice .promotion-btn .arrow-btn > img');
const promotionHide = document.querySelector('.promotion');
downBtn.forEach(function(item,index){
  item.addEventListener('click', ()=>{
    downBtn[0].classList.remove('hide');
    downBtn[1].classList.remove('hide');
    downBtn[index].classList.add('hide');
    // 프로모션 영역 숨기기
    if(index == 0){
      promotionHide.classList.add('hide');
    }else{
      promotionHide.classList.remove('hide');
    }
  });
});
  

// promotion swiper
new Swiper('.promotion .swiper', {
  // Default parameters
  loop: true,
  utoplay : {
  delay : 5000
  },
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 650px
    650: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 1130px
    1130: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper .arrow .swiper-prev",
    nextEl: ".promotion .swiper .arrow .swiper-next",
  },
})
  
// footer reward swiper
new Swiper('footer .footer__contents .swiper', {
  loop: true,
  autoplay : true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 650px
    650: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 1130px
    1130: {
      slidesPerView: 5,
      spaceBetween: 10
    }
  },
})


// 모바일 footer 메뉴
// 메인메뉴
const footerMenuClick = document.querySelectorAll('.footer__mainmenu');
// 서브메뉴
const footerSubShow = document.querySelectorAll('.footer__mobilemenu .footer__submenu');
// up down 아이콘
const footerMenuDown = document.querySelectorAll('.footer__mainmenu .down');
const footerMenuUp = document.querySelectorAll('.footer__mainmenu .up');
// forEach문으로 이벤트를 각각 적용
footerMenuClick.forEach(function(item, index){
  // 메인메뉴 클릭
  item.addEventListener('click',()=>{
    if(!footerSubShow[index].classList.contains('show')){
      footerSubShow[index].classList.add('show');
      footerMenuDown[index].classList.add('hide');
      footerMenuUp[index].classList.remove('hide');
    }else{
      footerSubShow[index].classList.remove('show');
      footerMenuDown[index].classList.remove('hide');
      footerMenuUp[index].classList.add('hide');
    }
  })
})

//Masgic Scroll------------------------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
       triggerElement: spyEl,
        triggerHook: 0.8,
     })   
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});