// Update

db.emp.updateOne({ename:'smith'},{$set:{empname:'smith'}},{upsert:true})

db.emp.updateOne({sal:5000},{$set:{rich_kid:'yes'}},{upsert:true})


//1. waqt display ename who are having exactly 5 charaters in there names.?
db.emp.find({ename:{$regex:/^.{5}$/}},{ename:1,_id:0})
db.emp.find({ename:{$regex:/^.....$/}},{ename:1,_id:0})
//2. waqt display ename of those emp  whose ename ends with charater 'n'.
db.emp.find({ename:{$regex:/.n$/}},{ename:1,_id:0})
// 3. waqt display ename who are having two consucative 'l' in there name.?
Ans. db.emp.find({ename:{$regex: /.*ll.*/}})
//4. waqt display emp details who are hiredate before 1981 december 31.
db.emp.find({hiredate:{$lt: new Date('1981-12-31')}})
//5. waqt display ename , sal, comm,who are erning more comm then sal.
db.emp.find({ $expr: { $gt: ["$comm", "$sal"] } },{ ename: 1, sal: 1, comm: 1, _id: 0 })
//6. waqt add a field 'satus' with value active to all the emp.
db.emp.updateMany({},{$set:{status:"active"}})
//7. waqt add a field  'rich_kid' as a value 'yes' to all the emp to those who are erning more the 3000.
db.emp.updateMany({sal:{$gt: 3000}},{$set:{rich_kid:"yes"}})
//8. waqt update second element of skills array to the emp whose names starts with charater 'j'.
db.emp.updateMany({ename:{$regex:/^j.*/}},{$set:{'skills.1':'expressjs'}})
//9. waqt update second element of skills array to 'expressjs'. (don't use updateOne)
db.emp.updateMany({},{$set:{'skills.1':'express_js'}})
//10. waqt update sal to 3000 and comm to 1000 of smith.
db.emp.updateOne({ename:smith},{$set:{sal:3000,comm}})
//11. waqt display all the documets of emp collection.
