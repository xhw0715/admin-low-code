<template>
	<div class="table-box">
		<a-table
			v-bind="{ ...tableSetting }"
			:pagination="pagination"
			:columns="columns"
			:data="data"
			:scroll="scroll"
			@selection-change="selectionChange"
			@page-change="pageChange"
			@page-size-change="pageSizeChange"
		>
			<template #index="{ rowIndex }">
				{{ rowIndex + 1 + (pagination.current - 1) * pagination.pageSize }}
			</template>
		</a-table>
	</div>
</template>

<script setup lang="jsx">
import { reactive, ref, watch } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

// 设置表格高度
const scroll = ref({
	y: 'calc(100vh - 340px)'
})
// 获取配置、列表字段
const props = defineProps({
	setting: {
		type: Object,
		default: () => {
			return {}
		}
	},
	column: {
		type: Array,
		default: () => []
	}
})
let tableSetting = reactive({})
let pagination = reactive({
	current: 1,
	pageSize: 10
})
watch(
	() => {
		return props.setting
	},
	(setting) => {
		tableSetting = setting
		if (setting.pagination) {
			pagination = setting.pagination
		}
	},
	{
		immediate: true,
		deep: true
	}
)
let columns = reactive([])
watch(
	() => {
		return props.column
	},
	(column) => {
		columns = cloneDeep(column)
		columns.unshift({
			title: '#',
			dataIndex: 'index',
			slotName: 'index',
			width: 50,
			align: 'center'
		})
	},
	{
		immediate: true,
		deep: true
	}
)

// emit传递数据给父组件
const emits = defineEmits(['pageChange', 'pageSizeChange'])
function selectionChange(rowKeys) {
	console.log('rowKeys: ', rowKeys)
}
function pageChange(page) {
	pagination.current = page
	emits('pageChange', page)
}
function pageSizeChange(pageSize) {
	pagination.pageSize = pageSize
	emits('pageSizeChange', pageSize)
}

const data = reactive([
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
])
</script>

<script lang="jsx">
export default {
	name: 'CustomTable'
}
</script>

<style scoped>
.table-box {
	margin-top: 12px;
}
</style>
