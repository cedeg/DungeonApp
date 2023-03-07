import { nameByRace } from "fantasy-name-generator";
import Stuff from "./Stuff.js";

const scumName = nameByRace("human", { gender: "female" });


  export default class Scum {

    name = scumName;
    hp = 20;

    gp = 0;

    strength = 0;

    isDead = false;

    isWin = false

    stuff = new Stuff()

    getStuff = () => {
      return this.stuff
    }
    getHp = () => {
      return this.hp;
    }
    getName = () => {
      return this.name
    }
    getGp = () => {
      return this.gp;
    }

    addGp = (gp) => {
      this.gp = this.gp + gp
      if (this.gp >= 50) {
        this.isWin = true;
      }
      return this.gp;
    }

    spendGold = (gp) => {
      return this.gp = this.gp - gp;
    }

    attack = () => {
      let sword = this.getStuff.sword ? 1 :  0
      return this.strength + this.getRandomInt(6) + sword;
    }

    takeDommage = (dmg, isTrap = false) => {

      if (!isTrap) {

        if (this.getStuff().Bouclier) {
          this.getStuff().Bouclier = false;
          return this.hp;
        }
        let armor = this.getStuff().Armure ? 1 :  0
        this.hp = this.hp - dmg + armor;
      } else {
        this.hp = this.hp - dmg;
      }

      if (this.hp <= 0 ) {
        this.hp = 0;

        document.getElementById("modal-message").classList.remove('hidden');
        document.getElementById('modal-text-message').innerHTML = "VOUS ETES MORT !"
        document.getElementById('modal-raisons').innerHTML = "Le donjon à eu raison de vous... Relancer une partie... Ou partez..."
      }
      return this.hp
    }

    heal = (hp) => {
      return this.hp = this.hp + hp;
    }

    getRandomInt = (max) => {
      return Math.floor(Math.random() * max) + 1 ;
    }

  }


