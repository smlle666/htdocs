(function() {
    
$('.slider__list').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$(".search__icon").click(function() {
    $(".header__search").show(300);
});
    
$(document).mouseup(function(e){
    if ($(".header__search").has(e.target).length === 0 && $(".search__icon").has(e.target).length === 0)
        $(".header__search").hide(300);
});
/*
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}*/


$(document).ready(function(){
             $(".count").rate({
                selected_symbol_type: 'image',
                max_value: 5,
                step_size: 1,
                symbols: {
                    image: {
                        base: '<div class="im">&nbsp;</div>',
                        hover: '<div class="im">&nbsp;</div>',
                        selected: '<div class="im">&nbsp;</div>',
                    },
                }
            });
    });

const options = {
  threshold: [0.5]
};

const observer = new IntersectionObserver(entry => {
  entry.forEach(change => {
    console.log(change.isIntersecting);

    if (change.isIntersecting) {
      change.target.classList.add("visible");
    }
  });
}, options);

[...document.querySelectorAll(".main__item")].forEach(elm => observer.observe(elm));


})()
