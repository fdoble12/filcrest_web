<template>
    <section id="listings" class="shadow-lg py-6 md:py-12 px-2 min-h-[60vh]">
      <div class="container mx-auto max-w-[150vh]">
        <h2 class="text-xl md:text-2xl text-black font-semibold mb-4">PROPERTIES</h2>
        <div class="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-1 lg:grid-cols-3">
          <ListingCard
            v-for="(listing,index) in listings"
            :key="index"
            :listing="listing[0]"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import ListingCard from './ListingCard.vue';
  
  const listings = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/data-bjexs/endpoint/listings');
      listings.value = response.data;
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  });
  </script>
  