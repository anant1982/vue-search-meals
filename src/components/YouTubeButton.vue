<template>
  <a
    :href="href"
    target="_blank"
    class="px-2 py-2 flex items-center rounded-lg text-red-400 border-2 border-red-500 bg-white hover:bg-red-200 hover:text-gray-600 transition-colors"
  >
    <span class="mr-3"
      ><img class="w-7" :src="youtubeLogo" alt="youtube-logo"
    /></span>
    <span><slot>YouTube</slot></span>
  </a>
</template>

<script setup>
import youtubeLogo from "../assets/youtube-logo.png";
const props = defineProps({
  href: String,
});
</script>
