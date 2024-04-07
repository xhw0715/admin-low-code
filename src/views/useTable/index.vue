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
import { ref, reactive, onBeforeMount, createApp } from 'vue'
import { useTableDataStore } from '@/store'
import SearchForm from './components/SearchForm.vue'
import searchColumn from './config/searchColumn'
import Toolbar from './components/Toolbar.vue'
import toolbar from './config/toolbar'
import CustomTable from './components/CustomTable.vue'
import tableSetting from './config/tableSetting'
import tableColumn from './config/tableColumn'
import lineMenu from './config/lineMenu'

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
// 模拟mock数据
const mockData = [
	{
		id: '1',
		name: 'Jane Doe',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		address: '32 Park Road, London',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '2',
		name: 'Alisa Ross',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		address: '32 Park Road, London',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '3',
		name: 'Kevin Sandra',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		address: '32 Park Road, London',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '4',
		name: 'Ed Hellen',
		salary: 17000,
		address: '42 Park Road, London',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '5',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '女',
		_sex_: '2',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '6',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '女',
		_sex_: '2',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '7',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '8',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '女',
		_sex_: '2',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '9',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '10',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '11',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '12',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '13',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '15',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	},
	{
		id: '14',
		name: 'William Smith',
		salary: 27000,
		address: '62 Park Road, London',
		age: 18,
		sex: '男',
		_sex_: '1',
		date: '2024-04-02 12:00:00',
		tree: 'Trunk 0-0',
		_tree_: 'Trunk 0-0'
	}
]
// 数据加载
function loadData({ current, pageSize }) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const data = mockData.slice((current - 1) * pageSize, current * pageSize)
			resolve({
				total: 15,
				data
			})
		}, 500)
	})
}
// 刷新数据
function refresh() {
	customTable.value.refresh()
}
// 选中数据行
function selectionChange({ rowKeys, selectRecords }) {
	console.log(rowKeys, selectRecords)
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
					return { console, tableStore: tableDataStore, record }
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
				<a-dropdown>
					<a>
						更多 <icon-down />
					</a>
					<template
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
					></template>
				</a-dropdown>
			</div>
		)
	}
	tableColumns.push(actionColumn)
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
