var mongoose = require('mongoose');
var EmployeeSchema = require('./restaurant.schema.server.js');
var Employee = mongoose.model('Employee', EmployeeSchema);

Employee.createEmployee = createEmployee;
Employee.findEmployeeById = findEmployeeById;
Employee.findEmployeeByUsername = findEmployeeByUsername;
Employee.findEmployeeByCredentials = findEmployeeByCredentials;
Employee.updateEmployee = updateEmployee;
Employee.deleteEmployee = deleteEmployee;

module.exports = Employee;

function createEmployee(user) {
    return Employee.create(user);
}

function findEmployeeById(userId) {
    return Employee.findById(userId);
}

function findEmployeeByUsername(username) {
    return Employee.findOne({ username: username });
}

function findEmployeeByCredentials(username, password) {
    return Employee.findOne({ username: username, password: password });
}

function updateEmployee(userId, user) {
    return Employee.findByIdAndUpdate(userId, user, {new: true});
}

function deleteEmployee(userId) {
    return Employee.findByIdAndRemove(userId);
}
