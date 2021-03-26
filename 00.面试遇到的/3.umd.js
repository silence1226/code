// bundle.js
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global = global || self, global.myBundle = factory())
  
})(this, (function () {
  'use strict';
  var main = () => {
    return 'hello world'
  }
  return main;
}))
