import $ from "jquery";

$(document).ready(function () {
  // add "preview" class to all image inside "lazy-load-img" class
  $(".lazy-load-img img").addClass("preview");

  // lazy load image function triggered on scroll
  $(window)
    .scroll(function () {
      const windowHeight = $(window).height();
      const viewportTop = Math.round(
        Math.max($("body").scrollTop(), $("html").scrollTop())
      );
      const viewportBottom = viewportTop + windowHeight;

      $(".lazy-load-img").each(function (index) {
        const elPositionTop = $(this).position().top;
        const elPositionBottom = elPositionTop + $(this).height();

        if (
          (elPositionTop >= viewportTop && elPositionTop <= viewportBottom) ||
          (elPositionBottom >= viewportTop &&
            elPositionBottom <= viewportBottom)
        ) {
          const image = $(this).children("img");
          const srcOriginal = image.attr("data-src");

          image.attr("src", srcOriginal).removeClass("preview");
        }
      });
    })
    .scroll();
});
