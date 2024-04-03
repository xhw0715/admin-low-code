<template>
	<div class="search-form">
		<a-form ref="formRef" :model="formModel" :label-col-props="{ span: 6 }" :wrapper-col-props="{ span: 18 }" label-align="left">
			<a-row :gutter="16">
				<a-col v-for="(item, index) in columns" :key="index" :span="item.span || 6">
					<a-form-item
						:field="item.alias"
						:label="item.name"
						:label-col-props="item.labelCol || { span: 4 }"
						:wrapper-col-props="item.wrapperCol || { span: 20 }"
					>
						<!-- 单行文本 -->
						<a-input v-if="item.type === 'input'" v-model="formModel[item.alias]" :placeholder="'请输入' + item.name" allow-clear />
						<!-- 数字输入框 -->
						<a-input-number
							v-else-if="item.type === 'number'"
							v-model="formModel[item.alias]"
							:placeholder="item.placeholder || '请输入' + item.name"
							allow-clear
							:min="item.min"
							:max="item.max"
						/>
						<!-- 下拉框、单选框、复选框 -->
						<a-select
							v-else-if="['radio', 'checkbox', 'select', 'switch'].includes(item.type)"
							v-model="formModel[item.alias]"
							multiple
							:placeholder="item.placeholder || '请选择' + item.name"
							allow-clear
							allow-search
							option-filter-prop="children"
						>
							<a-option v-for="(optItem, optIndex) in item.options" :key="optIndex" :value="optItem[(item.props && item.props.value) || 'value']">
								{{ optItem[(item.props && item.porps.label) || 'label'] }}
							</a-option>
						</a-select>
						<!-- 级联选择 -->
						<a-cascader
							v-else-if="item.type === 'cascader'"
							v-model="formModel[item.alias]"
							:placeholder="item.placeholder || '请选择' + item.name"
							:options="item.options"
							:field-names="item.props"
							allow-clear
							allow-search
							multiple
						>
						</a-cascader>
						<!-- 日期 -->
						<a-range-picker
							v-else-if="item.type === 'date'"
							v-model="formModel[item.alias]"
							:show-time="item.showTime"
							:format="item.format || (item.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD')"
						>
						</a-range-picker>
						<!-- 树选择 -->
						<a-tree-select
							v-else-if="item.type === 'tree'"
							v-model="formModel[item.alias]"
							:placeholder="item.placeholder || '请选择' + item.name"
							allow-search
							allow-clear
							tree-checkable
							:tree-check-strictly="item.treeCheckStrictly"
							:data="item.options"
							:field-names="item.props"
						></a-tree-select>
					</a-form-item>
				</a-col>
			</a-row>
		</a-form>
		<div class="search-form-btn">
			<a-space direction="horizontal" :size="18">
				<a-button type="primary" @click="search">
					<template #icon>
						<icon-search />
					</template>
					查询
				</a-button>
				<a-button @click="reset">
					<template #icon>
						<icon-refresh />
					</template>
					重置
				</a-button>
				<template v-if="moredExit">
					<a-link v-if="!moredSearch" @click="changeMoreSearch"> 展开<icon-down /> </a-link>
					<a-link v-else @click="changeMoreSearch"> 收起 <icon-up /> </a-link>
				</template>
			</a-space>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue'

const formModel = ref({})
const formRef = ref(null)
const porps = defineProps({
	columns: {
		type: Array,
		default: () => []
	}
})

// 搜索栏
const columns = computed(() => {
	if (moredSearch.value) {
		return porps.columns
	}
	let spanSum = 0
	const columnArr = porps.columns.filter((item) => {
		if (item.span) {
			spanSum += item.span
		} else {
			spanSum += 6
		}
		return spanSum <= 24
	})
	return columnArr
})

// 是否有展开搜索
const moredExit = computed(() => {
	let flag = false
	if (porps.columns && porps.columns.length > 0) {
		let spanSum = 0
		porps.columns.forEach((item) => {
			if (item.span) {
				spanSum += item.span
			} else {
				spanSum += 6
			}
		})
		if (spanSum > 24) flag = true
	}
	return flag
})
const moredSearch = ref(false)
function changeMoreSearch() {
	moredSearch.value = !moredSearch.value
}

// 搜索和输出数据
const emits = defineEmits(['search'])
function search() {
	emits('search', formModel.value)
}
function reset() {
	formRef.value.resetFields()
	emits('search', formModel.value)
}
</script>

<script>
export default {
	name: 'SearchForm'
}
</script>

<style scoped lang="less">
.search-form {
	padding: 32px 12px 0;
}

.search-form-btn {
	display: flex;
	justify-content: flex-end;
	user-select: none;
}
</style>
