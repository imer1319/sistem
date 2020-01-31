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
		name: 'game',
		path: '/game',
		component: () => import('./users/game/game.vue')
	},
	{
		name: 'schult',
		path: '/schult',
		component: () => import('./users/game/1-schultz.vue')
	},
	{
		name: 'buscar-palabra',
		path: '/buscar-palabra',
		component: () => import('./users/game/2-buscaPalabra.vue')
	},
	{
		name: 'buscar-numero',
		path: '/buscar-numero',
		component: () => import('./users/game/3-buscar-numero.vue')
	},
	{
		name: 'par-impar',
		path: '/par-impar',
		component: () => import('./users/game/4-par-impar.vue')
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
	{
		name: 'schult-letra',
		path: '/schult-letra',
		component: () => import('./users/game/8-schulte-letras.vue')
	},
	{
		name: 'encuentra-palabra',
		path: '/encuentra-palabra',
		component: () => import('./users/game/9-encuentra-palabra.vue')
	},
	{
		name: 'encuentra-numeros',
		path: '/encuentra-numeros',
		component: () => import('./users/game/11-encuentra-numeros.vue')
	},
];
