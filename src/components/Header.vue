<template>
  <div class="header-component">
    <Navbar />
    <div class="container mx-auto mt-[10%]">
      <h1 class="-mb-4">TOK3NIZE</h1>
      <h1 class="mb-4">Your Web 3 Vision</h1>
      <p>
        Unlock the true potential of your project with TOK3N's all-in-one
        solution.
      </p>
      <a
        href="#contact"
        class="bg-red mx-auto w-[250px] rounded-lg duration-200 hover:opacity-50 flex h-[70px] items-center justify-center text-lg"
        >Start using TOK3N</a
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .header-component {
    @apply h-screen flex flex-col;
    .container {
      
    }
    h1 {
      @apply text-[85px] font-light text-center uppercase;
    }
    p {
      @apply text-lg text-center md:w-[600px] mx-auto mb-6;
    }
  }
</style>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>