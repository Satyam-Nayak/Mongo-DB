db.emp.find({},{ename:1,_id:0,sal:1,total_sal:{$sum:['$sal','$comm']}})
db.emp.find({},{ename:1,_id:0,sal:1,total_sal:{$subtract:['$sal',200]}})
db.emp.find({},{ename:1,_id:0,sal:1,per_day_sal:{$divide:['$sal',30]}})
db.emp.find({},{ename:1,_id:0,sal:1,annual_sal:{$multiply:['$sal',12]}})


//questions
// 1. WAQTD ename along with there annual sal?
Ans. db.emp.find({},{ename:1,_id:0,annual_sal:{$multiply:['$sal',12]}})
// 2. display ename , job with there half term sal
Ans. db.emp.find({},{ename:1, job:1, _id:0,half_sal:{$multiply:['$sal', 6]}})
// 3. display all the details of the emp along with 2000 bonous to there anual salary.
Ans. db.emp.find({},{_id:0,sal:1,B_sal:{$sum:['$sal',2000]}})
// 4. waqtd ename, sal and sal with a hike of 10%.
Ans. db.emp.find({},{ename:1,sal:1,_id:0,hike_sal:{$multiply:['$sal',1.10]}})
// 5. display ename and sal with diduction of 25%.
ans. db.emp.find({},{ename:1,sal:1,_id:0,diduc_sal:{$multiply:['$sal',0.75]}})
// 6. display ename and sal with monthly hike of 50 rupees.
// 7. display ename and anual sal with diduction of 10% from anual sal
// 8. display ename and job along with 99 rupees panalty in sal.
