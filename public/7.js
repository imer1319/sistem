(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/insignias/insigniaComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/insignias/insigniaComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    this.mostrarInsignia();
    _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('agregado', function (data) {
      _this.insignias.push(data);
    });
  },
  data: function data() {
    return {
      insignias: [],
      insignia: {
        name: '',
        description: '',
        icon: ''
      },
      fillInsignia: {
        name: '',
        description: '',
        icon: ''
      },
      imagenMiniatura: '',
      loading: true,
      estado: false,
      paginate: ['insignias']
    };
  },
  methods: {
    confirmarDelete: function confirmarDelete() {
      var resp = confirm("Estas seguro que deseas eliminarlo?");

      if (resp == true) {
        return true;
      } else {
        return false;
      }
    },
    mostrarInsignia: function mostrarInsignia() {
      var _this2 = this;

      axios.get('insignia').then(function (res) {
        _this2.insignias = res.data;
        _this2.loading = false;
      });
    },
    crearInsignia: function crearInsignia() {
      $('#createInsignia').modal('show');
    },
    obtenerImagencrear: function obtenerImagencrear(e) {
      var file = e.target.files[0];
      this.insignia.icon = file;
      this.cargarImagen(file);
    },
    obtenerImagen: function obtenerImagen(e) {
      this.estado = true;
      var file = e.target.files[0];
      this.fillInsignia.icon = file;
      this.cargarImagen(file);
    },
    obtenerImagenNueva: function obtenerImagenNueva(e) {
      this.estado = false;
      var file = e.target.files[0];
      this.insignia.icon = file;
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
    validarEspacios: function validarEspacios(parametro) {
      var patron = /^\s+$/;

      if (patron.test(parametro)) {
        return false;
      } else {
        return true;
      }
    },
    agregarInsignia: function agregarInsignia() {
      var _this4 = this;

      if (this.validarEspacios(this.insignia.name) == false || this.validarEspacios(this.insignia.description) == false || this.validarEspacios(this.insignia.icon) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var formData = new FormData();
        formData.append('name', this.insignia.name);
        formData.append('description', this.insignia.description);
        formData.append('icon', this.insignia.icon);
        axios.post('/insignia', formData).then(function (res) {
          _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('agregado', res.data.insignia);
          _this4.insignia.name = "";
          _this4.insignia.description = "";
          _this4.$refs.img.value = "";
          _this4.imagenMiniatura = "";
          $('#createInsignia').modal('hide');
        });
      }
    },
    eliminarInsignia: function eliminarInsignia(insignia, index) {
      var _this5 = this;

      if (this.confirmarDelete() == true) {
        axios["delete"]("/insignia/".concat(insignia.id)).then(function () {
          _this5.insignias.splice(index, 1);
        });
      }
    },
    editarInsignia: function editarInsignia(insignia) {
      this.estado = true;
      this.fillInsignia.name = insignia.name;
      this.fillInsignia.description = insignia.description;
      this.fillInsignia.icon = insignia.icon;
      this.fillInsignia.id = insignia.id;
      $('#editInsignia').modal('show');
    },
    updateInsignia: function updateInsignia(fillInsignia) {
      var _this6 = this;

      if (this.validarEspacios(this.fillInsignia.name) == false || this.validarEspacios(this.fillInsignia.description) == false || this.validarEspacios(this.fillInsignia.icon) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var data = new FormData();
        data.append('name', this.fillInsignia.name);
        data.append('description', this.fillInsignia.description);
        data.append('icon', this.insignia.icon);
        data.append('_method', 'PUT');
        var url = "/insignia/".concat(fillInsignia.id);
        axios.post(url, data).then(function (res) {
          _this6.mostrarInsignia();

          $('#editInsignia').modal('hide');
        });
      }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/insignias/insigniaComponent.vue?vue&type=template&id=c467845c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/insignias/insigniaComponent.vue?vue&type=template&id=c467845c& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-12" }, [
    _c(
      "form",
      {
        attrs: { enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.agregarInsignia($event)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "createInsignia" } },
          [
            _c("div", { staticClass: "modal-dialog" }, [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body pb-0" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("Nombre")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.insignia.name,
                            expression: "insignia.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "name",
                          placeholder: "Nombre de la insignia",
                          required: ""
                        },
                        domProps: { value: _vm.insignia.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.insignia, "name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("Descripcion")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.insignia.description,
                            expression: "insignia.description"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          rows: "3",
                          cols: "5",
                          name: "description",
                          placeholder: "Describa la insignia",
                          maxlength: "150",
                          required: ""
                        },
                        domProps: { value: _vm.insignia.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.insignia,
                              "description",
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
                      _c("label", { attrs: { for: "imagen" } }),
                      _vm._v(" "),
                      _c("input", {
                        ref: "img",
                        staticClass: "form-control-file",
                        attrs: {
                          type: "file",
                          accept: "image/*",
                          required: ""
                        },
                        on: { change: _vm.obtenerImagencrear }
                      })
                    ]),
                    _vm._v(" "),
                    _c("figure", [
                      _c("img", {
                        attrs: { width: "200", height: "200", src: _vm.imagen }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(1)
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.updateInsignia(_vm.fillInsignia)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "editInsignia" } },
          [
            _c("div", { staticClass: "modal-dialog" }, [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body pb-0" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("Nombre")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fillInsignia.name,
                            expression: "fillInsignia.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", name: "name", required: "" },
                        domProps: { value: _vm.fillInsignia.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillInsignia,
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
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("Descripcion")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fillInsignia.description,
                            expression: "fillInsignia.description"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          rows: "3",
                          cols: "5",
                          name: "description",
                          placeholder: "Describa la insignia",
                          maxlength: "150",
                          required: ""
                        },
                        domProps: { value: _vm.fillInsignia.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillInsignia,
                              "description",
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
                      _c("label"),
                      _vm._v(" "),
                      _vm.estado == false
                        ? _c("input", {
                            staticClass: "form-control-file",
                            attrs: {
                              type: "file",
                              accept: "image/*",
                              equired: ""
                            },
                            on: { change: _vm.obtenerImagen }
                          })
                        : _c("input", {
                            staticClass: "form-control-file",
                            attrs: {
                              type: "file",
                              accept: "image/*",
                              equired: ""
                            },
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
                              src: "imagenes/insignias/" + _vm.fillInsignia.icon
                            }
                          })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(3)
              ])
            ])
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
          _c("h3", { staticClass: "card-title" }, [_vm._v("Insignias")]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.crearInsignia()
                }
              }
            },
            [_c("i", { staticClass: "fas fa-plus" }), _vm._v(" Crear Nuevo")]
          )
        ]),
        _vm._v(" "),
        _vm.loading
          ? _c("spinner")
          : _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "paginate",
                  { attrs: { name: "insignias", list: _vm.insignias, per: 5 } },
                  [
                    _c(
                      "table",
                      {
                        staticClass: "table table-bordered table-striped py-5"
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("ID")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Nombre")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Descripcion")]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Imagen")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Acciones")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.paginated("insignias"), function(
                            insignia,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { width: "10px" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(insignia.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(insignia.description))]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("img", {
                                  staticClass: "img-responsive",
                                  attrs: {
                                    src: "imagenes/insignias/" + insignia.icon,
                                    height: "60",
                                    width: "70"
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "float-right" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-warning",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.editarInsignia(insignia)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-pencil-alt"
                                    }),
                                    _vm._v(" Editar")
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-danger",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.eliminarInsignia(
                                          insignia,
                                          index
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "far fa-trash-alt"
                                    }),
                                    _vm._v(" Eliminar")
                                  ]
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("paginate-links", {
                  attrs: {
                    for: "insignias",
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
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", [_vm._v("Editar")]),
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
            attrs: {
              type: "submit",
              name: "enviar",
              value: "Actualizar Registro"
            }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/insignias/insigniaComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/insignias/insigniaComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _insigniaComponent_vue_vue_type_template_id_c467845c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insigniaComponent.vue?vue&type=template&id=c467845c& */ "./resources/js/components/insignias/insigniaComponent.vue?vue&type=template&id=c467845c&");
/* harmony import */ var _insigniaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insigniaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/insignias/insigniaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _insigniaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _insigniaComponent_vue_vue_type_template_id_c467845c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _insigniaComponent_vue_vue_type_template_id_c467845c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/insignias/insigniaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/insignias/insigniaComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/insignias/insigniaComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insigniaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./insigniaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/insignias/insigniaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insigniaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/insignias/insigniaComponent.vue?vue&type=template&id=c467845c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/insignias/insigniaComponent.vue?vue&type=template&id=c467845c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_insigniaComponent_vue_vue_type_template_id_c467845c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./insigniaComponent.vue?vue&type=template&id=c467845c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/insignias/insigniaComponent.vue?vue&type=template&id=c467845c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_insigniaComponent_vue_vue_type_template_id_c467845c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_insigniaComponent_vue_vue_type_template_id_c467845c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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