(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.showRango();
    this.getExamsDoesntHave();
  },
  data: function data() {
    return {
      usuario: {},
      rangos: [],
      loading: true,
      fillUsuario: {
        name: '',
        apellido_paterno: '',
        avatar: '',
        apellido_materno: '',
        rango_id: '',
        curso: ''
      },
      estado: false,
      imagenMiniatura: '',
      selected: '',
      cursos: '',
      seccion: '',
      exams: null,
      errors: []
    };
  },
  methods: {
    getExamsDoesntHave: function getExamsDoesntHave() {
      var _this = this;

      var url = "/examDado";
      axios.get(url).then(function (res) {
        _this.exams = res.data;
      });
    },
    showUser: function showUser() {
      var _this2 = this;

      var url = "/profile";
      axios.get(url).then(function (res) {
        _this2.usuario = res.data;
        _this2.loading = false;
      });
    },
    showRango: function showRango() {
      var _this3 = this;

      var url = "/rank";
      axios.get(url).then(function (res) {
        _this3.rangos = res.data;
      });
    },
    obtenerImagenNueva: function obtenerImagenNueva(e) {
      this.estado = true;
      var file = e.target.files[0];
      this.fillUsuario.avatar = file;
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
    editarUsuario: function editarUsuario() {
      this.fillUsuario.name = this.usuario.name;
      this.fillUsuario.apellido_paterno = this.usuario.apellido_paterno;
      this.fillUsuario.apellido_materno = this.usuario.apellido_materno;
      this.fillUsuario.puntos = this.usuario.puntos;
      this.fillUsuario.rango_id = this.usuario.rango_id;
      this.fillUsuario.id = this.usuario.id;
    },
    alerta: function alerta() {
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
        icon: 'success',
        title: 'Actualizado Correctamente'
      });
    },
    updateUsuario: function updateUsuario(fillUsuario) {
      var _this6 = this;

      if (this.fillUsuario.apellido_materno == null) {
        this.fillUsuario.apellido_materno = "";
      }

      if (this.fillUsuario.apellido_paterno == null) {
        this.fillUsuario.apellido_paterno = "";
      }

      var data = new FormData();
      data.append('name', this.fillUsuario.name);
      data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
      data.append('apellido_materno', this.fillUsuario.apellido_materno);

      if (this.fillUsuario.puntos < 100) {
        data.append('rango_id', 1);
      } else if (this.fillUsuario.puntos >= 100 && this.fillUsuario.puntos < 300) {
        data.append('rango_id', 2);
      } else if (this.fillUsuario.puntos >= 300 && this.fillUsuario.puntos < 700) {
        data.append('rango_id', 3);
      } else if (this.fillUsuario.puntos >= 700 && this.fillUsuario.puntos < 1000) {
        data.append('rango_id', 4);
      } else if (this.fillUsuario.puntos >= 1000 && this.fillUsuario.puntos < 2000) {
        data.append('rango_id', 5);
      } else if (this.fillUsuario.puntos >= 2000) {
        data.append('rango_id', 6);
      }

      data.append('_method', 'PUT');
      var url = "/profile/".concat(fillUsuario.id);
      axios.post(url, data).then(function (res) {
        _this6.showUser();

        _this6.alerta();
      })["catch"](function (error) {
        _this6.errors = error.response.data.errors;
        console.log(_this6.errors);
      });
    },
    editarAvatar: function editarAvatar() {
      this.fillUsuario.avatar = this.usuario.avatar;
      this.fillUsuario.id = this.usuario.id;
      this.estado = false;
      this.$refs.img.value = null;
      $('#editAvatar').modal('show');
    },
    updateAvatar: function updateAvatar(fillUsuario) {
      var _this7 = this;

      var data = new FormData();
      data.append('avatar', this.fillUsuario.avatar);
      data.append('_method', 'PUT');
      var url = "/profile/".concat(fillUsuario.id);
      axios.post(url, data).then(function (res) {
        _this7.showUser();

        _this7.alerta();

        $('#editAvatar').modal('hide');
      });
    }
  },
  computed: {
    imagen: function imagen() {
      return this.imagenMiniatura;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/user/perfil.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/user/perfil.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.cont{\n\tposition: relative; \n\theight:120px; \n\twidth:120px;\n}\n.cont img{\n\theight:100%; \n\twidth:100%;\n}\n.cont a{\n\tposition: absolute;\n\tbottom: 15px;\n\tleft: 70px;\n\ttext-shadow: 0 0 10px #000;\n}\na i{\n\tcursor: pointer; \n\tfont-size: 25px;\n\tcolor: #fff;\n}\n.border-right {\n\tborder-right: 1px solid #dee2e6!important;\n}\n.description-block {\n\tdisplay: block;\n\tmargin: 10px 0;\n\ttext-align: center;\n}\n.widget-user .widget-user-image {\n\tleft: 50%;\n\tmargin-left: -45px;\n\tposition: absolute;\n\ttop: 80px;\n}\n.widget-user .widget-user-header {\n\tborder-top-left-radius: .25rem;\n\tborder-top-right-radius: .25rem;\n\theight: 135px;\n\tpadding: 1rem;\n\ttext-align: center;\n}\n.widget-user .widget-user-image>img {\n\tborder: 3px solid #fff;\n\theight: 100px;\n\twidth: 100px;\n}\n.elevation-2 {\n\tbox-shadow: 0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)!important;\n}\n.img-circle {\n\tborder-radius: 50%;\n}\nimg {\n\tvertical-align: middle;\n\tborder-style: none;\n}\n.profundidad{\n\tpadding-top: 50px;\n}\n.bg-info {\n\tbackground-color: #2A6988 !important;\n\tcolor: #fff;\n}\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n\tmargin-bottom: 0.5rem;\n\tfont-weight: 500;\n\tline-height: 1.2;\n}\n\n/***********TOOLTIPS***********/\n.tooltipP{\n\tcursor: pointer;\n\tposition: relative;\n\ttext-align: center;\n}\n.tooltipP:hover .ttip{\n\tdisplay: block;\n}\n.ttip:before{\n\tborder-left: 6px solid transparent;\n\tborder-right: 6px solid transparent;\n\tborder-top: 6px solid #777777;\n\tbottom: -6px;\n\tcontent: \"\";\n\theight: 0;\n\tleft: 50%;\n\tmargin-left: -6px;\n\tposition: absolute;\n\twidth: 0;\n}\n.ttip{\n\tbackground: #777777;\n\tcolor: #fff;\n\tdisplay: none;\n\tleft: 30%;\n\tpadding: 10px 10px;\n\tposition: absolute;\n\twidth: 200px;\n\ttop: -70px;\n\tz-index: 1000;\n}\n.rank{\n\tbackground: #477DD9;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/user/perfil.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/user/perfil.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./perfil.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/user/perfil.vue?vue&type=style&index=0&lang=css&");

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
                                "\n                                    " +
                                  _vm._s(_vm.usuario.name) +
                                  "\n                                "
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
                                    "\n                                        Mi perfil\n                                    "
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
                                [
                                  _vm._v(
                                    "Cerrar Sesión\n                                    "
                                  )
                                ]
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
                  [_vm._v("\n\t\t\t\t\tRegresar\n\t\t\t\t")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "container-fluid" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12 col-md-6 mb-3" }, [
                  _c("div", { staticClass: "card shadow" }, [
                    _c("div", { staticClass: "card-widget widget-user" }, [
                      _c("div", { staticClass: "widget-user-header bg-info" }, [
                        _c("h3", { staticClass: "widget-user-username" }, [
                          _vm._v(_vm._s(_vm.usuario.name))
                        ]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "widget-user-desc" }, [
                          _vm._v("Estudiante")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "widget-user-image cont" }, [
                        _c("img", {
                          staticClass: "img-circle elevation-2",
                          attrs: {
                            src: "/imagenes/usuario/" + _vm.usuario.avatar
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.editarAvatar()
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-camera" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          attrs: { enctype: "multipart/form-data" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateAvatar(_vm.fillUsuario)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "modal fade",
                              attrs: { id: "editAvatar" }
                            },
                            [
                              _c("div", { staticClass: "modal-dialog" }, [
                                _c("div", { staticClass: "modal-content" }, [
                                  _c("div", { staticClass: "modal-header" }, [
                                    _c(
                                      "h5",
                                      {
                                        staticClass: "modal-title",
                                        attrs: { id: "exampleModalLabel" }
                                      },
                                      [_vm._v("Editar Avatar")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("input", {
                                          ref: "img",
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
                                        _c("img", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.estado == true,
                                              expression: "estado == true"
                                            }
                                          ],
                                          attrs: {
                                            width: "200",
                                            height: "200",
                                            src: _vm.imagen,
                                            accept: "image/*"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _vm.errors.avatar
                                        ? _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.errors.avatar[0])
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-footer" }, [
                                    _c("input", {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        type: "submit",
                                        name: "enviar",
                                        value: "Guardar Cambios"
                                      }
                                    })
                                  ])
                                ])
                              ])
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-footer profundidad" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-4 border-right" }, [
                          _c("div", { staticClass: "description-block" }, [
                            _c("h5", { staticClass: "description-header" }, [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(_vm.usuario.apellido_paterno) +
                                  "\n\t\t\t\t\t\t\t\t\t\t\t"
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "description-text" }, [
                              _vm._v("APELLIDO PATERNO")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 border-right" }, [
                          _c("div", { staticClass: "description-block" }, [
                            _c(
                              "h5",
                              {
                                staticClass:
                                  "description-header font-weight-bold"
                              },
                              [_vm._v(_vm._s(_vm.usuario.puntos))]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "description-text" }, [
                              _vm._v("PUNTOS")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 border-right" }, [
                          _c("div", { staticClass: "description-block" }, [
                            _c("h5", { staticClass: "description-header" }, [
                              _vm._v(_vm._s(_vm.usuario.apellido_materno))
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "description-text" }, [
                              _vm._v("APELLIDO MATERNO")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("div", { staticClass: "description-block" }, [
                            _c("h5", { staticClass: "description-header" }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.exams.ppm) + " ppm")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "description-text" }, [
                              _vm._v("VELOCIDAD INICIAL")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("div", { staticClass: "description-block" }, [
                            _c("h5", { staticClass: "description-header" }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.exams.comprension) + " %")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "description-text" }, [
                              _vm._v("COMPRENSION INICIAL")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12 col-md-6" }, [
                  _c("div", { staticClass: "card sombra " }, [
                    _c("div", { staticClass: "card-header p-2" }, [
                      _c("ul", { staticClass: "nav nav-pills" }, [
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link active",
                              attrs: { href: "#rango", "data-toggle": "tab" }
                            },
                            [_vm._v("Rango")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link",
                              attrs: { href: "#datos", "data-toggle": "tab" },
                              on: {
                                click: function($event) {
                                  return _vm.editarUsuario()
                                }
                              }
                            },
                            [_vm._v("Datos")]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "tab-content" }, [
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane active ",
                            attrs: { id: "rango" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "text-center" },
                              _vm._l(_vm.rangos, function(rango) {
                                return _c("div", [
                                  _vm.usuario.puntos < 100
                                    ? _c("div", [
                                        rango.nombre == "Rango #1"
                                          ? _c("div", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "img-responsive",
                                                    attrs: {
                                                      src:
                                                        "imagenes/rangos/" +
                                                        rango.avatar,
                                                      width: "50%"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("h3", [
                                                    _c("b", [_vm._v("Bronce")])
                                                  ])
                                                ]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.usuario.puntos >= 100 &&
                                  _vm.usuario.puntos < 300
                                    ? _c("div", [
                                        rango.nombre == "Rango #2"
                                          ? _c("div", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "img-responsive",
                                                    attrs: {
                                                      src:
                                                        "imagenes/rangos/" +
                                                        rango.avatar,
                                                      width: "50%"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("h3", [
                                                    _c("b", [_vm._v("Plata")])
                                                  ])
                                                ]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.usuario.puntos >= 300 &&
                                  _vm.usuario.puntos < 700
                                    ? _c("div", [
                                        rango.nombre == "Rango #3"
                                          ? _c("div", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "img-responsive",
                                                    attrs: {
                                                      src:
                                                        "imagenes/rangos/" +
                                                        rango.avatar,
                                                      width: "50%"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("h3", [
                                                    _c("b", [_vm._v("Oro")])
                                                  ])
                                                ]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.usuario.puntos >= 700 &&
                                  _vm.usuario.puntos < 1000
                                    ? _c("div", [
                                        rango.nombre == "Rango #4"
                                          ? _c("div", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "img-responsive",
                                                    attrs: {
                                                      src:
                                                        "imagenes/rangos/" +
                                                        rango.avatar,
                                                      width: "50%"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("h3", [
                                                    _c("b", [_vm._v("Platino")])
                                                  ])
                                                ]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.usuario.puntos >= 1000 &&
                                  _vm.usuario.puntos < 2000
                                    ? _c("div", [
                                        rango.nombre == "Rango #5"
                                          ? _c("div", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "img-responsive",
                                                    attrs: {
                                                      src:
                                                        "imagenes/rangos/" +
                                                        rango.avatar,
                                                      width: "50%"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("h3", [
                                                    _c("b", [
                                                      _vm._v("Diamante")
                                                    ])
                                                  ])
                                                ]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.usuario.puntos >= 2000
                                    ? _c("div", [
                                        rango.nombre == "Rango #6"
                                          ? _c("div", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "img-responsive",
                                                    attrs: {
                                                      src:
                                                        "imagenes/rangos/" +
                                                        rango.avatar,
                                                      width: "50%"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("h3", [
                                                    _c("b", [
                                                      _vm._v("Campeones")
                                                    ])
                                                  ])
                                                ]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    : _vm._e()
                                ])
                              }),
                              0
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "tab-pane", attrs: { id: "datos" } },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-12" }, [
                                _c(
                                  "form",
                                  {
                                    attrs: { enctype: "multipart/form-data" },
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.updateUsuario(
                                          _vm.fillUsuario
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-form-label col-md-3"
                                          },
                                          [_vm._v("Nombre")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-md-8" }, [
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
                                            attrs: {
                                              type: "text",
                                              placeholder: "Escriba su nombre",
                                              required: ""
                                            },
                                            domProps: {
                                              value: _vm.fillUsuario.name
                                            },
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
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.name
                                            ? _c(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errors.name[0])
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-form-label col-md-3"
                                          },
                                          [_vm._v("Apellido Paterno")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-md-8" }, [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.fillUsuario
                                                    .apellido_paterno,
                                                expression:
                                                  "fillUsuario.apellido_paterno"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Apellido paterno"
                                            },
                                            domProps: {
                                              value:
                                                _vm.fillUsuario.apellido_paterno
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
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "col-form-label col-md-3"
                                          },
                                          [_vm._v("Apellido Materno")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-md-8" }, [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.fillUsuario
                                                    .apellido_materno,
                                                expression:
                                                  "fillUsuario.apellido_materno"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Apellido materno"
                                            },
                                            domProps: {
                                              value:
                                                _vm.fillUsuario.apellido_materno
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
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "offset-sm-2 col-sm-10"
                                          },
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary text-white",
                                                attrs: { type: "submit" }
                                              },
                                              [_vm._v("Actualizar")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
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
/* empty/unused harmony star reexport *//* harmony import */ var _perfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/user/perfil.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/users/user/perfil.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/users/user/perfil.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./perfil.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/user/perfil.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_perfil_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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