<script setup>
const props = defineProps({
  error: Object
})

const data = {
  status: props.error ? (props.error.statusCode === 404 ? 404 : (props.error.statusCode >= 500 ? 500 : props.error.statusCode)) : 500,
  title: "Uh-oh",
  message: props.error && props.error.statusCode === 404 ? "We can't find that page" : "Seems like our system is coughing. Please try again later."
};


</script>

<template>
  <div class="grid h-screen px-4 bg-white place-content-center">
    <div class="text-center">
      <h1 class="font-black text-gray-200 text-9xl">{{ data.status }}</h1>

      <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ data.title }}
      </p>

      <p class="mt-4 text-gray-500">{{ data.message }}</p>

      <a href="/"
        class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring">
        Go Back Home
      </a>
    </div>
  </div>
</template>
