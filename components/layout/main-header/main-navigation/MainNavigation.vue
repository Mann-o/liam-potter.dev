<template lang="pug">
  nav.main-navigation(:class="{ 'main-navigation--floating': pageIsScrolled }")
    WidthContainer
      ul
        MainNavigationLink(
          v-for="(link, index) in links"
          :key="index"
          :link="link"
        )
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainNavigation',

  components: {
    MainNavigationLink: () => import('./MainNavigationLink.vue'),
    WidthContainer: () => import('@/components/layout/WidthContainer'),
  },

  data: () => ({
    links: [
      { to: '/', label: 'Hello' },
      { to: '/cv', label: 'CV' },
    ],
  }),

  computed: {
    ...mapState('scroll', [
      'pageIsScrolled',
    ]),
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'

.main-navigation
  position: fixed
  top: 0
  left: 0
  right: 0
  padding: 4rem 0
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0)
  transition: box-shadow 0.2s, background-color 0.2s

  +is(floating)
    background-color: #fff
    box-shadow: 0 1px 2px 0 #000

  ul
    display: flex
</style>
