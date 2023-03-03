<template>
  <header class="container mx-auto border-solid border-b-2 border-b-amber-400">
    <h1 class="text-4xl text-amber-400 text-center">The Dungeon App</h1>
    <nav>
      <ul>
        <li class="m-2 text-center">
          <NuxtLink class="p-2 text-amber-400 rounded hover:bg-amber-400 hover:text-white" to="/">Home</NuxtLink>
        </li>
        <li class="m-2 text-center">
          <NuxtLink class="p-2 text-amber-400 rounded hover:bg-amber-400 hover:text-white" to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
