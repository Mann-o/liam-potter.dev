<template lang="pug">
  .layout-default

    ScrollMonitor

    MainHeader

    main.page
      nuxt

    footer.main-footer
</template>

<script>
export default {
  name: 'LayoutDefault',

  components: {
    MainHeader: () => import('@/components/layout/main-header/MainHeader'),
    ScrollMonitor: () => import('@/components/utility/ScrollMonitor'),
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/utilities/reset'

@import '~assets/styles/typography/fonts'
</style>
