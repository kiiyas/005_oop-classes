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
  expect(() => new Character(1, 'Bowerman')).toThrowError('The name must be a string!');
});

test('Should throw an error if name is not consider 2 - 10 literas', () => {
  expect(() => new Character('T', 'Bowerman')).toThrowError('The name must be 2 to 10 literas!');
  expect(() => new Character('liolio')).toThrowError('The name must be 2 to 10 literas!');
});

test('if the character is not on the list, throws an error', () => {
  expect(() => new Character('eyeyr')).toThrowError('The name must be 2 to 10 literas!');
});
