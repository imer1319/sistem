(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/preguntaComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/preguntaComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    this.mostrarPregunta();
    _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('add-pregunta', function (data) {
      _this.preguntas.push(data);
    });
  },
  data: function data() {
    return {
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
      fillpregunta: {
        enunciado: '',
        examen_id: '',
        respuestaA: '',
        respuestaB: '',
        respuestaC: '',
        respuestaD: '',
        esCorrecto: ''
      },
      loading: true,
      paginate: ['preguntas'],
      options: [{
        value: 'A'
      }, {
        value: 'B'
      }, {
        value: 'C'
      }, {
        value: 'D'
      }],
      contador: 0
    };
  },
  methods: {
    mostrarPregunta: function mostrarPregunta() {
      var _this2 = this;

      var url = "/pregunta/" + this.$route.params.id;
      axios.get(url).then(function (res) {
        _this2.preguntas = res.data;
        _this2.loading = false;
        _this2.contador = _this2.preguntas.length;
      });
    },
    crearPregunta: function crearPregunta() {
      $('#createPregunta').modal('show');
    },
    validarEspacios: function validarEspacios(parametro) {
      var patron = /^\s+$/;

      if (patron.test(parametro)) {
        return false;
      } else {
        return true;
      }
    },
    agregarPregunta: function agregarPregunta() {
      var _this3 = this;

      if (this.validarEspacios(this.pregunta.enunciado) == false || this.validarEspacios(this.pregunta.respuestaA) == false || this.validarEspacios(this.pregunta.respuestaB) == false || this.validarEspacios(this.pregunta.respuestaC) == false || this.validarEspacios(this.pregunta.respuestaD) == false || this.validarEspacios(this.pregunta.esCorrecto) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var formData = new FormData();
        formData.append('enunciado', this.pregunta.enunciado);
        formData.append('exam_id', this.$route.params.id);
        formData.append('respuestaA', this.pregunta.respuestaA);
        formData.append('respuestaB', this.pregunta.respuestaB);
        formData.append('respuestaC', this.pregunta.respuestaC);
        formData.append('respuestaD', this.pregunta.respuestaD);

        if (this.pregunta.esCorrecto == "A") {
          formData.append('esCorrecto', this.pregunta.respuestaA);
        }

        if (this.pregunta.esCorrecto == "B") {
          formData.append('esCorrecto', this.pregunta.respuestaB);
        }

        if (this.pregunta.esCorrecto == "C") {
          formData.append('esCorrecto', this.pregunta.respuestaC);
        }

        if (this.pregunta.esCorrecto == "D") {
          formData.append('esCorrecto', this.pregunta.respuestaD);
        }

        axios.post('/pregunta', formData).then(function (res) {
          _event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('add-pregunta', res.data.pregunta);
          _this3.pregunta.enunciado = "";
          _this3.pregunta.respuestaA = "";
          _this3.pregunta.respuestaB = "";
          _this3.pregunta.respuestaC = "";
          _this3.pregunta.respuestaD = "";
          _this3.pregunta.esCorrecto = "";

          _this3.mostrarPregunta();

          $('#createPregunta').modal('hide');
        });
      }
    },
    confirmarDelete: function confirmarDelete() {
      var resp = confirm("Estas seguro que deseas eliminarlo?");

      if (resp == true) {
        return true;
      } else {
        return false;
      }
    },
    eliminarPregunta: function eliminarPregunta(pregunta, index) {
      var _this4 = this;

      if (this.confirmarDelete() == true) {
        axios["delete"]("/pregunta/".concat(pregunta.id)).then(function () {
          _this4.preguntas.splice(index, 1);
        });
      }
    },
    editarPregunta: function editarPregunta(pregunta) {
      this.fillpregunta.id = pregunta.id;
      this.fillpregunta.enunciado = pregunta.enunciado;
      this.fillpregunta.exam_id = this.$route.params.id;
      this.fillpregunta.respuestaA = pregunta.respuestaA;
      this.fillpregunta.respuestaB = pregunta.respuestaB;
      this.fillpregunta.respuestaC = pregunta.respuestaC;
      this.fillpregunta.respuestaD = pregunta.respuestaD;
      this.fillpregunta.esCorrecto = pregunta.esCorrecto;
      $('#editarPregunta').modal('show');
    },
    updatePregunta: function updatePregunta(fillpregunta) {
      var _this5 = this;

      if (this.validarEspacios(this.fillpregunta.enunciado) == false || this.validarEspacios(this.fillpregunta.respuestaA) == false || this.validarEspacios(this.fillpregunta.respuestaB) == false || this.validarEspacios(this.fillpregunta.respuestaC) == false || this.validarEspacios(this.fillpregunta.respuestaD) == false || this.validarEspacios(this.fillpregunta.esCorrecto) == false) {
        alert("los campos no pueden estar vacios");
      } else {
        var data = new FormData();
        data.append('enunciado', this.fillpregunta.enunciado);
        data.append('exam_id', this.fillpregunta.exam_id);
        data.append('respuestaA', this.fillpregunta.respuestaA);
        data.append('respuestaB', this.fillpregunta.respuestaB);
        data.append('respuestaC', this.fillpregunta.respuestaC);
        data.append('respuestaD', this.fillpregunta.respuestaD);
        data.append('esCorrecto', this.fillpregunta.esCorrecto);

        if (this.fillpregunta.esCorrecto == "A") {
          data.append('esCorrecto', this.fillpregunta.respuestaA);
        }

        if (this.fillpregunta.esCorrecto == "B") {
          data.append('esCorrecto', this.fillpregunta.respuestaB);
        }

        if (this.fillpregunta.esCorrecto == "C") {
          data.append('esCorrecto', this.fillpregunta.respuestaC);
        }

        if (this.fillpregunta.esCorrecto == "D") {
          data.append('esCorrecto', this.fillpregunta.respuestaD);
        }

        data.append('_method', 'PUT');
        var url = "/pregunta/".concat(fillpregunta.id);
        axios.post(url, data).then(function (res) {
          _this5.mostrarPregunta();

          $('#editarPregunta').modal('hide');
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/showExamenComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/showExamenComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var _examens_preguntaComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../examens/preguntaComponent.vue */ "./resources/js/components/examens/preguntaComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    pregunta: _examens_preguntaComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.showExamen();
  },
  data: function data() {
    return {
      examen: {},
      loading: true,
      palabras: ''
    };
  },
  methods: {
    showExamen: function showExamen() {
      var _this = this;

      var url = this.$route.params.id;
      axios.get(url).then(function (res) {
        _this.examen = res.data;
        _this.loading = false;

        _this.loadDoc();
      });
    },
    loadDoc: function loadDoc() {
      var url = "/examenes/" + this.examen.content;
      ;
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("test").innerHTML = this.responseText;
        }
      };

      xhttp.open("GET", url, true);
      xhttp.send();
    },
    contarPalabras: function contarPalabras() {
      var textArea = document.getElementById("test").value;
      this.palabras = textArea.match(/[^\s]+/g).length;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/preguntaComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/preguntaComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.color-letra, .color-letra:hover{\r\n\tcolor: white;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/showExamenComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/showExamenComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.profile-user-img {\n\theight: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/preguntaComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/preguntaComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./preguntaComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/preguntaComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/showExamenComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/showExamenComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./showExamenComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/showExamenComponent.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/preguntaComponent.vue?vue&type=template&id=6aca0154&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/preguntaComponent.vue?vue&type=template&id=6aca0154& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            return _vm.agregarPregunta($event)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "createPregunta" } },
          [
            _c("div", { staticClass: "modal-dialog" }, [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body pb-0" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("Enunciado")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pregunta.enunciado,
                            expression: "pregunta.enunciado"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nombre de la pregunta",
                          required: ""
                        },
                        domProps: { value: _vm.pregunta.enunciado },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pregunta,
                              "enunciado",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("RespuestaA")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pregunta.respuestaA,
                            expression: "pregunta.respuestaA"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nombre de la pregunta",
                          required: ""
                        },
                        domProps: { value: _vm.pregunta.respuestaA },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pregunta,
                              "respuestaA",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("RespuestaB")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pregunta.respuestaB,
                            expression: "pregunta.respuestaB"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nombre de la pregunta",
                          required: ""
                        },
                        domProps: { value: _vm.pregunta.respuestaB },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pregunta,
                              "respuestaB",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("RespuestaC")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pregunta.respuestaC,
                            expression: "pregunta.respuestaC"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nombre de la pregunta",
                          required: ""
                        },
                        domProps: { value: _vm.pregunta.respuestaC },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pregunta,
                              "respuestaC",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("RespuestaD")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pregunta.respuestaD,
                            expression: "pregunta.respuestaD"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nombre de la pregunta",
                          required: ""
                        },
                        domProps: { value: _vm.pregunta.respuestaD },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pregunta,
                              "respuestaD",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("Correcta")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.pregunta.esCorrecto,
                              expression: "pregunta.esCorrecto"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.pregunta,
                                "esCorrecto",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("Seleccione un elemento")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.options, function(option) {
                            return _c(
                              "option",
                              { domProps: { value: option.value } },
                              [_vm._v(_vm._s(option.value))]
                            )
                          })
                        ],
                        2
                      )
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
            return _vm.updatePregunta(_vm.fillpregunta)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal fade", attrs: { id: "editarPregunta" } },
          [
            _c("div", { staticClass: "modal-dialog" }, [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body pb-0" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("Enunciado")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fillpregunta.enunciado,
                            expression: "fillpregunta.enunciado"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.fillpregunta.enunciado },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillpregunta,
                              "enunciado",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("RespuestaA")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fillpregunta.respuestaA,
                            expression: "fillpregunta.respuestaA"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.fillpregunta.respuestaA },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillpregunta,
                              "respuestaA",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("RespuestaB")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fillpregunta.respuestaB,
                            expression: "fillpregunta.respuestaB"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.fillpregunta.respuestaB },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillpregunta,
                              "respuestaB",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("RespuestaC")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fillpregunta.respuestaC,
                            expression: "fillpregunta.respuestaC"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.fillpregunta.respuestaC },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillpregunta,
                              "respuestaC",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("RespuestaD")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fillpregunta.respuestaD,
                            expression: "fillpregunta.respuestaD"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.fillpregunta.respuestaD },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fillpregunta,
                              "respuestaD",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-form-label col-md-2" }, [
                      _vm._v("Correcta")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-10" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fillpregunta.esCorrecto,
                              expression: "fillpregunta.esCorrecto"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.fillpregunta,
                                "esCorrecto",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("Seleccione un elemento")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.options, function(option) {
                            return _c(
                              "option",
                              { domProps: { value: option.value } },
                              [_vm._v(_vm._s(option.value))]
                            )
                          })
                        ],
                        2
                      )
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
          _c("h3", { staticClass: "card-title" }, [
            _vm._v("Preguntas "),
            _c("span", [_vm._v(_vm._s(_vm.contador))]),
            _vm._v(" de 10")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.crearPregunta()
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
                  { attrs: { name: "preguntas", list: _vm.preguntas, per: 5 } },
                  [
                    _c(
                      "table",
                      {
                        staticClass: "table table-bordered table-striped py-5"
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("ID")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Enunciado")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Respuestas")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Correcto")]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Acciones")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.paginated("preguntas"), function(
                            pregunta,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { width: "10px" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(pregunta.enunciado))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", [_c("b", [_vm._v("A) ")])]),
                                _vm._v(_vm._s(pregunta.respuestaA)),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", [_c("b", [_vm._v("B) ")])]),
                                _vm._v(_vm._s(pregunta.respuestaB)),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", [_c("b", [_vm._v("C) ")])]),
                                _vm._v(_vm._s(pregunta.respuestaC)),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", [_c("b", [_vm._v("D) ")])]),
                                _vm._v(_vm._s(pregunta.respuestaD)),
                                _c("br")
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(pregunta.esCorrecto))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass: "float-right",
                                  attrs: { colspan: "3" }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-warning color-letra",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.editarPregunta(pregunta)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-pencil-alt"
                                      }),
                                      _vm._v(" Editar")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-danger color-letra",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.eliminarPregunta(
                                            pregunta,
                                            index
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-trash-alt"
                                      }),
                                      _vm._v(" Eliminar")
                                    ]
                                  )
                                ]
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
                    for: "preguntas",
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
      _c("h4", [_vm._v("Editar Preguntas")]),
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
              value: "Actualizar registro"
            }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/showExamenComponent.vue?vue&type=template&id=2a76410e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/examens/showExamenComponent.vue?vue&type=template&id=2a76410e& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-6" }, [
      _c(
        "div",
        { staticClass: "card card-primary card-outline" },
        [
          _vm.loading
            ? _c("spinner")
            : _c("div", { staticClass: "card-body box-profile" }, [
                _c("div", { staticClass: "text-center" }, [
                  _c("img", {
                    staticClass:
                      "profile-user-img img-fluid img-circle img-responsive",
                    attrs: { src: "/imagenes/examen/" + _vm.examen.icon }
                  })
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "profile-username text-center" }, [
                  _vm._v(_vm._s(_vm.examen.name))
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("p", { staticClass: "text-justify", attrs: { id: "test" } })
              ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-lg-12" }, [_c("pregunta")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/examens/preguntaComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/examens/preguntaComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preguntaComponent_vue_vue_type_template_id_6aca0154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preguntaComponent.vue?vue&type=template&id=6aca0154& */ "./resources/js/components/examens/preguntaComponent.vue?vue&type=template&id=6aca0154&");
/* harmony import */ var _preguntaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preguntaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/examens/preguntaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _preguntaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preguntaComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/examens/preguntaComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _preguntaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _preguntaComponent_vue_vue_type_template_id_6aca0154___WEBPACK_IMPORTED_MODULE_0__["render"],
  _preguntaComponent_vue_vue_type_template_id_6aca0154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/examens/preguntaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/examens/preguntaComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/examens/preguntaComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./preguntaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/preguntaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/examens/preguntaComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/examens/preguntaComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./preguntaComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/preguntaComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/examens/preguntaComponent.vue?vue&type=template&id=6aca0154&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/examens/preguntaComponent.vue?vue&type=template&id=6aca0154& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_template_id_6aca0154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./preguntaComponent.vue?vue&type=template&id=6aca0154& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/preguntaComponent.vue?vue&type=template&id=6aca0154&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_template_id_6aca0154___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_preguntaComponent_vue_vue_type_template_id_6aca0154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/examens/showExamenComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/examens/showExamenComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showExamenComponent_vue_vue_type_template_id_2a76410e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showExamenComponent.vue?vue&type=template&id=2a76410e& */ "./resources/js/components/examens/showExamenComponent.vue?vue&type=template&id=2a76410e&");
/* harmony import */ var _showExamenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showExamenComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/examens/showExamenComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _showExamenComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showExamenComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/examens/showExamenComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _showExamenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showExamenComponent_vue_vue_type_template_id_2a76410e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showExamenComponent_vue_vue_type_template_id_2a76410e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/examens/showExamenComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/examens/showExamenComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/examens/showExamenComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./showExamenComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/showExamenComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/examens/showExamenComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/examens/showExamenComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./showExamenComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/showExamenComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/examens/showExamenComponent.vue?vue&type=template&id=2a76410e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/examens/showExamenComponent.vue?vue&type=template&id=2a76410e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_template_id_2a76410e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./showExamenComponent.vue?vue&type=template&id=2a76410e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/examens/showExamenComponent.vue?vue&type=template&id=2a76410e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_template_id_2a76410e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showExamenComponent_vue_vue_type_template_id_2a76410e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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