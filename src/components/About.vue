<script setup>
import Navbar from './Nav.vue';
import Contact from './Contact.vue';
</script>

<template>
  <Navbar />

  <main id="about-page" class="bg-gray-50 min-h-screen">
    <section class="max-w-5xl mx-auto px-6 md:px-10 py-14">

      <!-- Page Title -->
      <header class="my-5">
        <h1 class="text-2xl md:text-3xl font-semibold text-gray-900">
          About Us
        </h1>
        <p class="mt-2 text-gray-600 text-sm md:text-base max-w-2xl">
          A trusted real estate brokerage built on experience, integrity, and professional service.
        </p>
      </header>

      <!-- Professional Background -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 mb-4">
        <h2 class="text-lg md:text-xl font-semibold text-gray-900 mb-4">
          Professional Background
        </h2>

        <div class="space-y-4 text-gray-700 text-justify leading-relaxed">
          <p>
            We started in a real estate company in 1999, where we were exposed to rental and leasing of
            commercial and office condominiums. Over the years, we have served numerous corporate clients
            in identifying the right office locations for business expansion, newly opened enterprises,
            and representative offices.
          </p>

          <p>
            The company later expanded its focus from office condominiums and houses to high-rise residential
            condominiums, hotels, condotels, dormitels, and property management. We have assisted a diverse
            range of clients including expatriates, tenants, unit owners, and property investors.
          </p>

          <p>
            Through more than a decade of hands-on experience, we gained comprehensive knowledge of real
            estate services. This led to the establishment of <span class="font-semibold">Filcrest Realty</span>,
            with the goal of providing excellent customer service, reliable after-sales support, and upholding
            integrity and professionalism in every transaction.
          </p>
        </div>
      </div>

      <!-- Core Values -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 mb-4">
        <h2 class="text-lg md:text-xl font-semibold text-gray-900 mb-4">
          Our Commitment
        </h2>

        <ul class="space-y-2 text-gray-700 text-sm md:text-base">
          <li>• Professional and transparent client service</li>
          <li>• Strong market knowledge and advisory support</li>
          <li>• Long-term client relationships built on trust</li>
          <li>• Reliable after-sales and property management assistance</li>
        </ul>
      </div>

      <!-- Broker Information -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
        <h2 class="text-lg md:text-xl font-semibold text-gray-900 mb-4">
          Broker’s Information
        </h2>

        <ul class="space-y-2 text-gray-700 text-sm md:text-base">
          <li>
            <span class="font-semibold">Angelica A. Doble</span>,
            <span class="italic"> Real Estate Broker</span>
          </li>
          <li>PRC License No. 0003349</li>
          <li>Mobile / Viber: +63 917 835 0951 / +63 917 505 5895</li>
          <li>Landline: +63 2 8094 946</li>
          <li>Email: angie_doble@yahoo.com</li>
          <li>Facebook: Filcrest Realty</li>
        </ul>
      </div>

    </section>
  </main>

  <Contact />
</template>

<script>
export default {
  name: 'About',
};
</script>
