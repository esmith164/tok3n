<template>
  <div class="services-component">
    <div class="service-item" v-for="(service, idx) in services" :key="idx">
      <div class="icon-wrapper" data-aos="fade-down">
        <div class="icon" >
          <component :is="service.icon"></component>
        </div>
      </div>
      <div>
        <h2 data-aos="fade-down">{{ service.title }}</h2>
        <p data-aos="fade-down">{{ service.body }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 .services-component {
  @apply flex flex-col gap-y-12;
   .service-item {
    @apply flex gap-x-8;
    .icon {
      @apply bg-black w-9 h-9 rounded-xl flex items-center justify-center;
    }
    h2 {
      @apply text-[24px] font-bold -mt-[4px]; 
    }
    p {
      @apply font-light text-lg;
    }
  }
 }
</style>
<script>
import { Cog, Search, Draw, Team } from "@/components/icons";
export default {
  setup() {
    const services = [
      {
        icon: Cog,
        title: "Solidity Team",
        body: "Unleash the power of Web3 with our expert developers, delivering meticulously audited and efficient smart contracts",
      },
      {
        icon: Search,
        title: 'Tokenomics Team',
        body: 'Realize your vision of a unique tokenomic model with our expertise,  as we not only complete it but also provide insightful guidance on the best implementation strategies.'
      },
      {
        icon: Draw,
        title: 'In-House Design Team',
        body: 'Empower your brand with our round-the-clock in-house design team, crafting stunning website designs, captivating graphics for Twitter, and innovative app designs to elevate your digital presence.'
      },
      {
        icon: Team,
        title: 'Marketing Team',
        body: 'Leverage our seasoned marketing team, boasting 4 years of Web3 expertise, renowned for successfully launching and driving widespread adoption of multiple NFT projects and memecoins.'
      },
    ];
    return {
      services,
    };
  },
};
</script>