const toggleTopMenuIcon = document.querySelector(".nav__btns-toggle")
const menu = document.querySelector(".nav__menu")
console.log(toggleTopMenuIcon)

document.addEventListener("click", e => {
    if(toggleTopMenuIcon.contains(e.target)) {
        menu.classList.toggle("show-toggle")
    }else {
        if(!menu.contains(e.target)) {
            menu.classList.remove("show-toggle")
        }
    }
})

// ================= slide home swiper ================

var swiper = new Swiper('.home__container', {
    slidesPerView: 1,
    spaceBetween:40,
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });