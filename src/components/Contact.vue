<template>
  <div class="contact-component">
    <h1 class="tracking-[-4px] text-5xl font-light mb-4">Contact Us</h1>
    <p class="text-lg text-[#52525B] mb-6">
      Contact us now and get started today.
    </p>
    <!-- Contact Form -->
    <form>
      <div>
        <label>Discord Username / Telegram Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Twitter Username (Optional)</label>
        <input type="text" />
      </div>
      <div>
        <label>Project Information</label>
        <textarea type="text" class="resize-none h-[170px]"></textarea>
      </div>
      <div>
        <button
          href="#contact"
          class="bg-red ml-auto w-[150px] rounded-lg duration-200 hover:opacity-50 flex h-[70px] items-center justify-center text-lg"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
  .contact-component {
    @apply lg:w-2/3;
    form {
      @apply flex flex-col gap-y-3;
      input,
      textarea {
        @apply w-full p-4 rounded-lg focus:outline-none;
      }
      input {
        @apply h-12 px-4;
      }
      label {
        @apply mb-2 block text-base;
      }
    }
  }
</style>