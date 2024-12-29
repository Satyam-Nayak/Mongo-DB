db.emp.find({ comm: { $eq: null } })
db.emp.find({ mgr: { $eq: null } })
db.emp.find({ deptno: { $eq: 30 } })
db.emp.find({ sal: { $gt: 3000 } }, { ename: 1, sal: 1, _id: 0 })
db.emp.find({ job: { $eq: "analyst" } }, { ename: 1, _id: 0 })
db.emp.find({ hiredate: { $gt: new Date("1981-12-31") } }, { ename: 1, _id: 0 })
db.dept.find({ loc: { $eq: "dallas" } }, { dname: 1, _id: 0 })
db.dept.find({ deptno: { $eq: 30 } }, { loc: 1, _id: 0 })

-- 1. List all employees whose commission is `null`.
-- 2. List all employees who don't have a reporting manager (`mgr` is `null`).
-- 3. List all employees working in department no 30.
-- 4. Display `ename` and `sal` of employees earning more than 3000.
-- 5. List all `ename` whose designation is `analyst`.
-- 6. Display all employees' names who joined after 1981.
-- 7. Display the department name where the location is `Dallas`.
-- 8. Display the location whose department no is 30.
-- 9. Display all department numbers except department no 40.
-- 10. Display all department numbers except a list of specific department numbers (e.g., 10, 20, 40).