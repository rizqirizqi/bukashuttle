/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/bukalapak/playground/bukashuttle/resources/assets/js/components/Example.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Example.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05ba6f42", Component.options)
  } else {
    hotAPI.reload("data-v-05ba6f42", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Example Component")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                    I'm an example component!\n                ")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05ba6f42", module.exports)
  }
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', __webpack_require__(33));

var app = new Vue({
    el: '#app',
    data: {
        formStep: 0,
        instruction: 'Pilih lokasi penjemputan:',
        departureSchedules: [{ id: 0, time: '08:00', isFull: false }, { id: 1, time: '09:00', isFull: false }, { id: 2, time: '10:00', isFull: false }, { id: 3, time: '11:00', isFull: true }, { id: 4, time: '12:00', isFull: true }, { id: 5, time: '13:00', isFull: false }, { id: 6, time: '14:00', isFull: false }, { id: 7, time: '15:00', isFull: true }, { id: 8, time: '16:00', isFull: false }, { id: 9, time: '17:00', isFull: true }, { id: 10, time: '18:00', isFull: false }, { id: 11, time: '19:00', isFull: false }],
        bookingData: {
            origin: null,
            destination: null,
            departureTime: null
        },
        originElem: null,
        destinationElem: null
    },
    watch: {
        formStep: function formStep() {
            if (this.formStep == 0) {
                this.instruction = 'Pilih lokasi penjemputan:';
            } else if (this.formStep == 1) {
                this.instruction = 'Pilih lokasi tujuan:';
            } else {
                this.instruction = 'Pilih lokasi tujuan:';
            }
        }
    },
    methods: {
        selectLocation: function selectLocation($thisEl) {
            if (this.formStep == 0) {
                this.selectOrigin($thisEl);
            } else if (this.formStep == 1) {
                this.selectDestination($thisEl);
            } else {
                return null;
            }
        },
        selectOrigin: function selectOrigin($thisEl) {
            this.originElem = $thisEl;
            this.bookingData.origin = $(this.originElem).data('locationId');
            this.formStep = 1;
            $(this.originElem).css(_defineProperty({
                filter: 'gray'
            }, 'filter', 'grayscale(100%)'));
        },
        selectDestination: function selectDestination($thisEl) {
            this.destinationElem = $thisEl;
            this.bookingData.destination = $(this.destinationElem).data('locationId');
            this.formStep = 2;
            $(this.destinationElem).css(_defineProperty({
                filter: 'gray'
            }, 'filter', 'grayscale(100%)'));
            $('#departureTimeModal').modal('open');
        },
        selectDepartureTime: function selectDepartureTime(departureTimeId) {
            if (this.formStep == 2) {
                this.bookingData.departureTime = departureTimeId;
                this.formStep = 3;
                $('#departureTimeModal').modal('close');
                // call ajax here, get list of users which have booked the schedule
            }
        }
    },
    mounted: function mounted() {
        var _this = this;
        $(".button-collapse").sideNav();
        $('#departureTimeModal').modal({
            dismissible: false,
            complete: function complete() {
                if (_this.bookingData.departureTime == null) {
                    $(_this.destinationElem).css({
                        filter: 'none'
                    });
                    _this.formStep = 1;
                    _this.bookingData.destination = null;
                    _this.destinationElem = null;
                }
            }
        });
    }
});

/***/ })

/******/ });