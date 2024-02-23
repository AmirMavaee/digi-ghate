$(document).ready(function () {
  $(".question-header").click(function (e) {
    e.preventDefault();
    $(this).find(".pluse-image").toggleClass("rotate-135");
  });

  $(".add-cart").click(function () {
    let badgeText = parseInt($(".badge").text());
    $(".badge").removeClass("d-none");
    badgeText += 1;
    $(".badge").text(badgeText);
  });

  $(".menu-button").click(function () { 
    $(".responsive-menu").addClass("responsive-menu-show");
    $(".responsive-munu-item").addClass("responsive-munu-item-show");
  });

  $(".responsive-munu-item > img").click(function () { 
    $(".responsive-menu").removeClass("responsive-menu-show");
    $(".responsive-munu-item").removeClass("responsive-munu-item-show");
  });

});
