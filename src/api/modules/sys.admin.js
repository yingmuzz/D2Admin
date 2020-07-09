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
  }
})
