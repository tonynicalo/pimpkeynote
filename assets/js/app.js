var Slides = {
  currentSlide: 1,
  totalSlides: undefined,
  moveDown: function() {
    newSlide = Slides.currentSlide + 1;
    if (newSlide <= Slides.totalSlides) {
      Slides.scrollTo(newSlide);
    }
  },
  moveUp: function() {
    newSlide = Slides.currentSlide - 1;
    if (newSlide > 0) {
      Slides.scrollTo(newSlide);
    }
  },
  scrollTo: function(number) {
    $.scrollTo("#" + number, 500, {easing: "easeInOutExpo"});
    Slides.currentSlide = number;
  }
}

$(document).ready(function() {
  $("#nav").scrollSpy();

  Slides.totalSlides = $(".slide").length;

  $("#nav a").click(function(e) {
    e.preventDefault();
    Slides.scrollTo(parseInt($(this).attr("href").replace("#","")));
  });

  // Handle keyboard arrows
  $(document).keydown(function(e){
    if (e.keyCode == 37) { // left
      Slides.moveUp();
    } else if (e.keyCode == 39) { // right
      Slides.moveDown();
    } else if (e.keyCode == 38) { // up
      Slides.moveUp();
    } else if (e.keyCode == 40) { // down
      Slides.moveDown();
    }
    return false;
});
});
