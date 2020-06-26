(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/ejercicio.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ejercicios/ejercicio.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    this.mostrarEjercicio();
    _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('agregado', function (data) {
      _this.ejercicios.push(data);
    });
  },
  data: function data() {
    return {
      ejercicios: [],
      ejercicio: {
        name: ''
      },
      fillEjercicio: {
        name: ''
      },
      estado: false,
      loading: true,
      paginate: ['ejercicios']
    };
  },
  methods: {
    mostrarEjercicio: function mostrarEjercicio() {
      var _this2 = this;

      axios.get('ejercicio').then(function (res) {
        _this2.ejercicios = res.data;
        _this2.loading = false;
      });
    },
    crearEjercicio: function crearEjercicio() {
      $('#createEjercicio').modal('show');
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
    validarEspacios: function validarEspacios(parametro) {
      var patron = /^\s+$/;

      if (patron.test(parametro)) {
        return false;
      } else {
        return true;
      }
    },
    editarEjercicio: function editarEjercicio(ejercicio) {
      this.estado = true;
      this.fillEjercicio.name = ejercicio.name;
      this.fillEjercicio.id = ejercicio.id;
      $('#editarEjercicio').modal('show');
    },
    updateEjercicio: function updateEjercicio(fillEjercicio) {
      var _this4 = this;

      if (this.validarEspacios(this.fillEjercicio.name) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var data = new FormData();
        data.append('name', this.fillEjercicio.name);
        data.append('_method', 'PUT');
        var url = "/ejercicio/".concat(fillEjercicio.id);
        axios.post(url, data).then(function (res) {
          _this4.alerta('warning', 'Se a modificado el registro');

          _this4.mostrarEjercicio();

          $('#editarEjercicio').modal('hide');
        });
      }
    },
    agregarEjercicio: function agregarEjercicio() {
      var _this5 = this;

      var formData = new FormData();
      formData.append('name', this.ejercicio.name);
      axios.post('ejercicio', formData).then(function (res) {
        _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('agregado', res.data.ejercicio);
        _this5.ejercicio.name = "";

        _this5.alerta('success', 'Se a agregado correctamente');

        $('#createEjercicio').modal('hide');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/ejercicio.vue?vue&type=template&id=6974bf8f&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ejercicios/ejercicio.vue?vue&type=template&id=6974bf8f& ***!
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
            return _vm.agregarEjercicio($event)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "createEjercicio" } },
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
                            value: _vm.ejercicio.name,
                            expression: "ejercicio.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nombre de la ejercicio",
                          required: ""
                        },
                        domProps: { value: _vm.ejercicio.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.ejercicio, "name", $event.target.value)
                          }
                        }
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
            return _vm.updateEjercicio(_vm.fillEjercicio)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "editarEjercicio" } },
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
                            value: _vm.fillEjercicio.name,
                            expression: "fillEjercicio.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", name: "name", required: "" },
                        domProps: { value: _vm.fillEjercicio.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillEjercicio,
                              "name",
                              $event.target.value
                            )
                          }
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
          _c("h2", { staticClass: "card-title" }, [_vm._v("Ejercicios")]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right text-white",
              on: {
                click: function($event) {
                  return _vm.crearEjercicio()
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
                    attrs: { name: "ejercicios", list: _vm.ejercicios, per: 5 }
                  },
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
                          _vm._l(_vm.paginated("ejercicios"), function(
                            ejercicio,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", [_vm._v(_vm._s(index + 1))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ejercicio.name))]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-warning text-white",
                                    on: {
                                      click: function($event) {
                                        return _vm.editarEjercicio(ejercicio)
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
                    for: "ejercicios",
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

/***/ "./resources/js/components/ejercicios/ejercicio.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ejercicios/ejercicio.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ejercicio_vue_vue_type_template_id_6974bf8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ejercicio.vue?vue&type=template&id=6974bf8f& */ "./resources/js/components/ejercicios/ejercicio.vue?vue&type=template&id=6974bf8f&");
/* harmony import */ var _ejercicio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ejercicio.vue?vue&type=script&lang=js& */ "./resources/js/components/ejercicios/ejercicio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ejercicio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ejercicio_vue_vue_type_template_id_6974bf8f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ejercicio_vue_vue_type_template_id_6974bf8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ejercicios/ejercicio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ejercicios/ejercicio.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ejercicios/ejercicio.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ejercicio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ejercicio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/ejercicio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ejercicio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ejercicios/ejercicio.vue?vue&type=template&id=6974bf8f&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ejercicios/ejercicio.vue?vue&type=template&id=6974bf8f& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ejercicio_vue_vue_type_template_id_6974bf8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ejercicio.vue?vue&type=template&id=6974bf8f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ejercicios/ejercicio.vue?vue&type=template&id=6974bf8f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ejercicio_vue_vue_type_template_id_6974bf8f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ejercicio_vue_vue_type_template_id_6974bf8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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