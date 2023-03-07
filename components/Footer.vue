<template>
<footer class="container mx-auto border-solid border-t-2 border-t-amber-400">
  <nav>
    <ul class="flex justify-around">
      <li class="m-2 text-center">
        <NuxtLink class=" rounded p-2 text-amber-400 hover:bg-amber-400 hover:text-white" to="/">Home</NuxtLink>
      </li>
      <li class="m-2 text-center">
        <NuxtLink class=" rounded p-2 text-amber-400 hover:bg-amber-400 hover:text-white" to="/about">About</NuxtLink>
      </li>
    </ul>
  </nav>
  <div class="modal bg-amber-300 absolute top-0 bottom-0 w-full flex flex-col opacity-95 hidden" id="modal-error">
    <div class="flex justify-end">
      <button @click="modalClose" class="p-2 text-xl  rounded hover:bg-amber-400 hover:text-white">X</button>
    </div>
    <div class="flex-auto">
      <h2 id="error-message" class="text-center">Message d'erreur</h2>
      <div class="flex flex-center flex-col">
        <p class="text-center" id="error-raisons">Raison de l'erreur</p>
        <button @click="modalClose" class="p-2 py-4 text-xl  rounded hover:bg-amber-400 hover:text-white mx-32">J'ai compris</button>
      </div>
    </div>
  </div>

  <div class="modal bg-amber-300 absolute top-0 bottom-0 w-full flex flex-col opacity-95 hidden" id="modal-message">
    <div class="flex justify-end">
      <button @click="modalClose" class="p-2 text-xl  rounded hover:bg-amber-400 hover:text-white">X</button>
    </div>
    <div class="flex-auto">
      <h2 id="modal-text-message" class="text-center">Message de modal</h2>
      <div class="flex flex-center flex-col">
        <p class="text-center" id="modal-raisons">Raison de modal</p>
        <button @click="modalClose" class="p-2 py-4 text-xl  rounded hover:bg-amber-400 hover:text-white mx-32">J'ai compris</button>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "Footer",

  methods: {
    modalClose() {
      document.getElementById('modal-error').classList.add('hidden')
      document.getElementById('modal-message').classList.add('hidden')
    }
  }
}
</script>

<style scoped>

</style>
