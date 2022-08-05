// Intern parent class with the following properties and methods:
const Employee = require('../lib/Employee.js');
// school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // getSchool()
    getSchool() {
        return this.getSchool;
    }

    // getRole() // Overridden to return 'Intern'
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;