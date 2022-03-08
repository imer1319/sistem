(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.obtener_consejo();
    this.showUser();
  },
  data: function data() {
    return {
      starsRelleno: 4,
      content: [{
        nombre: 'Perfil',
        icono: 'profile.png',
        url: '/profile',
        background: 'color8'
      }, {
        nombre: 'Curso',
        icono: 'curso.png',
        url: '/curso',
        background: 'color8'
      }, {
        nombre: 'ejercicio',
        icono: 'game.png',
        url: 'game',
        background: 'color8'
      }, {
        nombre: 'ranking',
        icono: 'ranking.png',
        url: '/ranking',
        background: 'color8'
      }, {
        nombre: 'Puntuaciones',
        icono: 'puntuaciones.png',
        url: '/puntuacionExamen',
        background: 'color8'
      }, {
        nombre: 'Preguntas',
        icono: 'lecciones.png',
        url: '/lecciones',
        background: 'color8'
      }],
      consejos: ['Aprende a usar tus ojos para leer más rápido', 'Ponte en forma, para darle más oxígeno a tu cerebro', 'Lee sobre el cerebro y su funcionamiento', 'No le digas a alguien que lea, primero que vea como lo disfrutas y él lo hará solo.', 'Aleja cualquier distraccion mientras lees', 'No te preocupes de la velocidad de lectura', 'Si lees lo que te gusta no te aburriras', 'La practica hace al maestro'],
      consejo: null,
      usuario: {},
      loading: true
    };
  },
  methods: {
    obtener_consejo: function obtener_consejo() {
      var ram = Math.floor(Math.random() * this.consejos.length);
      this.consejo = this.consejos[ram];
    },
    showUser: function showUser() {
      var _this = this;

      var url = "/profile";
      axios.get(url).then(function (res) {
        _this.usuario = res.data;
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/home.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/home.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.imagen-tamaño{\n    height: 170px;\n}\n@media (max-width: 768px)\n{\n.imagen-tamaño{\n        height: 110px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/home.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/home.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/home.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/home.vue?vue&type=template&id=5107e284&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/home.vue?vue&type=template&id=5107e284& ***!
  \**************************************************************************************************************************************************************************************************/
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
              "nav",
              { staticClass: "navbar navbar-expand-md navbar-dark bg-primary" },
              [
                _c("div", { staticClass: "container" }, [
                  _c("a", { staticClass: "navbar-brand text-white" }, [
                    _vm._v("Lectura Veloz")
                  ]),
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
                            _c("a", { staticClass: "nav-link text-warning" }, [
                              _vm._v(_vm._s(_vm.usuario.puntos) + " Pts.")
                            ])
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
                                "\n                                " +
                                  _vm._s(_vm.usuario.name) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-menu dropdown-menu-right",
                              attrs: {
                                "aria-labelledby": "navbarDropdownMenuLink"
                              }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { to: "/profile" }
                                },
                                [
                                  _vm._v(
                                    "\n                                    Mi perfil\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
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
                                [
                                  _vm._v(
                                    "Cerrar Sesión\n                                "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "container my-2" }, [
              _c("div", { staticClass: "consejo" }, [
                _vm._v(_vm._s(_vm.consejo))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.content, function(contenido, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "col-6 col-md-4 col-lg-4" },
                    [
                      _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c("router-link", { attrs: { to: contenido.url } }, [
                            _c("div", { staticClass: "my-2" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "card",
                                  class: contenido.background
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "card-body box-profile pb-2"
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "card-img-top img-responsive imagen-tamaño",
                                        attrs: {
                                          src: "/imagenes/" + contenido.icono
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        " pb-3 text-center text-uppercase"
                                    },
                                    [_vm._v(_vm._s(contenido.nombre))]
                                  ),
                                  _vm._v(" "),
                                  _c("span")
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/home.vue":
/*!*************************************!*\
  !*** ./resources/js/users/home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_5107e284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=5107e284& */ "./resources/js/users/home.vue?vue&type=template&id=5107e284&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/users/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_5107e284___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_5107e284___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/users/home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/home.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/users/home.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/home.vue?vue&type=template&id=5107e284&":
/*!********************************************************************!*\
  !*** ./resources/js/users/home.vue?vue&type=template&id=5107e284& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_5107e284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=5107e284& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/home.vue?vue&type=template&id=5107e284&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_5107e284___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_5107e284___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);