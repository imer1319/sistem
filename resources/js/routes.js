export const routes = [
	{
		name:'examen',
		path: '/examen', 
		component: () => import('./components/examens/examenComponent.vue'),
	},
	{
		name: 'show',
		path: '/examen/:id',
		component: () => import('./components/examens/showExamenComponent.vue')
	}
];
