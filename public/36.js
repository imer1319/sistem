(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/5-piramide.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ejercicios/5-piramide.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      recorrer: 0,
      intervalo: null,
      piramide1: ['La', 'primavera', 'ya', 'no', 'es', 'mi', 'estación', 'favorita'],
      piramide2: ['Nieva', 'como', 'hace', 'mucho', 'tiempo', 'no', 'lo', 'hacía'],
      piramide3: ['Desayunando', 'cereales', 'con', 'leche', 'tu', 'día', 'será', 'mejor'],
      piramide4: ['Mi', 'hijo', 'Israel', 'tiene', 'cinco', 'años', 'y', 'es', 'muy', 'guapo'],
      piramide5: ['El', 'perro', 'de', 'mi', 'vecina', 'agacha', 'las', 'orejas', 'siempre', 'que', 'me', 've']
    };
  },
  methods: {
    empezar: function empezar() {
      this.intervalo = setInterval(this.getPiramides, 1500);
    },
    getPiramides: function getPiramides() {
      if (this.recorrer >= 8) {
        clearInterval(this.intervalo);
      } else {
        var piramide = document.getElementById("piramides");

        for (var i = 0; i <= this.recorrer; i++) {
          piramide.innerHTML += this.piramide3[i] + " ";
        }

        piramide.innerHTML += "</br>";
        this.recorrer++;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/5-piramide.vue?vue&type=template&id=233ff9b5&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ejercicios/5-piramide.vue?vue&type=template&id=233ff9b5& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "conteiner-fluid" }, [
    _c("h3", [_vm._v("piramide")]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "btn btn-primary",
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.empezar()
          }
        }
      },
      [_vm._v("Empezar")]
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("p", { staticClass: "lead", attrs: { id: "piramides" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/ejercicios/5-piramide.vue":
/*!******************************************************!*\
  !*** ./resources/js/users/ejercicios/5-piramide.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _5_piramide_vue_vue_type_template_id_233ff9b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5-piramide.vue?vue&type=template&id=233ff9b5& */ "./resources/js/users/ejercicios/5-piramide.vue?vue&type=template&id=233ff9b5&");
/* harmony import */ var _5_piramide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./5-piramide.vue?vue&type=script&lang=js& */ "./resources/js/users/ejercicios/5-piramide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _5_piramide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _5_piramide_vue_vue_type_template_id_233ff9b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _5_piramide_vue_vue_type_template_id_233ff9b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/ejercicios/5-piramide.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/ejercicios/5-piramide.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/users/ejercicios/5-piramide.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_5_piramide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./5-piramide.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/5-piramide.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_5_piramide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/ejercicios/5-piramide.vue?vue&type=template&id=233ff9b5&":
/*!*************************************************************************************!*\
  !*** ./resources/js/users/ejercicios/5-piramide.vue?vue&type=template&id=233ff9b5& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_5_piramide_vue_vue_type_template_id_233ff9b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./5-piramide.vue?vue&type=template&id=233ff9b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/5-piramide.vue?vue&type=template&id=233ff9b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_5_piramide_vue_vue_type_template_id_233ff9b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_5_piramide_vue_vue_type_template_id_233ff9b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);