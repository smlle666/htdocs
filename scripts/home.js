(function() {
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

[...document.querySelectorAll(".about__wrap")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".services__text")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".workers__text")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".teams__wrap")].forEach(elm => observer.observe(elm));


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("review__slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}
    
$(".search__icon").click(function() {
    $(".header__search").show(300);
});
    
$(document).mouseup(function(e){
    if ($(".header__search").has(e.target).length === 0 && $(".search__icon").has(e.target).length === 0)
        $(".header__search").hide(300);
});
    
$(".images__slider > li:gt(0)").hide();

setInterval(function() {
  $('.images__slider > .slider__item:first')
    .fadeOut(0)
    .next()
    .fadeIn()
    .end()
    .appendTo('.images__slider');
}, 5000);


  $(".menu__button").click(function() {
    $(".menu__list").css("display", "block");
  });

  let lastHiddenItem = '';
  let lastWrapItem = '';

  $(".sitem__button1").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden1') {
      $(".sitem__hidden1").show(300);
      $(".sitem__wrap1").hide();

      lastWrapItem = '.sitem__wrap1';
      lastHiddenItem = ".sitem__hidden1";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button2").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden2') {
      $(".sitem__hidden2").show(300);
      $(".sitem__wrap2").hide();

      lastWrapItem = '.sitem__wrap2';
      lastHiddenItem = ".sitem__hidden2";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button3").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden3') {
      $(".sitem__hidden3").show(300);
      $(".sitem__wrap3").hide();

      lastWrapItem = '.sitem__wrap3';
      lastHiddenItem = ".sitem__hidden3";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button4").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden4') {
      $(".sitem__hidden4").show(300);
      $(".sitem__wrap4").hide();

      lastWrapItem = '.sitem__wrap4';
      lastHiddenItem = ".sitem__hidden4";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button5").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden5') {
      $(".sitem__hidden5").show(300);
      $(".sitem__wrap5").hide();

      lastWrapItem = '.sitem__wrap5';
      lastHiddenItem = ".sitem__hidden5";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });

  $(".sitem__button6").click(function() {
    $(lastHiddenItem).hide();
    $(lastWrapItem).show();
    if (lastHiddenItem != '.sitem__hidden6') {
      $(".sitem__hidden6").show(300);
      $(".sitem__wrap6").hide();

      lastWrapItem = '.sitem__wrap6';
      lastHiddenItem = ".sitem__hidden6";
    }
    else {
      lastWrapItem = '';
      lastHiddenItem = '';
    }
  });
})()
