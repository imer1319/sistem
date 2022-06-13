(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuario/showUsuario.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuario/showUsuario.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
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
    this.showRango();
    this.showUser();
  },
  data: function data() {
    return {
      usuario: {},
      rangos: [],
      loading: true,
      fillUsuario: {
        name: '',
        apellido_paterno: null,
        avatar: null,
        apellido_materno: null,
        rango_id: '',
        curso: '',
        puntos: ''
      },
      estado: false,
      imagenMiniatura: '',
      errors: [],
      examenes: [],
      games1: null,
      games2: null,
      games3: null,
      games4: null,
      games5: null,
      games6: null,
      games7: null,
      games8: null,
      record1: {},
      record2: {},
      record3: {},
      record4: {},
      record5: {},
      record6: {},
      record7: {},
      record8: {}
    };
  },
  methods: {
    getDataGame1Sum: function getDataGame1Sum(usuario) {
      var _this = this;

      var url = 'games/' + usuario + '/' + 1;
      axios.get(url).then(function (res) {
        _this.games1 = res.data;

        _this.getDataGame2Sum(usuario);

        _this.getDataGame3Sum(usuario);

        _this.getDataGame4Sum(usuario);

        _this.getDataGame5Sum(usuario);

        _this.getDataGame6Sum(usuario);

        _this.getDataGame7Sum(usuario);

        _this.getDataGame8Sum(usuario);

        _this.getDataGameRecord1(usuario);

        _this.getDataGameRecord2(usuario);

        _this.getDataGameRecord3(usuario);

        _this.getDataGameRecord4(usuario);

        _this.getDataGameRecord5(usuario);

        _this.getDataGameRecord6(usuario);

        _this.getDataGameRecord7(usuario);

        _this.getDataGameRecord8(usuario);
      });
    },
    getDataGame2Sum: function getDataGame2Sum(usuario) {
      var _this2 = this;

      var url = 'games/' + usuario + '/' + 2;
      axios.get(url).then(function (res) {
        _this2.games2 = res.data;
      });
    },
    getDataGame3Sum: function getDataGame3Sum(usuario) {
      var _this3 = this;

      var url = 'games/' + usuario + '/' + 3;
      axios.get(url).then(function (res) {
        _this3.games3 = res.data;
      });
    },
    getDataGame4Sum: function getDataGame4Sum(usuario) {
      var _this4 = this;

      var url = 'games/' + usuario + '/' + 4;
      axios.get(url).then(function (res) {
        _this4.games4 = res.data;
      });
    },
    getDataGame5Sum: function getDataGame5Sum(usuario) {
      var _this5 = this;

      var url = 'games/' + usuario + '/' + 5;
      axios.get(url).then(function (res) {
        _this5.games5 = res.data;
      });
    },
    getDataGame6Sum: function getDataGame6Sum(usuario) {
      var _this6 = this;

      var url = 'games/' + usuario + '/' + 6;
      axios.get(url).then(function (res) {
        _this6.games6 = res.data;
      });
    },
    getDataGame7Sum: function getDataGame7Sum(usuario) {
      var _this7 = this;

      var url = 'games/' + usuario + '/' + 7;
      axios.get(url).then(function (res) {
        _this7.games7 = res.data;
      });
    },
    getDataGame8Sum: function getDataGame8Sum(usuario) {
      var _this8 = this;

      var url = 'games/' + usuario + '/' + 8;
      axios.get(url).then(function (res) {
        _this8.games8 = res.data;
      });
    },
    getDataGameRecord1: function getDataGameRecord1(usuario) {
      var _this9 = this;

      var url = 'game/' + usuario + '/' + 1;
      axios.get(url).then(function (res) {
        _this9.record1 = res.data;
      });
    },
    getDataGameRecord2: function getDataGameRecord2(usuario) {
      var _this10 = this;

      var url = 'game/' + usuario + '/' + 2;
      axios.get(url).then(function (res) {
        _this10.record2 = res.data;
      });
    },
    getDataGameRecord3: function getDataGameRecord3(usuario) {
      var _this11 = this;

      var url = 'game/' + usuario + '/' + 3;
      axios.get(url).then(function (res) {
        _this11.record3 = res.data;
      });
    },
    getDataGameRecord4: function getDataGameRecord4(usuario) {
      var _this12 = this;

      var url = 'game/' + usuario + '/' + 4;
      axios.get(url).then(function (res) {
        _this12.record4 = res.data;
      });
    },
    getDataGameRecord5: function getDataGameRecord5(usuario) {
      var _this13 = this;

      var url = 'game/' + usuario + '/' + 5;
      axios.get(url).then(function (res) {
        _this13.record5 = res.data;
      });
    },
    getDataGameRecord6: function getDataGameRecord6(usuario) {
      var _this14 = this;

      var url = 'game/' + usuario + '/' + 6;
      axios.get(url).then(function (res) {
        _this14.record6 = res.data;
      });
    },
    getDataGameRecord7: function getDataGameRecord7(usuario) {
      var _this15 = this;

      var url = 'game/' + usuario + '/' + 7;
      axios.get(url).then(function (res) {
        _this15.record7 = res.data;
      });
    },
    getDataGameRecord8: function getDataGameRecord8(usuario) {
      var _this16 = this;

      var url = 'game/' + usuario + '/' + 8;
      axios.get(url).then(function (res) {
        _this16.record8 = res.data;
      });
    },
    obtenerFecha: function obtenerFecha(fecha) {
      return moment(fecha).fromNow();
    },
    showRango: function showRango() {
      var _this17 = this;

      axios.get("/rango").then(function (res) {
        _this17.rangos = res.data;
      });
    },
    showUser: function showUser() {
      var _this18 = this;

      var url = this.$route.params.id;
      axios.get(url).then(function (res) {
        _this18.usuario = res.data;
        _this18.loading = false;
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
      var _this19 = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this19.imagenMiniatura = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    alerta: function alerta() {
      var _this20 = this;

      var Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        onOpen: function onOpen(toast) {
          toast.addEventListener('mouseenter', _this20.$swal.stopTimer);
          toast.addEventListener('mouseleave', _this20.$swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'Actualizado Correctamente'
      });
    },
    editarUsuario: function editarUsuario() {
      this.estado = true;
      this.fillUsuario.name = this.usuario.name;
      this.fillUsuario.apellido_paterno = this.usuario.apellido_paterno;
      this.fillUsuario.apellido_materno = this.usuario.apellido_materno;
      this.fillUsuario.avatar = this.usuario.avatar;
      this.fillUsuario.curso = this.usuario.curso;
      this.fillUsuario.rango_id = this.usuario.rango_id;
      this.fillUsuario.puntos = this.usuario.puntos;
      this.fillUsuario.id = this.usuario.id;
    },
    updateUsuario: function updateUsuario(fillUsuario) {
      var _this21 = this;

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
      data.append('avatar', this.fillUsuario.avatar);
      data.append('curso', this.fillUsuario.curso);

      if (this.fillUsuario.puntos < 100) {
        data.append('rango_id', 1);
      } else if (this.fillUsuario.puntos >= 100 && this.fillUsuario.puntos < 500) {
        data.append('rango_id', 2);
      } else if (this.fillUsuario.puntos >= 500 && this.fillUsuario.puntos < 1000) {
        data.append('rango_id', 3);
      } else if (this.fillUsuario.puntos >= 1000 && this.fillUsuario.puntos < 5000) {
        data.append('rango_id', 4);
      } else if (this.fillUsuario.puntos >= 5000 && this.fillUsuario.puntos < 10000) {
        data.append('rango_id', 5);
      } else if (this.fillUsuario.puntos > 10000) {
        data.append('rango_id', 6);
      }

      data.append('_method', 'PUT');
      var url = "/usuario/".concat(fillUsuario.id);
      axios.post(url, data).then(function (res) {
        _this21.errors = [];

        _this21.showUser();

        _this21.alerta();
      })["catch"](function (error) {
        _this21.errors = error.response.data.errors;
        console.log(_this21.errors);
      });
    },
    getDataExamUser: function getDataExamUser(usuario) {
      var _this22 = this;

      var url = 'user/' + usuario;
      axios.get(url).then(function (res) {
        _this22.examenes = res.data;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuario/showUsuario.vue?vue&type=template&id=75787bd6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/usuario/showUsuario.vue?vue&type=template&id=75787bd6& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                          staticClass: "img-responsive",
                          attrs: {
                            src: "/imagenes/usuario/" + _vm.usuario.avatar,
                            height: "120",
                            width: "120"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "h2",
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
                          _c("h5", [_vm._v("APELLIDOS")]),
                          _vm._v(" "),
                          _c("h6", [
                            _vm._v(
                              _vm._s(_vm.usuario.apellido_paterno) +
                                " " +
                                _vm._s(_vm.usuario.apellido_materno)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("h5", [_vm._v("PUNTOS")]),
                          _vm._v(" "),
                          _c("h6", [_vm._v(_vm._s(_vm.usuario.puntos))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("h5", [_vm._v("Contraseña")]),
                          _vm._v(" "),
                          _c("h6", [_vm._v(_vm._s(_vm.usuario.hash_password))])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
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
                          attrs: { href: "#perfil", "data-toggle": "tab" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.editarUsuario()
                            }
                          }
                        },
                        [_vm._v("Editar Perfil")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          attrs: { href: "#avanceE", "data-toggle": "tab" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.getDataExamUser(_vm.usuario.id)
                            }
                          }
                        },
                        [_vm._v("Avances Examen")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          attrs: { href: "#avanceG", "data-toggle": "tab" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.getDataGame1Sum(_vm.usuario.id)
                            }
                          }
                        },
                        [_vm._v("Avances Ejercicios")]
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
                        staticClass: "active tab-pane",
                        attrs: { id: "rango" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          _vm._l(_vm.rangos, function(rango, index) {
                            return _c("div", { key: index }, [
                              _vm.usuario.puntos < 100
                                ? _c("div", [
                                    rango.nombre == "Rango #1"
                                      ? _c("div", [
                                          _c(
                                            "div",
                                            { staticClass: "text-center" },
                                            [
                                              _c("img", {
                                                staticClass: "img-responsive",
                                                attrs: {
                                                  src:
                                                    "../imagenes/rangos/" +
                                                    rango.avatar,
                                                  width: "30%"
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
                                                staticClass: "img-responsive",
                                                attrs: {
                                                  src:
                                                    "../imagenes/rangos/" +
                                                    rango.avatar,
                                                  width: "30%"
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
                                                staticClass: "img-responsive",
                                                attrs: {
                                                  src:
                                                    "../imagenes/rangos/" +
                                                    rango.avatar,
                                                  width: "30%"
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
                                                staticClass: "img-responsive",
                                                attrs: {
                                                  src:
                                                    "../imagenes/rangos/" +
                                                    rango.avatar,
                                                  width: "30%"
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
                                                staticClass: "img-responsive",
                                                attrs: {
                                                  src:
                                                    "../imagenes/rangos/" +
                                                    rango.avatar,
                                                  width: "30%"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("h3", [
                                                _c("b", [_vm._v("Diamante")])
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
                                                staticClass: "img-responsive",
                                                attrs: {
                                                  src:
                                                    "../imagenes/rangos/" +
                                                    rango.avatar,
                                                  width: "30%"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("h3", [
                                                _c("b", [_vm._v("Campeones")])
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
                      { staticClass: "tab-pane", attrs: { id: "perfil" } },
                      [
                        _c(
                          "form",
                          {
                            attrs: { enctype: "multipart/form-data" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
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
                                  attrs: { type: "text" },
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
                                  attrs: { type: "text" },
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
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", { staticClass: "form-group" }, [
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
                                        src: _vm.imagen,
                                        accept: "image/*",
                                        equired: ""
                                      }
                                    })
                                  : _c("img", {
                                      attrs: {
                                        width: "200",
                                        height: "200",
                                        src:
                                          "/imagenes/usuario/" +
                                          _vm.fillUsuario.avatar,
                                        accept: "image/*",
                                        equired: ""
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
                                      staticClass: "btn btn-primary",
                                      attrs: { type: "submit" }
                                    },
                                    [_vm._v("Actualizar")]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "tab-pane", attrs: { id: "avanceE" } },
                      [
                        _c("h4", { staticClass: "text-center" }, [
                          _vm._v("Avance de Examenes")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "row" },
                          _vm._l(_vm.examenes, function(examen, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                                staticClass: "col-12 col-md-6 mb-2 shadow"
                              },
                              [
                                _c("div", { staticClass: "card" }, [
                                  _c("div", { staticClass: "card-body" }, [
                                    _c(
                                      "span",
                                      { staticClass: "float-rigth badge" },
                                      [_vm._v(_vm._s(index + 1))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "h4",
                                      {
                                        staticClass: "text-center text-danger"
                                      },
                                      [_vm._v(_vm._s(examen.name))]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "h5",
                                        {
                                          staticClass:
                                            "col-8 col-md-6 text-success"
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fab fa-accessible-icon"
                                          }),
                                          _vm._v(" PPM")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "h5",
                                        { staticClass: "col-4 col-md-6" },
                                        [_vm._v(_vm._s(examen.pivot.ppm))]
                                      ),
                                      _vm._v(" "),
                                      _c("hr"),
                                      _vm._v(" "),
                                      _c(
                                        "h5",
                                        {
                                          staticClass:
                                            "col-8 col-md-6 text-info"
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-brain"
                                          }),
                                          _vm._v(" Comprension")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "h5",
                                        { staticClass: "col-4 col-md-6" },
                                        [
                                          _vm._v(
                                            _vm._s(examen.pivot.comprension)
                                          ),
                                          _c("b", { staticClass: "h5" }, [
                                            _vm._v(" %")
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("hr"),
                                      _vm._v(" "),
                                      _c(
                                        "h5",
                                        {
                                          staticClass:
                                            "col-8 col-md-6 text-warning"
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "far fa-clock"
                                          }),
                                          _vm._v(" Tiempo")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "h5",
                                        { staticClass: "col-4 col-md-6" },
                                        [
                                          _vm._v(_vm._s(examen.pivot.tiempo)),
                                          _c("b", { staticClass: "h5" }, [
                                            _vm._v(" s")
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("hr"),
                                      _vm._v(" "),
                                      _c(
                                        "h5",
                                        {
                                          staticClass:
                                            "col-8 col-md-6 text-gray-dark"
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "far fa-sun"
                                          }),
                                          _vm._v(" Fecha")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "h5",
                                        { staticClass: "col-4 col-md-6" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.obtenerFecha(
                                                examen.pivot.created_at
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "tab-pane", attrs: { id: "avanceG" } },
                      [
                        _c(
                          "table",
                          { staticClass: "table table-bordered table-hover" },
                          [
                            _c("thead", [
                              _c("tr", [
                                _c("th", [_vm._v("#")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Nombre")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Maximo punto")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Record")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tbody", [
                              _c("tr", [
                                _c("td", { attrs: { width: "8px" } }, [
                                  _vm._v("1")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Ejercicio #1")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.games1))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.record1.name) +
                                      " : " +
                                      _vm._s(_vm.record1.puntuacion)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { width: "8px" } }, [
                                  _vm._v("2")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Ejercicio #2")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.games2))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.record2.name) +
                                      " : " +
                                      _vm._s(_vm.record2.puntuacion)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { width: "8px" } }, [
                                  _vm._v("3")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Ejercicio #3")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.games3))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.record3.name) +
                                      " : " +
                                      _vm._s(_vm.record3.puntuacion)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { width: "8px" } }, [
                                  _vm._v("4")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Ejercicio #4")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.games4))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.record4.name) +
                                      " : " +
                                      _vm._s(_vm.record4.puntuacion)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { width: "8px" } }, [
                                  _vm._v("5")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Ejercicio #5")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.games5))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.record5.name) +
                                      " : " +
                                      _vm._s(_vm.record5.puntuacion)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { width: "8px" } }, [
                                  _vm._v("6")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Ejercicio #6")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.games6))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.record6.name) +
                                      " : " +
                                      _vm._s(_vm.record6.puntuacion)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { width: "8px" } }, [
                                  _vm._v("7")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Ejercicio #7")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.games7))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.record7.name) +
                                      " : " +
                                      _vm._s(_vm.record7.puntuacion)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { width: "8px" } }, [
                                  _vm._v("8")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Ejercicio #8")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.games8))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.record8.name) +
                                      " : " +
                                      _vm._s(_vm.record8.puntuacion)
                                  )
                                ])
                              ])
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

/***/ "./resources/js/components/usuario/showUsuario.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/usuario/showUsuario.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showUsuario_vue_vue_type_template_id_75787bd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showUsuario.vue?vue&type=template&id=75787bd6& */ "./resources/js/components/usuario/showUsuario.vue?vue&type=template&id=75787bd6&");
/* harmony import */ var _showUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showUsuario.vue?vue&type=script&lang=js& */ "./resources/js/components/usuario/showUsuario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _showUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showUsuario_vue_vue_type_template_id_75787bd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showUsuario_vue_vue_type_template_id_75787bd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/usuario/showUsuario.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/usuario/showUsuario.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/usuario/showUsuario.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./showUsuario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuario/showUsuario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/usuario/showUsuario.vue?vue&type=template&id=75787bd6&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/usuario/showUsuario.vue?vue&type=template&id=75787bd6& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsuario_vue_vue_type_template_id_75787bd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./showUsuario.vue?vue&type=template&id=75787bd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/usuario/showUsuario.vue?vue&type=template&id=75787bd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsuario_vue_vue_type_template_id_75787bd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsuario_vue_vue_type_template_id_75787bd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);