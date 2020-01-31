(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1-schultz.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/1-schultz.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
    this.obtenerDatosUsuario();
    this.mostrarPuntuacion();
    this.maximoGame();
    this.showUser();
  },
  data: function data() {
    return {
      nivel1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nivel2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      nivel3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      nivel4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      desordenar: [],
      ids1: ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1"],
      ids2: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2", "k2", "l2", "m2", "n2", "o2", "p2"],
      ids3: ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", "i3", "j3", "k3", "l3", "m3", "n3", "o3", "p3", "q3", "r3", "s3", "t3", "u3", "v3", "w3", "x3", "y3"],
      ids4: ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", "i4", "j4", "k4", "l4", "m4", "n4", "o4", "p4", "q4", "r4", "s4", "t4", "u4", "v4", "w4", "x4", "y4", "z4", "za4", "zb4", "zc4", "zd4"],
      actual: 0,
      buscando: 1,
      pasos: 1,
      tiempo: 100,
      miTiempo: 0,
      puntuacion: 0,
      colores: ["#0033CC", "#FF6666", "#669933", "#FFCC33"],
      miTemporizador: 0,
      contador: 3,
      user: null,
      guardarEjercicio: {
        user_id: '',
        ejercicio_id: '',
        puntos: ''
      },
      recordMundial: [],
      maximo: {},
      usuario: {}
    };
  },
  methods: {
    showUser: function showUser() {
      var _this = this;

      var url = "/profile";
      axios.get(url).then(function (res) {
        _this.usuario = res.data;
      });
    },
    actualizarDatosUsuario: function actualizarDatosUsuario() {
      var data = new FormData();
      data.append('puntos', this.usuario.puntos + this.puntuacion / 15);
      data.append('_method', 'PUT');
      var url = "/profile/".concat(this.usuario.id);
      axios.post(url, data).then(function (res) {});
    },
    maximoGame: function maximoGame() {
      var _this2 = this;

      axios.get("maxGame/" + 1).then(function (res) {
        _this2.maximo = res.data;
      });
    },
    mostrarPuntuacion: function mostrarPuntuacion() {
      var _this3 = this;

      axios.get("/puntuacion/" + 1).then(function (res) {
        _this3.recordMundial = res.data;
      });
    },
    obtenerDatosUsuario: function obtenerDatosUsuario() {
      var _this4 = this;

      axios.get("/miID").then(function (res) {
        _this4.user = res.data;
      });
    },
    guardarResultado: function guardarResultado() {
      var _this5 = this;

      this.guardarEjercicio.ejercicio_id = 1;
      this.guardarEjercicio.user_id = this.user;
      this.guardarEjercicio.puntos = this.puntuacion;
      var formData = new FormData();
      formData.append('ejercicio_id', this.guardarEjercicio.ejercicio_id);
      formData.append('user_id', this.guardarEjercicio.user_id);
      formData.append('puntuacion', this.guardarEjercicio.puntos);
      axios.post('/game', formData).then(function (res) {
        _this5.guardarEjercicio.ejercicio_id = "";
        _this5.guardarEjercicio.user_id = "";
        _this5.guardarEjercicio.puntos = "";

        _this5.actualizarDatosUsuario();

        _this5.puntuacion = 0;
        _this5.pasos = 6;
      });
    },
    temporizame: function temporizame() {
      document.getElementById("vista-primera").style.display = 'none';
      document.getElementById("temporizador").style.display = 'block';
      this.miTemporizador = setInterval(this.empiezaTemporizar, 1000);
    },
    empiezaTemporizar: function empiezaTemporizar() {
      this.contador--;

      if (this.contador <= 0) {
        clearInterval(this.miTemporizador);
        this.mostrar1();
      }
    },
    finCronometro: function finCronometro() {
      clearInterval(this.miTiempo);
      document.getElementById("empezando").style.display = 'none';
      document.getElementById("empezando2").style.display = 'none';
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

      if (this.tiempo < 0 || this.buscando == 31) {
        this.finCronometro();
        this.pasos = 5;
        this.tiempo = 0;
      }
    },
    mostrar1: function mostrar1() {
      document.getElementById("tabla1").style.display = 'block';
      document.getElementById("empezando").style.display = 'flex';
      document.getElementById("empezando2").style.display = 'block';
      document.getElementById("temporizador").style.display = 'none';
      this.desordenar = this.nivel1.sort(function () {
        return Math.random() - 0.5;
      });

      for (var i = 0; i < this.desordenar.length; i++) {
        var dist = document.getElementById(this.ids1[i]);
        dist.innerHTML = this.desordenar[i];
        var rand = Math.floor(Math.random() * this.colores.length);
        dist.style.color = this.colores[rand];
      }

      this.miTiempo = setInterval(this.cronometro, 1000);
    },
    mostrar2: function mostrar2() {
      this.desordenar = this.nivel2.sort(function () {
        return Math.random() - 0.5;
      });

      for (var i = 0; i < this.desordenar.length; i++) {
        var dist = document.getElementById(this.ids2[i]);
        dist.innerHTML = this.desordenar[i];
        var rand = Math.floor(Math.random() * this.colores.length);
        dist.style.color = this.colores[rand];
      }
    },
    mostrar3: function mostrar3() {
      this.desordenar = this.nivel3.sort(function () {
        return Math.random() - 0.5;
      });

      for (var i = 0; i < this.desordenar.length; i++) {
        var dist = document.getElementById(this.ids3[i]);
        dist.innerHTML = this.desordenar[i];
        var rand = Math.floor(Math.random() * this.colores.length);
        dist.style.color = this.colores[rand];
      }
    },
    mostrar4: function mostrar4() {
      this.desordenar = this.nivel4.sort(function () {
        return Math.random() - 0.5;
      });

      for (var i = 0; i < this.desordenar.length; i++) {
        var dist = document.getElementById(this.ids4[i]);
        dist.innerHTML = this.desordenar[i];
        var rand = Math.floor(Math.random() * this.colores.length);
        dist.style.color = this.colores[rand];
      }
    },
    error_Encontrado: function error_Encontrado(encontrado) {
      encontrado.classList.add('rubberBand');
      setTimeout(function () {
        encontrado.classList.remove('rubberBand');
      }, 1000);
      this.puntuacion -= 2;
    },
    press_1: function press_1(event) {
      var targetId = event.currentTarget.id;

      switch (targetId) {
        case "a1":
          var a = document.getElementById("a1");

          if (this.nivel1[this.actual] == this.buscando) {
            a.innerHTML = "";
            this.puntuacion++;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(a);
          }

          break;

        case "b1":
          var b = document.getElementById("b1");

          if (this.nivel1[this.actual + 1] == this.buscando) {
            b.innerHTML = "";
            this.puntuacion++;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(b);
          }

          break;

        case "c1":
          var c = document.getElementById("c1");

          if (this.nivel1[this.actual + 2] == this.buscando) {
            c.innerHTML = "";
            this.puntuacion++;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(c);
          }

          break;

        case "d1":
          var d = document.getElementById("d1");

          if (this.nivel1[this.actual + 3] == this.buscando) {
            d.innerHTML = "";
            this.puntuacion++;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(d);
          }

          break;

        case "e1":
          var e = document.getElementById("e1");

          if (this.nivel1[this.actual + 4] == this.buscando) {
            e.innerHTML = "";
            this.puntuacion++;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(e);
          }

          break;

        case "f1":
          var f = document.getElementById("f1");

          if (this.nivel1[this.actual + 5] == this.buscando) {
            f.innerHTML = "";
            this.puntuacion++;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(f);
          }

          break;

        case "g1":
          var g = document.getElementById("g1");

          if (this.nivel1[this.actual + 6] == this.buscando) {
            g.innerHTML = "";
            this.puntuacion++;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(g);
          }

          break;

        case "h1":
          var h = document.getElementById("h1");

          if (this.nivel1[this.actual + 7] == this.buscando) {
            h.innerHTML = "";
            this.puntuacion++;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(h);
          }

          break;

        case "i1":
          var i = document.getElementById("i1");

          if (this.nivel1[this.actual + 8] == this.buscando) {
            i.innerHTML = "";
            this.puntuacion++;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(i);
          }

          break;
      }
    },
    press_2: function press_2(event) {
      var targetId = event.currentTarget.id;

      switch (targetId) {
        case "a2":
          var a = document.getElementById("a2");

          if (this.nivel2[this.actual] == this.buscando) {
            a.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(a);
          }

          break;

        case "b2":
          var b = document.getElementById("b2");

          if (this.nivel2[this.actual + 1] == this.buscando) {
            b.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(b);
          }

          break;

        case "c2":
          var c = document.getElementById("c2");

          if (this.nivel2[this.actual + 2] == this.buscando) {
            c.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(c);
          }

          break;

        case "d2":
          var d = document.getElementById("d2");

          if (this.nivel2[this.actual + 3] == this.buscando) {
            d.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(d);
          }

          break;

        case "e2":
          var e = document.getElementById("e2");

          if (this.nivel2[this.actual + 4] == this.buscando) {
            e.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(e);
          }

          break;

        case "f2":
          var f = document.getElementById("f2");

          if (this.nivel2[this.actual + 5] == this.buscando) {
            f.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(f);
          }

          break;

        case "g2":
          var g = document.getElementById("g2");

          if (this.nivel2[this.actual + 6] == this.buscando) {
            g.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(g);
          }

          break;

        case "h2":
          var h = document.getElementById("h2");

          if (this.nivel2[this.actual + 7] == this.buscando) {
            h.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(h);
          }

          break;

        case "i2":
          var i = document.getElementById("i2");

          if (this.nivel2[this.actual + 8] == this.buscando) {
            i.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(i);
          }

          break;

        case "j2":
          var j = document.getElementById("j2");

          if (this.nivel2[this.actual + 9] == this.buscando) {
            j.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(j);
          }

          break;

        case "k2":
          var k = document.getElementById("k2");

          if (this.nivel2[this.actual + 10] == this.buscando) {
            k.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(k);
          }

          break;

        case "l2":
          var l = document.getElementById("l2");

          if (this.nivel2[this.actual + 11] == this.buscando) {
            l.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(l);
          }

          break;

        case "m2":
          var m = document.getElementById("m2");

          if (this.nivel2[this.actual + 12] == this.buscando) {
            m.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(m);
          }

          break;

        case "n2":
          var n = document.getElementById("n2");

          if (this.nivel2[this.actual + 13] == this.buscando) {
            n.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(n);
          }

          break;

        case "o2":
          var o = document.getElementById("o2");

          if (this.nivel2[this.actual + 14] == this.buscando) {
            o.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(o);
          }

          break;

        case "p2":
          var p = document.getElementById("p2");

          if (this.nivel2[this.actual + 15] == this.buscando) {
            p.innerHTML = "";
            this.puntuacion += 2;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(p);
          }

          break;
      }
    },
    press_3: function press_3(event) {
      var targetId = event.currentTarget.id;

      switch (targetId) {
        case "a3":
          var a = document.getElementById("a3");

          if (this.nivel3[this.actual] == this.buscando) {
            a.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(a);
          }

          break;

        case "b3":
          var b = document.getElementById("b3");

          if (this.nivel3[this.actual + 1] == this.buscando) {
            b.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(b);
          }

          break;

        case "c3":
          var c = document.getElementById("c3");

          if (this.nivel3[this.actual + 2] == this.buscando) {
            c.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(c);
          }

          break;

        case "d3":
          var d = document.getElementById("d3");

          if (this.nivel3[this.actual + 3] == this.buscando) {
            d.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(d);
          }

          break;

        case "e3":
          var e = document.getElementById("e3");

          if (this.nivel3[this.actual + 4] == this.buscando) {
            e.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(e);
          }

          break;

        case "f3":
          var f = document.getElementById("f3");

          if (this.nivel3[this.actual + 5] == this.buscando) {
            f.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(f);
          }

          break;

        case "g3":
          var g = document.getElementById("g3");

          if (this.nivel3[this.actual + 6] == this.buscando) {
            g.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(g);
          }

          break;

        case "h3":
          var h = document.getElementById("h3");

          if (this.nivel3[this.actual + 7] == this.buscando) {
            h.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(h);
          }

          break;

        case "i3":
          var i = document.getElementById("i3");

          if (this.nivel3[this.actual + 8] == this.buscando) {
            i.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(i);
          }

          break;

        case "j3":
          var j = document.getElementById("j3");

          if (this.nivel3[this.actual + 9] == this.buscando) {
            j.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(j);
          }

          break;

        case "k3":
          var k = document.getElementById("k3");

          if (this.nivel3[this.actual + 10] == this.buscando) {
            k.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(k);
          }

          break;

        case "l3":
          var l = document.getElementById("l3");

          if (this.nivel3[this.actual + 11] == this.buscando) {
            l.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(l);
          }

          break;

        case "m3":
          var m = document.getElementById("m3");

          if (this.nivel3[this.actual + 12] == this.buscando) {
            m.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(m);
          }

          break;

        case "n3":
          var n = document.getElementById("n3");

          if (this.nivel3[this.actual + 13] == this.buscando) {
            n.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(n);
          }

          break;

        case "o3":
          var o = document.getElementById("o3");

          if (this.nivel3[this.actual + 14] == this.buscando) {
            o.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(o);
          }

          break;

        case "p3":
          var p = document.getElementById("p3");

          if (this.nivel3[this.actual + 15] == this.buscando) {
            p.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(p);
          }

          break;

        case "q3":
          var q = document.getElementById("q3");

          if (this.nivel3[this.actual + 16] == this.buscando) {
            q.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(q);
          }

          break;

        case "r3":
          var r = document.getElementById("r3");

          if (this.nivel3[this.actual + 17] == this.buscando) {
            r.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(r);
          }

          break;

        case "s3":
          var s = document.getElementById("s3");

          if (this.nivel3[this.actual + 18] == this.buscando) {
            s.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(s);
          }

          break;

        case "t3":
          var t = document.getElementById("t3");

          if (this.nivel3[this.actual + 19] == this.buscando) {
            t.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(t);
          }

          break;

        case "u3":
          var u = document.getElementById("u3");

          if (this.nivel3[this.actual + 20] == this.buscando) {
            u.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(u);
          }

          break;

        case "v3":
          var v = document.getElementById("v3");

          if (this.nivel3[this.actual + 21] == this.buscando) {
            v.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(v);
          }

          break;

        case "w3":
          var w = document.getElementById("w3");

          if (this.nivel3[this.actual + 22] == this.buscando) {
            w.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(w);
          }

          break;

        case "x3":
          var x = document.getElementById("x3");

          if (this.nivel3[this.actual + 23] == this.buscando) {
            x.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(x);
          }

          break;

        case "y3":
          var y = document.getElementById("y3");

          if (this.nivel3[this.actual + 24] == this.buscando) {
            y.innerHTML = "";
            this.puntuacion += 3;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(y);
          }

          break;
      }
    },
    press_4: function press_4(event) {
      var targetId = event.currentTarget.id;

      switch (targetId) {
        case "a4":
          var a = document.getElementById("a4");

          if (this.nivel4[this.actual] == this.buscando) {
            a.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(a);
          }

          break;

        case "b4":
          var b = document.getElementById("b4");

          if (this.nivel4[this.actual + 1] == this.buscando) {
            b.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(b);
          }

          break;

        case "c4":
          var c = document.getElementById("c4");

          if (this.nivel4[this.actual + 2] == this.buscando) {
            c.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(c);
          }

          break;

        case "d4":
          var d = document.getElementById("d4");

          if (this.nivel4[this.actual + 3] == this.buscando) {
            d.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(d);
          }

          break;

        case "e4":
          var e = document.getElementById("e4");

          if (this.nivel4[this.actual + 4] == this.buscando) {
            e.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(e);
          }

          break;

        case "f4":
          var f = document.getElementById("f4");

          if (this.nivel4[this.actual + 5] == this.buscando) {
            f.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(f);
          }

          break;

        case "g4":
          var g = document.getElementById("g4");

          if (this.nivel4[this.actual + 6] == this.buscando) {
            g.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(g);
          }

          break;

        case "h4":
          var h = document.getElementById("h4");

          if (this.nivel4[this.actual + 7] == this.buscando) {
            h.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(h);
          }

          break;

        case "i4":
          var i = document.getElementById("i4");

          if (this.nivel4[this.actual + 8] == this.buscando) {
            i.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(i);
          }

          break;

        case "j4":
          var j = document.getElementById("j4");

          if (this.nivel4[this.actual + 9] == this.buscando) {
            j.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(j);
          }

          break;

        case "k4":
          var k = document.getElementById("k4");

          if (this.nivel4[this.actual + 10] == this.buscando) {
            k.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(k);
          }

          break;

        case "l4":
          var l = document.getElementById("l4");

          if (this.nivel4[this.actual + 11] == this.buscando) {
            l.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(l);
          }

          break;

        case "m4":
          var m = document.getElementById("m4");

          if (this.nivel4[this.actual + 12] == this.buscando) {
            m.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(m);
          }

          break;

        case "n4":
          var n = document.getElementById("n4");

          if (this.nivel4[this.actual + 13] == this.buscando) {
            n.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(n);
          }

          break;

        case "o4":
          var o = document.getElementById("o4");

          if (this.nivel4[this.actual + 14] == this.buscando) {
            o.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(o);
          }

          break;

        case "p4":
          var p = document.getElementById("p4");

          if (this.nivel4[this.actual + 15] == this.buscando) {
            p.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(p);
          }

          break;

        case "q4":
          var q = document.getElementById("q4");

          if (this.nivel4[this.actual + 16] == this.buscando) {
            q.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(q);
          }

          break;

        case "r4":
          var r = document.getElementById("r4");

          if (this.nivel4[this.actual + 17] == this.buscando) {
            r.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(r);
          }

          break;

        case "s4":
          var s = document.getElementById("s4");

          if (this.nivel4[this.actual + 18] == this.buscando) {
            s.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(s);
          }

          break;

        case "t4":
          var t = document.getElementById("t4");

          if (this.nivel4[this.actual + 19] == this.buscando) {
            t.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(t);
          }

          break;

        case "u4":
          var u = document.getElementById("u4");

          if (this.nivel4[this.actual + 20] == this.buscando) {
            u.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(u);
          }

          break;

        case "v4":
          var v = document.getElementById("v4");

          if (this.nivel4[this.actual + 21] == this.buscando) {
            v.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(v);
          }

          break;

        case "w4":
          var w = document.getElementById("w4");

          if (this.nivel4[this.actual + 22] == this.buscando) {
            w.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(w);
          }

          break;

        case "x4":
          var x = document.getElementById("x4");

          if (this.nivel4[this.actual + 23] == this.buscando) {
            x.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(x);
          }

          break;

        case "y4":
          var y = document.getElementById("y4");

          if (this.nivel4[this.actual + 24] == this.buscando) {
            y.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(y);
          }

          break;

        case "z4":
          var z = document.getElementById("z4");

          if (this.nivel4[this.actual + 25] == this.buscando) {
            z.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(z);
          }

          break;

        case "za4":
          var za = document.getElementById("za4");

          if (this.nivel4[this.actual + 26] == this.buscando) {
            za.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(za);
          }

          break;

        case "zb4":
          var zb = document.getElementById("zb4");

          if (this.nivel4[this.actual + 27] == this.buscando) {
            zb.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(zb);
          }

          break;

        case "zc4":
          var zc = document.getElementById("zc4");

          if (this.nivel4[this.actual + 28] == this.buscando) {
            zc.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(zc);
          }

          break;

        case "zd4":
          var zd = document.getElementById("zd4");

          if (this.nivel4[this.actual + 29] == this.buscando) {
            zd.innerHTML = "";
            this.puntuacion += 4;
            this.buscando++;
            this.esUltimo(this.buscando);
          } else {
            this.error_Encontrado(zd);
          }

          break;
      }
    },
    esUltimo: function esUltimo(numero) {
      if (this.pasos == 1) {
        if (this.buscando == 10) {
          this.buscando = 1;
          this.pasos++;
          this.mostrar2();
        }
      } else if (this.pasos == 2) {
        if (this.buscando == 17) {
          this.buscando = 1;
          this.pasos++;
          this.mostrar3();
        }
      } else if (this.pasos == 3) {
        if (this.buscando == 26) {
          this.buscando = 1;
          this.pasos++;
          this.mostrar4();
        }
      } else if (this.pasos == 4) {
        if (this.buscando == 31) {
          this.pasos = 5;
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.miTiempo);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1-schultz.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/1-schultz.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.border-right{\r\n\tborder-right: 1px solid #dee2e6 !important;\n}\n#empezando , #empezando2{\r\n\tdisplay: none;\n}\n#vista-primera{\r\n\tdisplay: flex;\n}\n#tabla1{\r\n\tdisplay: none;\n}\n.fixed-table{\r\n\ttable-layout: fixed;\n}\n.th ,.td {\r\n\tword-wrap: break-word;\r\n\ttext-align: center;\r\n\theight: 65px;\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\n}\n.table-bordered {\r\n\tborder: 1px solid #666666;\n}\n.table-bordered th, .table-bordered td {\r\n\tborder: 1px solid #666666;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1-schultz.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/1-schultz.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./1-schultz.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1-schultz.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1-schultz.vue?vue&type=template&id=513c3ae1&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/users/game/1-schultz.vue?vue&type=template&id=513c3ae1& ***!
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
  return _c("div", { staticClass: "col-12" }, [
    _c("div", [
      _c("div", { staticClass: "row", attrs: { id: "vista-primera" } }, [
        _c("div", { staticClass: "col-md-8 col-sm-12" }, [
          _c("div", { staticClass: "card mb-3" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-5" }, [
                  _c("h3", { staticClass: "text-center" }, [_vm._v("Schulte")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "btn btn-primary btn-block",
                      on: {
                        click: function($event) {
                          return _vm.temporizame()
                        }
                      }
                    },
                    [_vm._v("Iniciar\n\t\t\t\t\t\t\t\t\t")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-7" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._l(_vm.maximo, function(max, index) {
                      return _c("div", [
                        _c(
                          "div",
                          { staticClass: "card-footer row text-left" },
                          [
                            _c("h5", { staticClass: "col-md-6 col-12" }, [
                              _vm._v(_vm._s(max.name))
                            ]),
                            _vm._v(" "),
                            _c("h5", { staticClass: "col-md-6 col-12" }, [
                              _vm._v(_vm._s(max.pivot.puntuacion))
                            ])
                          ]
                        )
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
                _vm._l(_vm.recordMundial, function(punt, index) {
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
      ])
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "empezando" } }, [
      _c("div", { staticClass: "col-sm-5 col-md-5" }, [
        _c("h5", [_vm._v("Puntuacion : " + _vm._s(_vm.puntuacion))])
      ]),
      _vm._v(" "),
      _vm._m(3)
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-12 text-center", attrs: { id: "empezando2" } },
      [_c("h4", [_vm._v("Buscando : " + _vm._s(_vm.buscando))])]
    ),
    _vm._v(" "),
    _c("div", { attrs: { id: "temporizador" } }, [
      _c("div", { attrs: { id: "numero" } }, [_vm._v(_vm._s(_vm.contador))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.pasos == 1,
              expression: "pasos == 1"
            }
          ],
          staticClass: "col-md-8 col-sm-12 m-auto tabla-juego",
          attrs: { id: "tabla1" }
        },
        [
          _c("table", { staticClass: "table table-bordered fixed-table" }, [
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "a1" },
                on: {
                  click: function($event) {
                    return _vm.press_1($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "b1" },
                on: {
                  click: function($event) {
                    return _vm.press_1($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "c1" },
                on: {
                  click: function($event) {
                    return _vm.press_1($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "d1" },
                on: {
                  click: function($event) {
                    return _vm.press_1($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "e1" },
                on: {
                  click: function($event) {
                    return _vm.press_1($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "f1" },
                on: {
                  click: function($event) {
                    return _vm.press_1($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "g1" },
                on: {
                  click: function($event) {
                    return _vm.press_1($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "h1" },
                on: {
                  click: function($event) {
                    return _vm.press_1($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "i1" },
                on: {
                  click: function($event) {
                    return _vm.press_1($event)
                  }
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
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.pasos == 2,
              expression: "pasos == 2 "
            }
          ],
          staticClass: "col-md-8 col-sm-12 m-auto tabla-juego"
        },
        [
          _c("table", { staticClass: "table table-bordered fixed-table" }, [
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "a2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "b2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "c2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "d2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "e2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "f2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "g2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "h2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "i2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "j2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "k2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "l2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "m2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "n2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "o2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "p2" },
                on: {
                  click: function($event) {
                    return _vm.press_2($event)
                  }
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
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.pasos == 3,
              expression: "pasos == 3"
            }
          ],
          staticClass: "col-md-8 col-sm-12 m-auto tabla-juego"
        },
        [
          _c("table", { staticClass: "table table-bordered fixed-table" }, [
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "a3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "b3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "c3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "d3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "e3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "f3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "g3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "h3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "i3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "j3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "k3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "l3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "m3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "n3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "o3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "p3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "q3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "r3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "s3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "t3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "u3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "v3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "w3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "x3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "y3" },
                on: {
                  click: function($event) {
                    return _vm.press_3($event)
                  }
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
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.pasos == 4,
              expression: "pasos == 4"
            }
          ],
          staticClass: "col-md-8 col-sm-12 m-auto tabla-juego"
        },
        [
          _c("table", { staticClass: "table table-bordered fixed-table" }, [
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "a4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "b4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "c4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "d4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "e4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "f4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "g4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "h4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "i4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "j4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "k4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "l4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "m4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "n4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "o4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "p4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "q4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "r4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "s4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "t4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "u4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "v4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "w4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "x4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "y4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {
                staticClass: "td",
                attrs: { id: "z4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "za4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "zb4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "zc4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "td",
                attrs: { id: "zd4" },
                on: {
                  click: function($event) {
                    return _vm.press_4($event)
                  }
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
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.pasos == 5,
              expression: "pasos == 5"
            }
          ],
          staticClass: "col-md-8 col-sm-12 m-auto tabla-juego"
        },
        [
          _c("div", { staticClass: "col-8 m-auto" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.guardarResultado($event)
                  }
                }
              },
              [
                _c("h3", { staticClass: "text-uppercase" }, [
                  _vm._v("se acabo el tiempo")
                ]),
                _vm._v(" "),
                _c("img", {
                  attrs: { src: "imagenes/tiempoterminado.jpg", alt: "" }
                }),
                _vm._v(" "),
                _c("input", {
                  staticClass: "btn btn-primary btn-block",
                  attrs: { type: "submit", value: "Ver resultados" }
                })
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
              value: _vm.pasos == 6,
              expression: "pasos == 6"
            }
          ],
          staticClass: "col-md-8 col-sm-12 m-auto"
        },
        [
          _c("h3", [_vm._v("estos son los resultados")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary m-auto btn-block",
              attrs: { to: { name: "home" } }
            },
            [_vm._v(" Ir al Inicio")]
          )
        ],
        1
      )
    ])
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
    return _c("div", { staticClass: "col-md-4 col-sm-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "card-img-top mx-auto my-3",
            staticStyle: {
              filter: "drop-shadow(5px 5px 10px #444)",
              width: "80%"
            },
            attrs: { src: "/imagenes/libro.png" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("p", { staticClass: "card-text" }, [
              _vm._v(
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-left" }, [
              _c("p", [_c("b", [_vm._v("Tiempo: ")]), _vm._v("60 segundos")]),
              _vm._v(" "),
              _c("p", [
                _c("b", [_vm._v("Correcta: ")]),
                _vm._v("+2 +3 +4 puntos")
              ]),
              _vm._v(" "),
              _c("p", [_c("b", [_vm._v("Incorrecta: ")]), _vm._v("-2 puntos")])
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
    return _c("div", { staticClass: "col-sm-7 col-md-7" }, [
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

/***/ "./resources/js/users/game/1-schultz.vue":
/*!***********************************************!*\
  !*** ./resources/js/users/game/1-schultz.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_schultz_vue_vue_type_template_id_513c3ae1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1-schultz.vue?vue&type=template&id=513c3ae1& */ "./resources/js/users/game/1-schultz.vue?vue&type=template&id=513c3ae1&");
/* harmony import */ var _1_schultz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1-schultz.vue?vue&type=script&lang=js& */ "./resources/js/users/game/1-schultz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _1_schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./1-schultz.vue?vue&type=style&index=0&lang=css& */ "./resources/js/users/game/1-schultz.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _1_schultz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _1_schultz_vue_vue_type_template_id_513c3ae1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _1_schultz_vue_vue_type_template_id_513c3ae1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/users/game/1-schultz.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/users/game/1-schultz.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/users/game/1-schultz.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./1-schultz.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1-schultz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/users/game/1-schultz.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/users/game/1-schultz.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./1-schultz.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1-schultz.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/users/game/1-schultz.vue?vue&type=template&id=513c3ae1&":
/*!******************************************************************************!*\
  !*** ./resources/js/users/game/1-schultz.vue?vue&type=template&id=513c3ae1& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_template_id_513c3ae1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./1-schultz.vue?vue&type=template&id=513c3ae1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/users/game/1-schultz.vue?vue&type=template&id=513c3ae1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_template_id_513c3ae1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_1_schultz_vue_vue_type_template_id_513c3ae1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);