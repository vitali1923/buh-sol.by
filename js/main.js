$(document).ready(function (){
// Слайдер блока с отзывами
const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  // мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on('click', function() {
    $('.mobile').toggleClass('mobile--visible');
    // $('.mobile-menu__nav').toggleClass('mobile-menu__nav--visible');
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };


  // Форма с отзывами
  var modalReviewsButton = $("[data-toggle=reviews]");
  var closeReviewsButton = $(".reviews__close");
  modalReviewsButton.on('click', openReviews);
  closeReviewsButton.on('click', closeReviews);

  function openReviews() {
    var reviewsOverlay = $(".reviews__overlay");
    var reviewsDialog = $(".reviews__dialog");
    reviewsOverlay.addClass("reviews__overlay--visible");
    reviewsDialog.addClass("reviews__dialog--visible");
  };

  function closeReviews(event) {
    event.preventDefault();
    var reviewsOverlay = $(".reviews__overlay");
    var reviewsDialog = $(".reviews__dialog");
    reviewsOverlay.removeClass("reviews__overlay--visible");
    reviewsDialog.removeClass("reviews__dialog--visible");
  };


  // Валидация форм
  $(".form").each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Введите свое имя",
      minlength: "Имя не должно быть короче 2 букв"
    },
    phone: {
      required: "Введите номер телефона",
      minlength: "Не корректный номер телефона"
    },
    email: {
      email: "Ваш адрес электронной почты должен быть в формате имя@домен.com"
    },
  },
  });
  });

  $('input[type="tel"]').mask('+375(00)000-00-00');
  AOS.init();
});