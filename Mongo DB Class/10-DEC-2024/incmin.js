// inc
db.emp.updateOne({}, {$inc: {sal: 200}});
db.emp.updateOne({}, {$inc: {sal: null}});
db.emp.updateOne({}, {$inc: {salary: 1000}});

//min

db.emp.updateOne({}, {$min: {sal: 2000}});
db.emp.updateOne({}, {$min: {sal: 1000}});
db.emp.updateOne({}, {$min: {sal: null}});
db.emp.updateOne({}, {$min: {sal: -200}});
db.emp.updateOne({}, {$min: {sal: 0}});

