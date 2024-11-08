//* 1.WRITE A QUERY TO DISPLAY ALL THE DETAILS FROM THE EMPLOYEE TABLE2.

db.emp.find({})

//* 2.waqtd name and comm along with salary of all the employees

db.emp.find({}, { ename: 1, comm: 1, sal: 1, _id: 0 })

//* 3.WAQTD NAME AND SALARY GIVEN TO ALL THE EMPLOYEES

db.emp.find({}, { ename: 1, sal: 1, _id: 0 })

//* 4.WAQTD NAME AND COMMISSION GIVEN TO ALL THE EMPLOYEES

db.emp.find({}, { ename: 1, comm: 1, _id: 0 })

//* 5.WAQTD EMPLOYEE ID AND DEPARTMENT NUMBER OF ALL THE EMPLOYEES IN EMP TABLE.

db.emp.find({}, { empno: 1, deptno: 1, _id: 0 })

//* 6.WAQTD ENAME AND HIREDATE OF ALL THE EMPLOYEES 

db.emp.find({}, { ename: 1, hiredate: 1, _id: 0 })

//* 7.WAQTD NAME AND DESIGNATION OF ALL THE EMPLPOYEES 

db.emp.find({}, { ename: 1, job: 1, _id: 0 })

//* 8.WAQTD NAME, JOB AND SALARY GIVEN ALL THE EMPLOYEES 

db.emp.find({}, { ename: 1, job: 1, sal: 1, _id: 0 })

//* 9.WAQTD DNAMES PRESENT IN DEPARTMENT TABLE

db.dept.distinct("dname")

//* 10.WAQTD DNAME AND LOCATION PRESENT IN DEPT TABLE

db.dept.find({}, { dname: 1, location: 1, _id: 0 })