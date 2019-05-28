import { example } from './example';

test('It is a function', () => {
    expect(typeof example).toEqual('function');
});

test('It returns a string', () => {
    expect(example()).toEqual('example');
});
