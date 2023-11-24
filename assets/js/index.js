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
    580: {
      items: 1,
    },
    1023: {
      items: 3,
    },
  },
});
