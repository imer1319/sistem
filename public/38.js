(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/puntuacionExam.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/puntuacionExam.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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

moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale('es');
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.showUser();
    this.puntuacionExamen();
  },
  data: function data() {
    return {
      puntuaciones: [],
      loading: true,
      usuario: {}
    };
  },
  methods: {
    obtenerFecha: function obtenerFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).fromNow();
    },
    puntuacionExamen: function puntuacionExamen() {
      var _this = this;

      var url = '/puntuacionExamen';
      axios.get(url).then(function (res) {
        _this.puntuaciones = res.data;
      });
    },
    showUser: function showUser() {
      var _this2 = this;

      var url = "/profile";
      axios.get(url).then(function (res) {
        _this2.usuario = res.data;
        _this2.loading = false;
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
    [
      _vm.loading
        ? _c("spinner")
        : _c(
            "div",
            [
              _c(
                "nav",
                {
                  staticClass: "navbar navbar-expand-md navbar-dark bg-primary"
                },
                [
                  _c("div", { staticClass: "container" }, [
                    _c(
                      "a",
                      { staticClass: "navbar-brand", attrs: { href: "/" } },
                      [_vm._v("Lectura Veloz")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "navbar-toggler",
                        attrs: {
                          type: "button",
                          "data-toggle": "collapse",
                          "data-target": "#navbarNavDropdown",
                          "aria-controls": "navbarNavDropdown",
                          "aria-expanded": "false",
                          "aria-label": "Toggle navigation"
                        }
                      },
                      [_c("span", { staticClass: "navbar-toggler-icon" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse navbar-collapse",
                        attrs: { id: "navbarNavDropdown" }
                      },
                      [
                        _c("ul", { staticClass: "navbar-nav ml-auto" }, [
                          _c("li", { staticClass: "nav-item px-md-3" }, [
                            _c("h5", { staticClass: "mb-0" }, [
                              _c(
                                "a",
                                { staticClass: "nav-link text-warning" },
                                [_vm._v(_vm._s(_vm.usuario.puntos) + " Pts.")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "nav-item" }, [
                            _c("img", {
                              staticClass: "rounded-circle pb-0",
                              attrs: {
                                src: "/imagenes/usuario/" + _vm.usuario.avatar,
                                height: "40",
                                width: "40"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "nav-item dropdown" }, [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link dropdown-toggle",
                                attrs: {
                                  href: "#",
                                  id: "navbarDropdownMenuLink",
                                  "data-toggle": "dropdown",
                                  "aria-haspopup": "true",
                                  "aria-expanded": "false"
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" +
                                    _vm._s(_vm.usuario.name) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "dropdown-menu dropdown-menu-right",
                                attrs: {
                                  "aria-labelledby": "navbarDropdownMenuLink"
                                }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: {
                                      href: "/logout",
                                      onclick:
                                        "event.preventDefault(); document.getElementById('logout-form').submit();"
                                    }
                                  },
                                  [_vm._v("Cerrar Sesión\n\t\t\t\t\t\t\t\t")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "form",
                                  {
                                    staticStyle: { display: "none" },
                                    attrs: {
                                      id: "logout-form",
                                      action: "/logout",
                                      method: "POST"
                                    }
                                  },
                                  [_vm._v("\n\t\t\t\t\t\t\t\t@csrf")]
                                )
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
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
              _vm._l(_vm.puntuaciones, function(examen_dado, index) {
                return _c("div", [
                  _c(
                    "div",
                    { staticClass: "card col-12 col-md-8 mx-auto mb-2 shadow" },
                    [
                      _c("div", { staticClass: "card-body" }, [
                        _c("h4", { staticClass: "text-center text-danger" }, [
                          _vm._v(_vm._s(examen_dado.name))
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
                            _vm._v(_vm._s(examen_dado.pivot.ppm))
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
                            _vm._v(_vm._s(examen_dado.pivot.comprension)),
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
                            _vm._v(_vm._s(examen_dado.pivot.tiempo)),
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
                              _vm._s(
                                _vm.obtenerFecha(examen_dado.pivot.created_at)
                              )
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