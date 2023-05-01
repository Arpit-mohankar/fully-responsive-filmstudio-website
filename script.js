$(function() {
    $(".menu-link").click(function(e) {
      e.preventDefault();
      $(".menu").toggleClass("open");
      $(".menu-overlay").toggleClass("open");
    });
  });

  $(document).on("click", "#clix", function(e) {
    e.preventDefault();
    var href = $(this).attr("href");
    $(".menu").removeClass("open");
    $(".menu-overlay").removeClass("open");
    window.location.href = href;
  });

  
  