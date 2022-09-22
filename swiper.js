var swiper = new Swiper(".mySwiper", {
    slidesPerView : 4, // 한 슬라이드에 보여줄 갯수
     spaceBetween: 0,    // 슬라이드 사이 여백
    slidesPerGroup : 4, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });