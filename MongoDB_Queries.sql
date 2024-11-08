-- Q1: Write a query to display all employee details where the `comm` field exists.
db.emp.find({ comm: { $exists: true } })

-- Q2: Write a query to display `ename` and `sal` where the `mgr` field is not present.
db.emp.find({ mgr: { $exists: false } }, { ename: 1, sal: 1 })

-- Q3: Write a query to display employee details where the `designation` field is missing.
db.emp.find({ job: { $exists: false } })

-- Q4: Write a query to display employee details where the `job` field does not exist.
db.emp.find({ job: { $exists: false } })

-- Q5: Write a query to display employee details where the `sal` field exists and its value is higher than 2000.
db.emp.find({ sal: { $exists: true, $gt: 2000 } })

-- Q6: Write a query to display employee names where `sal` is of `double` data type.
db.emp.find({ sal: { $type: "double" } }, { ename: 1 })

-- Q7: Write a query to display `ename` and `mgr` where the `comm` field is `null` data type.
db.emp.find({ comm: { $type: "null" } }, { ename: 1, mgr: 1, comm:1 })

-- Q8: Write a query to display employee details where the `joining date` field is of `date` data type.
db.emp.find({ hiredate: { $type: "date" } })

-- Q9: Write a query to display all details of employees whose `deptno` contains the values `[10, 20]` exactly.
-- db.emp.find({ deptno: [10, 20] }) doubt? ?

-- Q10: Write a query to display all employee details for those who have at least one skill of either "java" or "html".
db.emp.find({ skills: { $in: ["java", "html"] } })

-- Q11: Write a query to display all employee details where the `tags` array contains both "developer" and "tester" jobs.
db.emp.find({ tags: { $all: ["developer", "tester"] } })

-- Q12: Write a query to display employee details where the `deptno` array contains `30` and location is `dallas`.
db.emp.find({ deptno: 30, location: "dallas" })

-- Q13: Write a query to display employee details where the `orders` array contains `item: laptop` and `quantity` is greater than `3`.
db.emp.find({ orders: { $elemMatch: { item: "laptop", quantity: { $gt: 3 } } } })

-- Q14: Write a query to display employee details whose `skills` array has exactly `3` values.
db.emp.find({ skills: { $size: 3 } })

-- Q15: Write a query to display employee details where `skills` has at least `2` elements.
db.emp.find({ skills: { $size: { $gte: 2 } } })

-- Q16: Write a query to display all employee details where the `quantities` array field contains fewer than `3` elements.
db.emp.find({ quantities: { $size: { $lt: 3 } } })

-- Q17: Write a query to display `ename` and `sal` where the `comm` array contains `amount` greater than `500` and status is `paid`.
db.emp.find({ comm: { $elemMatch: { amount: { $gt: 500 }, status: "paid" } } }, { ename: 1, sal: 1 })

-- Q18: Write a query to display employee details where the `mgr` field is absent.
db.emp.find({ mgr: { $exists: false } })

-- Q19: Write a query to display employee details for those not earning any comm.
db.emp.find({ comm: { $exists: false } })

-- Q20: Explain the difference between SQL and NoSQL.
-- SQL is a relational database, structured in tables with rows and columns, supporting structured data and transactions.
-- NoSQL is a non-relational database, flexible with unstructured data, and supports diverse data models (document, key-value, etc.).

-- Q21: Explain the difference between the `find` and `findOne` methods.
-- `find` returns all documents matching a query, while `findOne` returns only the first document that matches.
