// WAQTD the ename and total year of experiance of the employee from the EMP dataset

db.emp.find({}, {_id:0,ename: 1,year_of_EXP: {$subtract: [{ $year: new Date() }, { $year: "$hiredate" } ]}});
db.emp.find({},{ename:1, _id:0, year_of_exp:{$floor:{$divide:[{$subtract:[new Date(),"$hiredate"]},1000*60*60*24*365]}}})