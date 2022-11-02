const {prompt}= require('inquirer');
const db = require('./db');
require ('console.table');

startApp();

function startApp(){
    prompt ([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'view all employees',
                    value: 'view_employees'
                },
                //add additional choices here
            ]
        }
    ]).then(res=>{
        let choice = res.choice;
        switch(choice){
            case 'view_employees':
                viewEmployees();
                break;
            //other cases
        }
    })
}


function viewEmployees (){
    db.findAllEmployees()
    .then(([rows])=>{
        let employees = rows;
        console.table(employees)
    })
    .then(()=>startApp())
}
