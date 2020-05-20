(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/exam/show-exam.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/exam/show-exam.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.showExamen();
    this.showUser();
    this.mostrarPregunta();
    this.examen_dado_resp();
  },
  data: function data() {
    return {
      usuario: {},
      imagenes: {
        imagen1: '../imagenes/logo.png',
        imagen2: '../imagenes/imagen2.png',
        imagen3: '../imagenes/cronometer.png',
        imagen4: '../imagenes/relogarena.png'
      },
      step: 1,
      muestra_exam: 0,
      examen: {},
      preguntas: [],
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
      mensaje: 'Selecciona un inciso',
      examen_dado: {},
      loading: true,
      vista: 0,
      aumento_curso: 0,
      aumento_puntos: 0,
      disminucion_puntos: 0,
      requiere_comprension: 0,
      requiere_velocidad: 0,
      mensaje_comprension: '',
      mensaje_puntos: '',
      url_examen: 0,
      examen_preview: {}
    };
  },
  methods: {
    obtenerFecha: function obtenerFecha(fecha) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(fecha).fromNow();
    },
    showUser: function showUser() {
      var _this = this;

      var url = "/profile";
      axios.get(url).then(function (res) {
        _this.usuario = res.data;
        _this.loading = false;

        if (_this.usuario.avance_curso == 12 || _this.usuario.avance_curso == 25 || _this.usuario.avance_curso == 28) {
          _this.examen_anterior();
        }
      });
    },
    examen_anterior: function examen_anterior() {
      var _this2 = this;

      if (this.usuario.avance_curso == 12) {
        this.url_examen = 1;
      }

      if (this.usuario.avance_curso == 25) {
        this.url_examen = 12;
      }

      if (this.usuario.avance_curso == 28) {
        this.url_examen = 25;
      }

      var url = '/examendado/' + this.url_examen;
      axios.get(url).then(function (res) {
        _this2.examen_preview = res.data;
      });
    },
    examen_dado_resp: function examen_dado_resp() {
      var _this3 = this;

      var url = '/examendado/' + this.$route.params.id;
      axios.get(url).then(function (res) {
        _this3.examen_dado = res.data;
        _this3.loading = false;
        _this3.vista = _this3.examen_dado.estado;
      });
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
      this.saveExam.exam_id = this.$route.params.id;
      this.saveExam.user_id = this.usuario.id;
      this.saveExam.ppm = this.palabras / (this.cronometro / 60);
      this.saveExam.comprension = this.comprension * 10;
      this.saveExam.tiempo = this.cronometro;
      this.saveExam.estado = 1;

      if (this.usuario.avance_curso == 1) {
        this.aumento_puntos = 50;
        this.requiere_comprension = 30;
        this.disminucion_puntos = 10;
        this.requiere_velocidad = 0;
      }

      if (this.usuario.avance_curso == 12) {
        this.aumento_puntos = 200;
        this.requiere_comprension = 50;
        this.disminucion_puntos = 80;
        this.requiere_velocidad = this.examen_preview.ppm;
      }

      if (this.usuario.avance_curso == 25) {
        this.aumento_puntos = 400;
        this.requiere_comprension = 70;
        this.requiere_velocidad = this.examen_preview.ppm;
      }

      if (this.usuario.avance_curso == 28) {
        this.aumento_puntos = 700;
        this.requiere_comprension = 85;
        this.disminucion_puntos = 400;
        this.requiere_velocidad = this.examen_preview.ppm;
      }

      this.velocidad = this.palabras / (this.cronometro / 60);

      if (this.comprension * 10 >= this.requiere_comprension && this.velocidad >= this.requiere_velocidad) {
        this.usuario.puntos += this.aumento_puntos;
        this.usuario.avance_curso += 1;
        var data = new FormData();

        if (this.$route.params.id == 1) {
          data.append('ppm_inicial', this.saveExam.ppm);
          data.append('comprension_inicial', this.saveExam.comprension);
        }

        data.append('avance_curso', this.usuario.avance_curso);
        data.append('puntos', this.usuario.puntos);
        data.append('_method', 'PUT');
        var url = "/profile/".concat(this.usuario.id);
        axios.post(url, data).then(function (res) {});
      } else {
        this.usuario.puntos -= this.disminucion_puntos;

        var _data = new FormData();

        _data.append('puntos', this.usuario.puntos);

        _data.append('_method', 'PUT');

        var url = "/profile/".concat(this.usuario.id);
        axios.post(url, _data).then(function (res) {});
      }
    },
    guardarExam: function guardarExam() {
      var _this4 = this;

      if (this.saveExam.comprension >= this.requiere_comprension && this.velocidad >= this.requiere_velocidad) {
        var formData = new FormData();
        formData.append('exam_id', this.saveExam.exam_id);
        formData.append('user_id', this.saveExam.user_id);
        formData.append('ppm', this.saveExam.ppm);
        formData.append('comprension', this.saveExam.comprension);
        formData.append('tiempo', this.saveExam.tiempo);
        formData.append('estado', this.saveExam.estado);
        axios.post('/exam', formData).then(function (res) {
          _this4.muestra_exam = 4;
          _this4.mensaje_comprension = 'Aprobaste el examen';
          _this4.mensaje_puntos = '+ ' + _this4.aumento_puntos;
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
    mostrarPregunta: function mostrarPregunta() {
      var _this5 = this;

      var url = '/pregunta/' + this.$route.params.id;
      axios.get(url).then(function (res) {
        _this5.preguntas = res.data;
        _this5.loading = false;
      });
    },
    showExamen: function showExamen() {
      var _this6 = this;

      var url = this.$route.params.id;
      axios.get(url).then(function (res) {
        _this6.examen = res.data;

        _this6.leerDocumento();
      });
    },
    leerDocumento: function leerDocumento() {
      var url = "/examenes/" + this.examen.content;
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("test").innerHTML = this.responseText;
          document.getElementById("area").innerHTML = this.responseText;
        }
      };

      xhttp.open("GET", url, true);
      xhttp.send();
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/exam/show-exam.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/exam/show-exam.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*************----RADIO BUTON----***********/\n.radioContainer{\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-family: sans-serif;\r\n\tfont-size: 22px;\r\n\tpadding-left: 30px;\n}\n.radioContainer input{\r\n\tdisplay: none;\n}\n.radioContainer .circle{\r\n\tdisplay: inline-block;\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tbackground-color: #eee;\r\n\tposition: absolute;\r\n\tleft: 0; top: 0;\r\n\tborder-radius: 50%;\n}\n.radioContainer:hover .circle{\r\n\tbackground-color: #ccc;\n}\n.radioContainer input:checked + .circle{\r\n\tbackground-color: #2196fc;\n}\n.radioContainer input:checked + .circle:after{\r\n\tcontent: \"\";\r\n\theight: 10px;\r\n\twidth: 10px;\r\n\tbackground-color: white;\r\n\tposition: absolute;\r\n\tborder-radius: 50%;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\ttransform: translate(-50%, -50%);\n}\r\n/***********-- PROGRESS- BAR --**************/\n#progressbar {\r\n\tmargin-bottom: 30px;\r\n\toverflow: hidden;\r\n\t/*CSS counters to number the steps*/\r\n\tcounter-reset: step;\n}\n#progressbar li {\r\n\tlist-style-type: none;\r\n\tcolor: black;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 18px;\r\n\twidth: 33.33%;\r\n\tfloat: left;\r\n\tposition: relative;\r\n\ttext-align: center;\n}\n#progressbar li:before {\r\n\tcontent: counter(step);\r\n\tcounter-increment: step;\r\n\twidth: 40px;\r\n\tline-height: 40px;\r\n\tdisplay: block;\r\n\tfont-size: 18px;\r\n\tcolor: #333;\r\n\tbackground: white;\r\n\tborder-radius: 3px;\r\n\tmargin: 0 auto 5px auto;\r\n\ttext-align: center;\n}\r\n/*progressbar connectors*/\n#progressbar li:after {\r\n\tcontent: '';\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tbackground: white;\r\n\tposition: absolute;\r\n\tleft: -50%;\r\n\ttop: 20px;\r\n\tz-index: -1; /*put it behind the numbers*/\n}\n#progressbar li:first-child:after {\r\n\t/*connector not needed before the first step*/\r\n\tcontent: none;\n}\r\n/*marking active/completed steps green*/\r\n/*The number of the step and the connector before it = green*/\n#progressbar li.active:before,  #progressbar li.active:after{\r\n\tbackground: #15799e;\r\n\tcolor: white;\n}\r\n/* para el radio button*/\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/exam/show-exam.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/exam/show-exam.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./show-exam.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/exam/show-exam.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/exam/show-exam.vue?vue&type=template&id=0ddb6f38&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/exam/show-exam.vue?vue&type=template&id=0ddb6f38& ***!
  \************************************************************************************************************************************************************************************************************/
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
            _vm.vista == 1
              ? _c("div", [
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
                        [_vm._v("\n\t\t\t\t\t\tRegresar\n\t\t\t\t\t")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card col-12 col-md-7 m-auto" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("h3", { staticClass: "text-center text-danger" }, [
                        _vm._v("Este examen ya fue dado")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "h5",
                          { staticClass: "col-8 col-md-6 text-success" },
                          [
                            _c("i", { staticClass: "fab fa-accessible-icon" }),
                            _vm._v(" PPM")
                          ]
                        ),
                        _vm._v(" "),
                        _c("h5", { staticClass: "col-4 col-md-6" }, [
                          _vm._v(_vm._s(_vm.examen_dado.ppm))
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("h5", { staticClass: "col-8 col-md-6 text-info" }, [
                          _c("i", { staticClass: "fas fa-brain" }),
                          _vm._v(" Comprension")
                        ]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "col-4 col-md-6" }, [
                          _vm._v(_vm._s(_vm.examen_dado.comprension)),
                          _c("b", { staticClass: "h5" }, [_vm._v(" %")])
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c(
                          "h5",
                          { staticClass: "col-8 col-md-6 text-warning" },
                          [
                            _c("i", { staticClass: "far fa-clock" }),
                            _vm._v(" Tiempo")
                          ]
                        ),
                        _vm._v(" "),
                        _c("h5", { staticClass: "col-4 col-md-6" }, [
                          _vm._v(_vm._s(_vm.examen_dado.tiempo)),
                          _c("b", { staticClass: "h5" }, [_vm._v(" s")])
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c(
                          "h5",
                          { staticClass: "col-8 col-md-6 text-gray-dark" },
                          [
                            _c("i", { staticClass: "far fa-sun" }),
                            _vm._v(" Fecha")
                          ]
                        ),
                        _vm._v(" "),
                        _c("h5", { staticClass: "col-4 col-md-6" }, [
                          _vm._v(
                            _vm._s(_vm.obtenerFecha(_vm.examen_dado.created_at))
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.vista == null
              ? _c("div", [
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
                        [_vm._v("\n\t\t\t\t\t\tRegresar\n\t\t\t\t\t")]
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
                        _c(
                          "li",
                          { staticClass: "active", attrs: { id: "paso1" } },
                          [_vm._v("Consejo 1")]
                        ),
                        _vm._v(" "),
                        _c("li", { attrs: { id: "paso2" } }, [
                          _vm._v("Consejo 2")
                        ]),
                        _vm._v(" "),
                        _c("li", { attrs: { id: "paso3" } }, [
                          _vm._v("Consejo 3")
                        ])
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
                                _c(
                                  "div",
                                  { staticClass: "card-body text-center" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "m-auto col-md-5" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.imagenes.imagen1,
                                            height: "180",
                                            width: "100%"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("h4", [
                                      _vm._v(
                                        "Hola, ¿Estas preparado para el examen?"
                                      )
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
                                  ]
                                )
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
                                _c(
                                  "div",
                                  { staticClass: "card-body text-center" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "m-auto col-md-5" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.imagenes.imagen2,
                                            height: "180",
                                            width: "100%"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("h4", [
                                      _vm._v(
                                        "Te haremos preguntas cuando termines"
                                      )
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
                                  ]
                                )
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
                                _c(
                                  "div",
                                  { staticClass: "card-body text-center" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "m-auto col-md-5" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.imagenes.imagen3,
                                            height: "180",
                                            width: "100%"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("h4", [
                                      _vm._v(
                                        "Estaremos cronometrando tu avance"
                                      )
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
                                        [
                                          _vm._v(
                                            "Empezar\n\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ])
              : _vm._e(),
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
                      _c("p", {
                        staticClass: "text-justify",
                        attrs: { id: "test" }
                      }),
                      _vm._v(" "),
                      _c("textarea", {
                        staticStyle: { display: "none" },
                        attrs: { id: "area", COLS: "40", ROWS: "10" }
                      })
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
                              return _vm.mostrarPreguntas()
                            }
                          }
                        },
                        [_vm._v("Terminar")]
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
                        _vm._l(_vm.preguntas, function(pregunta, index) {
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
                                          "\n\t\t\t\t\t\t\t\t\t\t"
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
                                          "\n\t\t\t\t\t\t\t\t\t\t"
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
                                          "\n\t\t\t\t\t\t\t\t\t\t"
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
                                          "\n\t\t\t\t\t\t\t\t\t\t"
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
                                          [_vm._v(_vm._s(_vm.mensaje))]
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
                                src: _vm.imagenes.imagen4,
                                height: "200",
                                width: "80%"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "btn btn-primary",
                            attrs: {
                              type: "submit",
                              value: "Mostrar Resultados"
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
                                  _vm.requiere_comprension
                                    ? "text-primary"
                                    : "text-danger"
                                ]
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(_vm.mensaje_comprension) +
                                    " "
                                ),
                                _c("br")
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.comprension * 10 < _vm.requiere_comprension
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
                                ])
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v("Correctas : " + _vm._s(_vm.comprension))
                        ]),
                        _vm._v(" "),
                        _c("h4", [
                          _vm._v(
                            "Incorrectas : " + _vm._s(10 - _vm.comprension)
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
                              "\n\t\t\t\t\t\t\t" +
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
                          [_vm._v("\n\t\t\t\t\t\t\tIr al Curso\n\t\t\t\t\t\t")]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary m-auto btn-block",
                            attrs: { to: { name: "home" } }
                          },
                          [_vm._v("\n\t\t\t\t\t\t\tIr al Inicio\n\t\t\t\t\t\t")]
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

/***/ "./resources/js/users/exam/show-exam.vue":
/*!***********************************************!*\
  !*** ./resources/js/users/exam/show-exam.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_exam_vue_vue_type_template_id_0ddb6f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-exam.vue?vue&type=template&id=0ddb6f38& */ "./resources/js/users/exam/show-exam.vue?vue&type=template&id=0ddb6f38&");
/* harmony import */ var _show_exam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-exam.vue?vue&type=script&lang=js& */ "./resources/js/users/exam/show-exam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _show_exam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-exam.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/exam/show-exam.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_exam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_exam_vue_vue_type_template_id_0ddb6f38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_exam_vue_vue_type_template_id_0ddb6f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/exam/show-exam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/exam/show-exam.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/users/exam/show-exam.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./show-exam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/exam/show-exam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/exam/show-exam.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/users/exam/show-exam.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./show-exam.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/exam/show-exam.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/exam/show-exam.vue?vue&type=template&id=0ddb6f38&":
/*!******************************************************************************!*\
  !*** ./resources/js/users/exam/show-exam.vue?vue&type=template&id=0ddb6f38& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_template_id_0ddb6f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./show-exam.vue?vue&type=template&id=0ddb6f38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/exam/show-exam.vue?vue&type=template&id=0ddb6f38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_template_id_0ddb6f38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_exam_vue_vue_type_template_id_0ddb6f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);