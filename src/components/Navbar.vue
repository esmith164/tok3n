<template>
  <div class="navbar-component">
    <div class="container mx-auto flex">
      <h2>Tok3n</h2>
      <ul class="navbar-links">
        <li><a href="#" v-scroll-to="'#services'">Services</a></li>
        <li><a href="#" v-scroll-to="'#features'">Features</a></li>
        <li><a href="#" v-scroll-to="'#contact'">Contact Us</a></li>
      </ul>
      <div class="w-[133.16px]"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .navbar-component {
    @apply py-8;
    h2 {
      @apply text-4xl uppercase font-light;
    }
    .navbar-links {
      @apply hidden lg:flex mx-auto gap-x-12 justify-center items-center;
      li {
        a {
          @apply text-[22px] duration-200 hover:opacity-50 font-medium text-center block;
        }
      }
    }
  }
</style>