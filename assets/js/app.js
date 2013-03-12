$(document).ready(function() {
  $("#nav").scrollSpy();

  $("#nav a").click(function(e) {
    e.preventDefault();
    $.scrollTo($(this).attr("href"), 500, {easing: "easeInOutExpo"});
  });
});
