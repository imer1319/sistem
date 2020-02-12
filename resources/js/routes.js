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
		name:'categoria',
		path: '/categoria',
		component: () => import('./components/ejercicios/categoria.vue'),
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
		name: 'insignia',
		path: '/insignia',
		component: () => import('./components/insignias/insigniaComponent.vue')
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
		name: 'ejercicios',
		path: '/ejercicios',
		component: () => import('./users/ejercicios/ejercicios.vue')
	},
	{
		name: 'game',
		path: '/game',
		component: () => import('./users/game/game.vue')
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
		name: 'borde-palabra',
		path: '/borde-palabra',
		component: () => import('./users/game/5-borde-palabra.vue')
	},
	{
		name: 'palabra-piramide',
		path: '/palabra-piramide',
		component: () => import('./users/game/6-piramide.vue')
	},
	{
		name: 'campo-visual',
		path: '/campo-visual',
		component: () => import('./users/game/7-campo-visual.vue')
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
