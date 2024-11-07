logical.sql

1. Write a query to display the details of employees working as clerk and earning a salary less than 1500.

ans. 1. db.emp.find({ $and: [{ job: "clerk" }, { sal: { $lt: 1500 } }] })

2. Display `ename` and `hiredate` of employees working as manager in department 30.

ans. 2. db.emp.find({ $and: [{ job: "manager" }, { deptno: 30 }] }, { ename: 1, hiredate: 1, _id: 0 })

3. Display all details of employees working in department 30 or as Analyst.

ans. 3. db.emp.find({ $or: [{ deptno: 30 }, { job: "analyst" }] })

4. Display all employees whose salary is less than 1100 and job is clerk.

ans. 4. db.emp.find({ $and: [{ sal: { $lt: 1100 } }, { job: "clerk" }] })

5. Display `empno` and `ename` of employees working as salesman in department 20 or 30.

ans. 5. db.emp.find({ $and: [{ job: "salesman" }, { deptno: { $in: [20, 30] } }] }, { empno: 1, ename: 1, _id: 0 })

6. Display `ename` and `sal` of employees working as president and earning 4000.

ans. 6. db.emp.find({ $and: [{ job: "president" }, { sal: 4000 }] }, { ename: 1, sal: 1, _id: 0 })

7. Display employee details whose `empno` are 7902, 7839, or 7698.

ans. 7. db.emp.find({ empno: { $in: [7902, 7839, 7698] } })

8. Display `ename` of employees hired after 1981 and before 1985.

ans. 8. db.emp.find({ $and: [{ hiredate: { $gt: new Date("1981-12-31") } }, { hiredate: { $lt: new Date("1985-01-01") } }] }, { ename: 1, _id: 0 })

9. Display `ename` and `job` of employees working as manager, salesman, or clerk.

ans. 9. db.emp.find({ job: { $in: ["manager", "salesman", "clerk"] } }, { ename: 1, job: 1, _id: 0 })

10. Display `ename`, `sal`, and `hiredate` of employees who joined after 1981 in department 10 or 30.

ans. db.emp.find({ $and: [{ hiredate: { $gt: new Date("1981-12-31") } }, { deptno: { $in: [10, 30] } }] }, { ename: 1, sal: 1, hiredate: 1, _id: 0 })

11. Write a command to show MongoDB database version.
ans. db.version()


