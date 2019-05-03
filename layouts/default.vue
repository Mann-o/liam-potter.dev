<template lang="pug">
  .layout-default

    ScrollMonitor

    MainHeader

    WidthContainer
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
    WidthContainer: () => import('@/components/layout/WidthContainer'),
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/utilities/reset'

@import '~assets/styles/typography/fonts'
@import '~assets/styles/typography/headings'

@import '~assets/styles/elements/links'
</style>

<style lang="stylus" scoped>
.page
  padding: 8rem 0
</style>
