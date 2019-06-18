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
