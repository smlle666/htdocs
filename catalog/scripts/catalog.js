var cart = {};

$('document').ready(function() {
  loadBoots();
});

function loadBoots() {
    $('button.add__item').on('click', addToCart);
}

function addToCart() {
    $(".message__add").show('slow');
    setTimeout(function() { $(".message__add").hide('slow'); }, 1000);
    var articul = $(this).attr('data-id');
    if (cart[articul] != undefined) {
        cart[articul]++;
    }
    else
        cart[articul] = 1;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function checkCart() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}



(function() {
 
$(".search__icon").click(function() {
    $(".header__search").show(300);
});
  let isModelClicked = false;
  let isCatergoryClicked = false;
  let isTimeClicked = false;

  $(document).mouseup(function (e) {
if ($(".header__search").has(e.target).length === 0 && $(".search__icon").has(e.target).length === 0)
        $(".header__search").hide(300);
    let container = $(".categoryButton");
    let block = $('.category__wrap');
    if (container.has(e.target).length === 0 && block.has(e.target).length === 0){
        $('.category__wrap').hide(300);
        $('.categoryButton').css('background-color','azure');
        if (isCatergoryClicked) isCatergoryClicked = false;
    }

    container = $(".modelButton");
    block = $('.model__wrap');
    if (container.has(e.target).length === 0 && block.has(e.target).length === 0){
        $('.model__wrap').hide(300);
        $('.modelButton').css('background-color','azure');
        if (isModelClicked) isModelClicked = false;
    }

    container = $(".timeButton");
    block = $('.sort__time');
    if (container.has(e.target).length === 0 && block.has(e.target).length === 0){
        $('.sort__time').hide(300);
        $('.timeButton').css('background-color','azure');
        if (isTimeClicked) isTimeClicked = false;
    }
});

  window.onscroll = function() {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
          {
              $('.params__menu').css({
                  'width': '100%',
                  'border-radius': '0',
                  'margin': '0',
                  'transition': '.5s',
              });
          }
      else
          {
              $('.params__menu').css({
                  'width': '80%',
                  'border': '0',
                  'box-shadow': '5px 5px 5px rgba(0,0,0,0.1)',
                  'border-radius': '50px',
                  'margin': '0 10%',
                  'transition': '.5s',
              });
          }
  };

  let nameLastCategory = '.selected__cat1';

  $('.cat1').click(function(){
      $(nameLastCategory).css({
              'display': 'none',
          });
      $('.selected__cat1').css({
              'display': 'block',
          });
      nameLastCategory = '.selected__cat1';
      $('.params__current').text(function(){
          return 'Man';
      });
      $(".model1").text(function(){
        return "Sandals";
      });
      $(".model2").text(function(){
        return "Loafters";
      });
      $(".model3").text(function(){
        return "Dress shoes";
      });
      $(".model4").text(function(){
        return "Sneakers";
      });
  });


  $('.cat2').click(function(){
      $(nameLastCategory).css({
              'display': 'none',
          });
      $('.selected__cat2').css({
              'display': 'block',
          });
      nameLastCategory = '.selected__cat2';
      $('.params__current').text(function(){
          return 'Woman';
      });

      $(".model1").text(function(){
        return "Wellington boots";
      });
      $(".model2").text(function(){
        return "Flip Flops";
      });
      $(".model3").text(function(){
        return "Mules";
      });
      $(".model4").text(function(){
        return "Trainers";
      });
  });


  $('.cat3').click(function(){
      $(nameLastCategory).css({
              'display': 'none',
          });
      $('.selected__cat3').css({
              'display': 'block',
          });
      nameLastCategory = '.selected__cat3';
      $('.params__current').text(function(){
          return 'Children';
      });

      $(".model1").text(function(){
        return "Boots";
      });
      $(".model2").text(function(){
        return "Sandals";
      });
      $(".model3").text(function(){
        return "Trainers";
      });
      $(".model4").text(function(){
        return "Other";
      });
  });


  $('.cat4').click(function(){
      $(nameLastCategory).css({
              'display': 'none',
          });
      $('.selected__cat4').css({
              'display': 'block',
          });
      nameLastCategory = '.selected__cat4';
      $('.params__current').text(function(){
          return 'Boots';
      });
      $(".model1").text(function(){
        return "For woman";
      });
      $(".model2").text(function(){
        return "For man";
      });
      $(".model3").text(function(){
        return "For children";
      });
      $(".model4").text(function(){
        return "For other";
      });
  });


  let nameLastModel = ".selected__model1";
  $('.model1').click(function(){
      $(nameLastModel).css({
              'display': 'none',
          });
      $('.selected__model1').css({
              'display': 'block',
          });
      nameLastModel = '.selected__model1';
      $('.params__current1').text(function(){
          return $(".model1").text();
      });
  });

  $('.model2').click(function(){
      $(nameLastModel).css({
              'display': 'none',
          });
      $('.selected__model2').css({
              'display': 'block',
          });
      nameLastModel = '.selected__model2';
      $('.params__current1').text(function(){
          return $(".model2").text();
      });
  });

  $('.model3').click(function(){
      $(nameLastModel).css({
              'display': 'none',
          });
      $('.selected__model3').css({
              'display': 'block',
          });
      nameLastModel = '.selected__model3';
      $('.params__current1').text(function(){
          return $(".model3").text();
      });
  });

  $('.model4').click(function(){
      $(nameLastModel).css({
              'display': 'none',
          });
      $('.selected__model4').css({
              'display': 'block',
          });
      nameLastModel = '.selected__model4';
      $('.params__current1').text(function(){
          return $(".model4").text();
      });
  });

  $('.modelButton').click(function() {
      if (!isModelClicked){         $('.model__wrap').show(200);
      $('.modelButton').css('background-color','rgb(72,209,204)');
      }
      else
          {
              $('.model__wrap').css('display', 'none');
              $('.modelButton').css('background-color','azure');
          }

      isModelClicked = !isModelClicked;
  });

  $('.categoryButton').click(function() {
      if (!isCatergoryClicked){         $('.category__wrap').show(200);
      $('.categoryButton').css('background-color','rgb(72,209,204)');
      }
      else
          {
              $('.category__wrap').css('display', 'none');
              $('.categoryButton').css('background-color','azure');
          }

      isCatergoryClicked = !isCatergoryClicked;
  });

let nameLastTime = '.selected__item1';

$('.item__rel').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item1').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item1';
    $('.params__current2').text(function(){
        return 'Relevance';
    });
});

$('.item__date').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item2').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item2';
    $('.params__current2').text(function(){
        return 'Date (most recent)';
    });
});

$('.item__pri1').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item3').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item3';
    $('.params__current2').text(function(){
        return 'Price: low to high';
    });
});

$('.item__pri2').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item4').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item4';
    $('.params__current2').text(function(){
        return 'Price: high to low';
    });
});

$('.item__clo').click(function(){
    $(nameLastTime).css({
            'display': 'none',
        });
    $('.selected__item5').css({
            'display': 'block',
        });
    nameLastTime = '.selected__item5';
    $('.params__current2').text(function(){
        return 'Closest';
    });
});

$('.timeButton').click(function() {
    if (!isTimeClicked){         $('.sort__time').show(200);
    $('.timeButton').css('background-color','rgb(72,209,204)');
    }
    else
        {
            $('.sort__time').css('display', 'none');
            $('.timeButton').css('background-color','azure');
        }

    isTimeClicked = !isTimeClicked;
});

})()
