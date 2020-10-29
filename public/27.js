(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/lecciones/lecciones.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/lecciones/lecciones.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      mostrar: true
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
    mostrarSidebar: function mostrarSidebar() {
      if (this.mostrar == true) {
        document.getElementById("wrapper").classList.add("toggled");
        this.mostrar = false;
      } else {
        document.getElementById("wrapper").classList.remove('toggled');
        this.mostrar = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/lecciones/lecciones.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/lecciones/lecciones.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#sidebar-wrapper {\r\n\tmin-height: 100vh;\r\n\tmargin-left: -15rem;\r\n\ttransition: margin .25s ease-out;\n}\n#sidebar-wrapper .sidebar-heading {\r\n\tpadding: 0.875rem 1.25rem;\r\n\tfont-size: 1.2rem;\n}\n#sidebar-wrapper .list-group {\r\n\twidth: 15rem;\n}\n#page-content-wrapper {\r\n\tmin-width: 100vw;\n}\n#wrapper.toggled #sidebar-wrapper {\r\n\tmargin-left: 0;\n}\n@media (min-width: 768px) {\n#sidebar-wrapper {\r\n\t\tmargin-left: 0;\n}\n#page-content-wrapper {\r\n\t\tmin-width: 0;\r\n\t\twidth: 100%;\n}\n#wrapper.toggled #sidebar-wrapper {\r\n\t\tmargin-left: -15rem;\n}\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/lecciones/lecciones.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/lecciones/lecciones.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./lecciones.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/lecciones/lecciones.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/lecciones/lecciones.vue?vue&type=template&id=17f7ae54&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/lecciones/lecciones.vue?vue&type=template&id=17f7ae54& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    [
      _vm.loading
        ? _c("spinner")
        : _c("div", [
            _c(
              "nav",
              { staticClass: "navbar navbar-expand-md navbar-dark bg-primary" },
              [
                _c("div", { staticClass: "container" }, [
                  _c("a", { staticClass: "navbar-brand text-white" }, [
                    _vm._v("Lectura Veloz")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "navbar-toggler",
                      attrs: {
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarNavDropdown",
                        "aria-controls": "navbarNavDropdown",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                      }
                    },
                    [_c("span", { staticClass: "navbar-toggler-icon" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse navbar-collapse",
                      attrs: { id: "navbarNavDropdown" }
                    },
                    [
                      _c("ul", { staticClass: "navbar-nav ml-auto" }, [
                        _c("li", { staticClass: "nav-item px-md-3" }, [
                          _c("h5", { staticClass: "mb-0" }, [
                            _c("a", { staticClass: "nav-link text-warning" }, [
                              _vm._v(_vm._s(_vm.usuario.puntos) + " Pts.")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item" }, [
                          _c("img", {
                            staticClass: "rounded-circle pb-0",
                            attrs: {
                              src: "/imagenes/usuario/" + _vm.usuario.avatar,
                              height: "40",
                              width: "40"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item dropdown" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link dropdown-toggle",
                              attrs: {
                                href: "#",
                                id: "navbarDropdownMenuLink",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t" +
                                  _vm._s(_vm.usuario.name) +
                                  "\n\t\t\t\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-menu dropdown-menu-right",
                              attrs: {
                                "aria-labelledby": "navbarDropdownMenuLink"
                              }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { to: "/profile" }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\tMi perfil\n\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: {
                                    href: "/logout",
                                    onclick:
                                      "event.preventDefault(); document.getElementById('logout-form').submit();"
                                  }
                                },
                                [_vm._v("Cerrar Sesión\n\t\t\t\t\t\t\t\t")]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "container-fluid" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-dark text-uppercase",
                    attrs: { to: "/home" }
                  },
                  [_vm._v("Regresar")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "btn btn-warning ocultar",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.mostrarSidebar()
                      }
                    }
                  },
                  [_c("i", { staticClass: "far fa-arrow-alt-circle-left" })]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex", attrs: { id: "wrapper" } }, [
              _c("div", { attrs: { id: "sidebar-wrapper" } }, [
                _c(
                  "div",
                  {
                    staticClass: "nav flex-column nav-pills list-group",
                    attrs: {
                      id: "v-pills-tab",
                      role: "tablist",
                      "aria-orientation": "vertical"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link active",
                        attrs: {
                          id: "v-pills-home-tab",
                          "data-toggle": "pill",
                          href: "#v-pills-home",
                          role: "tab",
                          "aria-controls": "v-pills-home",
                          "aria-selected": "true"
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t¿Qué es la lectura veloz?\n\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          id: "v-pills-profile-tab",
                          "data-toggle": "pill",
                          href: "#v-pills-profile",
                          role: "tab",
                          "aria-controls": "v-pills-profile",
                          "aria-selected": "false"
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\tBeneficios de la lectura\n\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          id: "v-pills-messages-tab",
                          "data-toggle": "pill",
                          href: "#v-pills-messages",
                          role: "tab",
                          "aria-controls": "v-pills-messages",
                          "aria-selected": "false"
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t¿Como aumentar la velocidad?\n\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          id: "v-pills-settings-tab",
                          "data-toggle": "pill",
                          href: "#v-pills-settings",
                          role: "tab",
                          "aria-controls": "v-pills-settings",
                          "aria-selected": "false"
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\tConsejos para el sistema\n\t\t\t\t\t"
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { attrs: { id: "page-content-wrapper" } }, [
                _c(
                  "div",
                  {
                    staticClass: "tab-content",
                    attrs: { id: "v-pills-tabContent" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade show active",
                        attrs: {
                          id: "v-pills-home",
                          role: "tabpanel",
                          "aria-labelledby": "v-pills-home-tab"
                        }
                      },
                      [
                        _c("div", { staticClass: "container" }, [
                          _c("h3", { staticClass: "text-center" }, [
                            _vm._v("Que es la Lectura Veloz")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "lead text-justify" }, [
                            _vm._v(
                              "Es una técnica de gimnasia mental que permite comprender más rápidamente los textos y mensajes escritos, y a su vez ayuda a incrementar nuestro campo intelectual.\n\t\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "lead text-justify" }, [
                            _vm._v(
                              "Las estrategias de lectura veloz no sólo permiten acelerar el trabajo de lectura, sino que a la vez facilitan el proceso de comprensión e incorporación inmediata de los conocimientos. Por lo tanto, mediante la lectura veloz podemos aprender a leer más rápido pero también comprender mejor lo que estamos leyendo.\n\t\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "lead text-justify" }, [
                            _vm._v(
                              "La lectura veloz es una técnica y para alcanzar sus objetivos se requiere de mucha práctica y de un entrenamiento sistemático. Las rutinas de trabajo deben establecerse en base a los objetivos específicos de cada persona. Generalmente los objetivos suelen ser: incrementar la velocidad lectora, incrementar la capacidad de comprensión o aumentar la capacidad de concentración al leer.\t\t\n\t\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center" }, [
                            _c("img", {
                              attrs: {
                                src: "imagenes/lecciones/que es.png",
                                alt: "imagen",
                                width: "300"
                              }
                            })
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: {
                          id: "v-pills-profile",
                          role: "tabpanel",
                          "aria-labelledby": "v-pills-profile-tab"
                        }
                      },
                      [
                        _c("h3", { staticClass: "text-center" }, [
                          _vm._v("Beneficios de la Lectura")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "lead" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t\tLa lectura ofrece innumerables beneficios, entre ellos:"
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("b", [_vm._v("+")]),
                          _vm._v(" Agudiza la astucia."),
                          _c("br"),
                          _vm._v(" "),
                          _c("b", [_vm._v("+")]),
                          _vm._v(
                            " Estimula el intercambio de información y conocimiento."
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("b", [_vm._v("+")]),
                          _vm._v(
                            " La costumbre continuada de leer, retarda la aparición de los síntomas de demencia."
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c("b", [_vm._v("+")]),
                          _vm._v(" Estimula la percepción."),
                          _c("br"),
                          _vm._v(" "),
                          _c("b", [_vm._v("+")]),
                          _vm._v(" Estimula la concentración."),
                          _c("br"),
                          _vm._v(" "),
                          _c("b", [_vm._v("+")]),
                          _vm._v(" Estimula la empatía."),
                          _c("br")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "lead" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t\tAdemas eso no es todo... Fíjate la siguiente imagen\n\t\t\t\t\t\t"
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c("img", {
                            attrs: {
                              src: "imagenes/lecciones/beneficios.png",
                              alt: "imagen",
                              width: "80%"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: {
                          id: "v-pills-messages",
                          role: "tabpanel",
                          "aria-labelledby": "v-pills-messages-tab"
                        }
                      },
                      [
                        _c("h3", { staticClass: "text-center" }, [
                          _vm._v("¿Cómo aumentar la velocidad de lectura?")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "lead" }, [
                          _vm._v("\n\t\t\t\t\t\t\t1. Relájate "),
                          _c("br"),
                          _vm._v("\n\t\t\t\t\t\t\t2. Buscar un lugar adecuado"),
                          _c("br"),
                          _vm._v(
                            "\n\t\t\t\t\t\t\t3. Necesitas tener buena postura"
                          ),
                          _c("br"),
                          _vm._v("\n\t\t\t\t\t\t\t4. Buena iluminación"),
                          _c("br"),
                          _vm._v("\n\t\t\t\t\t\t\t5. Evitar distracciones"),
                          _c("br"),
                          _vm._v("\n\t\t\t\t\t\t\t6. No leas en voz alta"),
                          _c("br"),
                          _vm._v(
                            "\n\t\t\t\t\t\t\t7. No repitas lo antes leido"
                          ),
                          _c("br"),
                          _vm._v(
                            "\n\t\t\t\t\t\t\t8. Señala con un material para no perderte"
                          ),
                          _c("br"),
                          _vm._v(
                            "\n\t\t\t\t\t\t\t9. Trata de aumentar el campo visual"
                          ),
                          _c("br"),
                          _vm._v("\n\t\t\t\t\t\t\t10. Seguir practicando"),
                          _c("br")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c("img", {
                            attrs: {
                              src: "imagenes/lecciones/leer.png",
                              alt: "imagen",
                              width: "80%"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: {
                          id: "v-pills-settings",
                          role: "tabpanel",
                          "aria-labelledby": "v-pills-settings-tab"
                        }
                      },
                      [
                        _c("h3", { staticClass: "text-center" }, [
                          _vm._v("Consejos")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("p", { staticClass: "lead col-md-6" }, [
                            _c("b", [_vm._v("❤")]),
                            _c("span", { staticClass: "text-warning" }, [
                              _vm._v(
                                "El sistema tiene las siguientes peticiones de los examenes"
                              )
                            ]),
                            _vm._v("."),
                            _c("br"),
                            _c("br"),
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t*** primer examen : Comprensión :"
                            ),
                            _c("b", [_vm._v("50%")]),
                            _vm._v(" ppm : "),
                            _c("b", [_vm._v("150")]),
                            _c("br"),
                            _c("br"),
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t*** segundo examen : Comprensión :"
                            ),
                            _c("b", [_vm._v("60%")]),
                            _vm._v(" ppm : "),
                            _c("b", [_vm._v("300")]),
                            _c("br"),
                            _c("br"),
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t*** tercer examen : Comprensión :"
                            ),
                            _c("b", [_vm._v("70%")]),
                            _vm._v(" ppm : "),
                            _c("b", [_vm._v("500")]),
                            _c("br"),
                            _c("br"),
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t*** cuarto examen : Comprensión :"
                            ),
                            _c("b", [_vm._v("85%")]),
                            _vm._v(" ppm : "),
                            _c("b", [_vm._v("700")]),
                            _c("br"),
                            _c("br"),
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t*** quinto examen : Comprensión :"
                            ),
                            _c("b", [_vm._v("90%")]),
                            _vm._v(" ppm : "),
                            _c("b", [_vm._v("1000")]),
                            _c("br"),
                            _c("br"),
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t*** quinto examen : Comprensión :"
                            ),
                            _c("b", [_vm._v("100%")]),
                            _vm._v(" ppm : "),
                            _c("b", [_vm._v("1300")]),
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("❤")]),
                            _vm._v("Realiza el primer examen y gana 50 pts. "),
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("❤")]),
                            _vm._v(
                              "Si no puedes avanzar, puedes ganar puntos realizando los ejercicios. "
                            ),
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [_vm._v("❤")]),
                            _vm._v(
                              "Sigue practicando y no te olvides de la diversión"
                            ),
                            _c("br"),
                            _c("br")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center col-md-6" }, [
                            _c("img", {
                              attrs: {
                                src: "imagenes/lecciones/fun.png",
                                alt: "imagen",
                                width: "80%"
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ]
                )
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

/***/ "./resources/js/users/lecciones/lecciones.vue":
/*!****************************************************!*\
  !*** ./resources/js/users/lecciones/lecciones.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lecciones_vue_vue_type_template_id_17f7ae54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lecciones.vue?vue&type=template&id=17f7ae54& */ "./resources/js/users/lecciones/lecciones.vue?vue&type=template&id=17f7ae54&");
/* harmony import */ var _lecciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lecciones.vue?vue&type=script&lang=js& */ "./resources/js/users/lecciones/lecciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _lecciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lecciones.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/lecciones/lecciones.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _lecciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lecciones_vue_vue_type_template_id_17f7ae54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lecciones_vue_vue_type_template_id_17f7ae54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/lecciones/lecciones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/lecciones/lecciones.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/users/lecciones/lecciones.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lecciones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/lecciones/lecciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/lecciones/lecciones.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/users/lecciones/lecciones.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./lecciones.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/lecciones/lecciones.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/lecciones/lecciones.vue?vue&type=template&id=17f7ae54&":
/*!***********************************************************************************!*\
  !*** ./resources/js/users/lecciones/lecciones.vue?vue&type=template&id=17f7ae54& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_template_id_17f7ae54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./lecciones.vue?vue&type=template&id=17f7ae54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/lecciones/lecciones.vue?vue&type=template&id=17f7ae54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_template_id_17f7ae54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lecciones_vue_vue_type_template_id_17f7ae54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);