import { createRouter, createWebHistory } from 'vue-router';
import ListingPage from '../components/ListingPage.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue'
import BookingForm from '../components/BookingForm.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listing/:listingNum',
    name: 'ListingPage',
    component: ListingPage,
    props: true // This allows us to pass the route parameters as props to the component
  },
  {
    path:'/about',
    name:'About',
    component: About
  },
  {
    path:'/bookViewing',
    name:'Viewing',
    component:BookingForm
  }
];  

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;
