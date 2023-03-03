import { nameByRace } from "fantasy-name-generator";
import Item from "./Item.js";

const scumName = nameByRace("human", { gender: "female" });


  export default class Scum {

    name = scumName;
    hp = 20;

    gp = 0;

    strength = 0;

    isDead = false;

    isWin = false

    stuff = new Item()

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
      return this.strength + this.getRandomInt(6);
    }

    takeDommage = (dmg) => {
      this.hp = this.hp - dmg;
      if (this.hp <= 0 ) {
        this.hp = 0;
        this.isDead = true;
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


