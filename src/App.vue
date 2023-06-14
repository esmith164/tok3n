<template>
  <div class="landing">
    <Header />
    <!-- Services Wrapper -->
    <div class="container mx-auto" id="services">
      <div class="grid grid-cols-3 gap-x-24 gap-y-20 pb-20">
        <div class="col-span-3">
          <h2
            class="text-dark text-[60px] font-light text-center tracking-[-4px]"
            data-aos="fade-down"
          >
            Services
          </h2>
        </div>
        <div class="col-span-3 lg:col-span-2">
          <Services />
        </div>
        <div class="col-span-3 lg:col-span-1">
          <Metrics />
        </div>
      </div>
    </div>
    <Fit  />
    <!-- Contact Wrapper -->
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-x-24 gap-y-20 pb-20">
        <div class="col-span-3 lg:col-span-2">
          <Contact />
        </div>
        <div class="col-span-3 lg:col-span-1">
          <About />
        </div>
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
import Header from "./components/Header.vue";
import Services from "./components/Services.vue";
import Metrics from "./components/Metrics.vue";
import Fit from "./components/Fit.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
export default {
  components: {
    Header,
    Services,
    Metrics,
    Fit,
    Contact,
    About,
  },
};
</script>