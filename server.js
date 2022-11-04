const { prompt } = require('inquirer');
const db = require('./db/connection');
const ctable = require('console.table');
const connection = require('./db/connection');
const DB = require('./index');
// const express = require('express');
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

startApp();

function startApp() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View employees',
                    value: 'view_employees'
                },
                {
                    name: 'Add an employee',
                    value: 'add_employees'
                },
                {
                    name: 'Update employee role',
                    value: 'update_employee_role'
                },
                {
                    name: 'View all roles',
                    value: 'view_roles'
                },
                {
                    name: 'Add role',
                    value: 'add_role'
                },
                {
                    name: 'View All Departments',
                    value: 'view_departments'
                },
                {
                    name: 'Add Department',
                    value: 'add_department'
                },
                {
                    name: 'Delete Employee',
                    value: 'delete_employee'
                },
                {
                    name: 'Delete Role',
                    value: 'delete_role'
                },
                {
                    name: 'Delete Department',
                    value: 'delete_department'
                },
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case 'view_employees':
                viewEmployees();
                break;
        }
        switch (choice) {
            case 'add_employees':
                addEmployee();
                break;
        }
        switch (choice) {
            case 'update_employee_role':
                updateEmployeeRole();
                break;
        }
        switch (choice) {
            case 'view_roles':
                viewRoles();
                break;
        }
        switch (choice) {
            case 'add_role':
                addRole();
                break;
        }
        switch (choice) {
            case 'view_departments':
                viewDepartments();
                break;
        }
        switch (choice) {
            case 'add_department':
                addDepartment();
                break;
        }
        switch (choice) {
            case 'add_department':
                deleteEmployee();
                break;
        }
        switch (choice) {
            case 'add_department':
                deleteRole();
                break;
        }
        switch (choice) {
            case 'delete_department':
                deleteDepartment();
                break;
        }
    })
}


function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.table(employees)
        })
        .then(() => startApp())
}

function addEmployee() {
    prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the employee's last name?",
        },
        {
            type: 'input',
            name: 'role_id',
            message: "What is the reference ID for the employee's role?",
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What is the reference ID for the employee's manager?",
        },
    ]).then((responses) => {
        let answers = [responses.first_name, responses.last_name, responses.role_id, responses.manager_id];
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        db.query(sql, answers, (err, result) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.json({
                message: 'success',
            });
        });
    })
        .then(() => startApp())

}

function updateEmployeeRole() {
    prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the employee's last name?",
        },
        {
            type: 'input',
            name: 'role_id',
            message: "What is the reference ID for the employee's new role?",
        },
    ]).then((responses) => {
        let answers = [responses.first_name, responses.last_name, responses.title];
        const sql = `UPDATE employee SET role_id = ? WHERE (first_name, last_name) = (?,?)`;
        db.query(sql, answers, (err, result) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.json({
                message: 'success',
            });
        });
    })
        .then(() => startApp())
}

function viewRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles)
        })
        .then(() => startApp())
}

function addRole() {
    prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title/name of the role?",
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary of the role?",
        },
        {
            type: 'input',
            name: 'department_id',
            message: "What is the reference ID for the role's department?",
        },
    ]).then((responses) => {
        let answers = [responses.title, responses.salary, department_id];
        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
        db.query(sql, answers, (err, result) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.json({
                message: 'success',
            });
        });
    })
        .then(() => startApp())
}

function viewDepartments() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles)
        })
        .then(() => startApp())
}

function addDepartment() {
    prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the new department's name?",
        },
    ]).then((response) => {
        let answer = response.name;
        const sql = `INSERT INTO department (name) VALUES (?)`;
        db.query(sql, answer, (err, result) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.json({
                message: 'success',
            });
        });
    })
        .then(() => startApp())
}

function deleteEmployee() {
    prompt([
        {
            type: 'input',
            name: 'id',
            message: "What is the ID of the employee you would like to delete?",
        },
    ]).then((response) => {
        let answer = response.id;
        const sql = `DELETE FROM employee WHERE id = ?`;
        db.query(sql, answer, (err, result) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.json({
                message: 'success',
            });
        });
    })
        .then(() => startApp())
}

function deleteRole() {
    prompt([
        {
            type: 'input',
            name: 'id',
            message: "What is the ID of the role you would like to delete?",
        },
    ]).then((response) => {
        let answer = response.id;
        const sql = `DELETE FROM role WHERE id = ?`;
        db.query(sql, answer, (err, result) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.json({
                message: 'success',
            });
        });
    })
        .then(() => startApp())
}

function deleteDepartment() {
    prompt([
        {
            type: 'input',
            name: 'id',
            message: "What is the ID of the department you would like to delete?",
        },
    ]).then((response) => {
        let answer = response.id;
        const sql = `DELETE FROM department WHERE id = ?`;
        db.query(sql, answer, (err, result) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.json({
                message: 'success',
            });
        });
    })
        .then(() => startApp())
}