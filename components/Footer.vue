<template>
<footer class="container mx-auto border-solid border-t-2 border-t-amber-400">
  <nav>
    <ul class="flex justify-around">
      <li class="m-2 text-center">
        <NuxtLink class="p-2 text-amber-400 hover:bg-amber-400 hover:text-white" to="/">Home</NuxtLink>
      </li>
      <li class="m-2 text-center">
        <NuxtLink class="p-2 text-amber-400 hover:bg-amber-400 hover:text-white" to="/about">About</NuxtLink>
      </li>
    </ul>
  </nav>

</footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
