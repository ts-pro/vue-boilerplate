<template>
  <div
    class="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <h1 class="tracking-wide text-emerald-600 font-semibold">
      Vue boilerplate
    </h1>
    <p class="mt-2 text-slate-500">
      Vite + Vue3 + TailwindCSS + TypeScript + EsLint + Stylelint + Prettier
    </p>

    <div class="flex pt-8">
      <button
        type="button"
        class="active:bg-emerald-800 hover:bg-emerald-700 bg-emerald-600 text-white p-2 rounded"
        @click="increment"
      >
        Click me
      </button>

      <div class="ml-8 flex items-center text-emerald-600">
        {{ clickCount }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const clickCount = ref(0);

function increment() {
  clickCount.value += 1;
}
</script>
