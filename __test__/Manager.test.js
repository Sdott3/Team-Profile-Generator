// Manager parent class with the following properties and methods:
const Manager = require('../lib/Manager.js');

// test to create a manager object officeNumber
test('create a manager object', () => {
    const manager = new Manager('Gina Watters', 40, 'gwatters@gmail.com', 45);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole() // Overridden to return 'Manager'
test('get role of employee', () => {
    const manager = new Manager('Gina Watters', 40, 'gwatters@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});