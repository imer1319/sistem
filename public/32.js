(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perfil.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/perfil.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.obtener_numero_usuarios();
    this.obtener_numero_examenes();
    this.obtener_numero_ejercicios();
  },
  data: function data() {
    return {
      numero_usuarios: null,
      numero_examenes: null,
      numero_ejercicios: null
    };
  },
  methods: {
    obtener_numero_usuarios: function obtener_numero_usuarios() {
      var _this = this;

      axios.get("/numero_usuarios").then(function (res) {
        _this.numero_usuarios = res.data;
      });
    },
    obtener_numero_examenes: function obtener_numero_examenes() {
      var _this2 = this;

      axios.get("/numero_examenes").then(function (res) {
        _this2.numero_examenes = res.data;
      });
    },
    obtener_numero_ejercicios: function obtener_numero_ejercicios() {
      var _this3 = this;

      axios.get("/numero_ejercicios").then(function (res) {
        _this3.numero_ejercicios = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perfil.vue?vue&type=template&id=721775d7&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/perfil.vue?vue&type=template&id=721775d7& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "panel col-12" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h3", { staticClass: "animated fadeInLeft" }, [
        _vm._v("Perfil del administrador")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4 col-6" }, [
          _c("div", { staticClass: "card border-primary mb-3" }, [
            _c("div", { staticClass: "m-auto card-header" }, [
              _vm._v("Numero de usuarios")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body row text-center" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("h1", [_vm._v(_vm._s(_vm.numero_usuarios))])
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-6" }, [
          _c("div", { staticClass: "card border-success mb-3" }, [
            _c("div", { staticClass: "m-auto card-header" }, [
              _vm._v("Numero de examenes")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body row text-center" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("h1", [_vm._v(_vm._s(_vm.numero_examenes))])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-6" }, [
          _c("div", { staticClass: "card border-danger mb-3" }, [
            _c("div", { staticClass: "m-auto card-header" }, [
              _vm._v("Numero de ejercicios")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body row text-center" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("h1", [_vm._v(_vm._s(_vm.numero_ejercicios))])
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("h1", [_c("i", { staticClass: "fas fa-user" })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("h1", [_c("i", { staticClass: "fas fa-file-contract" })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("h1", [_c("i", { staticClass: "fas fa-gamepad" })])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/perfil.vue":
/*!********************************************!*\
  !*** ./resources/js/components/perfil.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _perfil_vue_vue_type_template_id_721775d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.vue?vue&type=template&id=721775d7& */ "./resources/js/components/perfil.vue?vue&type=template&id=721775d7&");
/* harmony import */ var _perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.vue?vue&type=script&lang=js& */ "./resources/js/components/perfil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _perfil_vue_vue_type_template_id_721775d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _perfil_vue_vue_type_template_id_721775d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/perfil.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/perfil.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/perfil.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./perfil.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perfil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/perfil.vue?vue&type=template&id=721775d7&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/perfil.vue?vue&type=template&id=721775d7& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_template_id_721775d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./perfil.vue?vue&type=template&id=721775d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perfil.vue?vue&type=template&id=721775d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_template_id_721775d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_template_id_721775d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);