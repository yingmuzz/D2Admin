<template>
  <el-tag :type="type">{{ text }}</el-tag>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    }
  },
  computed: {
    type () {
      var color = 'success'
      if (0 == this.value) {
        color = 'danger'
      }
      return color
    },
    text () {
      var text = '使用中'
      if (0 == this.value) {
        text = '已禁用'
      }
      return text
    }
  },
  methods: {
  }
}
</script>
