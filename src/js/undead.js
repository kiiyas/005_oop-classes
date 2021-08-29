import Character from './character';

export default class Undead extends Character {
  constructor(name) {
    super(name, type = 'Undead');
    this.attack = 25;
    this.defens = 25;
  }
}
