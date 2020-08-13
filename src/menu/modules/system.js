export default {
  path: '/shadow/system',
  title: '系统设置',
  icon: 'cogs',
  children: (pre => [
    { path: `${pre}admin`, title: '后台用户管理', icon: 'user' },
    { path: `${pre}role`, title: '角色管理', icon: 'users' },
    { path: `${pre}node`, title: '节点管理', icon: 'bars' }
  ])('/shadow/system/')
}
