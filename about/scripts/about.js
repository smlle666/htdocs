(function() {
    $(".search__icon").click(function() {
    $(".header__search").show(300);
});
    
$(document).mouseup(function(e){
    if ($(".header__search").has(e.target).length === 0 && $(".search__icon").has(e.target).length === 0)
        $(".header__search").hide(300);
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

[...document.querySelectorAll(".start__wrap")].forEach(elm => observer.observe(elm));
    
[...document.querySelectorAll(".team__wrap")].forEach(elm => observer.observe(elm));

})()
