import { createPinia } from 'pinia'
import useAppStore from './modules/app'
import useUserStore from './modules/user'
import useTabBarStore from './modules/tab-bar'
import useTableDataStore from './modules/tableData'

const pinia = createPinia()

export { useAppStore, useUserStore, useTabBarStore, useTableDataStore }
export default pinia
