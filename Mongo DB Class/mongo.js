// Projection operation
// $[Positional]

db.emp.find({skills:'java'},{_id:0,'skills.$':1})  //to display only exact only one skills like JAVA
db.emp.find({skills:'java'},{_id:0,'skills.$':1,ename:1})

db.emp.find({skills:'java'},{_id:0,ename:1,skills:{$eleMatch:{$eq:'html'}}})

// $slice 
db.emp.find({skills:'java'},{_id:0,skills:{$slice:[0,3]}})