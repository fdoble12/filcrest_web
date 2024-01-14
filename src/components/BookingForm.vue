<script setup>
    import Navbar from './Nav.vue';
    import Contact from './Contact.vue';
</script>
<template>
    <Navbar/>
    <div id="about-page" class="py-2 px-4 min-h-[100vh]">
        <section class="container mx-auto px-5 md:px-20 pb-4 md:pb-8 pt-12 md:pt-20 h-full w-full md:max-w-[100vh]">
            <h2 class="text-xl md:text-2xl text-black font-semibold mb-4">BOOK A VIEWING</h2>
            <iframe class="h-screen w-full border-2 border-black"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeUKgNO_fl5kfC0x5mRG6rmW3OZR4OPxAzuSRsnyRNtojLS2w/viewform?embedded=true"
            >
                Loading…
            </iframe>
        </section>
    </div>
    <Contact/>
</template>
  
  <script>
  export default {
    name: 'BookingForm',
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  