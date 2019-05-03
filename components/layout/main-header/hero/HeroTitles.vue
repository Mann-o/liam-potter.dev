<template lang="pug">
  .hero__titles
    h1 Liam Potter
    p.hero__titles__tagline Dad, Husband, Web Developer, Gamer. In that order.
</template>

<script>
export default {
  name: 'HeroTitles',
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins/bem'

.hero
  +has(titles)
    padding-top: 4rem
    padding-bottom: 2rem
    color: #fff

    h1::after
      content: '_'

    +has(tagline)
      font-size: 2rem
      letter-spacing: 1px
      word-spacing: 3px
</style>
