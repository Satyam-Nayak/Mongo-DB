// 1. Match the documents whose sal is exactly 3000.  
// 2. Match the employees who are not managers.  
// 3. Match the emp details who are hired on or after 1981-12-31.  
// 4. Match the emps who are working in dept no 10, 20, or 30.  
// 5. Match employees who are not working in dept no 30 or 40.  
// 6. Match the documents who are salesman and earning greater than 2500.  
// 7. Find employees who are earning commission.  
// 8. Match the employees who are not earning commission.  
// 9. Match employees whose name starts with character 'a'.  
// 10. Match employees where the hiredate is stored as date type.  
// 11. Match employees whose emp no is divisible by 5.  
// 12. Match employees whose comm is greater than salary.  
// 13. Find employees who have exactly 2 skills.  
// 14. Match employees who are hired before 1982-01-01 but have no comm.  
// 15. Match employees whose sal is not divisible by 100.  
// 16. Match employees who have all the skills like html, css, js.  
// 17. Match employees who work in dept 10 and 20.  
// 18. Match employees whose sal + comm exceeds 1500.  
// 19. Match employees working in a location that starts with 'd'.  
// 20. Match the employees whose name contains either 'e' or 'r'.  
// 21. Match the employees whose empno is divisible by 2 and greater than 199.  
// 22. Match employees whose comm is less than half of their salary.  
// 23. Match employees whose name contains exactly 5 characters.  
// 24. Match the employees present in emp collections.  
// 25. Match the employees present in dept collection. 


// 1. Match the documents whose sal is exactly 3000.
db.emp.aggregate([{ $match: { sal: 3000 } }]);

// 2. Match the employees who are not managers.
db.emp.aggregate([{ $match: { job: { $ne: "manager" } } }]);

// 3. Match the emp details who are hired on or after 1981-12-31.
db.emp.aggregate([{ $match: { hiredate: { $gte: ISODate("1981-12-31") } } }]);

// 4. Match the emps who are working in dept no 10, 20, or 30.
db.emp.aggregate([{ $match: { deptno: { $in: [10, 20, 30] } } }]);

// 5. Match employees who are not working in dept no 30 or 40.
db.emp.aggregate([{ $match: { deptno: { $nin: [30, 40] } } }]);

// 6. Match the documents who are salesman and earning greater than 2500.
db.emp.aggregate([{ $match: { job: "salesman", sal: { $gt: 2500 } } }]);

// 7. Find employees who are earning commission.
db.emp.find({ comm: { $exists: true, $ne: null } });

// 8. Match the employees who are not earning commission.
db.emp.find({ $or: [{ comm: null }, { comm: { $exists: false } }] });

// 9. Match employees whose name starts with character 'a'.
db.emp.aggregate([{ $match: { ename: { $regex: /^a/i } } }]);

// 10. Match employees where the hiredate is stored as date type.
db.emp.aggregate([{ $match: { hiredate: { $type: "date" } } }]);

// 11. Match employees whose emp no is divisible by 5.
db.emp.aggregate([{ $match: { $expr: { $eq: [{ $mod: ["$empno", 5] }, 0] } } }]);

// 12. Match employees whose comm is greater than salary.
db.emp.aggregate([{ $match: { $expr: { $gt: ["$comm", "$sal"] } } }]);

// 13. Find employees who have exactly 2 skills.
db.emp.aggregate([{ $match: { skills: { $size: 2 } } }]);

// 14. Match employees who are hired before 1982-01-01 but have no comm.
db.emp.aggregate([{ $match: { hiredate: { $lt: ISODate("1982-01-01") }, $or: [{ comm: null }, { comm: { $exists: false } }] } }]);

// 15. Match employees whose sal is not divisible by 100.
db.emp.aggregate([{ $match: { $expr: { $ne: [{ $mod: ["$sal", 100] }, 0] } } }]);

// 16. Match employees who have all the skills like html, css, js.
db.emp.aggregate([{ $match: { skills: { $all: ["html", "css", "js"] } } }]);

// 17. Match employees who work in dept 10 and 20.
db.emp.aggregate([{ $match: { deptno: { $all: [10, 20] } } }]);

// 18. Match employees whose sal + comm exceeds 1500.
db.emp.aggregate([{ $match: { $expr: { $gt: [{ $add: ["$sal", "$comm"] }, 1500] } } }]);

// 19. Match employees working in a location that starts with 'd'.
db.emp.aggregate([{ $match: { location: { $regex: /^d/i } } }]);

// 20. Match the employees whose name contains either 'e' or 'r'.
db.emp.aggregate([{ $match: { ename: { $regex: /[er]/i } } }]);

// 21. Match the employees whose empno is divisible by 2 and greater than 199.
db.emp.aggregate([{ $match: { $expr: { $and: [{ $eq: [{ $mod: ["$empno", 2] }, 0] }, { $gt: ["$empno", 199] }] } } }]);

// 22. Match employees whose comm is less than half of their salary.
db.emp.aggregate([{ $match: { $expr: { $lt: ["$comm", { $divide: ["$sal", 2] }] } } }]);

// 23. Match employees whose name contains exactly 5 characters.
db.emp.aggregate([{ $match: { ename: { $regex: /^.{5}$/ } } }]);

// 24. Match the employees present in emp collections.
db.emp.aggregate([{ $match: {} }]);

// 25. Match the employees present in dept collection.
db.emp.aggregate([
  { $lookup: { from: "dept", localField: "deptno", foreignField: "deptno", as: "dept_info" } },
  { $match: { dept_info: { $ne: [] } } }
]);
