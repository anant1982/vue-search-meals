<template>
  <div class="bg-gray-100">
    <NavbarComponent />
    <main class="h-full px-6 py-5 min-h-[550px]">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavbarComponent from "./Navbar.vue";
import FooterComponent from "./Footer.vue";
</script>

<style></style>
