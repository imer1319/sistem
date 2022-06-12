(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.showUser();
    this.tres_segundos_pantalla();
  },
  data: function data() {
    return {
      usuario: {},
      maximoPunto: [],
      misRecords: [],
      desordenar: [],
      palabras: ['Sensación', 'Ganado', 'Socorro', 'Lobotomía', 'Corazón', 'Cadera', 'Red', 'Patinar', 'Vegetal', 'Negativo', 'Arreglar', 'Erosión', 'Elástico', 'Campera', 'Preciosa', 'Pantera', 'Grabador', 'Galleta', 'Olvidarse', 'Actor', 'Hormonas', 'Pozo', 'Naranja', 'Derecha'],
      ids: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
      buscar: null,
      puntuacion: 0,
      tiempo: 100,
      tres_segundos: null,
      temporizador_juego: null,
      contador: 3,
      loading: true,
      aumento_avance: 0,
      calificacion: 0,
      requierePuntuacion: 0,
      aumento_puntos: ''
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
    actualizar_datos_usuario: function actualizar_datos_usuario() {
      if (this.puntuacion <= this.requierePuntuacion / 2) {
        this.calificacion = 1;
      }

      if (this.puntuacion > this.requierePuntuacion / 2 && this.puntuacion < this.requierePuntuacion) {
        this.calificacion = 2;
      }

      if (this.puntuacion >= this.requierePuntuacion) {
        this.calificacion = 3;
      }

      if (this.puntuacion >= this.requierePuntuacion) {
        if (this.usuario.avance_curso > 8 && this.usuario.avance_curso < 11 || this.usuario.avance_curso == 24) {
          if (this.usuario.avance_curso == 9) {
            this.usuario.puntos += 20;
            this.aumento_puntos = '+20 Pts';
          } else if (this.usuario.avance_curso == 10) {
            this.usuario.puntos += 25;
            this.aumento_puntos = '+25 Pts';
          } else if (this.usuario.avance_curso == 24) {
            this.usuario.puntos += 150;
            this.aumento_puntos = '+150	 Pts';
          }

          this.aumento_avance = this.usuario.avance_curso + 1;
          var data = new FormData();
          data.append('avance_curso', this.aumento_avance);
          data.append('puntos', this.usuario.puntos);
          data.append('_method', 'PUT');
          var url = "/profile/".concat(this.usuario.id);
          axios.post(url, data).then(function (res) {});
        }
      }

      document.getElementById("tercera-vista").style.display = 'none';
      document.getElementById("cuarta-vista").style.display = 'block';
    },
    tres_segundos_pantalla: function tres_segundos_pantalla() {
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
      if (this.usuario.avance_curso < 19) {
        this.requierePuntuacion = 35;
      }

      if (this.usuario.avance_curso >= 19) {
        this.requierePuntuacion = 50;
      }

      this.desordenar = this.palabras.sort(function () {
        return Math.random() - 0.5;
      });

      for (var i = 0; i < this.desordenar.length; i++) {
        var dist = document.getElementById(this.ids[i]);
        dist.innerHTML = this.desordenar[i];
      }

      this.buscar = Math.floor(Math.random() * this.palabras.length);
      document.getElementById("buscar").innerHTML = this.palabras[this.buscar];
    },
    error_Encontrado: function error_Encontrado(encontrado) {
      encontrado.classList.add('rubberBand');
      setTimeout(function () {
        encontrado.classList.remove('rubberBand');
      }, 1000);
      this.puntuacion -= 2;
    },
    precionar: function precionar(event) {
      var targetId = event.currentTarget.id;

      switch (targetId) {
        case "a":
          var a = document.getElementById("a");

          if (this.desordenar[this.buscar] == this.desordenar[0]) {
            a.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(a);
          }

          break;

        case "b":
          var b = document.getElementById("b");

          if (this.desordenar[this.buscar] == this.desordenar[1]) {
            b.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(b);
          }

          break;

        case "c":
          var c = document.getElementById("c");

          if (this.desordenar[this.buscar] == this.desordenar[2]) {
            c.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(c);
          }

          break;

        case "d":
          var d = document.getElementById("d");

          if (this.desordenar[this.buscar] == this.desordenar[3]) {
            d.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(d);
          }

          break;

        case "e":
          var e = document.getElementById("e");

          if (this.desordenar[this.buscar] == this.desordenar[4]) {
            e.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(e);
          }

          break;

        case "f":
          var f = document.getElementById("f");

          if (this.desordenar[this.buscar] == this.desordenar[5]) {
            f.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(f);
          }

          break;

        case "g":
          var g = document.getElementById("g");

          if (this.desordenar[this.buscar] == this.desordenar[6]) {
            g.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(g);
          }

          break;

        case "h":
          var h = document.getElementById("h");

          if (this.desordenar[this.buscar] == this.desordenar[7]) {
            h.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(h);
          }

          break;

        case "i":
          var i = document.getElementById("i");

          if (this.desordenar[this.buscar] == this.desordenar[8]) {
            i.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(i);
          }

          break;

        case "j":
          var j = document.getElementById("j");

          if (this.desordenar[this.buscar] == this.desordenar[9]) {
            j.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(j);
          }

          break;

        case "k":
          var k = document.getElementById("k");

          if (this.desordenar[this.buscar] == this.desordenar[10]) {
            k.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(k);
          }

          break;

        case "l":
          var l = document.getElementById("l");

          if (this.desordenar[this.buscar] == this.desordenar[11]) {
            l.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(l);
          }

          break;

        case "m":
          var m = document.getElementById("m");

          if (this.desordenar[this.buscar] == this.desordenar[12]) {
            m.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(m);
          }

          break;

        case "n":
          var n = document.getElementById("n");

          if (this.desordenar[this.buscar] == this.desordenar[13]) {
            n.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(n);
          }

          break;

        case "o":
          var o = document.getElementById("o");

          if (this.desordenar[this.buscar] == this.desordenar[14]) {
            o.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(o);
          }

          break;

        case "p":
          var p = document.getElementById("p");

          if (this.desordenar[this.buscar] == this.desordenar[15]) {
            p.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(p);
          }

          break;

        case "q":
          var q = document.getElementById("q");

          if (this.desordenar[this.buscar] == this.desordenar[16]) {
            q.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(q);
          }

          break;

        case "r":
          var r = document.getElementById("r");

          if (this.desordenar[this.buscar] == this.desordenar[17]) {
            r.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(r);
          }

          break;

        case "s":
          var s = document.getElementById("s");

          if (this.desordenar[this.buscar] == this.desordenar[18]) {
            s.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(s);
          }

          break;

        case "t":
          var t = document.getElementById("t");

          if (this.desordenar[this.buscar] == this.desordenar[19]) {
            t.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(t);
          }

          break;

        case "u":
          var u = document.getElementById("u");

          if (this.desordenar[this.buscar] == this.desordenar[20]) {
            u.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(u);
          }

          break;

        case "v":
          var v = document.getElementById("v");

          if (this.desordenar[this.buscar] == this.desordenar[21]) {
            v.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(v);
          }

          break;

        case "w":
          var w = document.getElementById("w");

          if (this.desordenar[this.buscar] == this.desordenar[22]) {
            w.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(w);
          }

          break;

        case "x":
          var x = document.getElementById("x");

          if (this.desordenar[this.buscar] == this.desordenar[23]) {
            x.innerHTML = " ";
            this.puntuacion += 3;
            this.empezarJuego();
          } else {
            this.error_Encontrado(x);
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#primera-vista{\n\tdisplay: flex;\n}\n#segunda-vista,#tercera-vista,#cuarta-vista{\n\tdisplay: none;\n}\n#pantalla_3_seg{\n\tdisplay: block;\n\tmin-height: 100vh;\n\tposition: relative;\n}\n#numero_3_seg{\n\tdisplay: block;\n\ttop: 40%;\n\tleft: 50%;\n\tposition: absolute;\n\tfont-size:45px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./5-buscar-palabra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=template&id=2c4102f3&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=template&id=2c4102f3& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
              "div",
              { staticClass: "container-fluid" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-dark text-uppercase text-white",
                    attrs: { to: "/curso" }
                  },
                  [_vm._v("\n\t\t\t\t\tRegresar\n\t\t\t\t")]
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
                          _c("div", { staticClass: "text-center" }, [
                            _c("h5", [
                              _vm._v("Req : "),
                              _c("strong", [
                                _vm._v(_vm._s(_vm.requierePuntuacion))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
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
                          _c("h4", {
                            staticClass: "text-center",
                            attrs: { id: "buscar" }
                          }),
                          _vm._v(" "),
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-bordered m-auto text-center col-md-8 pt-1"
                            },
                            [
                              _c("tbody", [
                                _c("tr", [
                                  _c("td", {
                                    attrs: { id: "a" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "b" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "c" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", {
                                    attrs: { id: "d" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "e" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "f" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", {
                                    attrs: { id: "g" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "h" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "i" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", {
                                    attrs: { id: "j" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "k" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "l" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", {
                                    attrs: { id: "m" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "n" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "o" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", {
                                    attrs: { id: "p" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "q" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "r" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", {
                                    attrs: { id: "s" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "t" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "u" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", {
                                    attrs: { id: "v" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "w" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    attrs: { id: "x" },
                                    on: {
                                      click: function($event) {
                                        return _vm.precionar($event)
                                      }
                                    }
                                  })
                                ])
                              ])
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
                  {
                    staticClass: "col-md-8 m-auto",
                    attrs: { id: "tercera-vista" }
                  },
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
                                  return _vm.actualizar_datos_usuario($event)
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
                                staticClass: "btn btn-primary btn-block btn-lg",
                                attrs: {
                                  type: "submit",
                                  value: "Ver resultados"
                                }
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
                  {
                    staticClass: "col-md-8 m-auto",
                    attrs: { id: "cuarta-vista" }
                  },
                  [
                    _c("div", { staticClass: "card animated bounceInRight" }, [
                      _c(
                        "div",
                        { staticClass: "card-body" },
                        [
                          _c("h3", { staticClass: "text-center" }, [
                            _vm._v("Estos son los resultados")
                          ]),
                          _c("hr"),
                          _vm._v(" "),
                          this.puntuacion >= _vm.requierePuntuacion
                            ? _c("div", [
                                _c(
                                  "h3",
                                  { staticClass: "text-center text-success" },
                                  [
                                    _c("span", [
                                      _vm._v("Felicidades Aprobaste la lección")
                                    ])
                                  ]
                                )
                              ])
                            : _c("div", [
                                _c(
                                  "h3",
                                  { staticClass: "text-center text-danger" },
                                  [
                                    _c("span", [
                                      _vm._v("No aprobaste la lección")
                                    ])
                                  ]
                                )
                              ]),
                          _vm._v(" "),
                          _c("h4", [
                            _vm._v(
                              "Calificacion: " +
                                _vm._s(_vm.calificacion) +
                                " de 3"
                            )
                          ]),
                          _c("hr"),
                          _vm._v(" "),
                          _c("h4", [
                            _vm._v("Puntuacion: " + _vm._s(_vm.puntuacion))
                          ]),
                          _c("hr"),
                          _vm._v(" "),
                          _c(
                            "h3",
                            { staticClass: "text-warning text-center" },
                            [_c("b", [_vm._v(_vm._s(_vm.aumento_puntos))])]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-primary m-auto btn-block",
                              attrs: { to: "/curso" }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\tIr al Curso\n\t\t\t\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-primary m-auto btn-block",
                              attrs: { to: { name: "home" } }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\tIr al Inicio\n\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/curso/avances-curso/5-buscar-palabra.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/users/curso/avances-curso/5-buscar-palabra.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _5_buscar_palabra_vue_vue_type_template_id_2c4102f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5-buscar-palabra.vue?vue&type=template&id=2c4102f3& */ "./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=template&id=2c4102f3&");
/* harmony import */ var _5_buscar_palabra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./5-buscar-palabra.vue?vue&type=script&lang=js& */ "./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _5_buscar_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./5-buscar-palabra.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _5_buscar_palabra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _5_buscar_palabra_vue_vue_type_template_id_2c4102f3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _5_buscar_palabra_vue_vue_type_template_id_2c4102f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/curso/avances-curso/5-buscar-palabra.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./5-buscar-palabra.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./5-buscar-palabra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=template&id=2c4102f3&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=template&id=2c4102f3& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_template_id_2c4102f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./5-buscar-palabra.vue?vue&type=template&id=2c4102f3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/curso/avances-curso/5-buscar-palabra.vue?vue&type=template&id=2c4102f3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_template_id_2c4102f3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_5_buscar_palabra_vue_vue_type_template_id_2c4102f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);