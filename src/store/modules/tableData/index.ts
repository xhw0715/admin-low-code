import { defineStore } from 'pinia'

const useTableDataStore = defineStore('tableData', {
	state: () => {
		return {
			search: {
				columns: [],
				formModel: {}
			}
		}
	},

	getters: {},

	actions: {}
})

export default useTableDataStore
