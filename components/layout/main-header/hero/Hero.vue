<template lang="pug">
  section.hero
    HeroTitles
</template>

<script>
export default {
  name: 'Hero',

  components: {
    HeroTitles: () => import('./HeroTitles'),
  },
}
</script>
