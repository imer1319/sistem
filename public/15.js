(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/user/perfil.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/user/perfil.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  },
  data: function data() {
    return {
      usuario: {},
      loading: true,
      fillUsuario: {
        name: '',
        apellido_paterno: '',
        avatar: '',
        email: '',
        apellido_materno: '',
        rango_id: '',
        curso: ''
      },
      estado: false,
      imagenMiniatura: ''
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
    obtenerImagen: function obtenerImagen(e) {
      this.estado = true;
      var file = e.target.files[0];
      this.usuario.avatar = file;
      this.cargarImagen(file);
    },
    obtenerImagenNueva: function obtenerImagenNueva(e) {
      this.estado = false;
      var file = e.target.files[0];
      this.fillUsuario.avatar = file;
      this.cargarImagen(file);
    },
    cargarImagen: function cargarImagen(file) {
      var _this2 = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this2.imagenMiniatura = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    editarUsuario: function editarUsuario() {
      this.estado = true;
      this.fillUsuario.name = this.usuario.name;
      this.fillUsuario.apellido_paterno = this.usuario.apellido_paterno;
      this.fillUsuario.apellido_materno = this.usuario.apellido_materno;
      this.fillUsuario.avatar = this.usuario.avatar;
      this.fillUsuario.curso = this.usuario.curso;
      this.fillUsuario.id = this.usuario.id;
      $('#editUsuarios').modal('show');
    },
    updateUsuario: function updateUsuario(fillUsuario) {
      var data = new FormData();
      data.append('name', this.fillUsuario.name);
      data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
      data.append('apellido_materno', this.fillUsuario.apellido_materno);
      data.append('avatar', this.fillUsuario.avatar);
      data.append('curso', this.fillUsuario.curso);
      data.append('_method', 'PUT');
      var url = "/profile/".concat(fillUsuario.id);
      axios.post(url, data).then(function (res) {});
    }
  },
  computed: {
    imagen: function imagen() {
      this.estado = false;
      return this.imagenMiniatura;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/user/perfil.vue?vue&type=template&id=56c1980a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/user/perfil.vue?vue&type=template&id=56c1980a& ***!
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
  return _c(
    "div",
    { staticClass: "col-12" },
    [
      _vm.loading
        ? _c("spinner")
        : _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card card-primary card-outline" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _c("img", {
                          staticClass: "profile-user-img img-circle",
                          attrs: {
                            src: "/imagenes/usuario/" + _vm.usuario.avatar,
                            height: "120",
                            width: "120"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "h3",
                        { staticClass: "profile-username text-center" },
                        [_vm._v(_vm._s(_vm.usuario.name))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-8" }, [
                      _c("h6", { staticClass: "text-center" }, [
                        _vm._v("DATOS DEL USUARIO")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-6" }, [
                          _c("h4", [_vm._v("APELLIDOS")]),
                          _vm._v(" "),
                          _c("h6", [
                            _vm._v(
                              _vm._s(_vm.usuario.apellido_paterno) +
                                " " +
                                _vm._s(_vm.usuario.apellido_materno)
                            )
                          ]),
                          _vm._v(" "),
                          _c("h4", [_vm._v("CORREO ELECTRONICO")]),
                          _vm._v(" "),
                          _c("h6", [_vm._v(_vm._s(_vm.usuario.email))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("h4", [_vm._v("PUNTOS")]),
                          _vm._v(" "),
                          _c("h6", [_vm._v(_vm._s(_vm.usuario.puntos))]),
                          _vm._v(" "),
                          _c("h4", [_vm._v("CURSO")]),
                          _vm._v(" "),
                          _c("h6", [_vm._v(_vm._s(_vm.usuario.curso))])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 mt-3" }, [
              _c("div", { staticClass: "card card-primary card-outline" }, [
                _c("div", { staticClass: "card-header p-2" }, [
                  _c("ul", { staticClass: "nav nav-pills" }, [
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link active",
                          attrs: { href: "#activity", "data-toggle": "tab" }
                        },
                        [_vm._v("Insignias")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          attrs: { href: "#timeline", "data-toggle": "tab" }
                        },
                        [_vm._v("Rangos")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          attrs: { href: "#settings", "data-toggle": "tab" },
                          on: {
                            click: function($event) {
                              return _vm.editarUsuario()
                            }
                          }
                        },
                        [_vm._v("Editar Perfil")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "tab-content" }, [
                    _c("div", {
                      staticClass: "active tab-pane",
                      attrs: { id: "activity" }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "tab-pane",
                      attrs: { id: "timeline" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "tab-pane", attrs: { id: "settings" } },
                      [
                        _c(
                          "form",
                          {
                            attrs: { enctype: "multipart/form-data" },
                            on: {
                              submit: function($event) {
                                return _vm.updateUsuario(_vm.fillUsuario)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                { staticClass: "col-form-label col-md-2" },
                                [_vm._v("Nombre")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-10" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.fillUsuario.name,
                                      expression: "fillUsuario.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", required: "" },
                                  domProps: { value: _vm.fillUsuario.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.fillUsuario,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                { staticClass: "col-form-label col-md-2" },
                                [_vm._v("Apellido Paterno")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-10" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.fillUsuario.apellido_paterno,
                                      expression: "fillUsuario.apellido_paterno"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", required: "" },
                                  domProps: {
                                    value: _vm.fillUsuario.apellido_paterno
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.fillUsuario,
                                        "apellido_paterno",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                { staticClass: "col-form-label col-md-2" },
                                [_vm._v("Apellido Materno")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-10" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.fillUsuario.apellido_materno,
                                      expression: "fillUsuario.apellido_materno"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", required: "" },
                                  domProps: {
                                    value: _vm.fillUsuario.apellido_materno
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.fillUsuario,
                                        "apellido_materno",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "label",
                                { staticClass: "col-form-label col-md-2" },
                                [_vm._v("Curso")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-10" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.fillUsuario.curso,
                                      expression: "fillUsuario.curso"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", required: "" },
                                  domProps: { value: _vm.fillUsuario.curso },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.fillUsuario,
                                        "curso",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _vm.estado == false
                                  ? _c("input", {
                                      staticClass: "form-control-file",
                                      attrs: { type: "file" },
                                      on: { change: _vm.obtenerImagen }
                                    })
                                  : _c("input", {
                                      staticClass: "form-control-file",
                                      attrs: { type: "file" },
                                      on: { change: _vm.obtenerImagenNueva }
                                    })
                              ]),
                              _vm._v(" "),
                              _c("figure", [
                                _vm.estado == false
                                  ? _c("img", {
                                      attrs: {
                                        width: "200",
                                        height: "200",
                                        src: _vm.imagen
                                      }
                                    })
                                  : _c("img", {
                                      attrs: {
                                        width: "200",
                                        height: "200",
                                        src:
                                          "/imagenes/usuario/" +
                                          _vm.fillUsuario.avatar
                                      }
                                    })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group row" }, [
                              _c(
                                "div",
                                { staticClass: "offset-sm-2 col-sm-10" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger",
                                      attrs: { type: "submit" }
                                    },
                                    [_vm._v("Submit")]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]
                    )
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

/***/ "./resources/js/users/user/perfil.vue":
/*!********************************************!*\
  !*** ./resources/js/users/user/perfil.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _perfil_vue_vue_type_template_id_56c1980a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.vue?vue&type=template&id=56c1980a& */ "./resources/js/users/user/perfil.vue?vue&type=template&id=56c1980a&");
/* harmony import */ var _perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.vue?vue&type=script&lang=js& */ "./resources/js/users/user/perfil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _perfil_vue_vue_type_template_id_56c1980a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _perfil_vue_vue_type_template_id_56c1980a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/user/perfil.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/user/perfil.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/users/user/perfil.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./perfil.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/user/perfil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/user/perfil.vue?vue&type=template&id=56c1980a&":
/*!***************************************************************************!*\
  !*** ./resources/js/users/user/perfil.vue?vue&type=template&id=56c1980a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_template_id_56c1980a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./perfil.vue?vue&type=template&id=56c1980a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/user/perfil.vue?vue&type=template&id=56c1980a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_template_id_56c1980a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_template_id_56c1980a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);