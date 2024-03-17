<template>
  <div class="lg:max-w-[1240px] mx-auto">
    <h1 class="text-4xl font-bold my-4">
      Meals for {{ ingredient.strIngredient }}
    </h1>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
