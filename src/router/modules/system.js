import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/shadow/system',
  name: 'shadow-system',
  meta,
  redirect: { name: 'shadow-system-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'admin', name: `${pre}index`, component: _import('shadow/system/admin'), meta: { ...meta, title: '后台用户管理' } },
    { path: 'role', name: `${pre}index`, component: _import('shadow/system/role'), meta: { ...meta, title: '角色管理' } },
    { path: 'node', name: `${pre}index`, component: _import('shadow/system/node'), meta: { ...meta, title: '节点管理' } }
  ])('shadow-system-')
}
