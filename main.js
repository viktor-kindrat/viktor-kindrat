let filterBtnStatus = 'disabled';
let projects = [{
    name: 'Pelio - finance dashboard',
    image: 'https://fv9-5.failiem.lv/thumb_show.php?i=9kju3bgur&view',
    type: 'github',
    link: 'https://pelio-dashboard.netlify.app/',
    viewCode: 'https://github.com/victor-kindrat/pelio-dashboard',
    description: `Pelio - your finance dashboard.
                  Figma to HTML project.`,
    technologies: ['HTML', 'CSS', "JS", 'Media query', 'Animations', 'LocalStorage', 'Password chipper', 'Chart.js', 'Your statistic counter']
}, {
    name: 'Happy pet',
    image: 'https://files.fm/thumb_show.php?i=25vm64gfj',
    type: 'figma',
    link: 'https://www.figma.com/file/j5m3chq5hPxhstqWvvR8Wc/Happy-pat',
    description: `Happy pet - pet shop web page. Your friend with delivery! My first design`,
    technologies: ['Figma prototypes', '.png images', 'Vector', 'Figures', 'Shadows', 'Some cute animals 🐶 😸']
}, {
    name: 'Rocket travel',
    image: 'https://files.fm/thumb_show.php?i=vqbuxe9jb',
    type: 'github',
    link: 'https://victor-kindrat.github.io/Rocket-Travel/',
    viewCode: 'https://github.com/victor-kindrat/Rocket-Travel',
    description: `This is my biggest project designed in Creator IT Academy, which includes about 90% of the technology I studied the day before. The theme of the project is a travel agency that organizes the most popular tours around the world. The main motto of this company - your journey - is our work.`,
    technologies: ['HTML', 'CSS', 'Media query', 'Animations', 'Preloader', 'Bootstrap', 'IFrame', 'Multipage', 'Flexbox', 'HTML5 features', 'CSS parallax effect', 'More than 3 fonts']
}, {
    name: 'Paint pictures',
    image: 'https://files.fm/thumb_show.php?i=2h2q6zd9x',
    type: 'github',
    link: 'https://paintpictures.netlify.app/',
    viewCode: 'https://github.com/victor-kindrat/Paint-pictures',
    description: `JS project. Сustom copy of all known paint for PCs and smartphones developed with JS canvas.`,
    technologies: ['HTML', 'CSS', 'JS', 'Canvas JS', 'Colors change', 'Ability to paint a line', 'Rubber brush', 'Reply function', 'Menu close by double click']
}, {
    name: 'MNTN landing',
    image: 'https://files.fm/thumb_show.php?i=hf2pwpzkw',
    type: 'github',
    link: 'https://victor-kindrat.github.io/MNTN-Landing/',
    viewCode: 'https://github.com/victor-kindrat/MNTN-Landing',
    description: `Website landing is created on a figma layout with a parallax effect. HTML/CSS only ⚡`,
    technologies: ['HTML', 'CSS', 'Parallax effect', 'Anchor to elements', 'Social medias']
}, {
    name: 'Rocket - online traveler',
    image: 'https://files.fm/thumb_show.php?i=7x7q8bh46',
    type: 'figma',
    link: 'https://www.figma.com/file/NrGyTXWFNBYY7yanDOBRPX/Rocket-online-traveler',
    description: `A prototype of my future project. Application for people who like to sit at home and see something exciting. With this app, you will be able to see all attractions from all whole of the world and make a travel without leaving a house.`,
    technologies: ['Vectors', 'Figures', 'Masks', '.png images', 'Lorem', 'Iconify plugin', '3 different fonts', 'Gradients', 'Map', 'Custom logo', 'A little of magic ✨']
}, {
    name: 'Guess the number game',
    image: 'https://files.fm/thumb_show.php?i=rbdbenq3j',
    type: 'github',
    link: 'https://victor-kindrat.github.io/Guess-the-number-game/',
    viewCode: 'https://github.com/victor-kindrat/Guess-the-number-game',
    description: `Project-game built with JQuery 🕹
                  JS project game. The goal in this game is to guess as many numbers as possible by the program for a certain time. Depending on the difficulty mode, the amount of time varies. Tips are available depending on the difficulty mode. 🎮`,
    technologies: ['HTML', 'CSS', 'JS', 'JQuery', 'LocalStorage', '4 levels of difficulty', 'Math() JS', '2 languages', 'Custom alerts', 'Animated background', 'Hints']
}, {
    name: 'What file type is it',
    image: 'https://files.fm/thumb_show.php?i=a4r89888x',
    type: 'github',
    link: 'https://victor-kindrat.github.io/what-file-type-is-it/',
    viewCode: 'https://github.com/victor-kindrat/what-file-type-is-it',
    description: `Small JS project, file type analyzer. Can recognize more than 100 file extension. Used JS string methods and input type file to get extension.`,
    technologies: ['HTML', 'CSS', 'JS', 'Media query', 'JQuery', 'Animations', 'Custom design', 'File type analyze', 'Input type file']
}, {
    name: 'Text reader',
    image: 'https://files.fm/thumb_show.php?i=dayefmerw',
    type: 'github',
    link: 'https://victor-kindrat.github.io/textReader/',
    viewCode: 'https://github.com/victor-kindrat/textReader',
    description: `Text reader which help to read your text faster. To concentrate on the right word, use the middle letter selection. You can also change the reading speed, pause and exit the active session 🚀`,
    technologies: ['HTML', 'CSS', 'JS', 'Custom design', 'Speed changer', '"rer letter"', 'Pause', 'Close', 'Color theme', 'Local storage']
}, {
    name: 'API weather',
    image: 'https://fv1-6.failiem.lv/thumb_show.php?i=ga7sjd33q&view',
    type: 'github',
    link: 'https://vkindratapiweather.netlify.app/',
    viewCode: 'https://github.com/victor-kindrat/APIWeather',
    description: `Weather forecast application made on openweather API`,
    technologies: ['HTML', 'CSS', 'JS', 'Fetch.API', 'Free geo API', 'JQuery', 'Media query', 'City changeing', 'Adaptive background', 'Custom design', 'Open Weather API']
}, {
    name: 'Censor',
    image: 'https://files.fm/thumb_show.php?i=h6bwd3w4g',
    type: 'github',
    link: 'https://victor-kindrat.github.io/Cenzor/',
    viewCode: 'https://github.com/victor-kindrat/Cenzor',
    description: `Online text censor project. Input your word, paste your text, click the button and watch the magic ✨`,
    technologies: ['HTML', 'CSS', 'JS', 'UA language', 'Multi page', 'JQuery', 'Animations']
}, {
    name: 'Foodore switcher',
    image: 'https://files.fm/thumb_show.php?i=bx2hjfucz',
    type: 'github',
    link: 'https://foodore-switcher.netlify.app/',
    viewCode: 'https://github.com/victor-kindrat/Foodore',
    description: `Custom plate switcher. JS project. Make an order by spinning a plate.`,
    technologies: ['HTML', 'CSS', 'JS', 'JQuery', 'Adaptivity', 'Bootstrap', 'Tray', 'Custom scrollbar', 'Custom design']
}];

