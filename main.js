let filterBtnStatus = 'disabled';

let projects = [{
    name: 'Pelio - finance dashboard',
    image: 'https://fv9-5.failiem.lv/thumb_show.php?i=9kju3bgur&view',
    type: 'github',
    link: 'https://pelio-dashboard.netlify.app/',
    viewCode: 'https://github.com/victor-kindrat/pelio-dashboard'
}, {
    name: 'Happy pet',
    image: 'https://files.fm/thumb_show.php?i=25vm64gfj',
    type: 'figma',
    link: 'https://www.figma.com/file/j5m3chq5hPxhstqWvvR8Wc/Happy-pat'
}, {
    name: 'Rocket travel',
    image: 'https://files.fm/thumb_show.php?i=vqbuxe9jb',
    type: 'github',
    link: 'https://victor-kindrat.github.io/Rocket-Travel/',
    viewCode: 'https://github.com/victor-kindrat/Rocket-Travel'
}, {
    name: 'Paint pictures',
    image: 'https://files.fm/thumb_show.php?i=2h2q6zd9x',
    type: 'github',
    link: 'https://paintpictures.netlify.app/',
    viewCode: 'https://github.com/victor-kindrat/Paint-pictures'
}, {
    name: 'MNTN landing',
    image: 'https://files.fm/thumb_show.php?i=hf2pwpzkw',
    type: 'github',
    link: 'https://victor-kindrat.github.io/MNTN-Landing/',
    viewCode: 'https://github.com/victor-kindrat/MNTN-Landing'
}, {
    name: 'Rocket - online traveler',
    image: 'https://files.fm/thumb_show.php?i=7x7q8bh46',
    type: 'figma',
    link: 'https://www.figma.com/file/NrGyTXWFNBYY7yanDOBRPX/Rocket-online-traveler'
}]

for (let i = 0; i !== projects.length; i++) {
    $('.projects__place').append(`<div class="projects__item projects__item${i} projects__item_${projects[i].type}">\n` +
                                        `<button class="projects__view-btn projects__view-btn${i}">View</button>\n` +
                                 `</div>`);
    $('.projects__item' + i).css({
        'background': '#eeeeee url("' + projects[i].image + '") no-repeat center 0%',
        'backgroundSize': 'cover'
    })
}

$('.info').fadeOut(0)

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
    $('#content-wrapper').css('left', '-100vw');
    $('.main__me').css('left', '-100vw');
})
$('.nav__item').click(function () {
    $('#nav').css('left', '100vw');
    $('#content-wrapper').css('left', '0');
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
    $(this).css({
        'filter': 'grayscale(0)'
    })
    $(this).children().css({
        'opacity': '1'
    })
})

$('.projects__item').mouseleave(function () {
    $(this).css({
        'filter': 'grayscale(0.8)'
    })
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

$('#footer__nav-item1').click(function () {
    $('.page').css('right', '100vw');
    setTimeout(function () {
        window.scrollTo(0, 0)
        $('.page').css('right', '0');
        switchPage('main');
    }, 500)
})
$('#footer__nav-item2').click(function () {
    $('.page').css('right', '100vw');
    setTimeout(function () {
        window.scrollTo(0, 0)
        $('.page').css('right', '0');
        switchPage('projects');
    }, 500)
})
$('#footer__nav-item3').click(function () {
    $('.page').css('right', '100vw');
    setTimeout(function () {
        window.scrollTo(0, 0)
        $('.page').css('right', '0');
        switchPage('contacts');
    }, 500)
})

$('.projects__view-btn').click(function () {
    let classes = $(this).attr('class');
    let index = classes.slice(classes.lastIndexOf('_view-btn') + 9, classes.length);
    $('.info').fadeIn(300);
    let item = projects[index];
    console.log(item)
    $('#info__headline_name').html(item.name);
    $('.info__btn_view').attr('href', item.viewCode);
    $('.info__btn_open').attr('href', item.link);
    $('.info__image').css({
        'background': 'url("' + item.image + '") no-repeat center 0%',
        'backgroundSize': 'cover'
    })
})

$('.info__close').click(function (){
    $('.info').fadeOut(300);
})