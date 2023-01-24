const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2 ,
    spaceBetween: 20,
  
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      725: {
        slidesPerView: 2,

      }
    },


  
  });

  const mobileListBtn = document.querySelector('.mobile__list');

  // mobileListBtn.onclick = function(){
  //   mobileListBtn
  // }