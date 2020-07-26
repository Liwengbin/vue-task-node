import $ from 'jquery'
import {browsers} from './tools.js'
(window.___NODRAGEVENT = (browsers() === 'Firefox')) &&
$(document).on('dragover', function (e) {
  e = e.originalEvent
  window.__event = e.originalEvent
  window.___PAGEX = e.clientX || e.pageX
  window.___PAGEY = e.clientY || e.pageY
})
