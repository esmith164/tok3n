<template>
  <div class="landing">
    <Header />
  </div>
</template>
<style lang="scss">
#app {
  @apply bg-light;
}
</style>
<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>