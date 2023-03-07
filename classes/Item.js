export default class Item {
  rope = {
    id: 1,
    name: 'Rope',
    price: 2,
    usage : 1,
    effect: 'Protège une fois d\'un piège une fois'
  };

  caltrops = {
    id: 2,
    name: 'Caltrops',
    price: 2,
    usage: 1,
    effect: 'Permet de prendre la fuite une fois'
  };

  shield = {
    id: 3,
    name: 'Bouclier',
    price: 3,
    usage: 1,
    effect: 'Protège une fois des dommages'
  };

  potion = {
    id: 4,
    name: 'Potion',
    price: 4,
    usage: 1,
    effect: 'Soigne d\'1d6 PV'
  };

  sword = {
    id: 5,
    name: 'Epée',
    price: 5,
    usage: 99,
    effect: 'Aurgmente les dégats de 1'
  };

  armor = {
    id: 6,
    name: 'Armure',
    price: 10,
    usage: 99,
    effect: 'Diminue les dégats de 1'
  };
}
