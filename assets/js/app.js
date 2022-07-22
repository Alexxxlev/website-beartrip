var navToggle = $("#navToggle"),
    header = $("#header"),
    menu = $("#menu"),
    dataSubmenu = $("[data-submenu]"),
    submenu = $("#submenu");

/* Menu nav toggle */
navToggle.on("click", function(event) {
    event.preventDefault();

    navToggle.toggleClass("active");
    header.toggleClass("active");
    menu.toggleClass("active");
});

/* Submenu */ 
submenu.on("click", function(event) {
    event.preventDefault();

    dataSubmenu.toggleClass("active");
});


/* swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 3,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* input +- */
  jQuery(function() {
      var j = jQuery;
      var addInput1 = '#qty_1, #qty-header_1';
      var n = 1;

      j(addInput1).val(n);

      j('.plus_1').on('click', function() {
        j(addInput1).val(++n);
      });

      j('.min_1').on('click', function() {
        if (n >=1) {
          j(addInput1).val(--n);
        } else {

        }
      });
    });
    
  jQuery(function() {
      var j = jQuery;
      var addInput2 = '#qty_2, #qty-header_2';
      var n = 0;

      j(addInput2).val(n);

      j('.plus_2').on('click', function() {
        j(addInput2).val(++n);
      });

      j('.min_2').on('click', function() {
        if (n >=1) {
          j(addInput2).val(--n);
        } else {

        }
      });
  });