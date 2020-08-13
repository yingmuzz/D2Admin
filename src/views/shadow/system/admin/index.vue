<template>
  <d2-container>
    <admin-page-header
      slot="header"
      @submit="handleSubmit"
      ref="header"/>
    <d2-crud
      :columns="columns"
      :data="data"
      :loading="loading"
      :options="options"
      :rowHandle="rowHandle"
      @row-remove="handleRowRemove"
      @row-edit="handleRowEdit"
      @dialog-cancel="handleDialogCancel"
      @custom-google="handleCustomGoogle"/>
    <common-page-footer
      slot="footer"
      ref="footer"
      :current="page.curent"
      :size="page.size"
      :total="page.total"
      @change="handlePaginationChange"/>
  </d2-container>
</template>

<script>

import AdminStatus from './componnets/Status'

export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'shadow-system-admin',
  components: {
    AdminPageHeader: () => import('./componnets/PageHeader'),
    CommonPageFooter: () => import('@/views/common/PageFooter')
  },
  data () {
    return {
      columns: [
        {
          title: '用户编号',
          key: 'user_id',
          align: 'center',
          minWidth: '20px'
        },
        {
          title: '账号',
          key: 'account',
          align: 'center'
        },
        {
          title: '状态',
          key: 'status',
          align: 'center',
          component: {
            name: AdminStatus
          }
        },
        {
          title: '新增时间',
          key: 'add_time',
          align: 'center'
        }
      ],
      data: [],
      rowHandle: {
        minWidth: '100px',
        align: 'center',
        edit: {
          icon: 'el-icon-edit',
          text: '编辑',
          size: 'small',
          show (index, row) {
            if (row.permission_btn_edit) {
              return true
            }
            return false
          }
        },
        custom: [
          {
            icon: 'el-icon-info',
            text: '查看Google授权码',
            type: 'warning',
            size: 'small',
            emit: 'custom-google',
            show (index, row) {
              if (row.permission_btn_google) {
                return true
              }
              return false
            }
          }
        ],
        remove: {
          icon: 'el-icon-remove',
          size: 'small',
          fixed: 'right',
          text: '禁用',
          confirm: true,
          confirmTitle: '提示',
          confirmText: '您确定要禁用此用户吗？',
          show (index, row) {
            if (row.permission_btn_del) {
              return true
            }
            return false
          }
        }
      },
      formOptions: {
        labelWidth: '800px',
        labelPosition: 'left',
        saveLoading: false
      },
      options: {
        border: true,
        stripe: true
      },
      loading: false,
      page: {
        current: 1,
        size: 10,
        total: 0
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async handlePaginationChange (val) {
      this.page = {
        current: val.current,
        size: val.size,
        total: val.total
      }
      this.fetchData()
    },
    paginationCurrentChange (currentPage) {
      this.fetchData()
    },
    fetchData () {
      this.loading = true
      this.page.status = -1
      if (typeof (this.$refs.header) !== 'undefined') {
        this.page.status = this.$refs.header.form.status
      }
      this.$api.SYS_ADMIN_QUERY({
        ...this.page
      }).then(res => {
        this.loading = false
        this.data = res.list
        this.page.total = res.pagination.total
      }).catch(err => {
        this.loading = false
      })
    },
    handleSubmit (form) {
      this.fetchData()
    },
    handleRowRemove ({ index, row }, done) {
      this.loading = true
      this.$api.SYS_ADMIN_DISABLE({
        user_id: row.user_id
      }).then(res => {
        this.$message({
          message: '用户禁用成功',
          type: 'success'
        })
        this.fetchData()
      }).catch(err => {
        this.loading = false
      })
    },
    handleRowEdit ({ index, row }, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        // done可以传入一个对象来修改提交的某个字段
        done({
          address: '我是通过done事件传入的数据！'
        })
        this.formOptions.saveLoading = false
      }, 300)
    },
    handleDialogCancel (done) {
      this.$message({
        message: '取消编辑',
        type: 'warning'
      })
      done()
    },
    handleCustomGoogle ({ index, row }) {
      console.log(index)
      console.log(row)
    }
  }
}
</script>
