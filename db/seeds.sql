USE employees_db;

INSERT INTO department (name)
VALUES 
    ('sales'),
    ('engineering'),
    ('customer service'),
    ('accounting');

INSERT INTO role (title, salary, department_id)
VALUES
    ('director of sales', 150000, 1), 
    ('account exec', 70000, 1),
    ('engineer', 200000, 2),
    ('project manager', 250000, 2),
    ('customer service manager', 75000, 3),
    ('customer service rep', 40000, 3),
    ('accountant', 100000, 4),
    ('controller', 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jack', 'Smith', 1, NULL),
    ('Jane','Jones', 2, 1),
    ('Jessica','Green', 4, NULL),
    ('Lindsey', 'Johnson', 3, 4),   
    ('Rachel', 'Hill', 5, NULL),
    ('Bob','Sanders', 6, 5),
    ('Ava', 'Graiff', 8, NULL),
    ('Kathy', 'McHugh', 7, 8);


