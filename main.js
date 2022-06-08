let filterBtnStatus = 'disabled';

function fillMySkills(count) {
    for (let i = 1; i!== count + 1; i++) {
        $('.main__iKnow-container').append('<div class="main__iKnow-item main__iKnow-item'+i+'"></div>');
        $('.main__iKnow-item' + i).css('background', '#5534A5 url("./images/day/main/iknow/'+i+'.svg") no-repeat center')
    }
}
fillMySkills(20);

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