UPDATE employees
SET salary = salary * 1.10
WHERE salary < 5000;

SELECT * FROM employees ORDER BY salary;