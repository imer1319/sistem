(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/8-campo-visual.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/8-campo-visual.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.maximaPuntuacion();
    this.misPuntuaciones();
  },
  data: function data() {
    return {
      maximoPunto: {},
      misRecords: [],
      tres_segundos: null,
      temporizador_juego: null,
      contador: 3,
      puntuacion: 0,
      tiempo: 100,
      igualdades: [0, 1],
      igual: null,
      letras: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
      arriba: {
        x: 3,
        y: 2
      },
      derecha: {
        x: 4,
        y: 3
      },
      abajo: {
        x: 3,
        y: 4
      },
      izquierda: {
        x: 2,
        y: 3
      },
      loading: true
    };
  },
  methods: {
    obtenerFecha: function obtenerFecha(fecha) {
      return moment(fecha).fromNow();
    },
    maximaPuntuacion: function maximaPuntuacion() {
      var _this = this;

      axios.get("maxGame/" + 8).then(function (res) {
        _this.maximoPunto = res.data;
      });
    },
    misPuntuaciones: function misPuntuaciones() {
      var _this2 = this;

      axios.get("/puntuacion/" + 8).then(function (res) {
        _this2.misRecords = res.data;
        _this2.loading = false;
      });
    },
    guardarJuego: function guardarJuego() {
      var _this3 = this;

      var formData = new FormData();
      formData.append('ejercicio_id', 8);
      formData.append('user_id', this.currentUser.id);
      formData.append('puntuacion', this.puntuacion);
      axios.post('/game', formData).then(function (res) {
        _this3.actualizarDatosUsuario();

        document.getElementById("tercera-vista").style.display = 'none';
        document.getElementById("cuarta-vista").style.display = 'block';
      });
    },
    dibujarEstrellas: function dibujarEstrellas(numero, titulo) {
      var stars = "";

      for (var i = 0; i < 5; i++) {
        if (i < numero) {
          stars += "<span><i class='fas fa-star'></i></span>";
        } else {
          stars += "<span><i class='far fa-star'></i></span>";
        }
      }

      var astro = document.getElementById("estrellas");
      astro.innerHTML = stars;
      astro.innerHTML += titulo;
    },
    actualizarDatosUsuario: function actualizarDatosUsuario() {
      var stars = 0;
      var minimo = 30;
      var titulo = '';

      for (var i = 1; i <= 5; i++) {
        if (this.puntuacion >= minimo * i) {
          stars = i;
          titulo = ' ' + i + ' / ' + 5;
        } else {
          stars = i - 1;
          titulo = ' ' + (i - 1) + ' / ' + 5;
          break;
        }
      }

      this.dibujarEstrellas(stars, titulo);
      var point = Math.floor(this.puntuacion / 11);
      var data = new FormData();
      data.append('puntos', this.currentUser.puntos + point);

      if (this.currentUser.puntos < 100) {
        data.append('rango_id', 1);
      } else if (this.currentUser.puntos >= 100 && this.currentUser.puntos < 300) {
        data.append('rango_id', 2);
      } else if (this.currentUser.puntos >= 300 && this.currentUser.puntos < 700) {
        data.append('rango_id', 3);
      } else if (this.currentUser.puntos >= 700 && this.currentUser.puntos < 1000) {
        data.append('rango_id', 4);
      } else if (this.currentUser.puntos >= 1000 && this.currentUser.puntos < 2000) {
        data.append('rango_id', 5);
      } else if (this.currentUser.puntos >= 2000) {
        data.append('rango_id', 6);
      }

      data.append('_method', 'PUT');
      var url = "/profile/".concat(this.currentUser.id);
      axios.post(url, data).then(function (res) {});
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
    tres_segundos_pantalla: function tres_segundos_pantalla() {
      document.getElementById("primera-vista").style.display = 'none';
      document.getElementById("pantalla_3_seg").style.display = 'block';
      document.getElementById("numero_3_seg").style.display = 'block';
      this.tres_segundos = setInterval(this.pantalla_3_segundos, 1000);
    },
    empezarJuego: function empezarJuego() {
      var tabla = "<table class='tabb m-auto'>";
      var letra_posicion = Math.floor(Math.random() * this.letras.length);
      var rand_cartesiano = Math.floor(Math.random() * 4);
      this.igual = Math.floor(Math.random() * this.igualdades.length);

      for (var i = 0; i < 7; i++) {
        tabla += "<tr>";

        for (var j = 0; j < 7; j++) {
          var rand = Math.floor(Math.random() * this.letras.length);

          if (this.igual == 1) {
            if (i == this.arriba.x && j == this.arriba.y || i == this.derecha.x && j == this.derecha.y || i == this.abajo.x && j == this.abajo.y || i == this.izquierda.x && j == this.izquierda.y) {
              tabla += "<td class='tdd'>" + "<div class='color'>" + this.letras[letra_posicion] + "</div>" + "</td>";
            } else {
              tabla += "<td class='tdd'>" + "<div>" + this.letras[rand] + "</div>" + "</td>";
            }
          } else if (this.igual == 0) {
            if (rand_cartesiano == 0) {
              if (i == this.arriba.x && j == this.arriba.y) {
                tabla += "<td class='tdd'>" + "<div class='color'>" + this.letras[rand] + "</div>" + "</td>";
              } else if (i == this.derecha.x && j == this.derecha.y || i == this.abajo.x && j == this.abajo.y || i == this.izquierda.x && j == this.izquierda.y) {
                tabla += "<td class='tdd'>" + "<div class='color'>" + this.letras[letra_posicion] + "</div>" + "</td>";
              } else {
                tabla += "<td class='tdd'>" + "<div>" + this.letras[rand] + "</div>" + "</td>";
              }
            } else if (rand_cartesiano == 1) {
              if (i == this.derecha.x && j == this.derecha.y) {
                tabla += "<td class='tdd'>" + "<div class='color'>" + this.letras[rand] + "</div>" + "</td>";
              } else if (i == this.arriba.x && j == this.arriba.y || i == this.abajo.x && j == this.abajo.y || i == this.izquierda.x && j == this.izquierda.y) {
                tabla += "<td class='tdd'>" + "<div class='color'>" + this.letras[letra_posicion] + "</div>" + "</td>";
              } else {
                tabla += "<td class='tdd'>" + "<div>" + this.letras[rand] + "</div>" + "</td>";
              }
            } else if (rand_cartesiano == 2) {
              if (i == this.abajo.x && j == this.abajo.y) {
                tabla += "<td class='tdd'>" + "<div class='color'>" + this.letras[rand] + "</div>" + "</td>";
              } else if (i == this.arriba.x && j == this.arriba.y || i == this.derecha.x && j == this.derecha.y || i == this.izquierda.x && j == this.izquierda.y) {
                tabla += "<td class='tdd'>" + "<div class='color'>" + this.letras[letra_posicion] + "</div>" + "</td>";
              } else {
                tabla += "<td class='tdd'>" + "<div>" + this.letras[rand] + "</div>" + "</td>";
              }
            } else if (rand_cartesiano == 3) {
              if (i == this.izquierda.x && j == this.izquierda.y) {
                tabla += "<td class='tdd'>" + "<div class='color'>" + this.letras[rand] + "</div>" + "</td>";
              } else if (i == this.arriba.x && j == this.arriba.y || i == this.derecha.x && j == this.derecha.y || i == this.abajo.x && j == this.abajo.y) {
                tabla += "<td class='tdd'>" + "<div class='color'>" + this.letras[letra_posicion] + "</div>" + "</td>";
              } else {
                tabla += "<td class='tdd'>" + "<div>" + this.letras[rand] + "</div>" + "</td>";
              }
            }
          }
        }

        tabla += "</tr>";
      }

      tabla += "</table>";
      document.getElementById("resultado").innerHTML = tabla;
    },
    iguales: function iguales() {
      if (this.igual == 1) {
        this.puntuacion += 3;
      } else {
        this.puntuacion -= 2;
      }

      this.empezarJuego();
    },
    diferentes: function diferentes() {
      if (this.igual == 0) {
        this.puntuacion += 3;
      } else {
        this.puntuacion -= 2;
      }

      this.empezarJuego();
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.temporizador_juego);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/8-campo-visual.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/8-campo-visual.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.color{\n\tbackground: #2d2d2d;\n\tcolor: white;\n\tborder-radius: 50%;\n\twidth: 100%;height: 100%;\n\tpadding-top: 8px;\n}\n.tabb{\n\ttable-layout: fixed;\n\twidth: 280px;\n}\n.tdd {\n\twidth: 40px;\n\theight: 40px;\n\tword-wrap: break-word;\n\ttext-align: center;\n}\n#primera-vista{\n\tdisplay: flex;\n}\n#segunda-vista,#tercera-vista,#cuarta-vista{\n\tdisplay: none;\n}\n#pantalla_3_seg{\n\tdisplay: none;\n\tmin-height: 100vh;\n\tposition: relative;\n}\n#numero_3_seg{\n\tdisplay: none;\n\ttop: 40%;\n\tleft: 50%;\n\tposition: absolute;\n\tfont-size:45px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/8-campo-visual.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/8-campo-visual.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./8-campo-visual.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/8-campo-visual.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/8-campo-visual.vue?vue&type=template&id=61dcd208&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/8-campo-visual.vue?vue&type=template&id=61dcd208& ***!
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
            _c("div", { staticClass: "container-fluid" }, [
              _c("div", { staticClass: "col-12 container-fluid" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-dark text-uppercase",
                    attrs: { type: "button", onClick: "history.back()" }
                  },
                  [_vm._v("Regresar")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row", attrs: { id: "primera-vista" } },
                [
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
                              staticClass: "btn btn-primary btn-block",
                              attrs: { type: "button", value: "Iniciar" },
                              on: {
                                click: function($event) {
                                  return _vm.tres_segundos_pantalla()
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-7" }, [
                            _c("div", { staticClass: "text-center" }, [
                              _c("h5", [_vm._v("Record")])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card-footer d-flex justify-content-around align-items-center"
                              },
                              [
                                _c("h5", [
                                  _vm._v(_vm._s(_vm.maximoPunto.name))
                                ]),
                                _vm._v(" "),
                                _c("h5", [
                                  _vm._v(
                                    _vm._s(_vm.maximoPunto.pivot.puntuacion)
                                  )
                                ])
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card mb-3" }, [
                      _c(
                        "div",
                        { staticClass: "card-body" },
                        [
                          _c(
                            "h4",
                            { staticClass: "text-center text-uppercase" },
                            [_vm._v("Tus records")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row font-weight-bold text-center" },
                            [
                              _c("div", { staticClass: "col-2" }, [
                                _vm._v("#")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-6" }, [
                                _vm._v("Fecha")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-4" }, [
                                _vm._v("Puntos")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _vm._l(_vm.misRecords, function(punt, index) {
                            return _c(
                              "div",
                              { staticClass: "row text-center" },
                              [
                                _c("div", { staticClass: "col-2" }, [
                                  _vm._v(_vm._s(index + 1))
                                ]),
                                _vm._v(" "),
                                _c("h5", { staticClass: "col-6" }, [
                                  _vm._v(
                                    _vm._s(_vm.obtenerFecha(punt.created_at))
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-4" }, [
                                  _vm._v(_vm._s(punt.puntuacion))
                                ])
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "text-center" }, [
                          _c("img", {
                            staticClass: "card-img-top mx-auto my-3",
                            staticStyle: { width: "70%" },
                            attrs: {
                              src:
                                "/imagenes/consejos-juegos/consejo-campo-visual.png"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body" }, [
                            _c("h4", { staticClass: "card-text" }, [
                              _vm._v(
                                "Concéntrese y preciona si son iguales o diferentes las letras que estan coloreadas, antes de que se termine el tiempo"
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-left" }, [
                              _c("p", [
                                _c("b", [_vm._v("Tiempo: ")]),
                                _vm._v("60 segundos")
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _c("b", [_vm._v("Correcta: ")]),
                                _vm._v("+3 puntos")
                              ]),
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
                ]
              ),
              _vm._v(" "),
              _c("div", { attrs: { id: "pantalla_3_seg" } }, [
                _c("div", { attrs: { id: "numero_3_seg" } }, [
                  _vm._v(_vm._s(_vm.contador))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row", attrs: { id: "segunda-vista" } },
                [
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body " }, [
                        _c("div", { staticClass: "row" }, [
                          _c("span", { staticClass: "col-4" }, [
                            _vm._v("Puntos: " + _vm._s(_vm.puntuacion))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-8" }, [
                            _c("ul", { attrs: { id: "skill" } }, [
                              _c("li", [
                                _c("span", {
                                  staticClass: "bar graphic-design",
                                  attrs: { id: "progressBar" }
                                })
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-8 text-center m-auto" },
                            [_c("div", { attrs: { id: "resultado" } })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mt-1" }, [
                          _c("div", { staticClass: "d-flex m-auto" }, [
                            _c("span", { staticClass: "col-6 text-md-right" }, [
                              _c(
                                "span",
                                {
                                  staticClass: "btn btn-primary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.diferentes()
                                    }
                                  }
                                },
                                [_vm._v("diferentes")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "col-6 text-md-left" }, [
                              _c(
                                "span",
                                {
                                  staticClass: "btn btn-primary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.iguales()
                                    }
                                  }
                                },
                                [_vm._v("Iguales")]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-8 m-auto",
                  attrs: { id: "tercera-vista" }
                },
                [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "div",
                        { staticClass: "col-8 m-auto text-center" },
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
                          _vm.puntuacion > 0
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "btn btn-primary btn-block btn-lg",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.guardarJuego()
                                    }
                                  }
                                },
                                [_vm._v("Se acabó el tiempo")]
                              )
                            : _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-primary btn-block",
                                  attrs: { to: "/game" }
                                },
                                [_vm._v(" Volver al curso")]
                              )
                        ],
                        1
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-8 m-auto",
                  attrs: { id: "cuarta-vista" }
                },
                [
                  _c("div", { staticClass: "card animated bounceInRight" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("h3", { staticClass: "text-center" }, [
                        _vm._v("estos son los resultados")
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("Calificacion : "),
                        _c("span", { attrs: { id: "estrellas" } })
                      ]),
                      _c("hr"),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("Puntuacion: " + _vm._s(_vm.puntuacion))
                      ]),
                      _c("hr"),
                      _vm._v(" "),
                      _c("h4", { staticClass: "text-warning" }, [
                        _vm._v("Aumento: "),
                        _c("b", [_vm._v("+")]),
                        _vm._v(" " + _vm._s(Math.floor(_vm.puntuacion / 11)))
                      ]),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "input-group justify-content-center" },
                        [
                          _c(
                            "div",
                            { staticClass: "input-group-append" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-primary btn-block",
                                  attrs: { to: "/game" }
                                },
                                [_vm._v(" Volver a los ejercicios")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "input-group-append" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-dark btn-block",
                                  attrs: { to: "/home" }
                                },
                                [_vm._v(" Volver al inicio")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/game/8-campo-visual.vue":
/*!****************************************************!*\
  !*** ./resources/js/users/game/8-campo-visual.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _8_campo_visual_vue_vue_type_template_id_61dcd208___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./8-campo-visual.vue?vue&type=template&id=61dcd208& */ "./resources/js/users/game/8-campo-visual.vue?vue&type=template&id=61dcd208&");
/* harmony import */ var _8_campo_visual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./8-campo-visual.vue?vue&type=script&lang=js& */ "./resources/js/users/game/8-campo-visual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _8_campo_visual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./8-campo-visual.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/game/8-campo-visual.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _8_campo_visual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _8_campo_visual_vue_vue_type_template_id_61dcd208___WEBPACK_IMPORTED_MODULE_0__["render"],
  _8_campo_visual_vue_vue_type_template_id_61dcd208___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/game/8-campo-visual.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/game/8-campo-visual.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/users/game/8-campo-visual.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./8-campo-visual.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/8-campo-visual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/game/8-campo-visual.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/users/game/8-campo-visual.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./8-campo-visual.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/8-campo-visual.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/game/8-campo-visual.vue?vue&type=template&id=61dcd208&":
/*!***********************************************************************************!*\
  !*** ./resources/js/users/game/8-campo-visual.vue?vue&type=template&id=61dcd208& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_template_id_61dcd208___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./8-campo-visual.vue?vue&type=template&id=61dcd208& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/8-campo-visual.vue?vue&type=template&id=61dcd208&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_template_id_61dcd208___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_8_campo_visual_vue_vue_type_template_id_61dcd208___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);