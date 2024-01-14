<template>
  <nav class="bg-[#303030] fixed p-4 w-full mb-10 md:mb-4 lg:mb-6 z-40 border-[1px] border-gray-400 opacity-90">
    <div class="container mx-auto flex flex-wrap justify-center items-center">
      <div class="md:flex items-center space-x-4 md:space-x-6 font-luxora">
        <a href="/" class="text-white text-xs md:text-[14px] hover:text-yellow-600">HOME</a>
        <a href="/about" class="text-white text-xs md:text-[14px] hover:text-yellow-600">ABOUT </a>
        <a href="#listings" class="text-white text-xs md:text-[14px] hover:text-yellow-600" @click="goto">PROPERTIES</a>
        <a href="#contact" class="text-white text-xs md:text-[14px] hover:text-yellow-600">CONTACT</a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
  };
</script>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const goto = () => {
    router.push({ name: 'Home' });
  };
</script>

<style scoped>
/* Add a custom font family here or link to a font from Google Fonts */
.font-serif {
  font-family: "Merriweather", serif;
}

.font-luxora{
  font-family: Luxora, sans-serif;
}

</style>
