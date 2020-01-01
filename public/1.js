(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/categoria.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ejercicios/categoria.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

    this.mostrarCategoria();
    _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$on("agregado", function (data) {
      _this.categorias.push(data);
    });
  },
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
      categorias: [],
      categoria: {
        nombre: "",
        puntos: "",
        icono: ""
      },
      fillCategoria: {
        nombre: "",
        puntos: "",
        icono: ""
      },
      imagenMiniatura: "",
      loading: true,
      estado: false,
      paginate: ["categorias"]
    };
  },
  methods: {
    crearCategoria: function crearCategoria() {
      $("#crearCategory").modal("show");
    },
    mostrarCategoria: function mostrarCategoria() {
      var _this2 = this;

      axios.get("categoria").then(function (res) {
        _this2.categorias = res.data;
        _this2.loading = false;
      });
    },
    obtenerImagencrear: function obtenerImagencrear(e) {
      var file = e.target.files[0];
      this.categoria.icono = file;
      this.cargarImagen(file);
    },
    obtenerImagen: function obtenerImagen(e) {
      this.estado = true;
      var file = e.target.files[0];
      this.fillCategoria.icono = file;
      this.cargarImagen(file);
    },
    obtenerImagenNueva: function obtenerImagenNueva(e) {
      this.estado = false;
      var file = e.target.files[0];
      this.categoria.icono = file;
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
    agregarCategoria: function agregarCategoria() {
      var _this4 = this;

      if (this.validarEspacios(this.categoria.nombre) == false || this.validarEspacios(this.categoria.puntos) == false || this.validarEspacios(this.categoria.icono) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var formData = new FormData();
        formData.append("nombre", this.categoria.nombre);
        formData.append("puntos", this.categoria.puntos);
        formData.append("icono", this.categoria.icono);
        axios.post("/categoria", formData).then(function (res) {
          _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit("agregado", res.data.categoria);
          _this4.categoria.nombre = "";
          _this4.categoria.puntos = "";
          _this4.$refs.img.value = "";
          _this4.imagenMiniatura = "";
          $("#crearCategory").modal("hide");
        });
      }
    },
    confirmarDelete: function confirmarDelete() {
      var resp = confirm("Estas seguro que deseas eliminarlo?");

      if (resp == true) {
        return true;
      } else {
        return false;
      }
    },
    eliminarCategoria: function eliminarCategoria(categoria, index) {
      var _this5 = this;

      if (this.confirmarDelete() == true) {
        axios["delete"]("/categoria/".concat(categoria.id)).then(function () {
          _this5.categorias.splice(index, 1);
        });
      }
    },
    editarCategoria: function editarCategoria(categoria) {
      this.estado = true;
      this.fillCategoria.nombre = categoria.nombre;
      this.fillCategoria.puntos = categoria.puntos;
      this.fillCategoria.icono = categoria.icono;
      this.fillCategoria.id = categoria.id;
      $("#editCategoria").modal("show");
    },
    updateCategoria: function updateCategoria(fillCategoria) {
      var _this6 = this;

      if (this.validarEspacios(this.fillCategoria.nombre) == false || this.validarEspacios(this.fillCategoria.puntos) == false || this.validarEspacios(this.fillCategoria.icono) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var data = new FormData();
        data.append("nombre", this.fillCategoria.nombre);
        data.append("puntos", this.fillCategoria.puntos);
        data.append("icono", this.fillCategoria.icono);
        data.append("_method", "PUT");
        var url = "/categoria/".concat(fillCategoria.id);
        axios.post(url, data).then(function (res) {
          _this6.mostrarCategoria();

          $("#editCategoria").modal("hide");
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/categoria.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ejercicios/categoria.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.color-letra,\r\n.color-letra:hover {\r\n    color: white;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/categoria.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ejercicios/categoria.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./categoria.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/categoria.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/categoria.vue?vue&type=template&id=71ec95f1&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ejercicios/categoria.vue?vue&type=template&id=71ec95f1& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            return _vm.agregarCategoria($event)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "crearCategory" } },
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
                            value: _vm.categoria.nombre,
                            expression: "categoria.nombre"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nombre de la categoria",
                          required: ""
                        },
                        domProps: { value: _vm.categoria.nombre },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.categoria,
                              "nombre",
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
                      _vm._v("Puntos")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.categoria.puntos,
                            expression: "categoria.puntos"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "puntos de la categoria",
                          required: ""
                        },
                        domProps: { value: _vm.categoria.puntos },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.categoria,
                              "puntos",
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
                        attrs: { type: "file", accept: "image/*", equired: "" },
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
            return _vm.updateCategoria(_vm.fillCategoria)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "editCategoria" } },
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
                            value: _vm.fillCategoria.nombre,
                            expression: "fillCategoria.nombre"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nombre de la categoria",
                          required: ""
                        },
                        domProps: { value: _vm.fillCategoria.nombre },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillCategoria,
                              "nombre",
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
                      _vm._v("Puntos")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fillCategoria.puntos,
                            expression: "fillCategoria.puntos"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "puntos de la categoria",
                          required: ""
                        },
                        domProps: { value: _vm.fillCategoria.puntos },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillCategoria,
                              "puntos",
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
                              required: ""
                            },
                            on: { change: _vm.obtenerImagen }
                          })
                        : _c("input", {
                            staticClass: "form-control-file",
                            attrs: {
                              type: "file",
                              accept: "image/*",
                              required: ""
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
                              src:
                                "imagenes/categorias/" + _vm.fillCategoria.icono
                            }
                          })
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(3)
                ])
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
          _c("h3", { staticClass: "card-title" }, [_vm._v("Categorias")]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.crearCategoria()
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
                  {
                    attrs: { name: "categorias", list: _vm.categorias, per: 4 }
                  },
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
                            _c("th", [_vm._v("Puntos")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Imagen")]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Acciones")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.paginated("categorias"), function(
                            categoria,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { width: "10px" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(categoria.nombre))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(categoria.puntos))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("img", {
                                  staticClass: "img-responsive",
                                  attrs: {
                                    src:
                                      "/imagenes/categorias/" + categoria.icono,
                                    height: "40",
                                    width: "40"
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "text-center",
                                  attrs: { colspan: "2" }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-info",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editarCategoria(categoria)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-pencil-alt"
                                      }),
                                      _vm._v("Ver")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-warning color-letra",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editarCategoria(categoria)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-pencil-alt"
                                      }),
                                      _vm._v("Editar")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-danger color-letra",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.eliminarCategoria(
                                            categoria,
                                            index
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-trash-alt"
                                      }),
                                      _vm._v("Eliminar")
                                    ]
                                  )
                                ]
                              )
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
                    for: "categorias",
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
            attrs: { type: "submit", name: "enviar", value: "Crear Registro" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ejercicios/categoria.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ejercicios/categoria.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categoria_vue_vue_type_template_id_71ec95f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoria.vue?vue&type=template&id=71ec95f1& */ "./resources/js/components/ejercicios/categoria.vue?vue&type=template&id=71ec95f1&");
/* harmony import */ var _categoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoria.vue?vue&type=script&lang=js& */ "./resources/js/components/ejercicios/categoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _categoria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoria.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ejercicios/categoria.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _categoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _categoria_vue_vue_type_template_id_71ec95f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _categoria_vue_vue_type_template_id_71ec95f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ejercicios/categoria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ejercicios/categoria.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ejercicios/categoria.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./categoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/categoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ejercicios/categoria.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/ejercicios/categoria.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./categoria.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/categoria.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ejercicios/categoria.vue?vue&type=template&id=71ec95f1&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ejercicios/categoria.vue?vue&type=template&id=71ec95f1& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_template_id_71ec95f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./categoria.vue?vue&type=template&id=71ec95f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/categoria.vue?vue&type=template&id=71ec95f1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_template_id_71ec95f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categoria_vue_vue_type_template_id_71ec95f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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