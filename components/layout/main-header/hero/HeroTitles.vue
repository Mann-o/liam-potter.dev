<template lang="pug">
  .hero__titles
    h1 Liam Potter
    h2 Dad, Husband, Web Developer, Gamer. In that order.
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
    color: red

    h1::after
      content: '_'
</style>
