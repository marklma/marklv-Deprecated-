// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
$(function() {
  starter = $("#starter");
  var clearLoading = setTimeout(function() {
    starter.animate({
        height: 0,
        opacity: 0
      },
      "slow", function() {
        starter.empty().remove();
        shapeblue_jq = null;
        shapepink_jq = null;
        starter = null;
      });
  }, 520);
  window.onload = clearLoading;
});
