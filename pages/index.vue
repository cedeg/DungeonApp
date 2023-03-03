
<template>
<div class="container mx-auto ">
  <h1 class="text-2xl text-amber-400 text-center">Entrer dans le donjon et mourrez !</h1>
  <div class=" text-center p-1">
    <button v-if="!hisGameStart" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white " @click="gameStart">Lancer une partie</button>
    <h2 v-else class="text-2xl text-amber-400 text-center">C'est partit </h2>

    <div v-if="hisGameStart">

      <button class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white " @click="creatScum">TESTS</button>
    </div>
  </div>
</div>
</template>

<script>

// CLASS SCUM
class Scum {
   name = 'tutu';
   hp = 20;
   getHp = () => {
     return this.hp;
  }
  getName = () => {
     return this.name
  }
}

// END CLASS SCUM
export default {



 data() {

   return {
     hisGameStart: false,
     scum:  new Scum(),
   }
 },
  methods: {
    gameStart() {
      console.log('click')
      this.hisGameStart = true;
    },
    creatScum() {
      // console.log(this.scum.getHp());
    }
  },
  layout: 'default',

}
</script>
