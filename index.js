//const for connection
const connection = require('./db/connection');

//constructor class that holds executable functions for application

class DB {
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees (){
        return this.connection.promise().query(
            `SELECT employee.id AS "employee id", employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;`
        );
    }

    findAllRoles () {
        return this.connection.promise().query(
            `SELECT role.id, role.title,  department.name as department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;`
        );
    }

    findAllDepartments () {
        return this.connection.promise().query(
            `SELECT department.id, department.name FROM department;`
        );
    }
    createRole (role) {
        return this.connection.promise().query(
            `INSERT INTO role SET ?`,role
        );
    }

    updateEmployeeRole (employeeID, roleID) {
        return this.connection.promise().query(
            `UPDATE employee SET role_id = ? WHERE id = ?`, [roleID, employeeID]
        );
    }

} 

module.exports = new DB(connection);