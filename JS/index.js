$("#owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  nav: true,
  items: 2,
});

console.log('in');
// const owlCarousel = document.querySelector('.owl-carousel')
// owlCarousel.owlCarousel({
//     loop: true,
// })

$(".nav__toggle").click(function () {
  $(".nav-list").toggleClass("active-nav")
})

$(".nav__toggle-close").click(function() {
  $(".nav-list").removeClass("active-nav")
})