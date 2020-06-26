(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuario/usuario.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuario/usuario.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this = this;

    this.mostrarUsuario();
    _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('agregado', function (data) {
      _this.usuarios.push(data);
    });
  },
  data: function data() {
    return {
      name: '',
      usuarios: [],
      usuario: {
        name: '',
        apellido_paterno: '',
        avatar: ''
      },
      fillUsuario: {
        name: '',
        apellido_paterno: '',
        avatar: ''
      },
      imagenMiniatura: '',
      loading: true,
      estado: false,
      paginate: ['usuarios']
    };
  },
  methods: {
    mostrarUsuario: function mostrarUsuario() {
      var _this2 = this;

      axios.get('usuario').then(function (res) {
        _this2.usuarios = res.data;
        _this2.loading = false;
      });
    },
    obtenerImagen: function obtenerImagen(e) {
      this.estado = true;
      var file = e.target.files[0];
      this.fillUsuario.avatar = file;
      this.cargarImagen(file);
    },
    obtenerImagenNueva: function obtenerImagenNueva(e) {
      this.estado = false;
      var file = e.target.files[0];
      this.usuario.avatar = file;
      this.cargarImagen(file);
    },
    cargarImagen: function cargarImagen(file) {
      var _this3 = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this3.imagenMiniatura = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    editarUsuario: function editarUsuario(usuario) {
      this.estado = true;
      this.fillUsuario.name = usuario.name;
      this.fillUsuario.apellido_paterno = usuario.apellido_paterno;
      this.fillUsuario.avatar = usuario.avatar;
      this.fillUsuario.id = usuario.id;
      $('#editUsuarios').modal('show');
    },
    updateUsuario: function updateUsuario(fillUsuario) {
      var _this4 = this;

      var data = new FormData();
      data.append('name', this.fillUsuario.name);
      data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
      data.append('avatar', this.usuario.avatar);
      data.append('_method', 'PUT');
      var url = "/usuario/".concat(fillUsuario.id);
      axios.post(url, data).then(function (res) {
        _this4.mostrarUsuario();

        $('#editUsuarios').modal('hide');
      });
    }
  },
  computed: {
    imagen: function imagen() {
      this.estado = false;
      return this.imagenMiniatura;
    },
    searchUser: function searchUser() {
      var _this5 = this;

      return this.usuarios.filter(function (item) {
        return item.name.includes(_this5.name);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuario/usuario.vue?vue&type=template&id=9786295c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuario/usuario.vue?vue&type=template&id=9786295c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "div",
      { staticClass: "card" },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm.loading
          ? _c("spinner")
          : _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Buscar" },
                  domProps: { value: _vm.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.name = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm.name == ""
                ? _c(
                    "div",
                    [
                      _c(
                        "paginate",
                        {
                          attrs: {
                            name: "usuarios",
                            list: _vm.usuarios,
                            per: 12
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "row" },
                            _vm._l(_vm.paginated("usuarios"), function(
                              usuario,
                              index
                            ) {
                              return _c(
                                "div",
                                { key: index, staticClass: "col-6 col-md-3" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "card card-primary card-outline"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "card-body box-profile"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "text-center" },
                                            [
                                              _c("img", {
                                                staticClass:
                                                  "profile-user-img rounded",
                                                attrs: {
                                                  src:
                                                    "imagenes/usuario/" +
                                                    usuario.avatar,
                                                  height: "120",
                                                  width: "100%"
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h3",
                                            {
                                              staticClass:
                                                "profile-username text-center"
                                            },
                                            [_vm._v(_vm._s(usuario.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "row" },
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "btn btn-primary btn-block",
                                                  attrs: {
                                                    to: {
                                                      name: "shoex",
                                                      params: { id: usuario.id }
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fas fa-eye"
                                                  }),
                                                  _vm._v(" "),
                                                  _c("b", [_vm._v("Ver")])
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("paginate-links", {
                        attrs: {
                          for: "usuarios",
                          classes: {
                            ul: "pagination",
                            li: "page-item",
                            a: "page-link"
                          }
                        }
                      })
                    ],
                    1
                  )
                : _c("div", [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.searchUser, function(usuario, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "col-6 col-md-3" },
                          [
                            _c(
                              "div",
                              { staticClass: "card card-primary card-outline" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "card-body box-profile" },
                                  [
                                    _c("div", { staticClass: "text-center" }, [
                                      _c("img", {
                                        staticClass: "profile-user-img rounded",
                                        attrs: {
                                          src:
                                            "imagenes/usuario/" +
                                            usuario.avatar,
                                          height: "120",
                                          width: "100%"
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "h3",
                                      {
                                        staticClass:
                                          "profile-username text-center"
                                      },
                                      [_vm._v(_vm._s(usuario.name))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "row" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-block",
                                            attrs: {
                                              to: {
                                                name: "shoex",
                                                params: { id: usuario.id }
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-eye"
                                            }),
                                            _c("b", [_vm._v("Ver")])
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h2", { staticClass: "card-title" }, [_vm._v("Usuarios")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/usuario/usuario.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/usuario/usuario.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usuario_vue_vue_type_template_id_9786295c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario.vue?vue&type=template&id=9786295c& */ "./resources/js/components/usuario/usuario.vue?vue&type=template&id=9786295c&");
/* harmony import */ var _usuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario.vue?vue&type=script&lang=js& */ "./resources/js/components/usuario/usuario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _usuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _usuario_vue_vue_type_template_id_9786295c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _usuario_vue_vue_type_template_id_9786295c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/usuario/usuario.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/usuario/usuario.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/usuario/usuario.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_usuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./usuario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuario/usuario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_usuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/usuario/usuario.vue?vue&type=template&id=9786295c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/usuario/usuario.vue?vue&type=template&id=9786295c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_usuario_vue_vue_type_template_id_9786295c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./usuario.vue?vue&type=template&id=9786295c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuario/usuario.vue?vue&type=template&id=9786295c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_usuario_vue_vue_type_template_id_9786295c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_usuario_vue_vue_type_template_id_9786295c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/event-bus.js":
/*!***********************************!*\
  !*** ./resources/js/event-bus.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var bus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (bus);

/***/ })

}]);