// 1. WAQTD max salary of emp who is working in department 20.
db.emp.aggregate([{ $match: { deptno: 20 } }, { $group: { _id: null, maxSalary: { $max: "$sal" } } }])

// 2. WAQTD no of employees getting salary less than 2000 in department 10.
db.emp.aggregate([{ $match: { deptno: 10, sal: { $lt: 2000 } } }, { $count: "count" }])

// 3. WAQTD total sal needed to pay employees working as clerk.
db.emp.aggregate([{ $match: { job: "clerk" } }, { $group: { _id: null, totalSal: { $sum: "$sal" } } }])

// 4. WAQTD no of employees having character 'a' as a 1st letter in their name.
db.emp.aggregate([{ $match: { ename: { $regex: "^a", $options: "i" } } }, { $count: "count" }])

// 5. WAQTD no of employees working as clerk or manager.
db.emp.aggregate([{ $match: { job: { $in: ["clerk", "manager"] } } }, { $count: "count" }])

// 6. WAQTD total sal needed to pay the employees hired in January and April.
db.emp.aggregate([{ $match: { joining_date: { $regex: "-01-| -04-" } } }, { $group: { _id: null, totalSal: { $sum: "$sal" } } }])

// 7. WAQTD avg sal, total sal, no of employees, maxSalary given to the employees who are working as president.
db.emp.aggregate([{ $match: { job: "president" } }, { $group: { _id: null, avgSal: { $avg: "$sal" }, totalSal: { $sum: "$sal" }, noOfEmp: { $sum: 1 }, maxSal: { $max: "$sal" } } }])

// 8. WAQTD no of employees having character 'r' in their names.
db.emp.aggregate([{ $match: { ename: { $regex: "r", $options: "i" } } }, { $count: "count" }])

// 9. WAQTD no of employees and total sal needed to pay the employees who have two consecutive 'l' s in their names.
db.emp.aggregate([{ $match: { ename: { $regex: "ll", $options: "i" } } }, { $group: { _id: null, noOfEmp: { $sum: 1 }, totalSal: { $sum: "$sal" } } }])

// 10. WAQTD no of department present in the emp collections.
db.emp.aggregate([{ $group: { _id: "$deptno" } }, { $count: "distinctDepartments" }])

// 11. WAQTD total sal given to the employees working as clerk in deptno 30.
db.emp.aggregate([{ $match: { deptno: 30, job: "clerk" } }, { $group: { _id: null, totalSal: { $sum: "$sal" } } }])

// 12. WAQTD no of distinct salary present in emp table.
db.emp.aggregate([{ $group: { _id: "$sal" } }, { $count: "distinctSalaries" }])

// 13. WAQTD avg sal given to the clerk.
db.emp.aggregate([{ $match: { job: "clerk" } }, { $group: { _id: null, avgSal: { $avg: "$sal" } } }])

// 14. WAQTD min sal given to the employees who are working in deptno 10 as clerk and manager.
db.emp.aggregate([{ $match: { deptno: 10, job: { $in: ["clerk", "manager"] } } }, { $group: { _id: null, minSal: { $min: "$sal" } } }])

// 15. WAQTD no of employees working in each department except president.
db.emp.aggregate([{ $match: { job: { $ne: "president" } } }, { $group: { _id: "$deptno", count: { $sum: 1 } } }])

// 16. WAQTD total salary needed to pay all the employees in each job.
db.emp.aggregate([{ $group: { _id: "$job", totalSal: { $sum: "$sal" } } }])
