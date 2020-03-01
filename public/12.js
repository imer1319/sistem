(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.maximaPuntuacion();
    this.misPuntuaciones();
    this.obtener_datos_usuario();
  },
  data: function data() {
    return {
      perfil_usuario: {},
      maximoPunto: [],
      misRecords: [],
      desordenar: [],
      palabras: ['Senso', 'Ganado', 'Socorro', 'Lobo', 'Corazón', 'Cadera', 'Red', 'Patinar', 'Vegetal', 'Negativo', 'Arreglo', 'Erosión', 'Elástico', 'Campera', 'Preciosa', 'Pantera', 'Grabador', 'Galleta', 'Olvidar', 'Actor', 'Hormonas', 'Pozo', 'Naranja', 'Derecha'],
      ids: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
      buscar: null,
      puntuacion: 0,
      tiempo: 100,
      tres_segundos: null,
      temporizador_juego: null,
      contador: 3,
      muestrame_buscando: '',
      bono: 0,
      interval: null
    };
  },
  methods: {
    maximaPuntuacion: function maximaPuntuacion() {
      var _this = this;

      axios.get("maxGame/" + 5).then(function (res) {
        _this.maximoPunto = res.data;
      });
    },
    misPuntuaciones: function misPuntuaciones() {
      var _this2 = this;

      axios.get("/puntuacion/" + 5).then(function (res) {
        _this2.misRecords = res.data;
      });
    },
    obtener_datos_usuario: function obtener_datos_usuario() {
      var _this3 = this;

      axios.get("/profile").then(function (res) {
        _this3.perfil_usuario = res.data;
      });
    },
    guardarJuego: function guardarJuego() {
      var _this4 = this;

      var formData = new FormData();
      formData.append('ejercicio_id', 5);
      formData.append('user_id', this.perfil_usuario.id);
      formData.append('puntuacion', this.puntuacion);
      axios.post('/game', formData).then(function (res) {
        _this4.actualizar_datos_usuario();

        document.getElementById("tercera-vista").style.display = 'none';
        document.getElementById("cuarta-vista").style.display = 'block';
      });
    },
    actualizar_datos_usuario: function actualizar_datos_usuario() {
      var point = Math.floor(this.puntuacion / 3);
      var data = new FormData();
      data.append('puntos', this.perfil_usuario.puntos + point);

      if (this.perfil_usuario.puntos < 100) {
        data.append('rango_id', 1);
      } else if (this.perfil_usuario.puntos >= 100 && this.perfil_usuario.puntos < 500) {
        data.append('rango_id', 2);
      } else if (this.perfil_usuario.puntos >= 500 && this.perfil_usuario.puntos < 1000) {
        data.append('rango_id', 3);
      } else if (this.perfil_usuario.puntos >= 1000 && this.perfil_usuario.puntos < 5000) {
        data.append('rango_id', 4);
      } else if (this.perfil_usuario.puntos >= 5000 && this.perfil_usuario.puntos < 10000) {
        data.append('rango_id', 5);
      } else if (this.perfil_usuario.puntos > 10000) {
        data.append('rango_id', 6);
      }

      data.append('_method', 'PUT');
      var url = "/profile/".concat(this.perfil_usuario.id);
      axios.post(url, data).then(function (res) {});
    },
    tres_segundos_pantalla: function tres_segundos_pantalla() {
      document.getElementById("primera-vista").style.display = 'none';
      document.getElementById("pantalla_3_seg").style.display = 'block';
      document.getElementById("numero_3_seg").style.display = 'block';
      this.tres_segundos = setInterval(this.pantalla_3_segundos, 1000);
    },
    pantalla_3_segundos: function pantalla_3_segundos() {
      this.contador--;

      if (this.contador <= 0) {
        clearInterval(this.tres_segundos);
        document.getElementById("pantalla_3_seg").style.display = 'none';
        document.getElementById("numero_3_seg").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
        this.empezarJuego();
        this.temporizador_juego = setInterval(this.cronometro, 1000);
      }
    },
    fin_cronometro: function fin_cronometro() {
      clearInterval(this.temporizador_juego);
      document.getElementById("segunda-vista").style.display = 'none';
      document.getElementById("tercera-vista").style.display = 'flex';
    },
    cronometro: function cronometro() {
      var elem = document.getElementById("progressBar");
      elem.style.width = this.tiempo + "%";
      this.tiempo -= 1.666667;

      if (this.tiempo > 30 && this.tiempo < 60) {
        elem.style.background = "#6699CC";
      } else if (this.tiempo < 30 && this.tiempo > 10) {
        elem.style.background = "#CC9933";
      } else if (this.tiempo < 10) {
        elem.style.background = "#FF6666";
      }

      if (this.tiempo <= 0) {
        this.fin_cronometro();
      }
    },
    empezarJuego: function empezarJuego() {
      this.desordenar = this.palabras.sort(function () {
        return Math.random() - 0.5;
      });
      this.interval = setInterval(this.ocultar_buscando, 500);
      this.buscar = Math.floor(Math.random() * 7);
      this.muestrame_buscando = this.desordenar[this.buscar];

      for (var i = 0; i < 8; i++) {
        var dist = document.getElementById(this.ids[i]);
        dist.innerHTML = this.palabras[i];
      }
    },
    ocultar_buscando: function ocultar_buscando() {
      this.bono += 5;

      if (this.bono == 10) {
        this.muestrame_buscando = "_ _ _ _";
        clearInterval(this.interval);
        this.bono = 0;
      }
    },
    error_Encontrado: function error_Encontrado(encontrado) {
      encontrado.classList.add('rubberBand');
      setTimeout(function () {
        encontrado.classList.remove('rubberBand');
      }, 1000);
      this.puntuacion -= 2;
    },
    solucion_encontrado: function solucion_encontrado(encontrado) {
      encontrado.innerHTML = " ";
      encontrado.classList.add('solucion');
      setTimeout(function () {
        encontrado.classList.remove('solucion');
      }, 1000);
      this.puntuacion += 3;
    },
    precionar: function precionar(event) {
      var targetId = event.currentTarget.id;

      switch (targetId) {
        case "a":
          var a = document.getElementById("a");

          if (this.desordenar[this.buscar] == this.desordenar[0]) {
            this.solucion_encontrado(a);
            this.empezarJuego();
          } else {
            this.error_Encontrado(a);
          }

          break;

        case "b":
          var b = document.getElementById("b");

          if (this.desordenar[this.buscar] == this.desordenar[1]) {
            this.solucion_encontrado(b);
            this.empezarJuego();
          } else {
            this.error_Encontrado(b);
          }

          break;

        case "c":
          var c = document.getElementById("c");

          if (this.desordenar[this.buscar] == this.desordenar[2]) {
            this.solucion_encontrado(c);
            this.empezarJuego();
          } else {
            this.error_Encontrado(c);
          }

          break;

        case "d":
          var d = document.getElementById("d");

          if (this.desordenar[this.buscar] == this.desordenar[3]) {
            this.solucion_encontrado(d);
            this.empezarJuego();
          } else {
            this.error_Encontrado(d);
          }

          break;

        case "e":
          var e = document.getElementById("e");

          if (this.desordenar[this.buscar] == this.desordenar[4]) {
            this.solucion_encontrado(e);
            this.empezarJuego();
          } else {
            this.error_Encontrado(e);
          }

          break;

        case "f":
          var f = document.getElementById("f");

          if (this.desordenar[this.buscar] == this.desordenar[5]) {
            this.solucion_encontrado(f);
            this.empezarJuego();
          } else {
            this.error_Encontrado(f);
          }

          break;

        case "g":
          var g = document.getElementById("g");

          if (this.desordenar[this.buscar] == this.desordenar[6]) {
            this.solucion_encontrado(g);
            this.empezarJuego();
          } else {
            this.error_Encontrado(g);
          }

          break;

        case "h":
          var h = document.getElementById("h");

          if (this.desordenar[this.buscar] == this.desordenar[7]) {
            this.solucion_encontrado(h);
            this.empezarJuego();
          } else {
            this.error_Encontrado(h);
          }

          break;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.temporizador_juego);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#primera-vista{\r\n\tdisplay: flex;\n}\n#segunda-vista,#tercera-vista,#cuarta-vista{\r\n\tdisplay: none;\n}\n#pantalla_3_seg{\r\n\tdisplay: none;\r\n\tmin-height: 100vh;\r\n\tposition: relative;\n}\n#numero_3_seg{\r\n\tdisplay: none;\r\n\ttop: 40%;\r\n\tleft: 50%;\r\n\tposition: absolute;\r\n\tfont-size:45px;\n}\n.contenedor-card{\r\n\tcursor: pointer;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.125);\r\n\tborder-radius: 0.25rem;\r\n\tpadding: 1.25rem;\n}\n.solucion{\r\n\tbackground: #36edc8;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./5-recuerda-palabra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=template&id=3885c726&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=template&id=3885c726& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row", attrs: { id: "primera-vista" } }, [
      _c("div", { staticClass: "col-12 col-md-8" }, [
        _c("div", { staticClass: "card mb-3" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-5" }, [
                _c("h4", { staticClass: "text-center" }, [
                  _vm._v("Busca la palabra")
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "btn btn-primary btn-block pb-0",
                  attrs: { type: "button", value: "Iniciar" },
                  on: {
                    click: function($event) {
                      return _vm.tres_segundos_pantalla()
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-7" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.maximoPunto, function(max, index) {
                    return _c("div", [
                      _c("div", { staticClass: "card-footer row text-left" }, [
                        _c("h5", { staticClass: "col-md-6 col-12" }, [
                          _vm._v(_vm._s(max.name))
                        ]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "col-md-6 col-12" }, [
                          _vm._v(_vm._s(max.pivot.puntuacion))
                        ])
                      ])
                    ])
                  })
                ],
                2
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card mb-3" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("h4", { staticClass: "text-center text-uppercase" }, [
                _vm._v("Tus records")
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm._l(_vm.misRecords, function(punt, index) {
                return _c("div", { staticClass: "row text-center" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _vm._v(_vm._s(index + 1))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _vm._v(_vm._s(punt.created_at))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _vm._v(_vm._s(punt.puntuacion))
                  ])
                ])
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(2)
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "pantalla_3_seg" } }, [
      _c("div", { attrs: { id: "numero_3_seg" } }, [
        _vm._v(_vm._s(_vm.contador))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row", attrs: { id: "segunda-vista" } }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body " }, [
            _c("div", { staticClass: "row" }, [
              _c("span", { staticClass: "col-4" }, [
                _vm._v("Pts: " + _vm._s(_vm.puntuacion))
              ]),
              _vm._v(" "),
              _vm._m(3)
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "text-center my-5" }, [
              _vm._v(_vm._s(_vm.muestrame_buscando))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "container-fluid row text-center" }, [
              _c("div", {
                staticClass: "contenedor-card col-6",
                attrs: { id: "a" },
                on: {
                  click: function($event) {
                    return _vm.precionar($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "contenedor-card col-6",
                attrs: { id: "b" },
                on: {
                  click: function($event) {
                    return _vm.precionar($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "contenedor-card col-6",
                attrs: { id: "c" },
                on: {
                  click: function($event) {
                    return _vm.precionar($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "contenedor-card col-6",
                attrs: { id: "d" },
                on: {
                  click: function($event) {
                    return _vm.precionar($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "contenedor-card col-6",
                attrs: { id: "e" },
                on: {
                  click: function($event) {
                    return _vm.precionar($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "contenedor-card col-6",
                attrs: { id: "f" },
                on: {
                  click: function($event) {
                    return _vm.precionar($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "contenedor-card col-6",
                attrs: { id: "g" },
                on: {
                  click: function($event) {
                    return _vm.precionar($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "contenedor-card col-6",
                attrs: { id: "h" },
                on: {
                  click: function($event) {
                    return _vm.precionar($event)
                  }
                }
              })
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-8  m-auto", attrs: { id: "tercera-vista" } },
      [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "col-8 m-auto text-center" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.guardarJuego($event)
                    }
                  }
                },
                [
                  _c("h3", { staticClass: "text-uppercase" }, [
                    _vm._v("Se acabo el tiempo")
                  ]),
                  _vm._v(" "),
                  _c("img", {
                    attrs: {
                      src: "imagenes/relogarena.png",
                      alt: "",
                      width: "60%"
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "btn btn-primary btn-block",
                    attrs: { type: "submit", value: "Ver resultados" }
                  })
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-8 m-auto", attrs: { id: "cuarta-vista" } },
      [
        _c("div", { staticClass: "card animated bounceInRight" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("h3", { staticClass: "text-center" }, [
                _vm._v("estos son los resultados")
              ]),
              _vm._v(" "),
              _c("h4", [_vm._v("tiempo : 00:00")]),
              _c("hr"),
              _vm._v(" "),
              _c("h4", [_vm._v("Puntuacion: " + _vm._s(_vm.puntuacion))]),
              _c("hr"),
              _vm._v(" "),
              _c("h4", [
                _vm._v("Aumento: "),
                _c("b", [_vm._v("+")]),
                _vm._v(" " + _vm._s(Math.floor(_vm.puntuacion / 3)))
              ]),
              _c("hr"),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary m-auto btn-block",
                  attrs: { to: { name: "home" } }
                },
                [_vm._v("\n\t\t\t\t\tIr al Inicio\n\t\t\t\t")]
              )
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", [_vm._v("Record")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row font-weight-bold text-center" }, [
      _c("div", { staticClass: "col-2" }, [_vm._v("#")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [_vm._v("Fecha")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" }, [_vm._v("Puntos")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-md-4" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "text-center" }, [
            _c("img", {
              staticClass: "card-img-top mx-auto my-3",
              staticStyle: { width: "60%" },
              attrs: {
                src: "/imagenes/consejos-juegos/consejo-memorizar-palabra.png"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-text" }, [
                _vm._v(
                  "Memoriza la palabra que aparecera y luego selecciona la correcta, antes de que se termine el tiempo"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-left" }, [
                _c("p", [_c("b", [_vm._v("Tiempo: ")]), _vm._v("60 segundos")]),
                _vm._v(" "),
                _c("p", [_c("b", [_vm._v("Correcta: ")]), _vm._v("+3 puntos")]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("Incorrecta: ")]),
                  _vm._v("-2 puntos")
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("ul", { attrs: { id: "skill" } }, [
        _c("li", [
          _c("span", {
            staticClass: "bar graphic-design",
            attrs: { id: "progressBar" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/game/5-recuerda-palabra.vue":
/*!********************************************************!*\
  !*** ./resources/js/users/game/5-recuerda-palabra.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _5_recuerda_palabra_vue_vue_type_template_id_3885c726___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5-recuerda-palabra.vue?vue&type=template&id=3885c726& */ "./resources/js/users/game/5-recuerda-palabra.vue?vue&type=template&id=3885c726&");
/* harmony import */ var _5_recuerda_palabra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./5-recuerda-palabra.vue?vue&type=script&lang=js& */ "./resources/js/users/game/5-recuerda-palabra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _5_recuerda_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./5-recuerda-palabra.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/game/5-recuerda-palabra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _5_recuerda_palabra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _5_recuerda_palabra_vue_vue_type_template_id_3885c726___WEBPACK_IMPORTED_MODULE_0__["render"],
  _5_recuerda_palabra_vue_vue_type_template_id_3885c726___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/game/5-recuerda-palabra.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/game/5-recuerda-palabra.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/users/game/5-recuerda-palabra.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./5-recuerda-palabra.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/game/5-recuerda-palabra.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/users/game/5-recuerda-palabra.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./5-recuerda-palabra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/game/5-recuerda-palabra.vue?vue&type=template&id=3885c726&":
/*!***************************************************************************************!*\
  !*** ./resources/js/users/game/5-recuerda-palabra.vue?vue&type=template&id=3885c726& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_template_id_3885c726___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./5-recuerda-palabra.vue?vue&type=template&id=3885c726& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/5-recuerda-palabra.vue?vue&type=template&id=3885c726&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_template_id_3885c726___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_5_recuerda_palabra_vue_vue_type_template_id_3885c726___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);