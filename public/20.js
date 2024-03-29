(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DarExamen.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DarExamen.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale('es');
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.showExamen();
  },
  data: function data() {
    return {
      step: 1,
      muestra_exam: 0,
      examen: {},
      pregunta: {
        enunciado: '',
        examen_id: '',
        respuestaA: '',
        respuestaB: '',
        respuestaC: '',
        respuestaD: '',
        esCorrecto: ''
      },
      contador: 0,
      comprension: 0,
      velocidad: 0,
      picked: '',
      palabras: '',
      palabras_x_minuto: 0,
      saveExam: {
        exam_id: '',
        user_id: '',
        ppm: '',
        comprension: '',
        tiempo: '',
        estado: ''
      },
      myTime: 0,
      cronometro: 0,
      result: '',
      loading: true,
      vista: 1,
      aumento_curso: 0,
      aumento_puntos: 0,
      disminucion_puntos: 0,
      requiere_comprension: 0,
      requiere_velocidad: 0,
      mensaje_comprension: '',
      mensaje_puntos: ''
    };
  },
  methods: {
    showExamen: function showExamen() {
      var _this = this;

      axios.get('/obtenerExamen').then(function (res) {
        _this.examen = res.data;
        _this.loading = false;
      });
    },
    obtenerFecha: function obtenerFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).fromNow();
    },
    myTimer: function myTimer() {
      this.cronometro++;
    },
    stopTiempo: function stopTiempo() {
      clearInterval(this.myTime);
      this.palabras_x_minuto = Math.round(this.palabras / (this.cronometro / 60));
      this.muestraCronometro();
    },
    muestraCronometro: function muestraCronometro() {
      var time = this.cronometro;
      var minutes = Math.floor(time / 60);
      var seconds = time % 60;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      this.result = minutes + ":" + seconds;
    },
    actualizar_usuario: function actualizar_usuario() {
      console.log('ejecutando');
      this.saveExam.exam_id = this.examen.id;
      this.saveExam.user_id = this.currentUser.id;
      this.saveExam.ppm = this.palabras / (this.cronometro / 60);
      this.saveExam.comprension = this.comprension * 10;
      this.saveExam.tiempo = this.cronometro;
      this.saveExam.estado = 1;

      if (this.currentUser.avance_curso == 1) {
        this.aumento_puntos = 50;
        this.requiere_comprension = 50;
        this.disminucion_puntos = 10;
        this.requiere_velocidad = 150;
      }

      if (this.currentUser.avance_curso == 6) {
        this.aumento_puntos = 50;
        this.requiere_comprension = 60;
        this.disminucion_puntos = 50;
        this.requiere_velocidad = 300;
      }

      if (this.currentUser.avance_curso == 11) {
        this.aumento_puntos = 100;
        this.requiere_comprension = 70;
        this.disminucion_puntos = 50;
        this.requiere_velocidad = 500;
      }

      if (this.currentUser.avance_curso == 18) {
        this.aumento_puntos = 150;
        this.requiere_comprension = 85;
        this.disminucion_puntos = 50;
        this.requiere_velocidad = 700;
      }

      if (this.currentUser.avance_curso == 23) {
        this.aumento_puntos = 200;
        this.requiere_comprension = 90;
        this.disminucion_puntos = 200;
        this.requiere_velocidad = 1000;
      }

      if (this.currentUser.avance_curso == 28) {
        this.aumento_puntos = 300;
        this.requiere_comprension = 100;
        this.disminucion_puntos = 300;
        this.requiere_velocidad = 1300;
      }

      this.velocidad = this.palabras / (this.cronometro / 60);

      if (this.comprension * 10 >= this.requiere_comprension && this.velocidad >= this.requiere_velocidad) {
        this.currentUser.puntos += this.aumento_puntos;
        this.currentUser.avance_curso += 1;
        var data = new FormData();
        data.append('avance_curso', this.currentUser.avance_curso);
        data.append('puntos', this.currentUser.puntos);
        data.append('_method', 'PUT');
        axios.post('/updateUser', data).then(function (res) {});
      } else {
        this.currentUser.puntos -= this.disminucion_puntos;

        var _data = new FormData();

        _data.append('puntos', this.currentUser.puntos);

        _data.append('_method', 'PUT');

        axios.post('/updateUser', _data).then(function (res) {});
      }
    },
    guardarExam: function guardarExam() {
      var _this2 = this;

      if (this.saveExam.comprension >= this.requiere_comprension && this.velocidad >= this.requiere_velocidad) {
        var formData = new FormData();
        formData.append('exam_id', this.saveExam.exam_id);
        formData.append('user_id', this.saveExam.user_id);
        formData.append('ppm', this.saveExam.ppm);
        formData.append('comprension', this.saveExam.comprension);
        formData.append('tiempo', this.saveExam.tiempo);
        formData.append('estado', this.saveExam.estado);
        axios.post('/exam', formData).then(function (res) {
          _this2.muestra_exam = 4;
          _this2.mensaje_comprension = 'Aprobaste el examen';
          _this2.mensaje_puntos = '+ ' + _this2.aumento_puntos;
        });
      } else {
        this.muestra_exam = 4;
        this.mensaje_comprension = 'No aprobaste el examen';
        this.mensaje_puntos = '- ' + this.disminucion_puntos;
      }
    },
    siguiente: function siguiente(pregunta) {
      if (pregunta.esCorrecto == this.picked) {
        this.comprension++;
      }

      this.picked = "";
      this.contador++;

      if (this.contador == 10) {
        this.muestra_exam = 3;
        this.actualizar_usuario();
      }
    },
    next: function next() {
      this.step++;

      if (this.step == 2) {
        document.getElementById('pass2').classList.add("animated", "bounceInRight", "fast");
        document.getElementById('paso2').classList.add("active");
      }

      if (this.step == 3) {
        document.getElementById('pass3').classList.add("animated", "bounceInRight", "fast");
        document.getElementById('paso3').classList.add("active");
      }

      if (this.step == 4) {
        this.myTime = setInterval(this.myTimer, 1000);
        this.muestra_exam = 1;
      }
    },
    mostrarPreguntas: function mostrarPreguntas() {
      this.muestra_exam = 2;
      this.contarPalabras();
      this.stopTiempo();
    },
    contarPalabras: function contarPalabras() {
      var textArea = document.getElementById("area").value;
      this.palabras = textArea.match(/[^\s]+/g).length;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DarExamen.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DarExamen.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*************----RADIO BUTON----***********/\n.radioContainer{\n\tdisplay: inline-block;\n\tposition: relative;\n\tcursor: pointer;\n\tfont-family: sans-serif;\n\tfont-size: 22px;\n\tpadding-left: 30px;\n}\n.radioContainer input{\n\tdisplay: none;\n}\n.radioContainer .circle{\n\tdisplay: inline-block;\n\twidth: 25px;\n\theight: 25px;\n\tbackground-color: #eee;\n\tposition: absolute;\n\tleft: 0; top: 0;\n\tborder-radius: 50%;\n}\n.radioContainer:hover .circle{\n\tbackground-color: #ccc;\n}\n.radioContainer input:checked + .circle{\n\tbackground-color: #2196fc;\n}\n.radioContainer input:checked + .circle:after{\n\tcontent: \"\";\n\theight: 10px;\n\twidth: 10px;\n\tbackground-color: white;\n\tposition: absolute;\n\tborder-radius: 50%;\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n/***********-- PROGRESS- BAR --**************/\n#progressbar {\n\tmargin-bottom: 30px;\n\toverflow: hidden;\n\t/*CSS counters to number the steps*/\n\tcounter-reset: step;\n}\n#progressbar li {\n\tlist-style-type: none;\n\tcolor: black;\n\ttext-transform: uppercase;\n\tfont-size: 18px;\n\twidth: 33.33%;\n\tfloat: left;\n\tposition: relative;\n\ttext-align: center;\n}\n#progressbar li:before {\n\tcontent: counter(step);\n\tcounter-increment: step;\n\twidth: 40px;\n\tline-height: 40px;\n\tdisplay: block;\n\tfont-size: 18px;\n\tcolor: #333;\n\tbackground: white;\n\tborder-radius: 3px;\n\tmargin: 0 auto 5px auto;\n\ttext-align: center;\n}\n/*progressbar connectors*/\n#progressbar li:after {\n\tcontent: '';\n\twidth: 100%;\n\theight: 2px;\n\tbackground: white;\n\tposition: absolute;\n\tleft: -50%;\n\ttop: 20px;\n\tz-index: -1; /*put it behind the numbers*/\n}\n#progressbar li:first-child:after {\n\t/*connector not needed before the first step*/\n\tcontent: none;\n}\n/*marking active/completed steps green*/\n/*The number of the step and the connector before it = green*/\n#progressbar li.active:before,  #progressbar li.active:after{\n\tbackground: #15799e;\n\tcolor: white;\n}\n/* para el radio button*/\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DarExamen.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DarExamen.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DarExamen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DarExamen.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DarExamen.vue?vue&type=template&id=6a0db06e&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DarExamen.vue?vue&type=template&id=6a0db06e& ***!
  \*******************************************************************************************************************************************************************************************************/
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
                    staticClass: "btn btn-dark text-uppercase",
                    attrs: { to: "/curso" }
                  },
                  [_vm._v("\n\t\t\t\t\tRegresar\n\t\t\t\t")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.muestra_exam == 0,
                    expression: "muestra_exam==0"
                  }
                ]
              },
              [
                _c("div", { attrs: { id: "progressbar" } }, [
                  _c("li", { staticClass: "active", attrs: { id: "paso1" } }, [
                    _vm._v("Consejo 1")
                  ]),
                  _vm._v(" "),
                  _c("li", { attrs: { id: "paso2" } }, [_vm._v("Consejo 2")]),
                  _vm._v(" "),
                  _c("li", { attrs: { id: "paso3" } }, [_vm._v("Consejo 3")])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step == 1,
                        expression: "step==1"
                      }
                    ],
                    staticClass: "animated bounceInRight fast",
                    attrs: { id: "pass1" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "card col-md-9 m-auto shadow" },
                        [
                          _c("div", { staticClass: "card-body text-center" }, [
                            _c("div", { staticClass: "m-auto col-md-5" }, [
                              _c("img", {
                                attrs: {
                                  src: "/imagenes/logo.png",
                                  height: "180",
                                  width: "100%"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("h4", [
                              _vm._v("Hola, ¿Estas preparado para el examen?")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row my-4" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "btn btn-primary m-auto",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.next()
                                    }
                                  }
                                },
                                [_vm._v("Siguiente")]
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
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step == 2,
                        expression: "step==2"
                      }
                    ],
                    attrs: { id: "pass2" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "card col-md-9 m-auto shadow" },
                        [
                          _c("div", { staticClass: "card-body text-center" }, [
                            _c("div", { staticClass: "m-auto col-md-5" }, [
                              _c("img", {
                                attrs: {
                                  src: "/imagenes/imagen2.png",
                                  height: "180",
                                  width: "100%"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("h4", [
                              _vm._v("Te haremos preguntas cuando termines")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row my-4" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "btn btn-primary m-auto",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.next()
                                    }
                                  }
                                },
                                [_vm._v("Siguiente")]
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
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step == 3,
                        expression: "step==3"
                      }
                    ],
                    attrs: { id: "pass3" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "card col-md-9 m-auto shadow" },
                        [
                          _c("div", { staticClass: "card-body text-center" }, [
                            _c("div", { staticClass: "m-auto col-md-5" }, [
                              _c("img", {
                                attrs: {
                                  src: "/imagenes/cronometer.png",
                                  height: "180",
                                  width: "100%"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("h4", [
                              _vm._v("Estaremos cronometrando tu avance")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row my-4" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "btn btn-primary m-auto",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.next()
                                    }
                                  }
                                },
                                [_vm._v("Empezar\n\t\t\t\t\t\t\t\t\t")]
                              )
                            ])
                          ])
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
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.muestra_exam == 1,
                    expression: "muestra_exam==1"
                  }
                ]
              },
              [
                _c(
                  "div",
                  { staticClass: "card card-primary col-md-10 m-auto pt-2" },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("h3", { staticClass: "text-center" }, [
                        _c("b", [_vm._v(_vm._s(_vm.examen.name))])
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-justify lead" }, [
                        _vm._v(_vm._s(_vm.examen.content) + " ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "textarea",
                        { staticClass: "d-none", attrs: { id: "area" } },
                        [_vm._v(_vm._s(_vm.examen.content))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row my-3" }, [
                      _c(
                        "div",
                        {
                          staticClass: "btn btn-primary m-auto",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.mostrarPreguntas($event)
                            }
                          }
                        },
                        [_vm._v("\n\t\t\t\t\tTerminar examen")]
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.muestra_exam == 2,
                    expression: "muestra_exam==2"
                  }
                ]
              },
              [
                _c(
                  "div",
                  { staticClass: "card card-primary col-md-10 m-auto shadow" },
                  [
                    _c(
                      "div",
                      { staticClass: "card-body" },
                      [
                        _c("h3", { staticClass: "text-center text-danger" }, [
                          _vm._v("Las preguntas")
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _vm._l(_vm.examen.preguntas, function(pregunta, index) {
                          return _c("div", { key: index }, [
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: index == _vm.contador,
                                    expression: "index == contador"
                                  }
                                ]
                              },
                              [
                                _c(
                                  "h2",
                                  { staticClass: "text-warning pl-md-5" },
                                  [_vm._v(_vm._s(pregunta.enunciado))]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "ml-md-5" }, [
                                  _c(
                                    "label",
                                    { staticClass: "radioContainer" },
                                    [
                                      _vm._v(
                                        _vm._s(pregunta.respuestaA) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      ),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.picked,
                                            expression: "picked"
                                          }
                                        ],
                                        attrs: { type: "radio", name: "radio" },
                                        domProps: {
                                          value: pregunta.respuestaA,
                                          checked: _vm._q(
                                            _vm.picked,
                                            pregunta.respuestaA
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.picked = pregunta.respuestaA
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "circle" })
                                    ]
                                  ),
                                  _c("br"),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "radioContainer" },
                                    [
                                      _vm._v(
                                        _vm._s(pregunta.respuestaB) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      ),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.picked,
                                            expression: "picked"
                                          }
                                        ],
                                        attrs: { type: "radio", name: "radio" },
                                        domProps: {
                                          value: pregunta.respuestaB,
                                          checked: _vm._q(
                                            _vm.picked,
                                            pregunta.respuestaB
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.picked = pregunta.respuestaB
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "circle" })
                                    ]
                                  ),
                                  _c("br"),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "radioContainer" },
                                    [
                                      _vm._v(
                                        _vm._s(pregunta.respuestaC) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      ),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.picked,
                                            expression: "picked"
                                          }
                                        ],
                                        attrs: { type: "radio", name: "radio" },
                                        domProps: {
                                          value: pregunta.respuestaC,
                                          checked: _vm._q(
                                            _vm.picked,
                                            pregunta.respuestaC
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.picked = pregunta.respuestaC
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "circle" })
                                    ]
                                  ),
                                  _c("br"),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { staticClass: "radioContainer" },
                                    [
                                      _vm._v(
                                        _vm._s(pregunta.respuestaD) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      ),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.picked,
                                            expression: "picked"
                                          }
                                        ],
                                        attrs: { type: "radio", name: "radio" },
                                        domProps: {
                                          value: pregunta.respuestaD,
                                          checked: _vm._q(
                                            _vm.picked,
                                            pregunta.respuestaD
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.picked = pregunta.respuestaD
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "circle" })
                                    ]
                                  ),
                                  _c("br"),
                                  _c("br"),
                                  _vm._v(" "),
                                  _vm.picked != ""
                                    ? _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "btn btn-primary",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.siguiente(pregunta)
                                              }
                                            }
                                          },
                                          [_vm._v("Siguiente")]
                                        )
                                      ])
                                    : _c("div", [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "bg-primary text-white p-1 m-1"
                                          },
                                          [_vm._v("Selecciona un inciso")]
                                        )
                                      ])
                                ])
                              ]
                            )
                          ])
                        })
                      ],
                      2
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.muestra_exam == 3,
                    expression: "muestra_exam == 3"
                  }
                ]
              },
              [
                _c("div", { staticClass: "card col-md-10 shadow m-auto" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "m-auto col-8 text-center" }, [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.guardarExam($event)
                            }
                          }
                        },
                        [
                          _c("h3", { staticClass: "text-uppercase" }, [
                            _vm._v("Ver puntuaciones")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "m-auto col-md-7" }, [
                            _c("img", {
                              attrs: {
                                src: "/imagenes/relogarena.png",
                                height: "200",
                                width: "80%"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Mostrar Resultados")]
                          )
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
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.muestra_exam == 4,
                    expression: "muestra_exam == 4"
                  }
                ]
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "card card-primary col-md-8 col-sm-12 m-auto",
                    staticStyle: { "box-shadow": "2px 2px 10px #666" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "card-body" },
                      [
                        _c("h3", { staticClass: "text-center" }, [
                          _vm._v("Resultados")
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("div", { staticClass: "card border-primary" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c(
                              "h4",
                              {
                                staticClass: "text-center",
                                class: [
                                  _vm.comprension * 10 >=
                                    _vm.requiere_comprension &&
                                  _vm.palabras_x_minuto >=
                                    _vm.requiere_velocidad
                                    ? "text-primary"
                                    : "text-danger"
                                ]
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" +
                                    _vm._s(_vm.mensaje_comprension) +
                                    " "
                                ),
                                _c("br")
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.comprension * 10 < _vm.requiere_comprension ||
                        _vm.palabras_x_minuto < _vm.requiere_velocidad
                          ? _c("h5", { staticClass: "text-center" }, [
                              _c("span", [
                                _c("i", [
                                  _vm._v(
                                    "Se requiere una comprension mayor o igual a : "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b", [
                                  _vm._v(
                                    _vm._s(_vm.requiere_comprension) + " %"
                                  )
                                ]),
                                _c("br"),
                                _vm._v(" "),
                                _c("i", [
                                  _vm._v(
                                    "Se requiere una velocidad mayor o igual a : "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("b", [
                                  _vm._v(
                                    _vm._s(_vm.requiere_velocidad) + " ppm"
                                  )
                                ])
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v(
                            "Comprensión : " +
                              _vm._s(_vm.comprension * 10) +
                              " %"
                          )
                        ]),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v("Numero de palabras : " + _vm._s(_vm.palabras))
                        ]),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v(
                            "Palabras por minuto : " +
                              _vm._s(_vm.palabras_x_minuto)
                          )
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("Tiempo : " + _vm._s(_vm.result))]),
                        _vm._v(" "),
                        _c(
                          "h2",
                          {
                            staticClass: "text-center",
                            class: [
                              _vm.comprension * 10 >= _vm.requiere_comprension
                                ? "text-warning"
                                : "text-danger"
                            ]
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t" +
                                _vm._s(_vm.mensaje_puntos) +
                                " Pts."
                            ),
                            _c("br")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary m-auto btn-block",
                            attrs: { to: "/curso" }
                          },
                          [_vm._v("\n\t\t\t\t\t\tIr al Curso\n\t\t\t\t\t")]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary m-auto btn-block",
                            attrs: { to: { name: "home" } }
                          },
                          [_vm._v("\n\t\t\t\t\t\tIr al Inicio\n\t\t\t\t\t")]
                        )
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/DarExamen.vue":
/*!******************************************!*\
  !*** ./resources/js/views/DarExamen.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarExamen_vue_vue_type_template_id_6a0db06e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarExamen.vue?vue&type=template&id=6a0db06e& */ "./resources/js/views/DarExamen.vue?vue&type=template&id=6a0db06e&");
/* harmony import */ var _DarExamen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DarExamen.vue?vue&type=script&lang=js& */ "./resources/js/views/DarExamen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DarExamen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DarExamen.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/DarExamen.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DarExamen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DarExamen_vue_vue_type_template_id_6a0db06e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DarExamen_vue_vue_type_template_id_6a0db06e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DarExamen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DarExamen.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/DarExamen.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DarExamen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DarExamen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DarExamen.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/DarExamen.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./DarExamen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DarExamen.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/DarExamen.vue?vue&type=template&id=6a0db06e&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/DarExamen.vue?vue&type=template&id=6a0db06e& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_template_id_6a0db06e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DarExamen.vue?vue&type=template&id=6a0db06e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DarExamen.vue?vue&type=template&id=6a0db06e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_template_id_6a0db06e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarExamen_vue_vue_type_template_id_6a0db06e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);