<template>
  <div class="lg:max-w-[800px] mx-auto my-8 text-lg">
    <h1 class="text-4xl font-bold mb-5 text-pink-500">{{ meal.strMeal }}</h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="max-w-[100%] h-[380px] w-full object-cover rounded-lg max-[767px]:h-[280px]"
    />
    <div class="flex mt-5">
      <strong class="font-bold text-pink-400">Tags:</strong>
      <div class="whitespace-normal pl-2">
        <div v-if="meal.strTags">
          {{ $filters.extractTags(meal.strTags) }}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 text-lg py-3">
      <div>
        <strong class="font-bold text-pink-400">Category:</strong>
        {{ meal.strCategory }}
      </div>
      <div class="text-right">
        <strong class="font-bold text-pink-400">Area:</strong>
        {{ meal.strArea }}
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 mb-8 sm:gap-10">
      <div class="col-span-1">
        <h3 class="text-xl font-semibold mb-5 text-pink-400">Ingredients</h3>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="{ ind }">
            <li
              v-if="meal[`strIngredient${ind + 1}`]"
              class="border-y border-y-slate-300 py-2"
            >
              {{ meal[`strIngredient${ind + 1}`] }} &nbsp;
              {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="col-span-2 max-[767px]:mt-8">
        <h3 class="text-xl font-semibold mb-5 text-pink-400">Method</h3>
        <p v-html="replaceWithBr(meal.strInstructions)"></p>
      </div>
    </div>
    <div class="mt-8 flex">
      <YouTubeButton :href="meal.strYoutube" />
      <a
        :href="meal.strSource"
        target="_blank"
        class="ml-3 px-3 py-2 rounded border-2 border-transparent text-pink-600 transition-colors"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const meal = ref({});
const mealTags = ref(null);

function replaceWithBr(str) {
  if (!str) return;
  return str.replace(/\n/g, "<br />");
}
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
