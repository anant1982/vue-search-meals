<template>
  <div class="pt-5 max-w-[1240px] mx-auto">
    <h1 class="text-4xl font-bold mb-5">Meal By Name</h1>
    <input
      type="text"
      v-model="keyword"
      placeholder="Search a meal"
      class="border-2 border-gray-400 px-5 py-4 rounded-lg w-full"
      @change="searchMeals"
    />
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
