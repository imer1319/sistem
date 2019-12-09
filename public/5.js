(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1schultz.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/1schultz.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      name: 'schultz',
      number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ids: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
      x: 0,
      xx: 0,
      xxx: 0,
      indicator: 1,
      indicatortwo: 0,
      actual: 0,
      num: 1,
      icon: ''
    };
  },
  methods: {
    mostrar: function mostrar() {
      var table = document.getElementById("table");
      this.icon = document.getElementById("actual");
      this.icon.innerHTML = this.num;
      table.style.display = 'block';
      this.icon.style.display = 'block';
      this.number.sort(this.shuf);

      while (this.x <= 8) {
        this.xx = Math.floor(Math.random() * 6 + 3);
        this.xxx = this.number[this.x];
        this.number[this.x] = this.number[this.xx];
        this.number[this.xx] = this.xxx;
        this.x++;
      }

      while (this.indicator <= 9) {
        document.getElementById(this.ids[this.indicator - 1]).innerHTML = this.number[this.indicatortwo];
        this.indicator++;
        this.indicatortwo++;
      }

      console.log(this.number.join(' '));
      console.log(this.ids.join(' '));
    },
    pres: function pres(event) {
      var targetId = event.currentTarget.id;
      console.log(targetId);

      switch (targetId) {
        case "a":
          var a = document.getElementById("a");
          console.log("acutal : " + this.actual);
          console.log("number : " + this.number[this.actual]);
          console.log("num : " + this.num);

          if (this.number[this.actual] == this.num) {
            a.innerHTML = "a";
            this.num++;
            this.esUltimo(this.num);
          } else {
            console.log("error");
          }

          break;

        case "b":
          var b = document.getElementById("b");

          if (this.number[this.actual + 1] == this.num) {
            b.innerHTML = "b";
            this.num++;
            this.esUltimo(this.num);
          } else {
            console.log("error");
          }

          break;

        case "c":
          var c = document.getElementById("c");

          if (this.number[this.actual + 2] == this.num) {
            c.innerHTML = "c";
            this.num++;
            this.esUltimo(this.num);
          } else {
            console.log("error");
          }

          break;

        case "d":
          var d = document.getElementById("d");

          if (this.number[this.actual + 3] == this.num) {
            d.innerHTML = "d";
            this.num++;
            this.esUltimo(this.num);
          } else {
            console.log("error");
          }

          break;

        case "e":
          var e = document.getElementById("e");

          if (this.number[this.actual + 4] == this.num) {
            e.innerHTML = "e";
            this.num++;
            this.esUltimo(this.num);
          } else {
            console.log("error");
          }

          break;

        case "f":
          var f = document.getElementById("f");

          if (this.number[this.actual + 5] == this.num) {
            f.innerHTML = "f";
            this.num++;
            this.esUltimo(this.num);
          } else {
            console.log("error");
          }

          break;

        case "g":
          var g = document.getElementById("g");

          if (this.number[this.actual + 6] == this.num) {
            g.innerHTML = "g";
            this.num++;
            this.esUltimo(this.num);
          } else {
            console.log("error");
          }

          break;

        case "h":
          var h = document.getElementById("h");

          if (this.number[this.actual + 7] == this.num) {
            h.innerHTML = "h";
            this.num++;
            this.esUltimo(this.num);
          } else {
            console.log("error");
          }

          break;

        case "i":
          var i = document.getElementById("i");

          if (this.number[this.actual + 8] == this.num) {
            i.innerHTML = "i";
            this.num++;
            this.esUltimo(this.num);
          } else {
            console.log("error");
          }

          break;
      }
    },
    esUltimo: function esUltimo(numero) {
      if (numero == 10) {
        this.icon.innerHTML = "finalizado";
      } else {
        this.icon.innerHTML = this.num;
      }
    },
    shuf: function shuf(a, b) {
      return Math.floor(Math.random() * 9 + 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1schultz.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/1schultz.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#table {\r\n\tdisplay:none;\r\n\twidth: 500px;\r\n\theight: 500px;\r\n\tflex-wrap: wrap;\r\n\tmargin: auto;\n}\ntr,td {\r\n\tfont-size: 30px;\r\n\tcolor: blue;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\ttext-align: center;\r\n\tline-height: 100px;\r\n\tbox-shadow: 1px 1px 1px  white;\n}\n#actual{\r\n\tdisplay: none;\r\n\tcolor: blue;\r\n\tfont-size: 35px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1schultz.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/1schultz.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./1schultz.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1schultz.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1schultz.vue?vue&type=template&id=ae64f468&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/1schultz.vue?vue&type=template&id=ae64f468& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-12" }, [
    _c("h3", [_vm._v(_vm._s(_vm.name))]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "mostrar",
        on: {
          click: function($event) {
            return _vm.mostrar()
          }
        }
      },
      [_vm._v("Empezar")]
    ),
    _vm._v(" "),
    _c("div", { attrs: { id: "contenedor" } }, [
      _c("br"),
      _vm._v(" "),
      _c("div", { attrs: { id: "actual" } }),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("table", { attrs: { id: "table" } }, [
        _c("tr", [
          _c("td", {
            attrs: { id: "a" },
            on: {
              click: function($event) {
                return _vm.pres($event)
              }
            }
          }),
          _vm._v(" "),
          _c("td", {
            attrs: { id: "b" },
            on: {
              click: function($event) {
                return _vm.pres($event)
              }
            }
          }),
          _vm._v(" "),
          _c("td", {
            attrs: { id: "c" },
            on: {
              click: function($event) {
                return _vm.pres($event)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", {
            attrs: { id: "d" },
            on: {
              click: function($event) {
                return _vm.pres($event)
              }
            }
          }),
          _vm._v(" "),
          _c("td", {
            attrs: { id: "e" },
            on: {
              click: function($event) {
                return _vm.pres($event)
              }
            }
          }),
          _vm._v(" "),
          _c("td", {
            attrs: { id: "f" },
            on: {
              click: function($event) {
                return _vm.pres($event)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", {
            attrs: { id: "g" },
            on: {
              click: function($event) {
                return _vm.pres($event)
              }
            }
          }),
          _vm._v(" "),
          _c("td", {
            attrs: { id: "h" },
            on: {
              click: function($event) {
                return _vm.pres($event)
              }
            }
          }),
          _vm._v(" "),
          _c("td", {
            attrs: { id: "i" },
            on: {
              click: function($event) {
                return _vm.pres($event)
              }
            }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/game/1schultz.vue":
/*!**********************************************!*\
  !*** ./resources/js/users/game/1schultz.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1schultz_vue_vue_type_template_id_ae64f468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1schultz.vue?vue&type=template&id=ae64f468& */ "./resources/js/users/game/1schultz.vue?vue&type=template&id=ae64f468&");
/* harmony import */ var _1schultz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1schultz.vue?vue&type=script&lang=js& */ "./resources/js/users/game/1schultz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _1schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./1schultz.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/game/1schultz.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _1schultz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _1schultz_vue_vue_type_template_id_ae64f468___WEBPACK_IMPORTED_MODULE_0__["render"],
  _1schultz_vue_vue_type_template_id_ae64f468___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/game/1schultz.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/game/1schultz.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/users/game/1schultz.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./1schultz.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1schultz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/game/1schultz.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/users/game/1schultz.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./1schultz.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1schultz.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/game/1schultz.vue?vue&type=template&id=ae64f468&":
/*!*****************************************************************************!*\
  !*** ./resources/js/users/game/1schultz.vue?vue&type=template&id=ae64f468& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_template_id_ae64f468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./1schultz.vue?vue&type=template&id=ae64f468& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1schultz.vue?vue&type=template&id=ae64f468&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_template_id_ae64f468___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_1schultz_vue_vue_type_template_id_ae64f468___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);