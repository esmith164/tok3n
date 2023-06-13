<template>
  <div class="landing">
    <Header />
    <div class="grid grid-cols-3">
      <div class="col-span-3">
        <h2 class="text-dark text-[60px] font-light text-center tracking-[-4px]">
          Services
          </h2>
      </div>
      <div class="col-span-2">
        <Services />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#app {
  @apply bg-light;
}
</style>
<script>
import Header from './components/Header.vue'
import Services from './components/Services.vue'
export default {
  components: {
    Header,
    Services
  }
}
</script>