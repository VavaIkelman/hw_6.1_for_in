import orderByProps from '../app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('create object', () => {
  expect(orderByProps(obj, ['level', 'name', 'attack'])).toMatchObject([
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('without keys in the object', () => {
  expect(orderByProps(obj, ['health', 'weapon', 'level'])).toMatchObject([
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('with empty array', () => {
  expect(orderByProps(obj, [])).toMatchObject([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});
