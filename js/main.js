$(document).ready(function (){

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
  },
  });
  });

  $('input[type="tel"]').mask('+375(00)000-00-00');
});