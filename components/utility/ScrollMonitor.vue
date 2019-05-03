<template lang="pug">
  .scroll-monitor
</template>

<script>
export default {
  name: 'ScrollMonitor',

  data: () => ({
    debounce: null,
  }),

  mounted () {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll({ init: true })
    }
  },

  beforeDestroy () {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  methods: {
    handleScroll ({ init = false }) {
      if (init) {
        this.$store.dispatch('scroll/handle', (window.scrollY > 0))
      } else {
        clearTimeout(this.debounce)
        this.debounce = setTimeout(() => {
          this.$store.dispatch('scroll/handle', (window.scrollY > 0))
        }, 50)
      }
    },
  },
}
</script>
