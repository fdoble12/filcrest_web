<template>
  <section id="listings" class="shadow-lg py-6 md:py-12 px-2 min-h-[60vh]">
    <div class="container mx-auto max-w-[150vh]">
      <h2 class="text-xl md:text-2xl text-black font-semibold mb-4">PROPERTIES</h2>

      <!-- Show listings when data is ready -->
      <div v-if="!loading && listings.length > 0" class="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ListingCard
          v-for="listing in listings"
          :key="listing.listing_id"
          :listing="listing"
        />
      </div>

      <!-- Loading state -->
      <div v-else-if="loading">
        Loading...
      </div>

      <!-- Empty state -->
      <div v-else>
        No listings available.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ListingCard from './ListingCard.vue';
import { getListings } from '@/api/listings';

const listings = ref([]);
const loading = ref(true);

const fetchListings = async () => {
  try {
    const data = await getListings();
    listings.value = data;
  } catch (err) {
    console.error('Error fetching listings:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchListings();
});
</script>
