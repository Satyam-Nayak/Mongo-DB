// 1st : db.emp.aggregate([{ $project: { _id: 0, empno: 1, ename: 1, annual_salary: { $multiply: ["$sal", 12] } } }])
// 2. db.emp.aggregate([{ $match: { job: "clerk", deptno: { $in: [10, 20] }, ename: { $regex: "i", $options: "i" }, sal: { $lt: 10000 } } }])
// 3. db.emp.aggregate([{ $match: { joining_date: { $regex: "^1982" } } }])
// 4. db.emp.aggregate([{ $match: { joining_date: { $regex: "-07-" } } }])
// 5. db.emp.aggregate([{ $match: { joining_date: { $regex: "-10$" } } }])


// 1. db.emp.aggregate([{ $addFields: { Annual_Sal: { $multiply: ["$sal", 12] } } }])


