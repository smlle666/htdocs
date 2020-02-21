
var cart = {};

function loadBoots() {
    if (localStorage.getItem('cart')) {
        $('.basket__wrap').css('display', 'block');
        $('.empty').css('display', 'none');
        cart = JSON.parse(localStorage.getItem('cart'));
        showBoots();
    }
    else {
        $('.basket__wrap').css('display', 'none');
        $('.empty').css('display', 'block');
    }
}

function showBoots() {
    var out = '';
    $.getJSON('boots.json', function(data) {
    var boot = data;
    var counter = 0;
        
    for (let key in cart) {
        out += '<div class="basket__item">';
        out += '<div class="item__image"><img src="' + boot[key].image + '"></div>';
        out += '<div class="item__product">' + boot[key].name + '</div>';
        out += '<div class="item__price"> $' + boot[key].cost * cart[key] + '</div>';
        out += '<div class="item__quantity">' + '<a class="minus" data-id="' + key + '">-</a><div class="count">' + cart[key] + '</div><a class="plus" data-id="' + key + '">+</a></div>';
        out += '<div class="item__remove"><a class="close__button" data-id="' + key + '">x</a></div>'
        out += '</div>';
        counter++;
    }   
    if (counter == 0) {
        $('.basket__wrap').css('display', 'none');
        $('.empty').css('display', 'block');
    }
    else {
        $('.basket__wrap').css('display', 'block');
        $('.empty').css('display', 'none');
    }
    $('.basket__wrap').html(out);
    $('.plus').on('click', plusBoots);
    $('.minus').on('click', minusBoots);
    $('.close__button').on('click', deleteBoots);
});
}

function plusBoots() {
    var articul = $(this).attr('data-id');
    cart[articul]++;
    saveCart();
    showBoots();
}

function minusBoots() {
    var articul = $(this).attr('data-id');
    if (cart[articul] > 1) {
        cart[articul]--;
    }
    else {
        delete cart[articul];
    }
    saveCart();
    showBoots();
}

function deleteBoots() {
    var articul = $(this).attr('data-id');
    delete cart[articul];
    saveCart();
    showBoots();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

$(document).ready(function() {
   loadBoots(); 
});


(function() {
  $(".search__icon").click(function() {
    $(".header__search").show(300);
});
    
$(document).mouseup(function(e){
    if ($(".header__search").has(e.target).length === 0 && $(".search__icon").has(e.target).length === 0)
        $(".header__search").hide(300);
});

})()