let projectsCount = projects.length;
let designCount = 0;
let pagesCount = 0;
let counter = {
    all: 0,
    designs: 0,
    pages: 0
}
for (let i = 0; i!==projects.length; i++) {
    if(projects[i].type === 'figma') {
        designCount++;
    } else if (projects[i].type === 'github') {
        pagesCount++;
    }
}

for (let i = 0; i !== projects.length; i++) {
    $('.projects__place').append(`<div class="projects__item projects__item${i} projects__item_${projects[i].type}">\n` +
                                        `<button class="projects__view-btn projects__view-btn${i}">View</button>\n` +
                                 `</div>`);
    $('.projects__item' + i).css({
        'background': '#eeeeee url("' + projects[i].image + '") no-repeat center 0%',
        'backgroundSize': 'cover'
    })
}

$('#projects__radio_all').click(function () {
    $('.projects__place').html('');
    for (let j = 0; j !== projects.length; j++) {
        $('.projects__place').append(`<div class="projects__item projects__item${j} projects__item_${projects[j].type}">\n` +
            `<button class="projects__view-btn projects__view-btn${j}">View</button>\n` +
            `</div>`);
        $('.projects__item' + j).css({
            'background': '#eeeeee url("' + projects[j].image + '") no-repeat center 0%',
            'backgroundSize': 'cover'
        })
    }
});

$('#projects__radio_pages').click(function () {
    $('.projects__place').html('');
    for (let j = 0; j !== projects.length; j++) {
        if (projects[j].type === 'github') {
            $('.projects__place').append(`<div class="projects__item projects__item${j} projects__item_${projects[j].type}">\n` +
                `<button class="projects__view-btn projects__view-btn${j}">View</button>\n` +
                `</div>`);
            $('.projects__item' + j).css({
                'background': '#eeeeee url("' + projects[j].image + '") no-repeat center 0%',
                'backgroundSize': 'cover'
            })
        }
    }
})
$('#projects__radio_designs').click(function () {
    $('.projects__place').html('');
    for (let j = 0; j !== projects.length; j++) {
        if (projects[j].type === 'figma') {
            $('.projects__place').append(`<div class="projects__item projects__item${j} projects__item_${projects[j].type}">\n` +
                `<button class="projects__view-btn projects__view-btn${j}">View</button>\n` +
                `</div>`);
            $('.projects__item' + j).css({
                'background': '#eeeeee url("' + projects[j].image + '") no-repeat center 0%',
                'backgroundSize': 'cover'
            })
        }
    }
})

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
            $('#project__counter_projects').text('0');
            $('#project__counter_designs').text('0');
            $('#project__counter_pages').text('0');
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
            setTimeout(function (){
                let x = setInterval(function () {
                    if (counter.all !== projectsCount + 1) {
                        $('#project__counter_projects').text(counter.all)
                        counter.all++;
                    } else {
                        clearInterval(x);
                        counter.all = 0;
                    }
                }, 200);

                let y = setInterval(function () {
                    if (counter.designs !== designCount + 1) {
                        $('#project__counter_designs').text(counter.designs)
                        counter.designs++;
                    } else {
                        clearInterval(y);
                        counter.designs = 0;
                    }
                }, 200);

                let z = setInterval(function () {
                    if (counter.pages !== pagesCount + 1) {
                        $('#project__counter_pages').text(counter.pages)
                        counter.pages++;
                    } else {
                        clearInterval(z);
                        counter.pages = 0;
                    }
                }, 200);
            }, 300)
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
            $('#project__counter_projects').text('0');
            $('#project__counter_designs').text('0');
            $('#project__counter_pages').text('0');
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
    console.log(item);
    $("#info__text_description").text(item.description);
    $('.info__list').html('');
    for (let i = 0; i !== item.technologies.length; i++) {
        $(`.info__list`).append(`<li class="info__list-item">${item.technologies[i]}</li>`)
    }
    $('.info').attr('class', 'info info_' + item.type)
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