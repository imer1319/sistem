export const routes = [
{
	name:'usuario',
	path: '/usuario', 
	component: () => import('./components/usuario/usuario.vue'),
},
{
	name:'shoex',
	path: '/usuario/:id', 
	component: () => import('./components/usuario/showUsuario.vue'),
},
{
	name:'ejercicio',
	path: '/ejercicio', 
	component: () => import('./components/ejercicios/ejercicio.vue'),
},
{
	name:'perfil',
	path: '/perfil', 
	component: () => import('./components/perfil.vue'),
},
{
	name:'examen',
	path: '/examen', 
	component: () => import('./components/examens/examenComponent.vue'),
},
{
	name: 'show',
	path: '/examen/:id',
	component: () => import('./components/examens/showExamenComponent.vue')
},
{
	name: 'rango',
	path: '/rango',
	component: () => import('./components/rango/rango.vue')
},
	// esta es la parte de los usuarios....
	{
		name: 'home',
		path: '/home',
		component: () => import('./users/home')
	},
	{
		name: 'profile',
		path: '/profile',
		component: () => import('./users/user/perfil.vue')
	},
	{
		name: 'exam',
		path: '/exam',
		component: () => import('./users/exam/exam')
	},
	{
		name: 'showing',
		path: '/exam/:id',
		component: () => import('./users/exam/show-exam')
	},
	{
		name: 'ranking',
		path: '/ranking',
		component: () => import('./users/ranking.vue')
	},
	{
		name: 'puntuacionExamen',
		path: '/puntuacionExamen',
		component: () => import('./users/puntuacionExam.vue')
	},
	{
		name: 'ejercicios',
		path: '/ejercicios',
		component: () => import('./users/ejercicios/ejercicios.vue')
	},
	{
		name: 'game',
		path: '/game',
		component: () => import('./users/game/game.vue')
	},
	{
		name: 'lecciones',
		path: '/lecciones',
		component: () => import('./users/lecciones/lecciones.vue')
	},
	/************** RUTAS PARA EL CURSO*************/
	{
		name: 'curso',
		path: '/curso',
		component: () => import('./users/curso/curso.vue')
	},
	{
		name: 'shulte-curso',
		path: '/shulte-curso',
		component: () => import('./users/curso/avances-curso/2-schulte.vue')
	},
	{
		name: 'shultele-curso',
		path: '/shultele-curso',
		component: () => import('./users/curso/avances-curso/3-schulte-letra.vue')
	},
	{
		name: 'search-numbers',
		path: '/search-course-numbers',
		component: () => import('./users/curso/avances-curso/4-buscar-numero.vue')
	},
	{
		name: 'search-words',
		path: '/search-words-course',
		component: () => import('./users/curso/avances-curso/5-buscar-palabra.vue')
	},
	{
		name: 'remember-number',
		path: '/remember-numbers',
		component: () => import('./users/curso/avances-curso/6-recordar-numero.vue')
	},
	{
		name: 'remember-word',
		path: '/remember-words',
		component: () => import('./users/curso/avances-curso/7-recordar-palabra.vue')
	},
	{
		name: 'old-impar',
		path: '/odd-even',
		component: () => import('./users/curso/avances-curso/8-par-impar.vue')
	},
	{
		name: 'campo-visual',
		path: '/visual-field',
		component: () => import('./users/curso/avances-curso/9-campo-visual.vue')
	},
	/*********--RUTA -- JUEGOS--**********/
	{
		name: 'schult',
		path: '/schult',
		component: () => import('./users/game/1-schultz.vue')
	},
	{
		name: 'schult-letra',
		path: '/schult-letra',
		component: () => import('./users/game/2-schulte-letras.vue')
	},
	{
		name: 'buscar-palabra',
		path: '/buscar-palabra',
		component: () => import('./users/game/3-busca-palabras.vue')
	},
	{
		name: 'buscar-numero',
		path: '/buscar-numero',
		component: () => import('./users/game/4-buscar-numero.vue')
	},
	{
		name: 'encuentra-palabra',
		path: '/encuentra-palabra',
		component: () => import('./users/game/5-recuerda-palabra.vue')
	},
	{
		name: 'encuentra-numeros',
		path: '/encuentra-numeros',
		component: () => import('./users/game/6-recuerda-numeros.vue')
	},
	{
		name: 'par-impar',
		path: '/par-impar',
		component: () => import('./users/game/7-par-impar.vue')
	},
	{
		name: 'iguales',
		path: '/iguales',
		component: () => import('./users/game/8-campo-visual.vue')
	},
	/********--RUTA -- EJERCICIOS--******/
	{
		name: 'parpadeo',
		path: '/parpadeo',
		component: () => import('./users/ejercicios/1-parpadeo.vue')
	},
	{
		name: 'vertical',
		path: '/vertical',
		component: () => import('./users/ejercicios/2-vertical.vue')
	},
	{
		name: 'horizontal',
		path: '/horizontal',
		component: () => import('./users/ejercicios/3-horizontal.vue')
	},
	{
		name: 'aleatorio',
		path: '/aleatorio',
		component: () => import('./users/ejercicios/4-aleatorio.vue')
	},
	];
