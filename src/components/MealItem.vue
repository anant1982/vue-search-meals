<template>
  <div
    class="bg-white shadow-lg shadow-gray-400 rounded-xl hover:shadow-lg hover:shadow-gray-700 transition-shadow duration-150"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-[250px] object-cover max-[767px]:h-[180px]"
      />
    </router-link>
    <router-link
      :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
      class="p-6 block"
    >
      <h3 class="font-bold text-2xl mb-3 line-clamp-1">{{ meal.strMeal }}</h3>
      <p class="mb-6 line-clamp-3">
        {{ $filters.truncateWords(meal.strInstructions, 28) }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </router-link>
  </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
