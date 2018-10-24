const Foo = require('../../src/Foo');

test('gives time of day', () => {
  expect(new Foo().doThing()).toBe('1655');
});