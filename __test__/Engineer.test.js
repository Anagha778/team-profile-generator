const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Anagha',10,'anagha@gmail.com','anagha778');
  
    expect(engineer.name).toBe('Anagha');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.githubname).toEqual(expect.any(String));
});

test('getGithub returns passed string',() => {
    const engineer = new Engineer('Anagha',10,'anagha@gmail.com','anagha778');

    expect(engineer.getGithub()).toBe('anagha778');
});

test('getRole returns Engineer',() => {
    const engineer = new Engineer('Anagha',10,'anagha@gmail.com','anagha778');

    expect(engineer.getRole()).toBe('Engineer');
});