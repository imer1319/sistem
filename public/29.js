(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        password: ''
      },
      fillUsuario: {
        name: '',
        apellido_paterno: '',
        avatar: '',
        hash_password: ''
      },
      imagenMiniatura: '',
      loading: true,
      estado: false,
      paginate: ['usuarios'],
      abecedario: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-", "_", "$", "&", "#", "@"],
      password: [],
      random: null,
      errors: []
    };
  },
  methods: {
    addUser: function addUser() {
      var _this2 = this;

      if (this.validarEspacios(this.usuario.name) == false || this.validarEspacios(this.password) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var formData = new FormData();
        formData.append('name', this.usuario.name);
        formData.append('password', this.password);
        formData.append('hash_password', this.password);
        axios.post('/createUser', formData).then(function (response) {
          _this2.usuario.name = "";
          _this2.password = "";
          _this2.errors = [];

          _this2.alerta('success', 'Se a agregado correctamente');

          _this2.mostrarUsuario();

          $('#createdUser').modal('hide');
        })["catch"](function (error) {
          _this2.errors = error.response.data.errors;
          console.log(_this2.errors);
        });
      }
    },
    createPasswordRandom: function createPasswordRandom() {
      this.password = "";

      for (var i = 1; i < 9; i++) {
        this.random = Math.floor(Math.random() * this.abecedario.length);

        if (this.abecedario[this.random] != null) {
          this.password += this.abecedario[this.random];
        }
      }
    },
    crearUser: function crearUser() {
      $('#createdUser').modal('show');
    },
    mostrarUsuario: function mostrarUsuario() {
      var _this3 = this;

      axios.get('usuario').then(function (res) {
        _this3.usuarios = res.data;
        _this3.loading = false;
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
      var _this4 = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this4.imagenMiniatura = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    alerta: function alerta(icono, titulo) {
      var _this5 = this;

      var Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        onOpen: function onOpen(toast) {
          toast.addEventListener('mouseenter', _this5.$swal.stopTimer);
          toast.addEventListener('mouseleave', _this5.$swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: icono,
        title: titulo
      });
    },
    validarEspacios: function validarEspacios(parametro) {
      var patron = /^\s+$/;

      if (patron.test(parametro)) {
        return false;
      } else {
        return true;
      }
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
      var _this6 = this;

      var data = new FormData();
      data.append('name', this.fillUsuario.name);
      data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
      data.append('avatar', this.usuario.avatar);
      data.append('_method', 'PUT');
      var url = "/usuario/".concat(fillUsuario.id);
      axios.post(url, data).then(function (res) {
        _this6.mostrarUsuario();

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
      var _this7 = this;

      return this.usuarios.filter(function (item) {
        return item.name.includes(_this7.name);
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
      {
        staticClass: "modal fade",
        attrs: {
          id: "createdUser",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.addUser($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "modal-dialog" }, [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body pb-0" }, [
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
                                value: _vm.usuario.name,
                                expression: "usuario.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "name",
                              placeholder: "Nombre del usuario",
                              required: ""
                            },
                            domProps: { value: _vm.usuario.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.usuario,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.name
                            ? _c("span", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.name[0]))
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-form-label col-md-2" },
                          [_vm._v("Nombre")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-8" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password,
                                expression: "password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "password",
                              placeholder: "Contraseña del usuario",
                              required: ""
                            },
                            domProps: { value: _vm.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.password = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-md-2 btn btn-primary btn-sm",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.createPasswordRandom()
                              }
                            }
                          },
                          [_vm._v("Generar")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                ])
              ]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card" },
      [
        _c("div", { staticClass: "card-header" }, [
          _c("h2", { staticClass: "card-title mt-2" }, [_vm._v("Usuarios")]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right text-white",
              on: {
                click: function($event) {
                  return _vm.crearUser()
                }
              }
            },
            [_c("i", { staticClass: "fas fa-plus" }), _vm._v(" Crear Usuario")]
          )
        ]),
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
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", [_vm._v("Crear")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer pb-0" }, [
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("input", {
            staticClass: "btn btn-primary pull-right",
            attrs: { type: "submit", name: "enviar", value: "Crear Registro" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "float-rigth btn btn-success mx-3",
        attrs: { href: "/user-list-excel" }
      },
      [
        _c("i", { staticClass: "fas fa-download" }),
        _vm._v(" "),
        _c("img", { attrs: { src: "imagenes/excel.png", height: "20" } })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "float-rigth btn btn-danger mx-3",
        attrs: { href: "/user-list-pdf" }
      },
      [
        _c("i", { staticClass: "fas fa-download" }),
        _vm._v(" "),
        _c("i", { staticClass: "fas fa-file-pdf px-2" })
      ]
    )
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



/***/ })

}]);