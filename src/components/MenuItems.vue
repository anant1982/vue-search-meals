<template>
  <router-link
    :to="{ name: 'byName' }"
    class="inline-flex h-full items-center text-lg hover:text-pink-400 transition-colors font-semibold"
    exact-active-class="text-pink-500"
    >Search Meals</router-link
  >
  <router-link
    :to="{ name: 'byLetter' }"
    :class="`inline-flex h-full items-center text-lg hover:text-pink-400 transition-colors font-semibold`"
    exact-active-class="text-pink-500"
    >Meals by Letter</router-link
  >
  <router-link
    :to="{ name: 'ingredients' }"
    :class="`inline-flex h-full items-center text-lg hover:text-pink-400 transition-colors font-semibold`"
    exact-active-class="text-pink-500"
    >Meals by Ingredient</router-link
  >
</template>
