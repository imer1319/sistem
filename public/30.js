(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ScoresExam.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ScoresExam.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    axios.get('/puntuacionExamen').then(function (res) {
      _this.examenes = res.data;
      _this.loading = false;
    });
  },
  data: function data() {
    return {
      examenes: [],
      loading: true
    };
  },
  methods: {
    obtenerFecha: function obtenerFecha(fecha) {
      return moment(fecha).fromNow();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ScoresExam.vue?vue&type=template&id=1f90d382&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ScoresExam.vue?vue&type=template&id=1f90d382& ***!
  \********************************************************************************************************************************************************************************************************/
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
    [
      _vm.loading
        ? _c("spinner")
        : _c(
            "div",
            [
              _c(
                "div",
                { staticClass: "container-fluid" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-dark text-uppercase",
                      attrs: { to: "/home" }
                    },
                    [_vm._v("\n\t\t\t\tRegresar\n\t\t\t")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("h5", { staticClass: "text-center" }, [
                _vm._v("Puntuaciones de examen")
              ]),
              _vm._v(" "),
              _vm._l(_vm.examenes, function(examen, index) {
                return _c("div", [
                  _c(
                    "div",
                    { staticClass: "card col-12 col-md-8 mx-auto mb-2 shadow" },
                    [
                      _c("div", { staticClass: "card-body" }, [
                        _c("h4", { staticClass: "text-center text-danger" }, [
                          _vm._v(_vm._s(examen.name))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "h5",
                            { staticClass: "col-8 col-md-6 text-success" },
                            [
                              _c("i", {
                                staticClass: "fab fa-accessible-icon"
                              }),
                              _vm._v(" PPM")
                            ]
                          ),
                          _vm._v(" "),
                          _c("h5", { staticClass: "col-4 col-md-6" }, [
                            _vm._v(_vm._s(examen.pivot.ppm))
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c(
                            "h5",
                            { staticClass: "col-8 col-md-6 text-info" },
                            [
                              _c("i", { staticClass: "fas fa-brain" }),
                              _vm._v(" Comprension")
                            ]
                          ),
                          _vm._v(" "),
                          _c("h5", { staticClass: "col-4 col-md-6" }, [
                            _vm._v(_vm._s(examen.pivot.comprension)),
                            _c("b", { staticClass: "h5" }, [_vm._v(" %")])
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c(
                            "h5",
                            { staticClass: "col-8 col-md-6 text-warning" },
                            [
                              _c("i", { staticClass: "far fa-clock" }),
                              _vm._v(" Tiempo")
                            ]
                          ),
                          _vm._v(" "),
                          _c("h5", { staticClass: "col-4 col-md-6" }, [
                            _vm._v(_vm._s(examen.pivot.tiempo)),
                            _c("b", { staticClass: "h5" }, [_vm._v(" s")])
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c(
                            "h5",
                            { staticClass: "col-8 col-md-6 text-gray-dark" },
                            [
                              _c("i", { staticClass: "far fa-sun" }),
                              _vm._v(" Fecha")
                            ]
                          ),
                          _vm._v(" "),
                          _c("h5", { staticClass: "col-4 col-md-6" }, [
                            _vm._v(
                              _vm._s(_vm.obtenerFecha(examen.pivot.created_at))
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              })
            ],
            2
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ScoresExam.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/ScoresExam.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScoresExam_vue_vue_type_template_id_1f90d382___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScoresExam.vue?vue&type=template&id=1f90d382& */ "./resources/js/views/ScoresExam.vue?vue&type=template&id=1f90d382&");
/* harmony import */ var _ScoresExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoresExam.vue?vue&type=script&lang=js& */ "./resources/js/views/ScoresExam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScoresExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScoresExam_vue_vue_type_template_id_1f90d382___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScoresExam_vue_vue_type_template_id_1f90d382___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ScoresExam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ScoresExam.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/ScoresExam.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoresExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ScoresExam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ScoresExam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoresExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ScoresExam.vue?vue&type=template&id=1f90d382&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/ScoresExam.vue?vue&type=template&id=1f90d382& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoresExam_vue_vue_type_template_id_1f90d382___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ScoresExam.vue?vue&type=template&id=1f90d382& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ScoresExam.vue?vue&type=template&id=1f90d382&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoresExam_vue_vue_type_template_id_1f90d382___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScoresExam_vue_vue_type_template_id_1f90d382___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);