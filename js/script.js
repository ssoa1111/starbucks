//햄버거버튼 
const bugurBtn = document.querySelector('header .mobile .icon .btn-open');
const closeBtn = document.querySelector('header .mobile .total-menu .btn-close');
const totalMenuShow = document.querySelector('header .mobile .total-menu');
const menuBg = document.querySelector('.menu-bg');

bugurBtn.addEventListener('click',()=>{
        closeBtn.classList.remove('hide');
        totalMenuShow.classList.remove('hide');
        menuBg.classList.remove('hide');
})
closeBtn.addEventListener('click',()=>{
        closeBtn.classList.add('hide');
        totalMenuShow.classList.add('hide');
        menuBg.classList.add('hide');
})

// 모바일 메뉴
let mainToggle = false;
const mainmenuClick = document.querySelectorAll('header .mobile .total-menu .menu-box .mainmenu .menu__textbtn');
const submenuClick = document.querySelectorAll('header .mobile .total-menu .menu-box .mainmenu .submenu');
const submenu_subClick = document.querySelectorAll('header .mobile .total-menu .menu-box .mainmenu .submenu .submenu__sub');
const mainMenuDown = document.querySelectorAll('header .mobile .total-menu .menu-box .mainmenu .menu__textbtn > .menu_btn .down');
const mainMenuUp = document.querySelectorAll('header .mobile .total-menu .menu-box .mainmenu .menu__textbtn > .menu_btn .up');

mainmenuClick.forEach(function(item, index){
    item.addEventListener('click',()=>{
        mainToggle = !mainToggle;
        console.log(item);
        if(mainToggle){
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



// 상단메뉴 search버튼
const searchBtn = document.querySelector('header .pc .user-menu .search');
const searchFocus = document.querySelector('header .pc .user-menu .search form input');
searchBtn.addEventListener('click',()=>{
  searchFocus.focus();
})
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
productMobile.forEach(function(productMobile, index){
  gsap.to(productMobile, 1, {
    delay : 0.7 * (index+1),
    opacity : 1,
  })
})
const productPc = document.querySelectorAll('.new-item .pc .fade-in');
productPc.forEach(function(productPc, index){
  gsap.to(productPc, 1, {
    delay : 0.7 * (index+1),
    opacity : 1,
  })
})


// promotion 스와이퍼
new Swiper('.notice .notice-btn .swiper', {
    // Default parameters
    slidesPerView: 1,
    direction: "vertical",
    autoplay: true,
  })


  const downBtn = document.querySelectorAll('.notice .promotion-btn .arrow-btn > img');
  const promotionHide = document.querySelector('.promotion');
  downBtn.forEach(function(item,index){
      item.addEventListener('click', ()=>{
            downBtn[0].classList.remove('hide');
            downBtn[1].classList.remove('hide');
            downBtn[index].classList.add('hide');
            if(index == 0){
                promotionHide.classList.add('hide');
            }else{
                promotionHide.classList.remove('hide');
            }
      });
  });
  

  new Swiper('.promotion .swiper', {
        // Default parameters
        loop: true,
        autoplay : {
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
  const footerMenuClick = document.querySelectorAll('.footer__mainmenu');
  const footerSubShow = document.querySelectorAll('.footer__mobilemenu .footer__submenu');
  const footerMenuDown = document.querySelectorAll('.footer__mainmenu .down');
  const footerMenuUp = document.querySelectorAll('.footer__mainmenu .up');
  let toggle = false;
footerMenuClick.forEach(function(item, index){
  item.addEventListener('click',()=>{
      toggle = !toggle;
      if(toggle){
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