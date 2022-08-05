// Engineer parent class with the following properties and methods:
const Engineer = require('../lib/Engineer.js');

// github // GitHub username
test('create a engineer object', () => {
    const engineer = new Engineer('Pamela James', 50, 'pjames@gmail.com', 'pjames');

    expect(engineer.github).toEqual(expect.any(String));
});

// getGithub()
test('to get engineer Github', () => {
    const engineer = new Engineer('Pamela James', 50, 'pjames@gmail.com', 'pjames');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})
// getRole() // Overridden to return 'Engineer'
test('get role of employee', () => {
    const engineer = new Engineer('Pamela James', 50, 'pjames@gmail.com', 'pjames');

    expect(engineer.getRole()).toEqual("Engineer");
});