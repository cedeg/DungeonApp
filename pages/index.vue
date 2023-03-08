
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
        <div v-if="!isDead">
          <div v-if="!isShop">
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
                  <button @click="enter" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white">
                    Entrer...</button>
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
                <li>
                  <p v-if="isTrap" class="text-amber-400"> <span class="font-bold">It's a trap ! </span></p>
                </li>
              </ul>
              <button v-if="scum.getStuff().Caltrops" @click="useItem(items.caltrops.name)" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white ">
                Fuire </button>
              <button v-if="!fightEnd" @click="fight(monster.id)" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white ">
                {{ !isTrap ? 'Combatre' : 'Aie !' }}</button>
            </div>
            <div v-if="fightEnd">
              <div v-if="fightWin">
                <p>Vous remportez le combat !</p>
                <p class="text-amber-400"> <span class="font-bold">Vous remportez  : {{monster.gp}}</span> !</p>
              </div>
              <div v-if="fightEscape"><p>Vous avez pris la fuite!</p></div>
              <div v-else>
                <p>Vous êtes blessé !</p>
                <p class="text-amber-400"> <span class="font-bold">Vous perdez  : {{monster.dmg}}</span> !</p>
              </div>
              <ul>
                <li>
                  <button @click="enter" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white">
                    Entrer...</button>
                </li>
                <li>
                  <button @click="goShop" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white">
                    Aller au shop</button>
                </li>
              </ul>

            </div>
          </div>

          <div v-if="isShop">
            <h2 class="text-2xl text-amber-400 p-2">SHOP</h2>
            <p>clicker sur un objet pour l'acheter.</p>

            <ul>
              <li v-for="item in items" class="flex items-baseline">
                <p class="rounded text-l flex-auto w-64 bg-amber-400 text-white p-2">{{item.name}} -- {{item.effect}} -- {{item.price}} golds</p>

                <button v-if="!scum.stuff[item.name]" @click="buyItem(item)" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white flex-auto mx-2">
                  Acheter</button>
                <p v-else>Vous avez déjà cet objet</p>
              </li>
            </ul>

            <button @click="goShop" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white">
              Quitter le shop</button>
          </div>
          <div v-if="isStuff">
            <button @click="goStuff" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white">
              Voir mon équipement</button>
          </div>
        </div>
        <div v-else-if="isWin">
          <p>Félicitation vous avez gagné !!!</p>
          <button v-if="isDead" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white " @click="gameStart">Relancer une partie...</button>
        </div>
        <div v-else>
          <p>VOUS ETES MORT</p>
          <button v-if="isDead" class="p-2 text-xl text-amber-400 rounded hover:bg-amber-400 hover:text-white " @click="gameStart">Relancer une partie...</button>
        </div>


        </div>

    </div>

  </div>
  <div class="modal bg-amber-300 absolute top-0 bottom-0 left-0 right-0 w-full flex flex-col opacity-95 hidden" id="modal-items">
    <div class="flex justify-end">
      <button @click="modalClose" class="p-2 text-xl  rounded hover:bg-amber-400 hover:text-white">X</button>
    </div>
    <div class="flex-auto">
      <h2 id="modal-item-message" class="text-center">Sac</h2>
      <div class="flex flex-center flex-col">
        <p class="text-center" id="modal-item">Mes objets :</p>
        <ul class="flex flex-col">
          <li class="flex justify-center" v-for="(stuff, index) in scum.getStuff()" v-if="stuff">

            <p>{{ index }} </p><button @click="useItem(index)" class="rounded text-white hover:bg-amber-400 hover:text-white border-amber-50 border-2 mx-4 px-2" v-if="(index === 'Potion')">utiliser </button>
          </li>
        </ul>
        <button @click="modalClose" class="p-2 py-4 text-xl  rounded hover:bg-amber-400 hover:text-white mx-32">Ok</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>


import Scum from "../classes/Scum.js";
import Danger from "../classes/Danger.js"
import Stuff, {stuffList} from "~/classes/Stuff";
import Item from "~/classes/Item";

export default {

 data() {

   return {
     hisGameStart: false,
     scum:  new Scum(),
     danger: Danger,
     land: false,
     isExplore: false,

     randomNumber : this.getRandomInt(6),
     isInRoom: false,
     monster : false,
     isTrap : false,
     fightWin : false,
     fightEnd: false,
     isShop : false,
     items: new Item(),
     isDead: false,
     isWin: false,
     isStuff: false,
     fightEscape: false,

   }

 },
  methods: {

    gameStart() {
      this.scum = new Scum;
      this.hisGameStart = true;
      this.resetGame();

    },
    explore(land) {
      this.isExplore = true;
      switch (land) {
        case 'ruins':
          this.land = this.danger.ruins;
      }
    },
    enter() {
      this.fightWin = false;
      this.isExplore = false;
      this.isInRoom = true;
      this.monster = this.land[this.getRandomInt(6)];
      this.fightEnd = false;
      this.isTrap = this.monster.isTrap;
      this.fightEscape = false;

    },

    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },


     fight(monsterId) {
     const monster = this.land[monsterId];

       this.randomNumber = this.getRandomInt(6)
     if (monster.isTrap) {
       this.fightWin = false;
       this.scum.takeDommage(monster.dmg, true)
       this.fightEnd = true;
       this.isInRoom = false;
        if (this.scum.hp < 1) {
          this.isDead = true;
        }
       return;
     }

     const hit = this.scum.attack();
     if (hit >= monster.shield) {
       this.scum.addGp(monster.gp);
      this.fightWin = true;
     } else {
       this.fightWin = false;
       this.scum.takeDommage(monster.dmg, false)
     }
     this.fightEnd = true;
       this.isInRoom = false;
       if (this.scum.getHp() < 1) {
         this.isDead = true;
       }
       if(this.scum.getGp() > 49) {
         this.isWin = true;
       }
    },

    goShop() {
      this.isShop = !this.isShop;
    },

    resetGame() {
      this.isExplore = false;
      this.isInRoom = false;
      this.monster = false;
      this.isTrap = false;
      this.fightWin = false;
      this.isDead = false;
      this.isStuff = false;
      this.fightEscape = false;
    },

    buyItem(item) {
      if (this.scum.getGp() < item.price) {
        document.getElementById('modal-error').classList.remove('hidden')
        document.getElementById('error-message').innerText = "Vous ne pouvez pas acheter ça !";
        document.getElementById('error-raisons').innerText = "Vous n'avez pas suffisamment d'or";
        return "Vous n'avez pas suffisamment de Pièces d'or.";
      }
      this.isStuff = true;
      this.scum.spendGold(item.price);
      let itemName = item.name
      this.scum.stuff[itemName] = true;

    },

    modalClose() {
      document.getElementById('modal-items').classList.add('hidden')

    },


    goStuff() {
      document.getElementById('modal-items').classList.remove('hidden')

    },

    useItem(item) {
      switch (item) {
        case 'Potion':
          this.scum.heal(this.getRandomInt(6))
          this.scum.stuff.Potion = false;
          break;
        case 'Caltrops':
          this.fightEscape = true;
          this.fightEnd = true;
          this.scum.stuff.Caltrops = false;
      }
    }
  },



  layout: 'default',
}
</script>
