export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_ADMIN_LOGIN (data = {}) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  },
  /**
   * @description 退出登录
   * @param {Object} data 退出登录携带的信息
   */
  SYS_ADMIN_LOGOUT (data = {}) {
    return request({
      url: '/logout',
      method: 'post',
      data
    })
  },
  /**
   * @description 退出登录
   * @param {Object} data 退出登录携带的信息
   */
  SYS_ADMIN_QUERY (data = {}) {
    return request({
      url: '/admin/query',
      method: 'post',
      data
    })
  },
  /**
   * @description 禁用用户
   * @param {Object} data 参数
   */
  SYS_ADMIN_DISABLE (data = {}) {
    return request({
      url: '/admin/disable',
      method: 'post',
      data
    })
  }
})
