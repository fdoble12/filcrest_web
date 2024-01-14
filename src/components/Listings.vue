<script setup>
import ListingCard from './ListingCard.vue';
import listings from '../assets/listings.json'; // Assuming listings.json is placed inside the src/assets directory.
</script>
<template>
    <section id="listings" class="shadow-lg py-6 md:py-12 px-2 min-h-[60vh]">
        <div class="container mx-auto max-w-[150vh]">
            <h2 class="text-xl md:text-2xl text-black font-semibold mb-4">PROPERTIES</h2>
            <div class="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-1 lg:grid-cols-3">
                <ListingCard
                    v-for="listing in listings"
                    :key="listing.listing_num"
                    :listing="listing"
                />
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'Listings',
};
</script>