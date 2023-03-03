<template>
  <div>
    <Header></Header>
    <!-- START output the page content -->
    <div>
     <Nuxt class="py-6 px-4" />
    </div>
    <!-- END output the page content -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  name: "default",
  components: {Header}
}
</script>

<style scoped>

</style>
