<template lang="pug">
  li.main-navigation__link(:class="{ 'main-navigation__link--floating': pageIsScrolled }")
    nuxt-link(:to="link.to") {{ link.label }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainNavigationLink',

  props: {
    link: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState('scroll', [
      'pageIsScrolled',
    ]),
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/variables'
@import '~assets/styles/mixins/bem'

.main-navigation
  +has(link)
    text-transform: uppercase
    font-weight: 700

    &::after
      content: '_'
      color: rgba(255, 255, 255, 0)
      transition: color 0.2s

    &:hover
      &::after
        color: rgba(255, 255, 255, 0.5)
      a
        opacity: 0.5

    &:not(:first-of-type)
      margin-left: 4rem

    a
      color: #fff
      text-decoration: none
      font-size: 1.6rem

    +is(floating)
      &:hover
        &::after
          color: $colors.primary

        a
          opacity: 1
          color: $colors.primary

      a
        color: #555
</style>
