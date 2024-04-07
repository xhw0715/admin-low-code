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
		attribute: "<a  @click=\"handleView({ title: '添加', url: '/admin/UserTable/add', tplviewid: '', width: '1400' })\" >查看</a>",
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
    <a @click="() => { console.log('编辑', tableStore) }">
      编辑
    </a>`,
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
    <a style="color: #f53f3f" @click="() => { console.log('删除', tableStore) }">
     删除
    </a>`
	}
]
