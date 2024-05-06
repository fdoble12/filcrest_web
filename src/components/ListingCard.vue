<template>
    <div class="bg-white shadow-md border-2 border-gray-200 flex flex-col justify-between rounded-lg">
      <div class="mb-4 relative">
        <carousel ref="myCarousel" :itemsToShow="1" :wrapAround="true" :autoplay="false">
            <slide v-for="(pic, index) in listing.img" :key="index">
              <div>
                <img :src="pic" :alt="index" class="max-h-[320px]"/>
              </div>
            </slide>
        </carousel>
            <button class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-xl px-6 hover:text-gray-400" @click="prevSlide">
            <i class="fa fa-chevron-left fa-2x"></i>
            </button>
            <button class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-xl px-6 hover:text-gray-400" @click="nextSlide">
                <i class="fa fa-chevron-right fa-2x"></i>
            </button>
      </div>
      <div class="px-2 md:px-6 md:pb-2 text-sm md:text-base">
        <h3 class="font-semibold text-sm md:text-xl py-1 border-b-2 border-black mb-1">{{ listing.title }}</h3>

        <div class="flex flex-row items-center justify-between space-x-1 mb-2 md:mb-0">
          <h3 class="font-semibold text-sm md:text-xl">{{ formatPrice(listing.price) }}</h3>
          <div :class="{'bg-yellow-400': listing.type === 'rent', 'bg-green-500': listing.type === 'sale'}" class="rounded-full text-center text-black   text-xs md:text-[16px] px-2 py-1 md:px-3 md:py-1 opacity-90">
            {{ listing.type === 'rent' ? 'For Rent' : 'For Sale' }}
          </div>
        </div>
        <h4 class="text-md italic text-gray-700">{{ listing.city }}</h4>
        <h4 class="text-md font-semibold mb-2 text-gray-700">Property ID: {{ listing.listing_id }}</h4>
        <p class="text-black text-md text-justify hidden md:block">{{ listing.description }}</p>
        <div div class="icon-container flex mt-4 text-gray-800 flex-row text-sm md:text-base">
          <span class="icon px-1"><i class="fa fa-bed" aria-hidden="true"></i> {{ listing.bedrooms }}</span>
          <span class="icon px-1"><i class="fa fa-shower" aria-hidden="true"></i> {{ listing.bathrooms }}</span>
          <span class="icon px-1"><i class="fa fa-home" aria-hidden="true"></i> {{ listing.floor_area }} sqm</span>
          <span class="icon px-1"><i class="fa fa-expand" aria-hidden="true"></i> {{ listing.lot_area }} sqm</span>
        </div>
      </div>
      <button
        class="mx-4 my-2 py-1 md:py-2 bg-yellow-800 text-white text-md md:text-lg rounded-lg"
        @click="goToListingPage"
      >
        See more
      </button>
    </div>
  </template>
  
  <script setup>
    import { useRouter } from 'vue-router';
    
    const props = defineProps({
      listing: Object
    });
    const router = useRouter();
    
    const goToListingPage = () => {
      // Use Vue Router to navigate to ListingPage with listing_id as a parameter
      router.push({ name: 'ListingPage', params: { listingId: props.listing.listing_id } });
    };
    const formatPrice = (price) => {
      // Use toLocaleString to format the price with comma and period
      return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'PHP'
      });
    };
  </script>
<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
  name: 'ListingCard',
  props:{
    listing: Object
  },
  components: {
    Carousel,
    Slide
  },
  methods:{
    nextSlide() {
            this.$refs.myCarousel.next();
        },
        prevSlide() {
            this.$refs.myCarousel.prev();
        },
  }

}
</script>
