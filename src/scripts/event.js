export function addEvent() {
  if (document.addEventListener) {
    return function (el, type, fn) {
      if (el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      } else {
        el.addEventListener(type, fn, false);        
      }
    };
  } 
  else {
    return function (el, type, fn) {
      if (el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      } else {
        el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
      }
    };
  }
}
