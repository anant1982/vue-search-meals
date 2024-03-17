<template>
  <div class="mt-5 lg:max-w-[1240px] mx-auto">
    <h1 class="text-4xl font-bold">Random Meals</h1>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";
import Meals from "../components/Meals.vue";
const meals = ref([]);

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    await axiosClient
      .get("random.php")
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
