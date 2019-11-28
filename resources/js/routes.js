export const routes = [
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
	// esta es la parte de los usuarios....
	{
		name: 'home',
		path: '/home',
		component: () => import('./users/home')
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
		path: '*',
		component: () => import('./components/404')
	},	
];
