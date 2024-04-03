import { DEFAULT_LAYOUT } from '../base'

const USETABLE = {
	path: '/useTable',
	name: 'useTable',
	component: DEFAULT_LAYOUT,
	meta: {
		locale: '数据视图',
		requiresAuth: true,
		icon: 'icon-menu-fold',
		order: 2
	},
	children: [
		{
			path: 'index', // The midline path complies with SEO specifications
			name: 'index',
			component: () => import('@/views/useTable/index.vue'),
			meta: {
				locale: '数据窗口',
				requiresAuth: true,
				roles: ['*']
			}
		}
	]
}

export default USETABLE
