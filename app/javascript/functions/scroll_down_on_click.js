const scrollDownOnClick = () => {
  $('.albuns').click(() => {
    $('html, body').animate({
        scrollTop: $('.tabs').offset().top
    }, 'slow');
  });
}

export default scrollDownOnClick;
