// 顶部滑块
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
    // freeMode: true,
    // watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    thumbs: {
      swiper: swiper,
    },
  });

//导航条滚动效果
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
//导航菜单框弹出和关闭效果
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click",function(){
    nav.classList.add("active");
})

closeBtn.addEventListener("click",()=>{
    nav.classList.remove("active");
})

//explore卡片特效
const exploreModals = document.querySelectorAll(".explore-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
  exploreModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtns,i)=>{
  learnmoreBtns.addEventListener("click",function(){
    modal(i);
  })
})

modalCloseBtns.forEach((modalCloseBtns)=>{
  modalCloseBtns.addEventListener("click",function(){
    exploreModals.forEach((modalView)=>{
      modalView.classList.remove("active");
    })
  })
})

//返回顶部按钮
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll",function(){
  scrollTopBtn.classList.toggle("active", window.scrollY>500);
});

scrollTopBtn.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

//导航文字随移动距离变化
window.addEventListener("scroll",function(){
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
    }
    else{
      document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
    }
  });
});

// 设置载入动画
ScrollReveal({ 
  reset: true,
  distance: '60px',
  duration: '2500',
  delay: 100
 });

 ScrollReveal().reveal('.section-title-01, .section-title-02', {delay:300, origin:'left'});
 ScrollReveal().reveal('.about-info .btn', {delay:400, origin:'right'});
 ScrollReveal().reveal('.media-icons i,.contact-left li', {delay:300, origin:'left',interval:200});
 ScrollReveal().reveal('.about-img', {delay:300, origin:'bottom'});
 ScrollReveal().reveal('.about .description, .contact-right', {delay:300, origin:'right'});
 ScrollReveal().reveal('.about .professional-list li, .contact-right', {delay:300, origin:'right',interval:200});
 ScrollReveal().reveal('.explore-description, .contact-card, .contact-left h2', {delay:300, origin:'left'});
 ScrollReveal().reveal('.explore-card, .play .img-card', {delay:300, origin:'bottom',interval:200});
 ScrollReveal().reveal('footer .group, .footer-content ', {delay:300, origin:'top',interval:200});
 ScrollReveal().reveal(' footer .footer-info', {delay:700, origin:'top',interval:200});
 ScrollReveal().reveal(' .scroll-down', {delay:300, origin:'bottom',interval:200});