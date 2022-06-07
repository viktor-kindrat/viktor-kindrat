function fillMySkills(count) {
    for (let i = 1; i!== count + 1; i++) {
        $('.main__iKnow-container').append('<div class="main__iKnow-item main__iKnow-item'+i+'"></div>');
        $('.main__iKnow-item' + i).css('background', '#5534A5 url("./images/day/main/iknow/'+i+'.svg") no-repeat center')
    }
}
fillMySkills(20);
