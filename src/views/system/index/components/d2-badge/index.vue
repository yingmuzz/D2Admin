<template>
  <div class="d2-badge">
    <p v-for="(group, groupIndex) of badges" :key="groupIndex" align="center">
      <a v-for="(badge, badgeIndex) of group" :key="badgeIndex" :href="badge.link" target="_blank">
        <img :src="badge.img"/>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      badges: [
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
