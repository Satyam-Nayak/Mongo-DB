db.emp.updateOne({ ename: "ward" }, { $set: { sal: 3000 } });

db.emp.updateOne({ ename: "allen" }, { $unset: { comm: "" } });

db.emp.updateMany({}, { $rename: { hiredate: "joining_date" } });

db.emp.updateOne({ ename: "king" }, { $mul: { sal: 4 } });

db.emp.updateOne({ ename: "smith" }, { $min: { sal: 600 } });

db.emp.updateOne({ ename: "martin" }, { $min: { sal: 300 } });

db.emp.updateOne({ ename: "turner" }, { $max: { sal: 3999 } });

db.emp.updateOne({ ename: "adams" }, { $inc: { sal: 999 } });

db.emp.updateOne({ ename: "miller" }, { $set: { sal: 0 } });

db.emp.findOne();
