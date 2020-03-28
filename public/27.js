(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/puntuacionExam.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/puntuacionExam.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.puntuacionExamen();
  },
  data: function data() {
    return {
      puntuaciones: []
    };
  },
  methods: {
    puntuacionExamen: function puntuacionExamen() {
      var _this = this;

      var url = '/puntuacionExamen';
      axios.get(url).then(function (res) {
        _this.puntuaciones = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/puntuacionExam.vue?vue&type=template&id=796a4580&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/puntuacionExam.vue?vue&type=template&id=796a4580& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("h5", { staticClass: "text-center" }, [
        _vm._v("Puntuaciones de examen")
      ]),
      _vm._v(" "),
      _vm._l(_vm.puntuaciones, function(punt, index) {
        return _c("div", [
          _c("div", { staticClass: "card col-12 col-md-8 mx-auto mb-2" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6" }, [_vm._v("Titulo")]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _vm._v(_vm._s(punt.name))
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [_vm._v("ppm")]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _vm._v(_vm._s(punt.pivot.ppm))
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [_vm._v("Comprension")]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _vm._v(_vm._s(punt.pivot.comprension)),
                  _c("b", { staticClass: "h5" }, [_vm._v(" %")])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [_vm._v("tiempo")]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _vm._v(_vm._s(punt.pivot.tiempo)),
                  _c("b", { staticClass: "h5" }, [_vm._v(" segundos")])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [_vm._v("fecha")]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _vm._v(_vm._s(punt.pivot.created_at))
                ])
              ])
            ])
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 container-fluid" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-dark text-uppercase",
          attrs: { type: "button", onClick: "history.back()" }
        },
        [_vm._v("Regresar")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/puntuacionExam.vue":
/*!***********************************************!*\
  !*** ./resources/js/users/puntuacionExam.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _puntuacionExam_vue_vue_type_template_id_796a4580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puntuacionExam.vue?vue&type=template&id=796a4580& */ "./resources/js/users/puntuacionExam.vue?vue&type=template&id=796a4580&");
/* harmony import */ var _puntuacionExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./puntuacionExam.vue?vue&type=script&lang=js& */ "./resources/js/users/puntuacionExam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _puntuacionExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _puntuacionExam_vue_vue_type_template_id_796a4580___WEBPACK_IMPORTED_MODULE_0__["render"],
  _puntuacionExam_vue_vue_type_template_id_796a4580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/puntuacionExam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/puntuacionExam.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/users/puntuacionExam.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_puntuacionExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./puntuacionExam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/puntuacionExam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_puntuacionExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/puntuacionExam.vue?vue&type=template&id=796a4580&":
/*!******************************************************************************!*\
  !*** ./resources/js/users/puntuacionExam.vue?vue&type=template&id=796a4580& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_puntuacionExam_vue_vue_type_template_id_796a4580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./puntuacionExam.vue?vue&type=template&id=796a4580& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/puntuacionExam.vue?vue&type=template&id=796a4580&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_puntuacionExam_vue_vue_type_template_id_796a4580___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_puntuacionExam_vue_vue_type_template_id_796a4580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);