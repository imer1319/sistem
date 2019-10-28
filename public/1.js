(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/examenComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/examenComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    this.mostrarExamen();
    _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('agregado', function (data) {
      _this.examens.push(data);
    });
  },
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      examens: [],
      examen: {
        name: '',
        content: '',
        icon: ''
      },
      fillExamen: {
        name: '',
        content: '',
        icon: ''
      },
      imagenMiniatura: '',
      respuestas: [],
      respuesta: {
        respuesta: '',
        examen_id: ''
      },
      loading: true,
      estado: false,
      id_examen: ''
    };
  },
  methods: {
    mostrarExamen: function mostrarExamen() {
      var _this2 = this;

      axios.get('examen').then(function (res) {
        _this2.examens = res.data;
        _this2.loading = false;
      });
    },
    obtenerArchivo: function obtenerArchivo(e) {
      var arch = e.target.files[0];
      this.fillExamen.content = arch;
    },
    obtenerImagen: function obtenerImagen(e) {
      this.estado = true;
      var file = e.target.files[0];
      this.fillExamen.icon = file;
      this.cargarImagen(file);
    },
    obtenerImagenNueva: function obtenerImagenNueva(e) {
      this.estado = false;
      var file = e.target.files[0];
      this.examen.icon = file;
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
    eliminarExamen: function eliminarExamen(examen, index) {
      var _this4 = this;

      axios["delete"]("/examen/".concat(examen.id)).then(function () {
        _this4.examens.splice(index, 1);
      });
    },
    editarExamen: function editarExamen(examen) {
      this.estado = true;
      this.fillExamen.name = examen.name;
      this.fillExamen.content = examen.content;
      this.fillExamen.icon = examen.icon;
      this.fillExamen.id = examen.id;
      $('#edit').modal('show');
    },
    updateExamen: function updateExamen(fillExamen) {
      var _this5 = this;

      var data = new FormData();
      data.append('name', this.fillExamen.name);
      data.append('content', this.fillExamen.content);
      data.append('icon', this.examen.icon);
      data.append('_method', 'PUT');
      var url = "/examen/".concat(fillExamen.id);
      axios.post(url, data).then(function (res) {
        _this5.mostrarExamen();

        $('#edit').modal('hide');
      });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/examenComponent.vue?vue&type=template&id=24862236&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/examenComponent.vue?vue&type=template&id=24862236& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "col-md-12" },
    [
      _c("crear-examen"),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { enctype: "multipart/form-data" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.updateExamen(_vm.fillExamen)
            }
          }
        },
        [
          _c("div", { staticClass: "modal fade", attrs: { id: "edit" } }, [
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
                            value: _vm.fillExamen.name,
                            expression: "fillExamen.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "name",
                          placeholder: "Nombre de la examen"
                        },
                        domProps: { value: _vm.fillExamen.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillExamen,
                              "name",
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
                      _c("label", { attrs: { for: "imagen" } }, [
                        _vm._v("Contenido")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        ref: "texto",
                        staticClass: "form-control-file",
                        attrs: { type: "file" },
                        on: { change: _vm.obtenerArchivo }
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
                              src: "imagenes/examen/" + _vm.fillExamen.icon
                            }
                          })
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _vm._m(2),
          _vm._v(" "),
          _vm.loading
            ? _c("spinner")
            : _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-primary float-right",
                    attrs: {
                      href: "#",
                      "data-toggle": "modal",
                      "data-target": "#create"
                    }
                  },
                  [_vm._v("Crear Nuevo")]
                ),
                _vm._v(" "),
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped py-5" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Nombre")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Contenido")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Imagen")]),
                        _vm._v(" "),
                        _c("th", { attrs: { colspan: "4" } }, [
                          _vm._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.examens, function(examen, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { attrs: { width: "10px" } }, [
                            _vm._v(_vm._s(index + 1))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(examen.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(examen.content))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("img", {
                              staticClass: "img-responsive",
                              attrs: {
                                src: "/imagenes/examen/" + examen.icon,
                                height: "40",
                                width: "40"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-info",
                                  attrs: {
                                    to: {
                                      name: "show",
                                      params: { id: examen.id }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\tVer\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", { attrs: { width: "10px" } }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-warning",
                                attrs: { to: "/examen" },
                                on: {
                                  click: function($event) {
                                    return _vm.editarExamen(examen)
                                  }
                                }
                              },
                              [_vm._v("Editar")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { attrs: { width: "10px" } }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { to: "/examen" },
                                on: {
                                  click: function($event) {
                                    return _vm.eliminarExamen(examen, index)
                                  }
                                }
                              },
                              [_vm._v("Eliminar")]
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h1", { staticClass: "page-header" }, [_vm._v("Examenes")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/examens/examenComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/examens/examenComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _examenComponent_vue_vue_type_template_id_24862236___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examenComponent.vue?vue&type=template&id=24862236& */ "./resources/js/components/examens/examenComponent.vue?vue&type=template&id=24862236&");
/* harmony import */ var _examenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examenComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/examens/examenComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _examenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _examenComponent_vue_vue_type_template_id_24862236___WEBPACK_IMPORTED_MODULE_0__["render"],
  _examenComponent_vue_vue_type_template_id_24862236___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/examens/examenComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/examens/examenComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/examens/examenComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_examenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./examenComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/examenComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_examenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/examens/examenComponent.vue?vue&type=template&id=24862236&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/examens/examenComponent.vue?vue&type=template&id=24862236& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_examenComponent_vue_vue_type_template_id_24862236___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./examenComponent.vue?vue&type=template&id=24862236& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/examenComponent.vue?vue&type=template&id=24862236&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_examenComponent_vue_vue_type_template_id_24862236___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_examenComponent_vue_vue_type_template_id_24862236___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);