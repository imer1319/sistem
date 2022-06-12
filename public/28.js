(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ranking.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ranking.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.showUser();
    this.mostrarPuntuaciones();
  },
  data: function data() {
    return {
      rankings: [],
      loading: true,
      usuario: {},
      rango_usuario: {},
      posicion: {},
      rangos: {
        rango1: '/imagenes/rangos/1-bronce.png',
        rango2: '/imagenes/rangos/2-plata.png',
        rango3: '/imagenes/rangos/3-oro.png',
        rango4: '/imagenes/rangos/4-platino.png',
        rango5: '/imagenes/rangos/5-diamante.png',
        rango6: '/imagenes/rangos/6-final.png'
      }
    };
  },
  methods: {
    showUser: function showUser() {
      var _this = this;

      var url = "/profile";
      axios.get(url).then(function (res) {
        _this.usuario = res.data;
        _this.loading = false;
      });
    },
    mostrarPuntuaciones: function mostrarPuntuaciones() {
      var _this2 = this;

      axios.get("/ranking").then(function (res) {
        _this2.rankings = res.data;
        _this2.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ranking.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ranking.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.contenedor{\n\tbackground-color: #2B6A88;\n\theight: 120px;\n\twidth: 100%;\n\tz-index: 100;\n}\n.contenedor .imagen{\n\tleft: 50%;\n}\n.contenedor .imagen img{\n\theight:100px; \n\twidth:100px;\n\tborder: 3px solid #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ranking.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ranking.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ranking.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ranking.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ranking.vue?vue&type=template&id=3f938a21&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ranking.vue?vue&type=template&id=3f938a21& ***!
  \*****************************************************************************************************************************************************************************************************/
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
        : _c("div", [
            _c(
              "div",
              { staticClass: "col-12 container-fluid" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-dark text-uppercase",
                    attrs: { to: "/home" }
                  },
                  [_vm._v("\n\t\t\t\t\tRegresar\n\t\t\t\t")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "container-fluid" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-5  mb-3 mt-2" },
                  _vm._l(_vm.rankings, function(ran, index) {
                    return ran.id == _vm.usuario.id
                      ? _c(
                          "div",
                          { key: index, staticClass: "text-center mb-3" },
                          [
                            _c("div", { staticClass: "card" }, [
                              _c(
                                "div",
                                { staticClass: "card-body contenedor" },
                                [
                                  _c(
                                    "h2",
                                    { staticClass: "text-center text-white" },
                                    [_vm._v(_vm._s(ran.name))]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "imagen" }, [
                                    _c("img", {
                                      staticClass: "rounded-circle",
                                      attrs: {
                                        src: "/imagenes/usuario/" + ran.avatar
                                      }
                                    })
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-footer pt-5" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-6 border-right" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "description-block" },
                                        [
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "description-header text-warning"
                                            },
                                            [
                                              _c("b", [
                                                _vm._v("# " + _vm._s(index + 1))
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h5",
                                            {
                                              staticClass:
                                                "description-text text-muted"
                                            },
                                            [_c("b", [_vm._v("Puesto")])]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-6" }, [
                                    _c(
                                      "div",
                                      { staticClass: "description-block" },
                                      [
                                        _c(
                                          "h5",
                                          {
                                            staticClass:
                                              "description-header text-warning"
                                          },
                                          [
                                            _c("b", [
                                              _vm._v(_vm._s(ran.puntos))
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "h5",
                                          {
                                            staticClass:
                                              "description-text text-muted"
                                          },
                                          [_c("b", [_vm._v("Puntos")])]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-7 col-12 mt-2" }, [
                  _c("div", { staticClass: "card" }, [
                    _c("h3", { staticClass: "text-center pt-4 text-danger" }, [
                      _vm._v("Los mejores 10")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "table",
                        { staticClass: "table table-hover text-center" },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("#")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Nombre")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Rango")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Puntos")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.rankings, function(ran, index) {
                              return index < 10
                                ? _c("tr", { key: index }, [
                                    _c("td", [_vm._v(_vm._s(index + 1))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("img", {
                                        staticClass:
                                          "img-responsive rounded-circle",
                                        attrs: {
                                          src:
                                            "/imagenes/usuario/" + ran.avatar,
                                          width: "50",
                                          height: "50"
                                        }
                                      }),
                                      _vm._v(" " + _vm._s(ran.name))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      ran.puntos < 100
                                        ? _c("span", [
                                            _c("img", {
                                              attrs: {
                                                src: _vm.rangos.rango1,
                                                height: "50",
                                                width: "50"
                                              }
                                            })
                                          ])
                                        : _vm.usuario.puntos >= 100 &&
                                          _vm.usuario.puntos < 300
                                        ? _c("span", [
                                            _c("img", {
                                              attrs: {
                                                src: _vm.rangos.rango2,
                                                height: "50",
                                                width: "50"
                                              }
                                            })
                                          ])
                                        : _vm.usuario.puntos >= 300 &&
                                          _vm.usuario.puntos < 700
                                        ? _c("span", [
                                            _c("img", {
                                              attrs: {
                                                src: _vm.rangos.rango3,
                                                height: "50",
                                                width: "50"
                                              }
                                            })
                                          ])
                                        : _vm.usuario.puntos >= 700 &&
                                          _vm.usuario.puntos < 1000
                                        ? _c("span", [
                                            _c("img", {
                                              attrs: {
                                                src: _vm.rangos.rango4,
                                                height: "50",
                                                width: "50"
                                              }
                                            })
                                          ])
                                        : _vm.usuario.puntos >= 1000 &&
                                          _vm.usuario.puntos < 2000
                                        ? _c("span", [
                                            _c("img", {
                                              attrs: {
                                                src: _vm.rangos.rango5,
                                                height: "50",
                                                width: "50"
                                              }
                                            })
                                          ])
                                        : _vm.usuario.puntos >= 2000
                                        ? _c("span", [
                                            _c("img", {
                                              attrs: {
                                                src: _vm.rangos.rango6,
                                                height: "50",
                                                width: "50"
                                              }
                                            })
                                          ])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(ran.puntos))])
                                  ])
                                : _vm._e()
                            }),
                            0
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/ranking.vue":
/*!****************************************!*\
  !*** ./resources/js/users/ranking.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ranking_vue_vue_type_template_id_3f938a21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ranking.vue?vue&type=template&id=3f938a21& */ "./resources/js/users/ranking.vue?vue&type=template&id=3f938a21&");
/* harmony import */ var _ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ranking.vue?vue&type=script&lang=js& */ "./resources/js/users/ranking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ranking.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/ranking.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ranking_vue_vue_type_template_id_3f938a21___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ranking_vue_vue_type_template_id_3f938a21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/ranking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/ranking.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/users/ranking.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ranking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ranking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/ranking.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/users/ranking.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ranking.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ranking.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/ranking.vue?vue&type=template&id=3f938a21&":
/*!***********************************************************************!*\
  !*** ./resources/js/users/ranking.vue?vue&type=template&id=3f938a21& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_template_id_3f938a21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ranking.vue?vue&type=template&id=3f938a21& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ranking.vue?vue&type=template&id=3f938a21&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_template_id_3f938a21___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ranking_vue_vue_type_template_id_3f938a21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);