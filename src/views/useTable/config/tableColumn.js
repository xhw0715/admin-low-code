export default [
	{
		title: '姓名',
		dataIndex: 'name',
		align: 'center',
		ellipsis: true,
		tooltip: true,
		sortable: true,
		alias: 'name',
		type: 'input'
	},
	{
		title: '年龄',
		alias: 'age',
		dataIndex: 'age',
		width: 60,
		type: 'number',
		align: 'center',
		renderStr: `<a-tag checkable color="arcoblue" default-checked="true">{{record.age}}</a-tag>`
	},
	{
		title: '性别',
		alias: 'sex',
		align: 'center',
		dataIndex: 'sex',
		type: 'select'
	},
	{
		title: '日期',
		alias: 'date',
		dataIndex: 'date',
		align: 'center',
		type: 'date'
	},
	{
		title: '地址',
		dataIndex: 'address',
		alias: 'address',
		align: 'center',
		type: 'cascader'
	},
	{
		title: '树选择',
		alias: 'tree',
		dataIndex: 'tree',
		align: 'center',
		type: 'tree'
	}
]
