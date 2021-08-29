import Character from './character';

export default class Bowerman extends Character {
  constructor(name) {
    super(name, type = 'Bowerman');
    this.attack = 25;
    this.defens = 25;
  }
}
