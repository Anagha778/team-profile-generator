const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Anagha',10,'anagha@gmail.com',1234567892);
  
    expect(manager.name).toBe('Anagha');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getRole returns Manager',() => {
    const manager = new Manager('Anagha',10,'anagha@gmail.com',1234567892);

    expect(manager.getRole()).toBe('Manager');
});