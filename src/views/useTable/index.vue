<template>
	<div class="container">
		<a-card class="general-card">
			<SearchForm ref="searchFormRef" :columns="searchColumns" @search="onSearch" />
			<a-divider />
			<Toolbar ref="toolbarRef" :columns="toolbars" />
			<CustomTable
				ref="customTable"
				:setting="tableSettings"
				:column="tableColumns"
				:data="onLoad"
				@page-change="pageChange"
				@page-size-change="pageSizeChange"
			/>
		</a-card>
	</div>
</template>

<script lang="jsx" setup>
import { ref, reactive, onBeforeMount, createApp } from 'vue'
import { useTableDataStore } from '@/store'
import SearchForm from './components/SearchForm.vue'
import searchColumn from './config/searchColumn'
import Toolbar from './components/Toolbar.vue'
import toolbar from './config/toolbar'
import CustomTable from './components/CustomTable.vue'
import tableSetting from './config/tableSetting'
import tableColumn from './config/tableColumn'

// 状态共享
const tableSotre = useTableDataStore()

// 搜索
const searchFormRef = ref()
const searchColumns = reactive(searchColumn)
tableSotre.search.columns = searchColumns
let formModel = {}
function onSearch(params) {
	formModel = params
	tableSotre.search.formModel = formModel
}

// 工具栏菜单
const toolbarRef = ref()
let toolbars = reactive(toolbar)
// 工具栏按钮事件
function onShow() {
	toolbarRef.value.handleClick()
}

// 表格
const customTable = ref()
const tableSettings = reactive(tableSetting)
let tableColumns = reactive(tableColumn)
// 数据加载
function onLoad({ current, pageSize }) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				total: 11,
				data: []
			})
		})
	})
}
// 刷新数据
function refresh() {
	customTable.value.refresh()
}

onBeforeMount(() => {
	toolbars = toolbars.map((item) => {
		item.component = {
			setup() {
				const { console } = window
				const tableDataStore = useTableDataStore()
				return { console, tableStore: tableDataStore, onShow }
			},
			template: `<span>${item.attribute}</span>`
		}
		return item
	})
	const app = createApp({})
	tableColumns = tableColumns.map((item) => {
		if (item.renderStr) {
			item.render = (params) => {
				const MyComponent = {
					setup() {
						const { record } = params
						return { record }
					},
					template: item.renderStr
				}
				app.component('MyComponent', MyComponent)
				return <MyComponent></MyComponent>
			}
		}
		return item
	})
})

// 暴露api
defineExpose({
	refresh
})
</script>

<style scoped lang="less">
.container {
	margin-top: 12px;
	padding: 0 12px 12px 12px;
}
</style>
