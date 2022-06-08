let filterBtnStatus = 'disabled';

function fillMySkills(count) {
    for (let i = 1; i!== count + 1; i++) {
        $('.main__iKnow-container').append('<div class="main__iKnow-item main__iKnow-item'+i+'"></div>');
        $('.main__iKnow-item' + i).css('background', '#5534A5 url("./images/day/main/iknow/'+i+'.svg") no-repeat center')
    }
}
fillMySkills(20);

function switchPage(page) {
    switch (page) {
        case 'main':
            $('.footer__nav-item').attr('class', 'footer__nav-item');
            $('#footer__nav-item1').attr('class', 'footer__nav-item footer__nav-item_active');
            $('.menu__btn1').attr('class', 'menu__btn menu__btn1 menu__btn_active');
            $('.menu__btn2').attr('class', 'menu__btn menu__btn2');
            $('.menu__btn3').attr('class', 'menu__btn menu__btn3');
            $('.main').css('display', 'flex');
            $('.projects').css('display', 'none');
            $('.contacts').css('display', 'none');
            break;
        case 'projects':
            $(`.footer__nav-item`).attr('class', 'footer__nav-item');
            $('#footer__nav-item2').attr('class', 'footer__nav-item footer__nav-item_active')
            $(".menu__btn2").attr('class', 'menu__btn menu__btn2 menu__btn_active');
            $(".menu__btn1").attr('class', 'menu__btn menu__btn1');
            $(".menu__btn3").attr('class', 'menu__btn menu__btn3');
            $(".projects").css('display', 'flex');
            $(".main").css('display', 'none');
            $(".contacts").css('display', 'none');
            break;
        case 'contacts':
            $(".footer__nav-item").attr('class', 'footer__nav-item');
            $('#footer__nav-item3').attr('class', 'footer__nav-item footer__nav-item_active')
            $(`.menu__btn3`).attr('class', 'menu__btn menu__btn3 menu__btn_active');
            $(`.menu__btn1`).attr('class', 'menu__btn menu__btn1');
            $(`.menu__btn2`).attr('class', 'menu__btn menu__btn2');
            $(`.contacts`).css('display', 'flex');
            $(`.main`).css('display', 'none');
            $(`.projects`).css('display', 'none');
            break;
    }
}

$('#menu__open-nav').click(function () {
    $('#nav').css('left', '0');
    $('#content-wrapper').css('marginLeft', '-100vw');
    $('.main__me').css('left', '-100vw');
})
$('.nav__item').click(function () {
    $('#nav').css('left', '100vw');
    $('#content-wrapper').css('marginLeft', '0');
    $('.main__me').css('left', '-190px');
})

$('#projects__filter-btn').click(function () {
    if (filterBtnStatus === 'disabled') {
        filterBtnStatus = 'enabled'
    } else if (filterBtnStatus === 'enabled') {
        filterBtnStatus = 'disabled'
    }
    $('.projects__filter-group').attr('class', 'projects__filter-group projects__filter-group_' + filterBtnStatus);
});

$(".projects__item").mouseenter(function () {
    $(this).children().css({
        'opacity': '1'
    })
})

$('.projects__item').mouseleave(function () {
    $(this).children().css({
        'opacity': '0'
    })
})

$('#nav__item_main').click(function () {
    switchPage('main');
})
$('#nav__item_projects').click(function () {
    switchPage('projects');
})
$('#nav__item_contact').click(function () {
    switchPage('contacts');
})