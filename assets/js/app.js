var navToggle = $("#navToggle"),
    header = $("#header"),
    menu = $("#menu"),
    dataSubmenu = $("[data-submenu]"),
    // submenu = $("#submenu"),
    modal = $(".modal"),
    modalDialog = $(".modal__dialog");

const modalCall = $("[data-modal]"),
      modalClose = $("[data-close]");

/* Menu nav toggle
================================== */
navToggle.on("click", function(event) {
  event.preventDefault();

  navToggle.toggleClass("active");
  header.toggleClass("active");
  menu.toggleClass("active");
});

/* Submenu
================================== */ 
dataSubmenu.on("click", function(event) {
  event.preventDefault();

  let $this = $(this);
  let submenuHeader = $this.parents('#submenu_header');
  let submenuFooter = $this.parents('.footer__menu');

  submenuHeader.toggleClass("active");
  submenuFooter.toggleClass("active");
});

/* swiper
================================== */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 3,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,

  breakpoints: {
    1410: {
      slidesPerView: 3
    },

    991: {
      slidesPerView: 2,
    },

    767: {
      slidesPerView: 1,

      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* input +-
================================== */
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

/* Modal
================================== */
modalCall.on("click", function(event) {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data('modal');

  $(modalId).addClass('show');
  $("body").addClass('no-scroll');

  setTimeout(function() {
    $(modalId).find(modalDialog).css({
      transform: "scale(1)"
    });
  }, 200);
});

modal.on("click", function(event) {
  let $this = $(this);

  $this.find(modalDialog).css({
    transform: "scale(0)"
  });

  setTimeout(function() {
    $this.removeClass('show');
    $("body").removeClass('no-scroll');
  }, 200);

  modalDialog.on("click", function(event) {
    event.stopPropagation();
  });
});

modalClose.on("click", function(event) {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents('.modal');

  modalParent.find(modalDialog).css({
    transform: "scale(0)"
  });

  setTimeout(function() {
    modalParent.removeClass('show');
    $("body").removeClass('no-scroll');
  }, 200);
});