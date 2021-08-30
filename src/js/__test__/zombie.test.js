import Zombie from '../zombie';

test('Must correctly create Zombie character object', () => {
  const expected = {
    name: 'Test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Zombie('Test', 'Zombie')).toEqual(expected);
});

test('Must correctly create Zombie character object when in arguments there is only name', () => {
  const expected = {
    name: 'Test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Zombie('Test')).toEqual(expected);
});
