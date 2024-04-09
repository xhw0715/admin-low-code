export default [
	{
		name: '姓名',
		alias: 'name',
		type: 'input'
	},
	{
		name: '年龄',
		alias: 'age',
		type: 'number',
		min: 1,
		max: 100
	},
	{
		name: '性别',
		alias: 'sex',
		type: 'select',
		options: [
			{
				label: '男',
				value: '1'
			},
			{
				label: '女',
				value: '2'
			}
		]
	},
	{
		name: '日期',
		alias: 'date',
		type: 'date',
		showTime: false
	},
	{
		name: '地址',
		alias: 'address',
		type: 'cascader',
		options: [
			{
				value: 'beijing',
				label: 'Beijing',
				children: [
					{
						value: 'chaoyang',
						label: 'ChaoYang',
						children: [
							{
								value: 'datunli',
								label: 'Datunli'
							}
						]
					},
					{
						value: 'haidian',
						label: 'Haidian'
					},
					{
						value: 'dongcheng',
						label: 'Dongcheng'
					},
					{
						value: 'xicheng',
						label: 'Xicheng',
						children: [
							{
								value: 'jinrongjie',
								label: 'Jinrongjie'
							},
							{
								value: 'tianqiao',
								label: 'Tianqiao'
							}
						]
					}
				]
			},
			{
				value: 'shanghai',
				label: 'Shanghai',
				children: [
					{
						value: 'huangpu',
						label: 'Huangpu'
					}
				]
			}
		]
	},
	{
		name: '树选择',
		alias: 'tree',
		type: 'tree',
		options: [
			{
				title: 'Trunk 0-0',
				value: 'Trunk 0-0',
				key: '0-0',
				children: [
					{
						title: 'Leaf 0-0-1',
						value: 'Leaf 0-0-1',
						key: '0-0-1'
					},
					{
						title: 'Branch 0-0-2',
						value: 'Branch 0-0-2',
						key: '0-0-2',
						children: [
							{
								title: 'Leaf 0-0-2-1',
								value: 'Leaf 0-0-2-1',
								key: '0-0-2-1'
							}
						]
					}
				]
			},
			{
				title: 'Trunk 0-1',
				value: 'Trunk 0-1',
				key: '0-1',
				children: [
					{
						title: 'Branch 0-1-1',
						value: 'Branch 0-1-1',
						key: '0-1-1',
						checkable: false,
						children: [
							{
								title: 'Leaf 0-1-1-1',
								value: 'Leaf 0-1-1-1',
								key: '0-1-1-1'
							},
							{
								title: 'Leaf 0-1-1-2',
								value: 'Leaf 0-1-1-2',
								key: '0-1-1-2',
								disabled: true
							}
						]
					},
					{
						title: 'Leaf 0-1-2',
						value: 'Leaf 0-1-2',
						key: '0-1-2'
					}
				]
			}
		]
	}
]
