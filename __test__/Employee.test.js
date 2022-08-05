// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

const Employee = require('../lib/Employee.js');

// test to create Employee object
test('creates an employee', () => {
    const employee = new Employee('Sha Thomas', 3, 'sdotthomas347@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String)); 
});

// gets name from getName() 
test('gets employee name', () => {
    const employee = new Employee('Sha Thomas', 3, 'sdotthomas347@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId()
test('gets employee id', () => {
    const employee = new Employee('Sha Thomas', 3, 'sdotthomas347@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// get email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Sha Thomas', 3, 'sdotthomas347@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// get role
test('gets employee role', () => {
    const role = "Employee";
    const employee = new Employee('Sha Thomas', 3, 'sdotthomas347@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});

