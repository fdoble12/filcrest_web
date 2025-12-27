<template>
  <footer class="bg-[#1f1f1f] text-gray-300 font-luxora">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">

      <!-- Brand / About -->
      <div>
        <h3 class="text-yellow-600 text-lg font-semibold mb-4">
          Filcrest Realty
        </h3>
        <p class="text-sm leading-relaxed text-gray-400">
          Helping clients find quality homes and investment properties across
          Metro Manila. Trusted. Transparent. Professional.
        </p>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-yellow-600 text-lg font-semibold mb-4">
          Contact
        </h3>
        <ul class="space-y-2 text-sm">
          <li>
            <span class="block text-gray-400">Phone</span>
            <span class="text-white">+63 917 835 0951</span><br />
            <span class="text-white">+63 917 505 5895</span>
          </li>
          <li class="pt-2">
            <span class="block text-gray-400">Email</span>
            <span class="text-white">angie_doble@yahoo.com</span><br />
            <span class="text-white">francisco_doble@yahoo.com</span>
          </li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-yellow-600 text-lg font-semibold mb-4">
          Quick Links
        </h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#home" class="hover:text-yellow-500 transition">Home</a></li>
          <li><a href="#listings" class="hover:text-yellow-500 transition">Properties</a></li>
          <li><a href="#about" class="hover:text-yellow-500 transition">About Us</a></li>
          <li><a href="#contact" class="hover:text-yellow-500 transition">Contact</a></li>
        </ul>
      </div>

      <!-- Social -->
      <div>
        <h3 class="text-yellow-600 text-lg font-semibold mb-4">
          Follow Us
        </h3>
        <a
          href="https://www.facebook.com/FilcrestRealty"
          target="_blank"
          class="inline-block text-sm text-white underline hover:text-yellow-500 transition"
        >
          Filcrest Realty on Facebook
        </a>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700"></div>

    <!-- Bottom Bar -->
    <div class="text-center py-4 text-xs text-gray-500">
      © 2025 Filcrest Realty. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.font-luxora {
  font-family: Luxora, sans-serif;
}
</style>
