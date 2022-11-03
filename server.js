const { prompt } = require('inquirer');
const db = require('./db');
const console = require('console');

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

}


