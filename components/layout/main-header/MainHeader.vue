<template lang="pug">
  header.main-header
    WidthContainer
      MainNavigation
      Hero
</template>

<script>
export default {
  name: 'MainHeader',

  components: {
    Hero: () => import('./hero/Hero'),
    MainNavigation: () => import('./main-navigation/MainNavigation'),
    WidthContainer: () => import('@/components/layout/WidthContainer'),
  },
}
</script>

<style lang="stylus" scoped>
.main-header
  background-color: #4a4a4a
  padding: 4rem 0
</style>
