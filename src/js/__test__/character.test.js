import Character from '../character';

test('Should correctly create a character', () => {
  const expected = {
    name: 'Test',
    type: 'Bowerman',
    health: 100,
    level: 1,
  };
  expect(new Character('Test', 'Bowerman')).toEqual(expected);
});

test('Should throw an error if name is not a string', () => {
  expect(() => new Character(52, 'Bowerman')).toThrowError('The name must be a string!');
});

test('Should throw an error if name is not consider 2 - 10 literas', () => {
  expect(() => new Character('T', 'Bowerman')).toThrowError('The name must be 2 to 10 literas!');
  expect(() => new Character('liolijjkjjhbo')).toThrowError('The name must be 2 to 10 literas!');
});

test('if the character is not on the list, throws an error', () => {
  expect(() => new Character('eyeyr')).toThrowError('The type of character must be selected from the list: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie!');
});
