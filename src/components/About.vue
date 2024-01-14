<script setup>
    import Navbar from './Nav.vue';
    import Contact from './Contact.vue';
</script>
<template>
    <Navbar/>
    <div id="about-page" class="py-2 px-4 min-h-[100vh]">
        <section class="container mx-auto px-10 md:px-20 pt-12 md:pt-20 w-full md:max-w-[100vh]">
            <h2 class="text-xl md:text-2xl text-black font-semibold py-4">ABOUT US</h2>
            <h3 class="text-lg md:text-xl font-bold pb-4">Professional Background</h3>
            <p class="text-justify">
                We started in a real estate company since 1999 in which we were exposed in rental and leasing of Commercial and Office Condominiums. We have served a number of corporate clients in looking for the right office location for their business expansion, as well as those newly opened businesses and representative offices.
                <br><br>The company then expanded its development from office condominiums and houses to high-rise residential condominiums, hotel, condotel, dormitel and property management in which we have assisted various clients --- expatriates, tenants, unit owners and property investors.
                <br><br>We have gained comprehensive knowledge in real estate services through more than a decade of experience. Thus, we have established FILCREST REALTY. We aim to provide excellent customer and after-sales service as well as to uphold the value of Integrity and professionalism in all aspects of our work.
            </p>
            <h3 class="text-lg md:text-xl font-bold pt-4 pb-2">Broker's Information</h3>
            <ul class="space-y-2">
                <li>Angelica A. Doble, <span class="italic">Real Estate Broker</span></li>
                <li>PRC license No. 0003349</li>
                <li>Mobile / Viber : +63917 8350951 / +63917 5055895 </li>
                <li>Landline : +632 8094946</li>
                <li>Email : angie_doble@yahoo.com</li>
                <li>Facebook : Filcrest Realty</li>
            </ul>
        </section>
    </div>
    <Contact/>
</template>

<script>
export default {
    name:'About'
}
</script>

<style>

</style>