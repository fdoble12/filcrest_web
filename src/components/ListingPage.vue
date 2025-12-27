<template>
  <div>
    <Nav />


    <div v-if="!listingData" class="py-10 text-center">Loading...</div>


    <section v-else class="container mx-auto max-w-screen-md mt-20 px-4">
      <h1 class="text-3xl font-bold mb-4">{{ listingData.title }}</h1>


      <Carousel ref="carousel" :itemsToShow="1" :wrapAround="true">
        <Slide v-for="(img, i) in listingData.img" :key="i">
          <img :src="img" class="w-full object-cover" />
        </Slide>
      </Carousel>


      <div class="flex justify-between items-center border-y py-4 mt-6">
        <h3 class="text-2xl font-bold">{{ formatPrice(listingData.price) }}</h3>
        <span class="px-4 py-2 rounded" :class="listingData.type === 'rent' ? 'bg-yellow-400' : 'bg-green-500'">
          {{ listingData.type === 'rent' ? 'For Rent' : 'For Sale' }}
        </span>
      </div>


      <p class="italic mt-2">{{ listingData.city }}</p>
      <p class="mb-4">Property ID: {{ listingData.listing_id }}</p>


      <p class="font-bold">Description</p>
      <p class="mb-4">{{ listingData.description }}</p>


      <ul class="list-disc pl-5 mb-6">
        <li v-for="(feature, i) in listingData.features" :key="i">{{ feature }}</li>
      </ul>


      <button class="bg-yellow-700 text-white px-6 py-3 rounded" @click="openGoogleForm">
        Book a Viewing
      </button>
    </section>


    <Contact />
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Nav from './Nav.vue';
import Contact from './Contact.vue';
import { Carousel, Slide } from 'vue3-carousel';
import { getListingById } from '@/api/listings';


const route = useRoute();
const listingData = ref(null);


onMounted(async () => {
  const data = await getListingById(route.params.listingId);
  listingData.value = data.result;
});


const formatPrice = (price) =>
  price.toLocaleString('en-US', { style: 'currency', currency: 'PHP' });


const openGoogleForm = () => window.open('/bookViewing');
</script>