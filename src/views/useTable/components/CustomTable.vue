<template>
	<div class="table-box">
		<a-table
			v-bind="{ ...tableSetting }"
			:pagination="pagination"
			:columns="columns"
			:data="tableData"
			:scroll="scroll"
			:loading="loading"
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
import { reactive, ref, watch, onBeforeMount } from 'vue'
import cloneDeep from 'lodash/cloneDeep'
import { getUniqueArray } from '@/utils/util'

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
	},
	data: {
		type: Function
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

const emits = defineEmits(['selectionChange'])
// 选中数据
function selectionChange(rowKeys) {
	const selectRecords = tableAllData.filter((item, index) => {
		return rowKeys.some((key) => key === item[tableSetting.rowKey])
	})
	emits('selectionChange', { rowKeys, selectRecords })
}
function pageChange(page) {
	pagination.current = page
	loadData()
}
function pageSizeChange(pageSize) {
	pagination.current = 1
	pagination.pageSize = pageSize
	loadData()
}

/**
 * 表格重新加载方法
 * 如果参数为 true, 则强制刷新到第一页
 * @param Boolean bool
 */
function refresh(bool = true) {
	if (bool) {
		this.loadData({ current: 1, pageSize: pagination.pageSize })
	} else {
		this.loadData()
	}
}
/**
 * 表格数据
 * tableData 当前请求数据
 * tableAllData 请求过的数据，根据rowKey去重
 */
let tableData = reactive([])
let tableAllData = []
const loading = ref(false)
function loadData() {
	loading.value = true
	const result = props.data(pagination)
	if ((typeof result === 'object' || typeof result === 'function') && typeof result.then === 'function') {
		result.then((res) => {
			pagination.total = res.total
			tableData = res.data || []
			tableAllData = [...tableAllData, ...tableData]
			tableAllData = getUniqueArray(tableAllData, tableSetting.rowKey)
			loading.value = false
		})
	}
}

onBeforeMount(() => {
	loadData()
})

// 暴露api
defineExpose({
	refresh
})
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
