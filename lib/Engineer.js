// Engineer parent class with the following properties and methods:
const Employee = require('../lib/Employee.js');

// github // GitHub username
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // getGithub()
    getGithub() {
        return this.github;
    }

    // getRole() // Overridden to return 'Engineer'
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;