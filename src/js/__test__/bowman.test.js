import Bowman from '../bowman';

test('Must correctly create Bowman character object', () => {
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defens: 25,
  };
  expect(new Bowman('Test', 'Bowman')).toEqual(expected);
});
