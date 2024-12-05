db.courses.insertMany([
    {
        courseName:"Node js",
        duration:'2 Months'
    },{
        courseName:"mongo Db",
        duration:'1 Month'
    },{
        courseName:"Express",
        duration:'1 Month'
    },{
        courseName:"React js",
        duration:'2 Months'
    }
])


db.upcomingEmployees.insertMany([
    {
        empName:"Girija",
        salary:'20000',
    },
    {
        empName:"raj",
        salary:'21000',
    },
    {
        empName:"shuvam",
        salary:'22000',
    },
    {
        empName:"Rittick",
        salary:'23000',
    }
])




db.courses.updateOne(
    {courseName:'Node js'},{$set:{Trainee:[ObjectId('675183a9026a3d28d686b029'),
        ObjectId('675183a9026a3d28d686b02a')         
    ]}}
)

db.upcomingEmployees.updateOne(
    {empName:"suraj"},
{$set:{courses:[ObjectId()]}})


db.courses.aggregate([
        {
            $lookup:{
                        from:"upcomingEmployees",
                        localField:"Trainee",
                        foreignField:"_id",
                        as:"trainee"
                    }
        }
])


db.upcomingEmployees.aggregate([
        {
            $lookup:{
                        from:"courses",
                        localField:"courses",
                        foreignField:"_id",
                        as:"courses"

                    }
        }
])