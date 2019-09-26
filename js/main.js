new WOW().init()
const animated_elems = $('.animation-jello'),
    pfx = ["webkit", "moz", "MS", "o", ""]

$('.animation-jello').click(function () {
    $(this).addClass('animated jello')
})
$('a#price').click(function () {
    alert()
    $('#price_modal').css({
        visibility: 'visible'
    })
    $('#price_modal').addClass('animated bounceInUp')
    $('body').css({
        'overflow-y': 'hidden',
        'padding-right': '16px'
    })
})
$('#price_close').click(function () {
    $('#price_modal').addClass('animated bounceOutDown')
    $('body').css({
        'overflow-y': 'scroll',
        'padding-right': '0'
    })
})
function PrefixedEvent(element, type, callback) {
    for (let p = 0; p < pfx.length; p++) {
        if (!pfx[p]) {
            type = type.toLowerCase()
        }
        element.addEventListener(pfx[p] + type, callback, false)
    }
}
for (let elem of animated_elems) {
    PrefixedEvent(elem, "AnimationEnd", () => {
        $(elem).removeClass('animated jello')
        $('#price_modal').removeClass('animated bounceInUp')
        $('#price_modal').removeClass('animated bounceOutDown')
    })
}
PrefixedEvent($('#price_modal')[0], "AnimationEnd", () => {
    if ($('#price_modal').hasClass('animated bounceInUp')) {
        $('#price_modal').removeClass('animated bounceInUp')
    } else {
        $('#price_modal').removeClass('animated bounceOutDown')
        $('#price_modal').css({
            visibility: 'hidden'
        })
    }
})
$('.work_img').click(function () {
    $('#modal_img').attr('src', $(this).attr('src'))
    $('body').css({
        'overflow-y': 'hidden',
        'padding-right': '16px'
    })
    $('#modal_img').show()
})
$('#modal_img').click(function () {
    $(this).hide()
    $('body').css({
        'overflow-y': 'scroll',
        'padding-right': '0'
    })
})
$('.goto').on('click', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
        top = $(id).offset().top
    $('html, body').animate({ scrollTop: top - 110 }, 800)
    setTimeout(function () {
        window.location = id
    }, 700)
})
$('.mob_menu_ul').hide()
$('.mob_menu').click(function () {
    if ($('.mob_menu_ul').hasClass('hidden')) {
        $('.menu_button_img').attr('src', 'img/close.png')
        $('.mob_menu_ul').show()
        $('.mob_menu_ul').removeClass('hidden')
        $('.mob_menu').css({
            'width': '100%',
            'height': '172px'
        })
    } else {
        $('.menu_button_img').attr('src', 'img/open.png')
        $('.mob_menu_ul').hide()
        $('.mob_menu_ul').addClass('hidden')
        $('.mob_menu').css({
            'width': '36px',
            'height': '36px'
        })
    }
})
$('.menu_li_main').on('click', function (event) {
    let scroll = window.pageYOffset
    if (scroll >= 5) {
        event.preventDefault()
        let id = '#start',
            top = $(id).offset().top
        $('html, body').animate({ scrollTop: top - 172 }, 800)
        setTimeout(function () {
            window.location = id
        }, 700)
    }
})
$(document).on('scroll', () => {
    let scroll = window.pageYOffset
    if (scroll >= 5) {
        $('.main_header').css({
            'height': '110px'
        })
        $('.small_header').hide()
    } else {
        $('.main_header').css({
            'height': '130px'
        })
        $('.small_header').show()
    }
})
