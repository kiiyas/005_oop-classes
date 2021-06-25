import Swordsman from '../swordsman';

test('Must correctly create Swordsman character object', () => {
  const expected = {
    name: 'Test',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Swordsman('Test', 'Swordsman')).toEqual(expected);
});
