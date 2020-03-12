const scrollDownOnClick = () => {
  $('.albuns').click(() => {
    console.log("hahaha")
    $('html, body').animate({
        scrollTop: $('.calma').offset().top
    }, 'slow');
  });
}

export default scrollDownOnClick;
