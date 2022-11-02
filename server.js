const { prompt } = require('inquirer');
const db = require('./db');
const { console.table } = require('console.table');

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
                //add additional choices here
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
    
}

function updateEmployeeRole() {

}

function viewRoles() {

}

function addRole() {

}

function viewDepartments() {

}

function addDepartment() {

}


