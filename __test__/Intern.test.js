const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('Anagha',10,'anagha@gmail.com','UofT');
  
    expect(intern.name).toBe('Anagha');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('getSchool returns passed string',() => {
    const intern = new Intern('Anagha',10,'anagha@gmail.com','U of T');

    expect(intern.getSchool()).toBe('U of T');
});

test('getRole returns Intern',() => {
    const intern = new Intern('Anagha',10,'anagha@gmail.com','UofT');

    expect(intern.getRole()).toBe('Intern');
});