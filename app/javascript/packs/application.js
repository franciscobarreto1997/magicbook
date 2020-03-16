require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import changeNavbarColor from '../functions/change_navbar_color'
import scrollDownOnClick from '../functions/scroll_down_on_click'
import fetchAlbumsOnHover from '../functions/fetch_albums_on_hover'
import responsiveNavbar from '../functions/responsive_navbar'
import addCarouselForMobile from '../functions/add_carousel_for_mobile'

changeNavbarColor()
scrollDownOnClick()
fetchAlbumsOnHover()
responsiveNavbar()
addCarouselForMobile()


window.addEventListener("load", () => {
  $('.carousel').carousel('pause')
});

