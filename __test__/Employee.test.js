const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Anagha',10,'anagha@gmail.com');
  
    expect(employee.name).toBe('Anagha');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('getName returns anystring',() => {
    const employee = new Employee('Anagha',10,'anagha@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('getId returns passed number',() => {
    const employee = new Employee('Anagha',10,'anagha@gmail.com');

    expect(employee.getId()).toBe(10);
});

test('getemail returns passed string',() => {
    const employee = new Employee('Anagha',10,'anagha@gmail.com');

    expect(employee.getEmail()).toBe('anagha@gmail.com');
});

test('getRole returns Employee',() => {
    const employee = new Employee('Anagha',10,'anagha@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});
