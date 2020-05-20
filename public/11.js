(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.obtener_datos_usuario();
  },
  data: function data() {
    return {
      selected_A: 'letras',
      selected_B: 'facil',
      consonantes: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'Ñ', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
      vocales: ['A', 'E', 'I', 'O', 'U'],
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      palabras_facil: ['alfa', 'algo', 'alto', 'alma', 'antes', 'balsa', 'banco', 'baño', 'barco', 'bello', 'beso', 'blusa', 'boca', 'cada', 'cama', 'caña', 'casa', 'casi', 'caso', 'claro', 'coco', 'coma', 'como', 'decir', 'dejar', 'desde', 'entrar', 'foca', 'foco', 'gente', 'hablar', 'hacer', 'hasta', 'lana', 'lápiz', 'leche', 'lento', 'leña', 'manco', 'mano', 'mayor', 'mejor', 'menos', 'mesa', 'nada', 'nadar', 'nena', 'nicho', 'niño', 'plomo', 'plata', 'pleno', 'padre', 'palco', 'para'],
      palabras_media: ['comida', 'conocer', 'camello', 'corbata', 'corneta', 'cornisa', 'cortina', 'cuchilla', 'cursillo', 'docente', 'domingo', 'doncella', 'dormido', 'durante', 'escriba', 'escribir', 'espada', 'espalda', 'espeso', 'establo', 'estaca', 'estado', 'estaño', 'explicar', 'exprimir', 'hispano', 'interés', 'libreta', 'marrano', 'mercado', 'ministro', 'momento', 'nosotros', 'número', 'presentar', 'primero', 'problema', 'proceso', 'proclamar', 'proclamó', 'producir', 'programa', 'proyecto', 'público', 'pupitre', 'recordar', 'relación', 'sonata', 'sonido', 'soñado', 'soplado', 'soplete', 'sujeto', 'torero', 'tornado', 'torcidos', 'tormento', 'trabajar', 'trabajo', 'víbora', 'zapato'],
      palabras_avanzada: ['absorbente', 'banderola', 'bañadera', 'barandilla', 'barbaridad', 'barbarismo', 'barítono', 'barredora', 'benévola', 'benévolo', 'bolígrafo', 'cartílago', 'celebrado', 'centígrado', 'cerebelo', 'colateral', 'comparecer', 'comunero', 'condenarlo', 'configurar', 'contenedor', 'corpúsculo', 'crepúsculo', 'derogado', 'desabrido', 'desarmado', 'desatrancar', 'descarnado', 'descentrado', 'desinfectar', 'desistido', 'fantástico', 'favorito', 'ganadero', 'generoso', 'intimidar', 'kilómetro', 'minúsculo', 'monigote', 'ordenador', 'platónico', 'putrefacto', 'simbólico', 'tranquilidad'],
      interval_letra: null,
      contador_facil: 30,
      contador_normal: 30,
      contador_dificil: 30,
      perfil_usuario: {}
    };
  },
  methods: {
    obtener_datos_usuario: function obtener_datos_usuario() {
      var _this = this;

      axios.get("/profile").then(function (res) {
        _this.perfil_usuario = res.data;
      });
    },
    actualizarDatos: function actualizarDatos() {
      var _this2 = this;

      var data = new FormData();
      data.append('puntos', this.perfil_usuario.puntos + 7);
      data.append('_method', 'PUT');
      var url = "/profile/".concat(this.perfil_usuario.id);
      axios.post(url, data).then(function (res) {
        _this2.$router.push('home');
      });
    },
    empezar: function empezar() {
      if (this.selected_A == 'letras') {
        switch (this.selected_B) {
          case 'facil':
            document.getElementById("separar").style.width = '150px';
            this.interval_letra = setInterval(this.interval_consonantes_facil, 1000);
            break;

          case 'normal':
            document.getElementById("separar").style.width = '200px';
            this.interval_letra = setInterval(this.interval_consonantes_normal, 1000);
            break;

          case 'avanzado':
            document.getElementById("separar").style.width = '250px';
            this.interval_letra = setInterval(this.interval_consonantes_avanzado, 1000);
            break;
        }
      }

      if (this.selected_A == 'numeros') {
        switch (this.selected_B) {
          case 'facil':
            document.getElementById("separar").style.width = '150px';
            this.interval_letra = setInterval(this.interval_numeros_facil, 1000);
            break;

          case 'normal':
            document.getElementById("separar").style.width = '200px';
            this.interval_letra = setInterval(this.interval_numeros_normal, 1000);
            break;

          case 'avanzado':
            document.getElementById("separar").style.width = '250px';
            this.interval_letra = setInterval(this.interval_numeros_avanzado, 1000);
            break;
        }
      }

      if (this.selected_A == 'palabras') {
        switch (this.selected_B) {
          case 'facil':
            document.getElementById("separar").style.display = 'none';
            this.interval_letra = setInterval(this.interval_palabras_facil, 1000);
            break;

          case 'normal':
            document.getElementById("separar").style.display = 'none';
            this.interval_letra = setInterval(this.interval_palabras_normal, 1000);
            break;

          case 'avanzado':
            document.getElementById("separar").style.display = 'none';
            this.interval_letra = setInterval(this.interval_palabras_dificil, 1000);
            break;
        }
      }
    },
    interval_consonantes_facil: function interval_consonantes_facil() {
      var conso = document.getElementById("letra1");
      var vocal = document.getElementById("letra2");
      var rand1 = Math.floor(Math.random() * this.consonantes.length);
      var rand2 = Math.floor(Math.random() * this.vocales.length);
      conso.innerHTML = this.consonantes[rand1];
      vocal.innerHTML = this.vocales[rand2];
      this.contador_facil--;

      if (this.contador_facil <= 0) {
        clearInterval(this.interval_letra);
        this.interval_letra = null;
        document.getElementById("primera-vista").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
      }
    },
    interval_consonantes_normal: function interval_consonantes_normal() {
      var conso = document.getElementById("letra1");
      var vocal = document.getElementById("letra2");
      var rand1 = Math.floor(Math.random() * this.consonantes.length);
      var rand2 = Math.floor(Math.random() * this.vocales.length);
      conso.innerHTML = this.consonantes[rand1];
      vocal.innerHTML = this.vocales[rand2];
      this.contador_normal--;

      if (this.contador_normal <= 0) {
        clearInterval(this.interval_letra);
        this.interval_letra = null;
        document.getElementById("primera-vista").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
      }
    },
    interval_consonantes_avanzado: function interval_consonantes_avanzado() {
      var conso = document.getElementById("letra1");
      var vocal = document.getElementById("letra2");
      var rand1 = Math.floor(Math.random() * this.consonantes.length);
      var rand2 = Math.floor(Math.random() * this.vocales.length);
      conso.innerHTML = this.consonantes[rand1];
      vocal.innerHTML = this.vocales[rand2];
      this.contador_dificil--;

      if (this.contador_dificil <= 0) {
        clearInterval(this.interval_letra);
        this.interval_letra = null;
        document.getElementById("primera-vista").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
      }
    },
    interval_numeros_facil: function interval_numeros_facil() {
      var conso = document.getElementById("letra1");
      var vocal = document.getElementById("letra2");
      var rand1 = Math.floor(Math.random() * this.numeros.length);
      var rand2 = Math.floor(Math.random() * this.numeros.length);
      conso.innerHTML = this.numeros[rand1];
      vocal.innerHTML = this.numeros[rand2];
      this.contador_facil--;

      if (this.contador_facil <= 0) {
        clearInterval(this.interval_letra);
        this.interval_letra = null;
        document.getElementById("primera-vista").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
      }
    },
    interval_numeros_normal: function interval_numeros_normal() {
      var conso = document.getElementById("letra1");
      var vocal = document.getElementById("letra2");
      var rand1 = Math.floor(Math.random() * this.numeros.length);
      var rand2 = Math.floor(Math.random() * this.numeros.length);
      conso.innerHTML = this.numeros[rand1];
      vocal.innerHTML = this.numeros[rand2];
      this.contador_normal--;

      if (this.contador_normal <= 0) {
        clearInterval(this.interval_letra);
        this.interval_letra = null;
        document.getElementById("primera-vista").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
      }
    },
    interval_numeros_avanzado: function interval_numeros_avanzado() {
      var conso = document.getElementById("letra1");
      var vocal = document.getElementById("letra2");
      var rand1 = Math.floor(Math.random() * this.numeros.length);
      var rand2 = Math.floor(Math.random() * this.numeros.length);
      conso.innerHTML = this.numeros[rand1];
      vocal.innerHTML = this.numeros[rand2];
      this.contador_dificil--;

      if (this.contador_dificil <= 0) {
        clearInterval(this.interval_letra);
        this.interval_letra = null;
        document.getElementById("primera-vista").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
      }
    },
    interval_palabras_facil: function interval_palabras_facil() {
      var rand2 = Math.floor(Math.random() * this.palabras_facil.length);
      conso.innerHTML = this.palabras_facil[rand2];
      this.contador_facil--;

      if (this.contador_facil <= 0) {
        clearInterval(this.interval_letra);
        this.interval_letra = null;
        document.getElementById("primera-vista").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
      }
    },
    interval_palabras_normal: function interval_palabras_normal() {
      var conso = document.getElementById("letra1");
      var rand2 = Math.floor(Math.random() * this.palabras_media.length);
      conso.innerHTML = this.palabras_media[rand2];
      this.contador_normal--;

      if (this.contador_normal <= 0) {
        clearInterval(this.interval_letra);
        this.interval_letra = null;
        document.getElementById("primera-vista").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
      }
    },
    interval_palabras_dificil: function interval_palabras_dificil() {
      var conso = document.getElementById("letra1");
      var rand2 = Math.floor(Math.random() * this.palabras_avanzada.length);
      conso.innerHTML = this.palabras_avanzada[rand2];
      this.contador_dificil--;

      if (this.contador_dificil <= 0) {
        clearInterval(this.interval_letra);
        this.interval_letra = null;
        document.getElementById("primera-vista").style.display = 'none';
        document.getElementById("segunda-vista").style.display = 'flex';
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval_letra);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#segunda-vista{\r\n\tdisplay: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./1-parpadeo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=template&id=804b81a0&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=template&id=804b81a0& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { attrs: { id: "primera-vista" } }, [
      _c("div", { staticClass: "row m-auto" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selected_A,
                  expression: "selected_A"
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
                  _vm.selected_A = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", [_vm._v("letras")]),
              _vm._v(" "),
              _c("option", [_vm._v("numeros")]),
              _vm._v(" "),
              _c("option", [_vm._v("palabras")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selected_B,
                  expression: "selected_B"
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
                  _vm.selected_B = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", [_vm._v("facil")]),
              _vm._v(" "),
              _c("option", [_vm._v("normal")]),
              _vm._v(" "),
              _c("option", [_vm._v("avanzado")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "div",
            {
              staticClass: "btn btn-primary",
              on: {
                click: function($event) {
                  return _vm.empezar()
                }
              }
            },
            [_vm._v("Empezar")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "segunda-vista" } }, [
      _c("div", { staticClass: "card animated bounceInRight" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "col-8 m-auto text-center" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.actualizarDatos()
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
                    width: "40%"
                  }
                }),
                _vm._v(" "),
                _vm._m(1),
                _c("hr"),
                _vm._v(" "),
                _c("input", {
                  staticClass: "btn btn-primary btn-block btn-lg",
                  attrs: { type: "submit", value: "Volver al inicio" }
                })
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-1 contenedores mt-4" }, [
      _c("div", { staticClass: "fuente", attrs: { id: "letra1" } }),
      _vm._v(" "),
      _c("div", { staticClass: "separador", attrs: { id: "separar" } }),
      _vm._v(" "),
      _c("div", { staticClass: "fuente", attrs: { id: "letra2" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [_vm._v("Aumento: "), _c("b", [_vm._v("+")]), _vm._v(" 7")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/users/ejercicios/1-parpadeo.vue":
/*!******************************************************!*\
  !*** ./resources/js/users/ejercicios/1-parpadeo.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_parpadeo_vue_vue_type_template_id_804b81a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1-parpadeo.vue?vue&type=template&id=804b81a0& */ "./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=template&id=804b81a0&");
/* harmony import */ var _1_parpadeo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1-parpadeo.vue?vue&type=script&lang=js& */ "./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _1_parpadeo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./1-parpadeo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _1_parpadeo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _1_parpadeo_vue_vue_type_template_id_804b81a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _1_parpadeo_vue_vue_type_template_id_804b81a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/ejercicios/1-parpadeo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./1-parpadeo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./1-parpadeo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=template&id=804b81a0&":
/*!*************************************************************************************!*\
  !*** ./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=template&id=804b81a0& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_template_id_804b81a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./1-parpadeo.vue?vue&type=template&id=804b81a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/ejercicios/1-parpadeo.vue?vue&type=template&id=804b81a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_template_id_804b81a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_1_parpadeo_vue_vue_type_template_id_804b81a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);