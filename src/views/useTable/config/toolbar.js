export default [
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
