<template>
  <div class="fit-component">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 items-center gap-x-20 lg:gap-y-28">
        <p class="lg:order-none mb-20 lg:mb-0 text-center lg:text-left">
          At TOK3N, we go beyond marketing services, equipping you with
          essential tools and expert guidance to ensure the longevity of your
          token. Our mission is to foster enduring communities within the
          dynamic token space.
        </p>
        <div
          class="flex flex-col justify-center items-center order-first lg:order-none mb-8 lg:mb-0"
        >
          <h2 class="text-4xl font-light uppercase mb-3 text-center" >
            Is Tok3n the right fit?
          </h2>
          <Fit />
        </div>
        <div>
          <h2 class="text-4xl font-light uppercase mb-3 text-center">
            Who does Tok3n collaborate with?
          </h2>
          <img
            src="@/assets/img/handshake.png"
            class="mx-auto w-[250px] mb-8 lg:mb-0"
          />
        </div>
        <p class="text-center lg:text-right">
          At TOK3N, we selectively collaborate with exceptional individuals who
          demonstrate true passion and leadership in the industry. Our dedicated
          team is committed to providing tokenomics solutions to capable and
          deserving individuals, both in newly founded and existing web3
          projects.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .fit-component {
    @apply pt-8 lg:pt-28 pb-24;
    p {
      @apply text-xl font-light;
    }
  }
</style>
<script>
import Fit from "@/components/icons/Fit.vue";
export default {
  components: {
    Fit,
  },
};
</script>