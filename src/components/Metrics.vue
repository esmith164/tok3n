<template>
  <div class="metrics-component">
    <div class="w-9 h-9 bg-black rounded-xl flex items-center justify-center mx-auto mb-6" data-aos="zoom-in">
      <Bolt />
    </div>
    <h2 class="text-2xl text-center font-bold" data-aos="fade-down">Utilize Every Service of TO3KN</h2>
    <h4 class="text-[#667085] text-center text-base mb-8" data-aos="fade-down">Everything you need to launch a successful token</h4>
    <ul class="metric-items">
      <li v-for="(metric, idx) in metrics" :key="idx">
        <h2 data-aos="zoom-in">{{ metric.value }}</h2>
        <h4 data-aos="fade-down">{{ metric.name }}</h4>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.metrics-component {
  .metric-items {
    @apply flex flex-col gap-y-10;
    li{
      h2 {
        @apply text-4xl font-bold text-center;
      }
      h4 {
        @apply text-xl font-light text-center;
      }
    }
  }
}
</style>
<script>
import Bolt from "@/components/icons/Bolt.vue";
export default {
  components: {
    Bolt,
  },
  setup() {
    const metrics = [
      {
        name: "Clients",
        value: "50+",
      },
      {
        name: "Presale Sellouts",
        value: "15+",
      },
      {
        name: "1 mil Marketcap Tokens",
        value: "8+",
      },
    ];
    return {
      metrics,
    };
  },
};
</script>