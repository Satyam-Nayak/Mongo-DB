// 1. WAQTD total sal (sal + comm) of all employees along with ename.
db.emp.find({},{ename:1,_id:0,total_sal:{$sum:['$sal','$comm']}})

// 2. WAQTD ename with 100 penalty from each employee's sal.
db.emp.find({}, { ename: 1, penalty_sal: { $subtract: ["$sal", 100] }, _id: 0 });

// 3. WAQTD employee names along with their annual salary
db.emp.find({},{ename:1,_id:0,annual_sal:{$multiply:['$sal',12]}})

// 4. WAQTD employee ename along with their annual salary with hike of 20%
db.emp.find({},{ename:1,sal:1,_id:0,annual_hike_sal:{$multiply:['$sal',12,1.10]}})

// 5. WAQTD ename and anual sal with diduction of 30% from anual sal
db.emp.find({},{ename:1,sal:1,_id:0,annual_diduc_sal:{$multiply:['$sal',12,0.70]}})

// 6. WAQTD employee enames along with their daily sal.
db.emp.find({},{ename:1,_id:0,daily_sal:{$divide:['$sal',30]}})

// 7. WAQTD employee names along with their half-month salary
db.emp.find({},{ename:1,_id:0,daily_sal:{$divide:['$sal',2]}})

// 8. WAQTD employee ename and sal those who are earning even salary 
db.emp.find({ sal: { $mod: [2, 0] } }, { ename: 1, sal: 1, _id: 0 })

// db.emp.find(
//     { sal: { $mod: [2, 0] } }, // Filter condition
//     { ename: 1, sal: 1, _id: 0 } // Projection
//   );

// 9. WAQTD employee name and salary those who are earning odd salary
db.emp.find({ sal: { $mod: [2, 1] } }, { ename: 1, sal: 1, _id: 0 })


// 10. WAQTD documents of employees where their empno, manager number, department number and salary is even.
db.employees.find({$and:[{empno:{$mod:[2,0]}},{mgr:{$mod:[2,0]}},{deptno:{$mod:[2,0]}},{sal:{$mod:[2,0]}}]},{empno:1,mgr:1,deptno:1,sal:1,_id:0})
 

// WAQTD the ename and total year of experiance of the employee from the EMP dataset

db.emp.find({}, {_id:0,ename: 1,year_of_EXP: {$subtract: [{ $year: new Date() }, { $year: "$hiredate" } ]}});
db.emp.find({},{ename:1, _id:0, year_of_exp:{$floor:{$divide:[{$subtract:[new Date(),"$hiredate"]},1000*60*60*24*365]}}})


// Extra // WAQTD the ename and total year of experiance with their jobs name of the employee from the EMP 
db.emp.aggregate([{$project:{ename:1,job:1,_id:0,year_of_exp:{$floor:{$divide:[{$subtract:[new Date(),"$hiredate"]},1000*60*60*24*365]}}}},{$sort:{ename:1, job:1}}])
