//how to make a parallax in javascript ?
$(window).on('scroll', function() {
    $('#background').css('margin-top', $(window).scrollTop() * -.3);
});




//Source: https://stackoverflow.com/questions/23178762


