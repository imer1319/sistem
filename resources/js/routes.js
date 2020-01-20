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
		name: 'game',
		path: '/game',
		component: () => import('./users/game/game.vue')
	},
	{
		name: 'schult',
		path: '/schult',
		component: () => import('./users/game/schultz.vue')
	},
	{
		name: 'parpadeo',
		path: '/parpadeo',
		component: () => import('./users/game/parpadeo.vue')
	},
	{
		name: 'alrededor',
		path: '/alrededor',
		component: () => import('./users/game/alrededor.vue')
	},
	{
		path: '*',
		component: () => import('./components/404')
	},
];
