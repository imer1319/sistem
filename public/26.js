(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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
//
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
        content: ''
      },
      fillExamen: {
        name: '',
        content: ''
      },
      respuestas: [],
      respuesta: {
        respuesta: '',
        examen_id: ''
      },
      loading: true,
      estado: false,
      id_examen: '',
      paginate: ['examens']
    };
  },
  methods: {
    crearExamen: function crearExamen() {
      $('#creaExamen').modal('show');
    },
    mostrarExamen: function mostrarExamen() {
      var _this2 = this;

      axios.get('examen').then(function (res) {
        _this2.examens = res.data;
        _this2.loading = false;
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
    alerta: function alerta(icono, titulo) {
      var _this3 = this;

      var Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        onOpen: function onOpen(toast) {
          toast.addEventListener('mouseenter', _this3.$swal.stopTimer);
          toast.addEventListener('mouseleave', _this3.$swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: icono,
        title: titulo
      });
    },
    agregarExamen: function agregarExamen() {
      var _this4 = this;

      if (this.validarEspacios(this.examen.name) == false || this.validarEspacios(this.examen.content) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var formData = new FormData();
        formData.append('name', this.examen.name);
        formData.append('content', this.examen.content);
        axios.post('/examen', formData).then(function (res) {
          _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('agregado', res.data.examen);
          _this4.examen.name = "";
          _this4.examen.content = "";

          _this4.alerta('success', 'Se a agregado correctamente');

          $('#creaExamen').modal('hide');
        });
      }
    },
    editarExamen: function editarExamen(examen) {
      this.estado = true;
      this.fillExamen.name = examen.name;
      this.fillExamen.content = examen.content;
      this.fillExamen.id = examen.id;
      $('#edit').modal('show');
    },
    updateExamen: function updateExamen(fillExamen) {
      var _this5 = this;

      if (this.validarEspacios(this.fillExamen.name) == false || this.validarEspacios(this.fillExamen.content) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var data = new FormData();
        data.append('name', this.fillExamen.name);
        data.append('content', this.fillExamen.content);
        data.append('_method', 'PUT');
        var url = "/examen/".concat(fillExamen.id);
        axios.post(url, data).then(function (res) {
          _this5.mostrarExamen();

          _this5.alerta('warning', 'Se a modificado el registro');

          $('#edit').modal('hide');
        });
      }
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
  return _c("div", { staticClass: "col-12" }, [
    _c(
      "form",
      {
        attrs: { enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.agregarExamen($event)
          }
        }
      },
      [
        _c("div", { staticClass: "modal fade", attrs: { id: "creaExamen" } }, [
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
                          value: _vm.examen.name,
                          expression: "examen.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "name",
                        placeholder: "Nombre de la examen",
                        required: ""
                      },
                      domProps: { value: _vm.examen.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.examen, "name", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Contenido")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.examen.content,
                        expression: "examen.content"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "5" },
                    domProps: { value: _vm.examen.content },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.examen, "content", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ])
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
            return _vm.updateExamen(_vm.fillExamen)
          }
        }
      },
      [
        _c("div", { staticClass: "modal fade", attrs: { id: "edit" } }, [
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
                          value: _vm.fillExamen.name,
                          expression: "fillExamen.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "name",
                        placeholder: "Nombre de la examen",
                        required: ""
                      },
                      domProps: { value: _vm.fillExamen.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fillExamen, "name", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Contenido")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fillExamen.content,
                        expression: "fillExamen.content"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "5" },
                    domProps: { value: _vm.fillExamen.content },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fillExamen, "content", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._m(3)
              ])
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card" },
      [
        _c("div", { staticClass: "card-header" }, [
          _c("h2", { staticClass: "card-title" }, [_vm._v("Examenes")]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right text-white",
              on: {
                click: function($event) {
                  return _vm.crearExamen()
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
                  { attrs: { name: "examens", list: _vm.examens, per: 4 } },
                  [
                    _c(
                      "table",
                      { staticClass: "table table-bordered table-hover" },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("ID")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Nombre")]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Acciones")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.paginated("examens"), function(
                            examen,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { width: "10px" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(examen.name))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "text-center",
                                  attrs: { colspan: "2" }
                                },
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
                                      _c("i", { staticClass: "fas fa-eye" }),
                                      _vm._v(" Ver\n\t\t\t\t\t\t\t\t")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-warning text-white",
                                      on: {
                                        click: function($event) {
                                          return _vm.editarExamen(examen)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-pencil-alt"
                                      }),
                                      _vm._v(" Editar")
                                    ]
                                  )
                                ],
                                1
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
                    for: "examens",
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
            attrs: { type: "submit", name: "enviar", value: "Editar Registro" }
          })
        ])
      ])
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