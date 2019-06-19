isHidden = function(e) {
  if (!(e instanceof HTMLElement)) return !1;
  if (getComputedStyle(e).display == "none") return !0;
  else if (e.parentNode && isHidden(e.parentNode)) return !0;
  return !1;
};
loadAsyncSrcForTag = function(tag) {
  var elements = document.getElementsByTagName(tag);
  var toLoad = [];
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    var src = e.getAttribute("src");
    var loaded =
      src != undefined &&
      src.length > 0 &&
      src !=
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    if (loaded) continue;
    var asyncSrc = e.getAttribute("src");
    if (asyncSrc == undefined || asyncSrc.length == 0) continue;
    if (isHidden(e)) continue;
    toLoad.push(e);
  }
  toLoad.sort(function(a, b) {
    return getTop(a) - getTop(b);
  });
  for (var i = 0; i < toLoad.length; i++) {
    var e = toLoad[i];
    var asyncSrc = e.getAttribute("src");
    e.setAttribute("src", asyncSrc);
  }
};
pauseHiddenVideos = function(tag) {
  var elements = document.getElementsByTagName("video");
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    var isPlaying = !!(
      e.currentTime > 0 &&
      !e.paused &&
      !e.ended &&
      e.readyState > 2
    );
    var isHidden = isHidden(e);
    if (!isPlaying && !isHidden && e.getAttribute("autoplay") == "autoplay") {
      e.play();
    } else if (isPlaying && isHidden) {
      e.pause();
    }
  }
};
loadAsyncSrc = function(tag) {
  loadAsyncSrcForTag("img");
  loadAsyncSrcForTag("iframe");
  loadAsyncSrcForTag("video");
  pauseHiddenVideos();
};
var getTop = function(e) {
  var top = 0;
  do {
    top += e.offsetTop || 0;
    e = e.offsetParent;
  } while (e);
  return top;
};
loadAsyncSrc();
old_onResize = window.onresize;
new_onResize = undefined;
updateOnResize = function() {
  if (
    new_onResize == undefined ||
    window.onresize != new_onResize
  ) {
    new_onResize = function(x) {
      if (old_onResize != undefined) old_onResize(x);
      loadAsyncSrc();
    };
    window.onresize = new_onResize;
    setTimeout(function() {
      updateOnResize();
    }, 3000);
  }
};
updateOnResize();
setTimeout(function() {
  loadAsyncSrc();
}, 200);
