$(function () {

  $(".toggle-btn , #mask , #navi a").on("click", function () {
    ($("#header").toggleClass("open"));
  });

  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");

    let target = $(href == "#" || href == "" ? "html" : href);

    let position = target.offset().top;

    $("html, body").animate({ scrollTop: position }, 400, "swing");

    return false;
  });

  $('.slick-area').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1200,

    responsive: [{
      breakpoint: 1021,
      settings: {
        slidesToShow: 2,
        speed: 600,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    ]
  });

  $(window).scroll(function () {

    $(".fadein").each(function () {

      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});