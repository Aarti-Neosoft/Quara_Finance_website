$(".owl-carousel").owlCarousel({
  loop: true,
  items: 3,
  dot: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    575: {
      items: 1,
    },
   991: {
      items: 2,
    },

    1199: {
      items: 3,
    },
  },
});
