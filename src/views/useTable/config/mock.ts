import Mock from 'mockjs'
import setupMock, { successResponseWrap } from '@/utils/setup-mock'
import { parseQueryParams } from '@/utils/util'

const searchColumn = [
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
const tableSetting = {
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
const tableColumn = [
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
		renderStr: `<a-tag checkable color="arcoblue" :default-checked="true">{{record.age}}</a-tag>`
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
const toolbar = [
	{
		id: '10',
		listorder: '10',
		name: '添加',
		bar_alias: 'sys_add',
		bar_sys: '1',
		menu_type: 'bar',
		display: '1',
		style: 'primary',
		attribute:
			"<a-button type=\"primary\" @click=\"onShow({ title: '添加', url: '/admin/UserTable/add', tplviewid: '', width: '1400' })\" ><template #icon><icon-plus /></template>添加</a-button>",
		barmenupriv: ''
	},
	{
		id: '30',
		listorder: '30',
		name: '批量编辑',
		bar_alias: 'sys_bulkedit',
		bar_sys: '1',
		menu_type: 'bar',
		display: '1',
		style: 'default',
		attribute: `
    <a-button @click="() => { console.log('状态共享', tableStore) }">
      测试
    </a-button>`,
		barmenupriv: '[{"priv":"visit","type":"role","privdata":"c4ca4238a0b923820dcc509a6f75849b","id":"c4ca4238a0b923820dcc509a6f75849b"}]'
	},
	{
		id: '40',
		listorder: '40',
		name: '导入',
		bar_alias: 'bar_import',
		bar_sys: '1',
		menu_type: 'bar',
		display: '1',
		style: 'default',
		attribute:
			'<a-button icon="upload" @click="parent.onImport({barData: {&quot;id&quot;:&quot;40&quot;,&quot;listorder&quot;:&quot;40&quot;,&quot;name&quot;:&quot;导入&quot;,&quot;bar_alias&quot;:&quot;bar_import&quot;,&quot;bar_sys&quot;:&quot;1&quot;,&quot;menu_type&quot;:&quot;bar&quot;,&quot;display&quot;:&quot;1&quot;,&quot;style&quot;:&quot;default&quot;,&quot;attribute&quot;:&quot;&lt;a-button icon=\\&quot;upload\\&quot; @click=\\&quot;parent.onImport({barData: {$barData}})\\&quot;&gt;导入&lt;\\/a-button&gt;&quot;,&quot;barmenupriv&quot;:&quot;&quot;,&quot;bartemplate&quot;:&quot;{\\&quot;modal\\&quot;:{\\&quot;modalName\\&quot;:\\&quot;客户导入模板\\&quot;,\\&quot;action\\&quot;:[\\&quot;add\\&quot;,\\&quot;edit\\&quot;,\\&quot;addEdit\\&quot;],\\&quot;maxRows\\&quot;:\\&quot;\\&quot;,\\&quot;fieldsList\\&quot;:[{\\&quot;alias\\&quot;:\\&quot;khjb\\&quot;,\\&quot;formtype\\&quot;:\\&quot;combobox\\&quot;,\\&quot;modalName\\&quot;:\\&quot;客户类别\\&quot;,\\&quot;name\\&quot;:\\&quot;客户类别\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;},{\\&quot;alias\\&quot;:\\&quot;kehu_ymscid\\&quot;,\\&quot;formtype\\&quot;:\\&quot;text\\&quot;,\\&quot;modalName\\&quot;:\\&quot;客户云米商城ID\\&quot;,\\&quot;name\\&quot;:\\&quot;客户云米商城ID\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;},{\\&quot;alias\\&quot;:\\&quot;khdh1\\&quot;,\\&quot;formtype\\&quot;:\\&quot;text\\&quot;,\\&quot;modalName\\&quot;:\\&quot;客户电话\\&quot;,\\&quot;name\\&quot;:\\&quot;客户电话\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;},{\\&quot;alias\\&quot;:\\&quot;xb\\&quot;,\\&quot;formtype\\&quot;:\\&quot;radio\\&quot;,\\&quot;modalName\\&quot;:\\&quot;性别\\&quot;,\\&quot;name\\&quot;:\\&quot;性别\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;},{\\&quot;alias\\&quot;:\\&quot;sr\\&quot;,\\&quot;formtype\\&quot;:\\&quot;datetime\\&quot;,\\&quot;modalName\\&quot;:\\&quot;生日\\&quot;,\\&quot;name\\&quot;:\\&quot;生日\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;},{\\&quot;alias\\&quot;:\\&quot;xxdz\\&quot;,\\&quot;formtype\\&quot;:\\&quot;text\\&quot;,\\&quot;modalName\\&quot;:\\&quot;详细地址\\&quot;,\\&quot;name\\&quot;:\\&quot;详细地址\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;},{\\&quot;alias\\&quot;:\\&quot;khmc\\&quot;,\\&quot;formtype\\&quot;:\\&quot;text\\&quot;,\\&quot;modalName\\&quot;:\\&quot;客户名称\\&quot;,\\&quot;name\\&quot;:\\&quot;客户名称\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;},{\\&quot;alias\\&quot;:\\&quot;zhuanshu_kf\\&quot;,\\&quot;formtype\\&quot;:\\&quot;organization\\&quot;,\\&quot;modalName\\&quot;:\\&quot;专属客服\\&quot;,\\&quot;name\\&quot;:\\&quot;专属客服\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;},{\\&quot;alias\\&quot;:\\&quot;zhxgr\\&quot;,\\&quot;formtype\\&quot;:\\&quot;text\\&quot;,\\&quot;modalName\\&quot;:\\&quot;最后修改人\\&quot;,\\&quot;name\\&quot;:\\&quot;最后修改人\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;},{\\&quot;alias\\&quot;:\\&quot;zhxgsj\\&quot;,\\&quot;formtype\\&quot;:\\&quot;datetime\\&quot;,\\&quot;modalName\\&quot;:\\&quot;最后修改时间\\&quot;,\\&quot;name\\&quot;:\\&quot;最后修改时间\\&quot;,\\&quot;regexp\\&quot;:\\&quot;\\&quot;,\\&quot;required\\&quot;:\\&quot;0\\&quot;,\\&quot;unique\\&quot;:\\&quot;0\\&quot;}]},\\&quot;event\\&quot;:{\\&quot;lookup\\&quot;:\\&quot;0\\&quot;,\\&quot;workflow\\&quot;:\\&quot;0\\&quot;,\\&quot;sync\\&quot;:\\&quot;0\\&quot;,\\&quot;custom_event\\&quot;:\\&quot;1\\&quot;}}&quot;}})">导入</a-button>',
		barmenupriv: '',
		bartemplate:
			'{"modal":{"modalName":"客户导入模板","action":["add","edit","addEdit"],"maxRows":"","fieldsList":[{"alias":"khjb","formtype":"combobox","modalName":"客户类别","name":"客户类别","regexp":"","required":"0","unique":"0"},{"alias":"kehu_ymscid","formtype":"text","modalName":"客户云米商城ID","name":"客户云米商城ID","regexp":"","required":"0","unique":"0"},{"alias":"khdh1","formtype":"text","modalName":"客户电话","name":"客户电话","regexp":"","required":"0","unique":"0"},{"alias":"xb","formtype":"radio","modalName":"性别","name":"性别","regexp":"","required":"0","unique":"0"},{"alias":"sr","formtype":"datetime","modalName":"生日","name":"生日","regexp":"","required":"0","unique":"0"},{"alias":"xxdz","formtype":"text","modalName":"详细地址","name":"详细地址","regexp":"","required":"0","unique":"0"},{"alias":"khmc","formtype":"text","modalName":"客户名称","name":"客户名称","regexp":"","required":"0","unique":"0"},{"alias":"zhuanshu_kf","formtype":"organization","modalName":"专属客服","name":"专属客服","regexp":"","required":"0","unique":"0"},{"alias":"zhxgr","formtype":"text","modalName":"最后修改人","name":"最后修改人","regexp":"","required":"0","unique":"0"},{"alias":"zhxgsj","formtype":"datetime","modalName":"最后修改时间","name":"最后修改时间","regexp":"","required":"0","unique":"0"}]},"event":{"lookup":"0","workflow":"0","sync":"0","custom_event":"1"}}'
	},
	{
		id: '50',
		listorder: '50',
		name: '导出',
		bar_alias: 'bar_export',
		bar_sys: '1',
		menu_type: 'bar',
		display: '1',
		style: 'default',
		attribute:
			'<a-button icon="download" @click="parent.onExport({barData: {&quot;id&quot;:&quot;50&quot;,&quot;listorder&quot;:&quot;50&quot;,&quot;name&quot;:&quot;导出&quot;,&quot;bar_alias&quot;:&quot;bar_export&quot;,&quot;bar_sys&quot;:&quot;1&quot;,&quot;menu_type&quot;:&quot;bar&quot;,&quot;display&quot;:&quot;1&quot;,&quot;style&quot;:&quot;default&quot;,&quot;attribute&quot;:&quot;&lt;a-button icon=\\&quot;download\\&quot; @click=\\&quot;parent.onExport({barData: {$barData}})\\&quot;&gt;导出&lt;\\/a-button&gt;&quot;,&quot;barmenupriv&quot;:&quot;[{\\&quot;priv\\&quot;:\\&quot;visit\\&quot;,\\&quot;type\\&quot;:\\&quot;role\\&quot;,\\&quot;privdata\\&quot;:\\&quot;c4ca4238a0b923820dcc509a6f75849b\\&quot;,\\&quot;id\\&quot;:\\&quot;c4ca4238a0b923820dcc509a6f75849b\\&quot;},{\\&quot;priv\\&quot;:\\&quot;visit\\&quot;,\\&quot;type\\&quot;:\\&quot;role\\&quot;,\\&quot;privdata\\&quot;:\\&quot;a371b34606aebe7ca76c7ad3570629d7\\&quot;,\\&quot;id\\&quot;:\\&quot;a371b34606aebe7ca76c7ad3570629d7\\&quot;},{\\&quot;priv\\&quot;:\\&quot;visit\\&quot;,\\&quot;type\\&quot;:\\&quot;role\\&quot;,\\&quot;privdata\\&quot;:\\&quot;3466dcb03de1d7444add8aa4d4a559c2\\&quot;,\\&quot;id\\&quot;:\\&quot;3466dcb03de1d7444add8aa4d4a559c2\\&quot;}]&quot;}})">导出</a-button>',
		barmenupriv:
			'[{"priv":"visit","type":"role","privdata":"c4ca4238a0b923820dcc509a6f75849b","id":"c4ca4238a0b923820dcc509a6f75849b"},{"priv":"visit","type":"role","privdata":"a371b34606aebe7ca76c7ad3570629d7","id":"a371b34606aebe7ca76c7ad3570629d7"},{"priv":"visit","type":"role","privdata":"3466dcb03de1d7444add8aa4d4a559c2","id":"3466dcb03de1d7444add8aa4d4a559c2"}]'
	},
	{
		id: '1656063194397',
		listorder: '80',
		name: '升级客户类别',
		bar_sys: '0',
		attribute:
			"<a-button @click=\"() => {\n    parent.$refs.userTableComponents.show({\n        coms: 'crm/ConfigAction',\n        ref: 'ConfigAction',\n        parentThis: parent,\n        title: '升级客户类别'\n    })\n    if(parent.selectedRows.length === 0) {\n    \tparent.$message.info('请选择要升级的客户')\n       return\n    }\n    let arr = parent.selectedRows.map(item => item._khjb_)\n   \tlet arrParam = {}\n    parent.selectedRows.forEach(item => {\n    \tarrParam[item.id] = item.khbh\n    })\n    parent.axios({\n    \turl: 'admin/UserTable/init',\n    \tparams: {\n    \t  pageNo: 1,\n    \t  pageSize: 999,\n    \t  sortField: 'yxj',\n    \t  sortOrder: 'descend',\n    \t  flowStatus: 'proceed'\n    \t},\n      data: {\n      \tassociated: [],\n       customColumns: [],\n      \ttplviewid: 'e18d66689174102a73f74b78309ce734'\n      }\n    }).then(res => {\n     let selectList = []\n     res.result.data.map((item, index) => { \n       \tselectList.push({ name: item.khjb, number: item._khjb_, index: parseInt(item.yxj) } )\n     })\n     let LastNum = -1\n     arr.map(item => {\n     \tselectList.map(itemSel => {\n       \t if(item === itemSel.number && LastNum < itemSel.index) {\n          LastNum = itemSel.index\n         }\n       })\n     })\n     let resultList = []\n     selectList.map(item => { \n     \tif(LastNum < item.index) {\n       \tresultList.push(item)\n       }\n     })\n     parent.$refs.userTableComponents.$refs.ConfigAction.show({\n         title: '升级客户类别',\n         parent: parent,\n         placeholder: '请选择您需要升级的客户类别',\n         url: 'crm/Customer/batchEditUserlevel',\n         type: 'select',\n         alias: 'promote',\n         width: 500,\n         selectList: resultList,\n         param: {\n         \tid_khbh: arrParam\n         }\n     })\n    })\n}\">升级客户类别</a-button>",
		menu_type: 'bar',
		display: '1',
		setting_type: 'no',
		style: 'default',
		barmenupriv: ''
	}
]
const lineMenu = [
	{
		id: '10',
		listorder: '10',
		name: '查看',
		bar_alias: 'sys_add',
		bar_sys: '1',
		menu_type: 'bar',
		display: '1',
		style: 'primary',
		attribute: "<a-link  @click=\"handleView({ title: '添加', url: '/admin/UserTable/add', tplviewid: '', width: '1400' })\" >查看</a-link>",
		barmenupriv: ''
	},
	{
		id: '20',
		listorder: '20',
		name: '编辑',
		bar_alias: 'sys_bulkedit',
		bar_sys: '1',
		menu_type: 'bar',
		display: '1',
		style: 'default',
		attribute: `
    <a-link @click="() => { console.log('编辑', tableStore, '11111', lineMenu) }">
      编辑
    </a-link>`,
		barmenupriv: '[{"priv":"visit","type":"role","privdata":"c4ca4238a0b923820dcc509a6f75849b","id":"c4ca4238a0b923820dcc509a6f75849b"}]'
	},
	{
		id: '30',
		listorder: '30',
		name: '删除',
		bar_alias: 'sys_bulkedit',
		bar_sys: '1',
		menu_type: 'bar',
		display: '1',
		style: 'default',
		attribute: `
    <a-link style="color: #f53f3f" @click="() => { console.log('删除', tableStore) }">
     删除
    </a-link>`
	}
]
const tableData = [
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

setupMock({
	setup() {
		Mock.mock(new RegExp('/api/useTable/setting'), () => {
			return successResponseWrap({
				searchColumn,
				tableColumn,
				tableSetting,
				lineMenu,
				toolbar
			})
		})

		Mock.mock(new RegExp('/api/useTable/data'), (params) => {
			const param = parseQueryParams(params.url)
			const { current, pageSize } = param
			return successResponseWrap({
				data: tableData.slice((current - 1) * pageSize, current * pageSize),
				total: tableData.length
			})
		})
	}
})
