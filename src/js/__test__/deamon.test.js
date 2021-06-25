import Daemon from '../deamon';

test('Must correctly create Daemon character object', () => {
  const expected = {
    name: 'Test',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defens: 40,
  };
  expect(new Daemon('Test', 'Daemon')).toEqual(expected);
});
