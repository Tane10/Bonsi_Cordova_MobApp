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
function clickappDashboardcqentI5TjtQ1Handler(event) {
  var component = document.querySelector(".appdashboard");
  if (isCurrentState(component, "state1")) {
    try {
      setTimeout(function() {
        var component = document.querySelector(".appdashboard");
        component.addEventListener(
          transitionEvent,
          transitionappDashboardcqentI5TjtQstate1tostate2EndedHandler
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
function transitionappDashboardcqentI5TjtQstate1tostate2EndedHandler(event) {
  if (
    event.target.className.trim() == "topbarrec" ||
    event.target.className.startsWith("topbarrec ")
  ) {
    var component = document.querySelector(".appdashboard");
    component.removeEventListener(
      transitionEvent,
      transitionappDashboardcqentI5TjtQstate1tostate2EndedHandler
    );
  }
}
child = document.querySelector(".appdashboard .bonsilogo");
if (child) {
  child.addEventListener("click", clickappDashboardcqentI5TjtQ1Handler);
  child.style["cursor"] = "pointer";
} else {
  console.log("Could not find element at: .appdashboard .bonsilogo");
}
function resetappDashboardcqentI5TjtQ() {
  var component = document.querySelector(".appdashboard");
  if (!component) {
    return;
  }
  component.addEventListener(
    transitionEvent,
    transitionappDashboardcqentI5TjtQstate1tostate2EndedHandler
  );
  removeAllClassesButFirst(component, "state1-to-state2");
  addClass(component, "state2");
  addClass(component, "state1-to-state2");
}
