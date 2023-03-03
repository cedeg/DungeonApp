
<template>
<div class="container mx-auto ">
  <h1 class="text-2xl text-amber-400 text-center">Entrer dans le donjon et mourrez !</h1>
  <div class=" text-center p-1">
    <button v-if="!hisGameStart" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white " @click="gameStart">Lancer une partie</button>
    <h2 v-else class="text-2xl text-amber-400 text-center">C'est partit </h2>

    <div v-if="hisGameStart">
      <div>
        <ul>
          <li>
            <p class="text-amber-400"> <span class="font-bold">Nom : </span>{{scum.getName()}}</p>
          </li>
          <li>
            <p class="text-amber-400"> <span class="font-bold">PV : </span>{{scum.getHp()}}</p>
          </li>
          <li>
            <p class="text-amber-400"> <span class="font-bold">Or : </span>{{scum.getGp()}}</p>
          </li>
        </ul>
        <p> Choisissez un lieu à explorer : </p>
        <ul >
          <li>
            <button @click="explore('ruins')" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white "> les ruines</button>
          </li>
        </ul>
        <div v-if="isExplore">
          <p>Par ou allez-vous ?</p>
          <ul>
            <li>
              <button @click="goLeft" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white ">
              gauche</button>
            </li>
          </ul>
        </div>
        <div v-if="isInRoom">
          <ul>
            <li>
              <p class="text-amber-400"> <span class="font-bold">Un : {{monster.name}}</span></p>
            </li>
            <li>
              <p v-if="!isTrap" class="text-amber-400"> <span class="font-bold">défense : {{monster.shield}}</span></p>
            </li>
            <li>
              <p v-if="!isTrap" class="text-amber-400"> <span class="font-bold">Or : {{monster.gp}}</span></p>
            </li>
          </ul>
        </div>
      </div>


    </div>
  </div>
</div>
</template>

<script>


import Scum from "../classes/Scum.js";
import Danger from "../classes/Danger.js"

export default {

 data() {

   return {
     hisGameStart: false,
     scum:  new Scum,
     danger: Danger,
     land: false,
     isExplore: false,
     // TOOD : modifier max number à 6 après les tests
     leftNumber : this.getRandomInt(2),
     rightNumber : this.getRandomInt(2),
     isInRoom: false,
     monster : false,
     isTrap : false
   }
 },

  methods: {
    gameStart() {
      console.log('click')
      this.scum = new Scum;
      this.hisGameStart = true;

    },
    explore(land) {
      this.isExplore = true;
      switch (land) {
        case 'ruins':
          this.land = this.danger.ruins
      }
    },
    goLeft() {
      this.isExplore = false;
      this.isInRoom = true;
      this.monster = this.land[this.leftNumber];

      this.isTrap = this.monster.isTrap;
      if ( this.isTrap ) {

        this.scum.takeDommage(this.monster.dmg);
      }

    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max)
    }
  },

  layout: 'default',
}
</script>
