require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import changeNavbarColor from '../functions/change_navbar_color'
import scrollDownOnClick from '../functions/scroll_down_on_click'

changeNavbarColor()
scrollDownOnClick()
