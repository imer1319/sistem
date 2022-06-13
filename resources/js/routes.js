export const routes = [
	// Rutas para el user
	{
		name: 'home',
		path: '/home',
		component: () => import('./views/Home')
	},
	{
		name: 'profile',
		path: '/profile',
		component: () => import('./views/Profile')
	},
	{
		name: 'curso',
		path: '/curso',
		component: () => import('./views/Curso')
	},
	{
		name: 'game',
		path: '/game',
		component: () => import('./views/Games')
	},
	{
		name: 'ranking',
		path: '/ranking',
		component: () => import('./views/Ranking')
	},
	{
		name: 'scores',
		path: '/scores-exam',
		component: () => import('./views/ScoresExam')
	},
	{
		name: 'lecciones',
		path: '/lecciones',
		component: () => import('./views/Contenido')
	},
	{
		name: 'exam',
		path: '/darExamen',
		component: () => import('./views/DarExamen')
	},
	/************** RUTAS PARA EL CURSO*************/
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
	// Rutas admin
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
	{
		path:'*',
		component:() => import('./views/404.vue')
	}
	];
