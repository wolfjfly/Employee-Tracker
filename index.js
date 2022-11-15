//const for connection
const connection = require('./db/connection');

//constructor class that holds executable functions for application

class DB {
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees (){
        return this.connection.promise().query(
            `SELECT employee.id AS "employee id", employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id`
        );
    }

    findAllRoles () {
        return this.connection.promise().query(
            `SELECT role.id AS "role id", role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id`
        );
    }

    findAllDepartments () {
        return this.connection.promise().query(
            `SELECT department.id AS "department id", department.name FROM department`
        );
    }

} 

module.exports = new DB(connection);