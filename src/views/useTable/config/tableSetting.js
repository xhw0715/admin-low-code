export default {
	rowKey: 'id',
	bordered: true, // 是否显示边框
	hoverable: true, // 是否显示选中效果
	stripe: false, // 是否开启斑马纹效果
	size: 'medium', // 表格的大小 'mini' | 'small' | 'medium' | 'large'
	rowSelection: {
		type: 'checkbox',
		showCheckedAll: true,
		onlyCurrent: false,
		checkStrictly: true
	},
	pagination: {
		current: 1,
		pageSize: 20,
		showTotal: true,
		showPageSize: true
	}
}
