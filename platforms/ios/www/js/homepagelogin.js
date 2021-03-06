var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );

    //#region homepage no animtaion
    if (typeof String.prototype.endsWith !== "function") {
      String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
      };
    }
    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
      };
    }
    if (!Array.prototype.forEach) {
      Array.prototype.forEach = function(callback) {
        var T, k;
        if (this == null) {
          throw new TypeError("this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
          throw new TypeError(callback + " is not a function");
        }
        if (arguments.length > 1) {
          T = arguments[1];
        }
        k = 0;
        while (k < len) {
          var kValue;
          if (k in O) {
            kValue = O[k];
            callback.call(T, kValue, k, O);
          }
          k++;
        }
      };
    }
    function toArray(obj) {
      var array = [];
      for (var i = obj.length >>> 0; i--; ) {
        array[i] = obj[i];
      }
      return array;
    }
    function addClass(object, className) {
      object.classList
        ? object.classList.add(className)
        : (object.className += " " + className);
    }
    function removeAllClassesButFirst(component, skipClass) {
      var classList = component.classList;
      var componentClass = classList.item(0);
      var toRemove = [];
      var beforeComponent = true;
      toArray(classList).forEach(function(className) {
        beforeComponent = beforeComponent && className != "component";
        if (
          className != skipClass &&
          className != componentClass &&
          className != "component" &&
          !beforeComponent
        ) {
          toRemove.push(className);
        }
      });
      toRemove.forEach(function(className) {
        classList.remove(className);
      });
    }
    function applyState(component, stateClass) {
      var componentClass = component.classList.item(0);
      component.className = componentClass;
      component.classList.add(stateClass);
    }
    function isCurrentState(component, state) {
      var classList = component.classList;
      var rv = false;
      toArray(classList).forEach(function(className) {
        if (className.endsWith(state)) {
          rv = true;
        }
      });
      return rv;
    }
    function whichTransitionEvent() {
      var t,
        el = document.createElement("fakeelement");
      var transitions = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
      };
      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }
    }
    var transitionEvent = whichTransitionEvent();
    function clickhomepageLoginviaJMd91set1Handler(event) {
      var component = document.querySelector(".homepagelogin-viaJ");
      if (isCurrentState(component, "keyframe1")) {
        try {
          setTimeout(function() {
            var component = document.querySelector(".homepagelogin-viaJ");
            component.addEventListener(
              transitionEvent,
              transitionhomepageLoginviaJMd91setkeyframe1tokeyframe2EndedHandler
            );
            removeAllClassesButFirst(component, "keyframe1-to-keyframe2");
            addClass(component, "keyframe2");
            addClass(component, "keyframe1-to-keyframe2");
          }, 0);
        } catch (e) {
          console.log(e);
        }
      }
    }
    function transitionhomepageLoginviaJMd91setkeyframe1tokeyframe2EndedHandler(
      event
    ) {
      if (
        event.target.className.trim() == "logincard" ||
        event.target.className.startsWith("logincard ")
      ) {
        var component = document.querySelector(".homepagelogin-viaJ");
        component.removeEventListener(
          transitionEvent,
          transitionhomepageLoginviaJMd91setkeyframe1tokeyframe2EndedHandler
        );
        setTimeout(function() {
          var component = document.querySelector(".homepagelogin-viaJ");
          component.addEventListener(
            transitionEvent,
            transitionhomepageLoginviaJMd91setkeyframe2tokeyframe3EndedHandler
          );
          removeAllClassesButFirst(component, "keyframe2-to-keyframe3");
          addClass(component, "keyframe3");
          addClass(component, "keyframe2-to-keyframe3");
        }, 0);
      }
    }
    var component = document.querySelector(".homepagelogin-viaJ");
    component.addEventListener("click", clickhomepageLoginviaJMd91set1Handler);
    function resethomepageLoginviaJMd91set() {
      var component = document.querySelector(".homepagelogin-viaJ");
      if (!component) {
        return;
      }
      component.addEventListener(
        transitionEvent,
        transitionhomepageLoginviaJMd91setkeyframe1tokeyframe2EndedHandler
      );
      removeAllClassesButFirst(component, "keyframe1-to-keyframe2");
      addClass(component, "keyframe2");
      addClass(component, "keyframe1-to-keyframe2");
    }
    function transitionhomepageLoginviaJMd91setkeyframe2tokeyframe3EndedHandler(
      event
    ) {
      if (
        event.target.className.trim() == "c1" ||
        event.target.className.startsWith("c1 ")
      ) {
        var component = document.querySelector(".homepagelogin-viaJ");
        component.removeEventListener(
          transitionEvent,
          transitionhomepageLoginviaJMd91setkeyframe2tokeyframe3EndedHandler
        );
        setTimeout(function() {
          var component = document.querySelector(".homepagelogin-viaJ");
          component.addEventListener(
            transitionEvent,
            transitionhomepageLoginviaJMd91setkeyframe3tokeyframe4EndedHandler
          );
          removeAllClassesButFirst(component, "keyframe3-to-keyframe4");
          addClass(component, "keyframe4");
          addClass(component, "keyframe3-to-keyframe4");
        }, 0);
      }
    }
    function transitionhomepageLoginviaJMd91setkeyframe3tokeyframe4EndedHandler(
      event
    ) {
      if (
        event.target.className.trim() == "logincard" ||
        event.target.className.startsWith("logincard ")
      ) {
        var component = document.querySelector(".homepagelogin-viaJ");
        component.removeEventListener(
          transitionEvent,
          transitionhomepageLoginviaJMd91setkeyframe3tokeyframe4EndedHandler
        );
      }
    }
    function clickshowPsw7DjCMd91set1Handler(event) {
      var component = document.querySelector(
        ".homepagelogin-viaJ .logincard-meBV .showpsw-7DjC"
      );
      if (isCurrentState(component, "state1")) {
        try {
          setTimeout(function() {
            var component = document.querySelector(
              ".homepagelogin-viaJ .logincard-meBV .showpsw-7DjC"
            );
            component.addEventListener(
              transitionEvent,
              transitionshowPsw7DjCMd91setstate1tostate2EndedHandler
            );
            removeAllClassesButFirst(component, "state1-to-state2");
            addClass(component, "state2");
            addClass(component, "state1-to-state2");
          }, 0);
        } catch (e) {
          console.log(e);
        }
      }
    }
    function transitionshowPsw7DjCMd91setstate1tostate2EndedHandler(event) {
      if (
        event.target.className.trim() == "rectangle" ||
        event.target.className.startsWith("rectangle ")
      ) {
        var component = document.querySelector(
          ".homepagelogin-viaJ .logincard-meBV .showpsw-7DjC"
        );
        component.removeEventListener(
          transitionEvent,
          transitionshowPsw7DjCMd91setstate1tostate2EndedHandler
        );
      }
    }
    child = document.querySelector(
      ".homepagelogin-viaJ .logincard-meBV .showpsw-7DjC .showpassword"
    );
    if (child) {
      child.addEventListener("click", clickshowPsw7DjCMd91set1Handler);
      child.style["cursor"] = "pointer";
    } else {
      console.log(
        "Could not find element at: .homepagelogin-viaJ .logincard-meBV .showpsw-7DjC .showpassword"
      );
    }
    function resetshowPsw7DjCMd91set() {
      var component = document.querySelector(
        ".homepagelogin-viaJ .logincard-meBV .showpsw-7DjC"
      );
      if (!component) {
        return;
      }
      component.addEventListener(
        transitionEvent,
        transitionshowPsw7DjCMd91setstate1tostate2EndedHandler
      );
      removeAllClassesButFirst(component, "state1-to-state2");
      addClass(component, "state2");
      addClass(component, "state1-to-state2");
    }
    function clickshowPsw7DjCMd91set2Handler(event) {
      var component = document.querySelector(
        ".homepagelogin-viaJ .logincard-meBV .showpsw-7DjC"
      );
      if (isCurrentState(component, "state2")) {
        try {
          setTimeout(function() {
            var component = document.querySelector(
              ".homepagelogin-viaJ .logincard-meBV .showpsw-7DjC"
            );
            component.addEventListener(
              transitionEvent,
              transitionshowPsw7DjCMd91setstate2tostate1EndedHandler
            );
            removeAllClassesButFirst(component, "state2-to-state1");
            addClass(component, "state1");
            addClass(component, "state2-to-state1");
          }, 0);
        } catch (e) {
          console.log(e);
        }
      }
    }
    function transitionshowPsw7DjCMd91setstate2tostate1EndedHandler(event) {
      if (
        event.target.className.trim() == "rectangle" ||
        event.target.className.startsWith("rectangle ")
      ) {
        var component = document.querySelector(
          ".homepagelogin-viaJ .logincard-meBV .showpsw-7DjC"
        );
        component.removeEventListener(
          transitionEvent,
          transitionshowPsw7DjCMd91setstate2tostate1EndedHandler
        );
      }
    }
    child = document.querySelector(
      ".homepagelogin-viaJ .logincard-meBV .showpsw-7DjC .showpassword"
    );
    if (child) {
      child.addEventListener("click", clickshowPsw7DjCMd91set2Handler);
      child.style["cursor"] = "pointer";
    } else {
      console.log(
        "Could not find element at: .homepagelogin-viaJ .logincard-meBV .showpsw-7DjC .showpassword"
      );
    }
    (function() {
      var component = document.querySelector(".homepagelogin-viaJ");
      var event = new Event("click");
      component.dispatchEvent(event);
    })();
    //#endregion

    //#region homepage with animation
    anima_isHidden = function(e) {
      if (!(e instanceof HTMLElement)) return !1;
      if (getComputedStyle(e).display == "none") return !0;
      else if (e.parentNode && anima_isHidden(e.parentNode)) return !0;
      return !1;
    };
    anima_loadAsyncSrcForTag = function(tag) {
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
        var asyncSrc = e.getAttribute("anima-src");
        if (asyncSrc == undefined || asyncSrc.length == 0) continue;
        if (anima_isHidden(e)) continue;
        toLoad.push(e);
      }
      toLoad.sort(function(a, b) {
        return anima_getTop(a) - anima_getTop(b);
      });
      for (var i = 0; i < toLoad.length; i++) {
        var e = toLoad[i];
        var asyncSrc = e.getAttribute("anima-src");
        e.setAttribute("src", asyncSrc);
      }
    };
    anima_pauseHiddenVideos = function(tag) {
      var elements = document.getElementsByTagName("video");
      for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        var isPlaying = !!(
          e.currentTime > 0 &&
          !e.paused &&
          !e.ended &&
          e.readyState > 2
        );
        var isHidden = anima_isHidden(e);
        if (
          !isPlaying &&
          !isHidden &&
          e.getAttribute("autoplay") == "autoplay"
        ) {
          e.play();
        } else if (isPlaying && isHidden) {
          e.pause();
        }
      }
    };
    anima_loadAsyncSrc = function(tag) {
      anima_loadAsyncSrcForTag("img");
      anima_loadAsyncSrcForTag("iframe");
      anima_loadAsyncSrcForTag("video");
      anima_pauseHiddenVideos();
    };
    var anima_getTop = function(e) {
      var top = 0;
      do {
        top += e.offsetTop || 0;
        e = e.offsetParent;
      } while (e);
      return top;
    };
    anima_loadAsyncSrc();
    anima_old_onResize = window.onresize;
    anima_new_onResize = undefined;
    anima_updateOnResize = function() {
      if (
        anima_new_onResize == undefined ||
        window.onresize != anima_new_onResize
      ) {
        anima_new_onResize = function(x) {
          if (anima_old_onResize != undefined) anima_old_onResize(x);
          anima_loadAsyncSrc();
        };
        window.onresize = anima_new_onResize;
        setTimeout(function() {
          anima_updateOnResize();
        }, 3000);
      }
    };
    anima_updateOnResize();
    setTimeout(function() {
      anima_loadAsyncSrc();
    }, 200);

    //#endregion
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent("deviceready");
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector(".listening");
    var receivedElement = parentElement.querySelector(".received");

    listeningElement.setAttribute("style", "display:none;");
    receivedElement.setAttribute("style", "display:block;");

    console.log("Received Event: " + id);
  }
};

app.initialize();
