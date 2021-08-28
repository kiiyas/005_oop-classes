export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('The name must be a string!');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('The name must be 2 to 10 literas!');
    }

    const listOfTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!listOfTypes.includes(type)) {
      throw new Error('The type of character must be selected from the list: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
