export default [
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
