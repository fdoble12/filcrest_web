<template>
  <div class="bg-white shadow-md border-2 border-gray-200 flex flex-col rounded-lg">
    <div class="mb-4 relative">
      <Carousel
        ref="carouselRef"
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="0"
      >
        <Slide v-for="(pic, index) in listing.img" :key="index">
          <img
            :src="pic"
            class="w-full h-[300px] object-cover rounded-t-lg"
          />
        </Slide>
      </Carousel>

      <!-- Navigation buttons -->
      <button
        class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2"
        @click="prev"
      >
        <i class="fa fa-chevron-left fa-2x"></i>
      </button>
      <button
        class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2"
        @click="next"
      >
        <i class="fa fa-chevron-right fa-2x"></i>
      </button>
    </div>

    <div class="px-4 pb-3">
      <h3 class="font-semibold text-lg border-b mb-1">
        {{ listing.title }}
      </h3>

      <div class="flex justify-between items-center mb-1">
        <span class="font-bold">{{ formatPrice(listing.price) }}</span>
        <span
          class="text-xs px-2 py-1 rounded-full"
          :class="listing.type === 'rent' ? 'bg-yellow-400' : 'bg-green-500'"
        >
          {{ listing.type === 'rent' ? 'For Rent' : 'For Sale' }}
        </span>
      </div>

      <p class="text-sm italic text-gray-600">{{ listing.city }}</p>

      <div class="flex gap-3 text-sm mt-2">
        <span>🛏 {{ listing.bedrooms }}</span>
        <span>🚿 {{ listing.bathrooms }}</span>
        <span>🏠 {{ listing.floor_area }} sqm</span>
      </div>
    </div>

    <button
      class="m-3 py-2 bg-yellow-800 text-white rounded-lg"
      @click="goToListingPage"
    >
      See more
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const props = defineProps({ listing: Object });
const router = useRouter();

// IMPORTANT: ref for carousel
const carouselRef = ref(null);

// Methods
const next = () => {
  if (carouselRef.value) {
    carouselRef.value.next();
  }
};

const prev = () => {
  if (carouselRef.value) {
    carouselRef.value.prev();
  }
};

const goToListingPage = () => {
  router.push({
    name: 'ListingPage',
    params: { listingId: props.listing.listing_id }
  });
};

const formatPrice = price =>
  price?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'PHP'
  });
</script>
