(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.obtener_consejo();
  },
  data: function data() {
    return {
      content: [{
        nombre: 'Lecciones',
        icono: 'ejercicios.png',
        url: '/ejercicios',
        background: 'color8'
      }, {
        nombre: 'examen',
        icono: 'examen.png',
        url: '/exam',
        background: 'color8'
      }, {
        nombre: 'ejercicio',
        icono: 'ejercicios.png',
        url: 'game',
        background: 'color8'
      }, {
        nombre: 'Perfil',
        icono: 'user.png',
        url: '/profile',
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
      }],
      consejos: ['Aprende a usar tus ojos para leer más rápido', 'Ponte en forma, para darle más oxígeno a tu cerebro', 'Lee sobre el cerebro y su funcionamiento', 'No le digas a alguien que lea, primero que vea como lo disfrutas y él lo hará solo.', 'Aleja cualquier distraccion mientras lees', 'No te preocupes de la velocidad de lectura', 'Si lees lo que te gusta no te aburriras', 'La practica hace al maestro'],
      consejo: null
    };
  },
  methods: {
    obtener_consejo: function obtener_consejo() {
      var ram = Math.floor(Math.random() * this.consejos.length);
      this.consejo = this.consejos[ram];
    }
  }
});

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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "consejo" }, [_vm._v(_vm._s(_vm.consejo))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.content, function(contenido) {
        return _c("div", { staticClass: "col-6 col-md-4 col-lg-3" }, [
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("router-link", { attrs: { to: contenido.url } }, [
                _c("div", { staticClass: "my-2" }, [
                  _c(
                    "div",
                    {
                      staticClass: "card card-primary card-outline radio-card",
                      class: contenido.background
                    },
                    [
                      _c("div", { staticClass: "card-body box-profile" }, [
                        _c("img", {
                          staticClass: "card-img-top img-responsive",
                          attrs: {
                            src: "/imagenes/" + contenido.icono,
                            height: "170"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "text-center text-uppercase" },
                        [_vm._v(_vm._s(contenido.nombre))]
                      )
                    ]
                  )
                ])
              ])
            ],
            1
          )
        ])
      }),
      0
    )
  ])
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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