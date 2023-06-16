<template>
  <div class="footer-component">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-3 w-10/12 mx-auto gap-y-12 text-center lg:text-left">
        <div class="col-span-1" data-aos="fade-down">
          <h4>Company</h4>
          <ul class="footer-links">
            <li><a href="#" v-scroll-to="'#services'">Services</a></li>
            <li><a href="#" v-scroll-to="'#features'">Features</a></li>
            <li><a href="#" v-scroll-to="'#contact'">Contact Us</a></li>
          </ul>
        </div>
        <div class="col-span-1"  data-aos="fade-down">
          <h4>Help</h4>
          <ul class="footer-links">
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-span-1"  data-aos="fade-down">
          <h4>Newsletter</h4>
          <input type="text" placeholder="Enter your email address" />
          <button
            class="bg-red w-full rounded-lg duration-200 hover:opacity-50 flex h-[70px] items-center justify-center text-lg"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .footer-component {
    @apply pb-20 pt-16;
    h4 {
      @apply text-base font-bold mb-3 uppercase;
    }
    input,
    textarea {
      @apply w-full p-4 rounded-lg focus:outline-none text-center mb-5;
    }
    ul {
      @apply flex flex-col gap-y-3;
      li {
        a {
          @apply text-dark duration-200 hover:opacity-50 block font-normal;
        }
      }
    }
  }
</style>