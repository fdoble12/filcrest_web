<template>
    <Nav/>
    <div id="listing-page" class="py-2 px-4 min-h-sreen">
      <section class="container mx-auto max-w-screen-md mt-16">
        <h1 class="text-3xl font-bold py-2">{{ listingData.title }}</h1>
        <div class="relative">
            <carousel ref="myCarousel" :itemsToShow="1" :wrapAround="true" :autoplay="false">
                <slide v-for="(pic, index) in listingData.img" :key="index">
                    <img :src="pic" class="max-h-full">
                </slide>
            </carousel>
            <button class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-xl px-6 hover:text-gray-400" @click="prevSlide">
                <i class="fa fa-chevron-left fa-2x"></i>
            </button>
            <button class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-xl px-6 hover:text-gray-400" @click="nextSlide">
                <i class="fa fa-chevron-right fa-2x"></i>
            </button>
        </div>

        <div class="mt-6 mb-4 border-t-2 border-b-2 border-black py-2">
            <div class="flex justify-between items-center">
                <h3 class="font-bold text-lg md:text-2xl">{{ formatPrice(listingData.price) }}</h3>
                <div :class="{'bg-yellow-400': listingData.type === 'rent', 'bg-green-500': listingData.type === 'sale'}" class="rounded-md text-white py-1 px-3 md:px-6 md:py-2 text-sm md:text-md opacity-90">
                    {{ listingData.type === 'rent' ? 'For Rent' : 'For Sale' }}
                </div>
            </div>
            <h3 class="text-sm md:text-lg italic mb-3 text-gray-700">{{ listingData.city }}</h3>
            <p class="mb-4 text-md md:text-lg">{{ listingData.description }}</p>
            <div class="icon-container flex text-sm md:text-lg justify-start space-x-4 mt-2 text-gray-800">
                <span class="icon"><i class="fa fa-bed" aria-hidden="true"></i> {{ listingData.bedrooms }} Bedrooms</span>
                <span class="icon"><i class="fa fa-shower" aria-hidden="true"></i> {{ listingData.bathrooms }} Bathrooms</span>
                <span class="icon"><i class="fa fa-expand" aria-hidden="true"></i> {{ listingData.floor_area }} sqm</span>
            </div>
            <div class="py-3 grid grid-flow-col gap-8 justify-stretch">
                <div>
                    <h1 class="text-md md:text-xl font-bold py-1 font-luxora">FEATURES</h1>
                    <ul class="text-sm md:text-[16px] space-y-1">
                        <li v-for="(feature,index) in listingData.features" :key="index">- {{ feature }}</li>
                    </ul>
                </div>
                <div>
                    <h1 class="text-md md:text-xl font-bold py-1 font-luxora">ESTABLISHMENTS</h1>
                    <ul class="text-sm md:text-[16px] space-y-1">
                        <li><span class="font-bold">Mall/Store: </span><span v-for="(mall, index) in listingData.est_malls" :key="index">{{ mall }}, </span></li>
                        <li><span class="font-bold">Grocery: </span><span v-for="(grocery, index) in listingData.est_grocerys" :key="index">{{ grocery }}, </span></li>
                        <li><span class="font-bold">School: </span><span v-for="(school, index) in listingData.est_schools" :key="index">{{ school }}, </span></li>
                    </ul>
                </div>
            </div>
        </div>
        <button class="mb-2 px-2 py-2 md:px-4 md:py-3 shadow-xl shadow-inner text-black text-sm bg-yellow-600 hover:bg-yellow-800 font-luxora">BOOK A VIEWING</button>     

      </section>
    </div>
    <Contact/>
  </template>
  
  <script>
  import listings from '../assets/listings.json';
  import Nav from './Nav.vue';
  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  import Contact from './Contact.vue';
  
  export default {
    name: 'ListingPage',
    props: {
        listingNum: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            listingData: {},
        };
    },
    created() {
        this.fetchListingData();
    },
    methods: {
        fetchListingData() {
            const listing = listings.find(l => l.listing_num.toString() === this.listingNum);
            if (listing) {
                this.listingData = listing;
                console.log(listing.title);
            }
            else {
                // Handle the case where the listing is not found
                console.error('Listing not found');
            }
        },
        nextSlide() {
            this.$refs.myCarousel.next();
        },
        prevSlide() {
            this.$refs.myCarousel.prev();
        },
        formatPrice (price) {
            return price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'PHP'
            });
        }
    },
    components: {
    Nav,
    Carousel,
    Slide,
    Contact
  },
};
  </script>
<style scoped>
.font-luxora{
  font-family: Luxora, sans-serif;
}
</style>

