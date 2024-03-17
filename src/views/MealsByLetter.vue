<template>
  <div class="flex flex-col justify-center gap-4 mt-5 max-w-[1240px] mx-auto">
    <div>
      <h1 class="text-4xl text-center font-bold">Meals By Letter</h1>
    </div>
    <div class="flex justify-center gap-3 mt-3 max-[767px]:flex-wrap">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
        :class="`w-3 h-3 max-[767px]:h-5 text-xl flex items-center justify-center hover:text-pink-400 hover:scale-100 transition-all ${
          route.params.letter === letter
            ? 'text-pink-400 scale-[1.2] font-bold'
            : ''
        }`"
        @click="searchMeals"
      >
        {{ letter }}
      </router-link>
    </div>
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";
import Meals from "../components/Meals.vue";

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
