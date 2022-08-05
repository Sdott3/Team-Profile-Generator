// Intern parent class with the following properties and methods:
const Intern = require('../lib/Intern.js');
// school
test('create a intern object', () => {
    const intern = new Intern('Shaquille Sunflower', 60, 'ssunflower@gmail.c0m', 'MSU');

    expect(intern.school).toEqual(expect.any(String));
});

// getSchool()
test('to get intern School', () => {
    const intern = new Intern('Shaquille Sunflower', 60, 'ssunflower@gmail.c0m', 'MSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// getRole() // Overridden to return 'Intern'
