<template>
	<div>
		<a-space>
			<component :is="item.component" v-for="(item, index) in toolbars" :key="index" />
		</a-space>
	</div>
</template>

<script setup lang="jsx">
import { computed } from 'vue'

const props = defineProps({
	columns: {
		type: Array,
		default: () => []
	}
})
const toolbars = computed(() => {
	return props.columns
})
function handleClick() {
	console.log('click')
}
defineExpose({
	handleClick
})
</script>

<script lang="jsx">
export default {
	name: 'Toolbar'
}
</script>

<style scoped></style>
