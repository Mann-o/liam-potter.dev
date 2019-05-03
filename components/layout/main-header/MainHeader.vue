<template lang="pug">
  header.main-header
    nav: ul
      li(v-for="({ to, label }, index) in links" :key="index")
        nuxt-link(:to="to") {{ label }}

    Hero
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainHeader',

  components: {
    Hero: () => import('./hero/Hero'),
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
