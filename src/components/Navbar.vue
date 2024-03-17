<template>
  <header
    class="bg-white h-24 px-6 shadow-lg shadow-slate-300 flex justify-between items-center"
  >
    <div>
      <router-link :to="{ name: 'home' }" class="font-bold text-xl"
        ><img
          :src="logo"
          alt="logo"
          class="max-w-full w-[180px] h-[70px] object-cover max-[767px]:w-[90px] max-[767px]:h-[90px] max-[767px]:object-contain"
      /></router-link>
    </div>
    <Slide
      right
      width="300"
      class="md:hidden mobile-menu"
      :closeOnNavigation="true"
    >
      <MenuItems />
    </Slide>
    <div class="h-full flex gap-8 max-[767px]:hidden">
      <MenuItems />
    </div>
  </header>
</template>
<script setup>
import logo from "../assets/healthy-restaurant-logo.png";
import { Slide } from "vue3-burger-menu";
import MenuItems from "./MenuItems.vue";
</script>
