<template>
	<div class="container">
		<a-card class="general-card">
			<SearchForm ref="searchFormRef" :columns="searchColumns" @search="onSearch" />
			<a-divider />
			<Toolbar ref="toolbarRef" :columns="toolbars" />
			<CustomTable ref="customTable" :setting="tableSettings" :column="tableColumns" :data="loadData" @selection-change="selectionChange" />
		</a-card>
	</div>
</template>

<script lang="jsx" setup>
import { ref, onBeforeMount, createApp } from 'vue'
import { getData, getTableSetting } from '@/api/useTable'
import { useTableDataStore } from '@/store'
import SearchForm from './components/SearchForm.vue'
import Toolbar from './components/Toolbar.vue'
import CustomTable from './components/CustomTable.vue'

// 状态共享
const tableSotre = useTableDataStore()

// 搜索
const searchFormRef = ref()
const searchColumns = ref([])
let formModel = {}
function onSearch(params) {
	formModel = params
	tableSotre.search.formModel = formModel
}

// 工具栏菜单
const toolbarRef = ref()
const toolbars = ref([])
// 工具栏按钮事件
function onShow() {
	toolbarRef.value.handleClick()
}

// 表格
const customTable = ref()
const tableSettings = ref({})
const tableColumns = ref([])

// 数据加载
function loadData({ current, pageSize }) {
	return getData({ current, pageSize })
}
// 刷新数据
function refresh() {
	customTable.value.refresh()
}
// 选中数据行
function selectionChange({ rowKeys, selectRecords }) {
	console.log(rowKeys, selectRecords)
}

onBeforeMount(async () => {
	const result = await getTableSetting()
	const { searchColumn, toolbar = [], tableColumn = [], tableSetting = {}, lineMenu = [] } = result.data
	searchColumns.value = searchColumn
	tableSotre.search.columns = searchColumns.value

	toolbars.value = toolbar.map((item) => {
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
	tableColumns.value = tableColumn.map((item) => {
		if (item.renderStr) {
			item.render = (params) => {
				const MyComponent = {
					setup() {
						const { record } = params
						return { record }
					},
					template: item.renderStr
				}
				app.component(`MyComponent${Date.now()}`, MyComponent)
				return <MyComponent></MyComponent>
			}
		}
		return item
	})
	const actionColumn = {
		label: '操作',
		prop: 'action'
	}
	actionColumn.render = (params) => {
		const menuArr = []
		lineMenu.forEach((item) => {
			const Menu = {
				setup() {
					const { record } = params
					const { console } = window
					const tableDataStore = useTableDataStore()
					return { console, tableStore: tableDataStore, record, lineMenu: item }
				},
				template: `<span>${item.attribute}</span>`
			}
			menuArr.push(Menu)
		})
		if (menuArr.length < 4) {
			return (
				<div style={{ color: '#165dff' }}>
					{menuArr.map((menuItem, menuIndex) => {
						if (menuIndex === menuArr.length - 1) {
							return (
								<span>
									<menuItem />
								</span>
							)
						}
						return (
							<span>
								<menuItem />
								<a-divider direction="vertical" />
							</span>
						)
					})}
				</div>
			)
		}
		return (
			<div style={{ color: '#165dff' }}>
				<span>
					{menuArr.map((menuItem, menuIndex) => {
						if (menuIndex < 2) {
							return (
								<span>
									<menuItem />
									<a-divider direction="vertical" />
								</span>
							)
						}
						return ''
					})}
				</span>
				<a-dropdown
					v-slots={{
						content: () => {
							return (
								<>
									{menuArr.map((menuItem, menuIndex) => {
										if (menuIndex >= 2) {
											return (
												<a-doption>
													<menuItem />
												</a-doption>
											)
										}
										return ''
									})}
								</>
							)
						}
					}}
				>
					<a>
						更多 <icon-down />
					</a>
				</a-dropdown>
			</div>
		)
	}
	tableColumns.value.push(actionColumn)

	tableSettings.value = tableSetting
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
