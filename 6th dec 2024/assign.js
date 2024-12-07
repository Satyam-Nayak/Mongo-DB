db.createCollection('engineer', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['eid', 'name', 'salary'],
            properties: {
                eid: {
                    bsonType: 'number',
                    description: "eid is mandatory and should be a number"
                },
                name: {
                    bsonType: 'string',
                    description: "name is mandatory and should be a string"
                },
                salary: {
                    bsonType: 'double',
                    description: "salary is mandatory and should be a double"
                }
            }
        }
    }
});

db.engineer.insertOne({
    eid: 101,
    name: 'Arjun',
    salary: 60000.5,
    age: 28,
    mob: 9123456789,
    mail: 'arjun.kumar@gmail.com'
});

// Insert multiple documents into the "engineer" collection
db.engineer.insertMany([
    {
        eid: 102,
        name: 'Ravi',
        salary: 52000.75,
        age: 30,
        mob: 9876543210,
        mail: 'ravi.sharma@gmail.com'
    },
    {
        eid: 103,
        name: 'Meera',
        salary: 58000.95,
        age: 29,
        mob: 8765432190,
        mail: 'meera.verma@gmail.com'
    },
    {
        eid: 104,
        name: 'Soham',
        salary: 61000.8,
        age: 32,
        mob: 7654321987,
        mail: 'soham.singh@gmail.com'
    },
    {
        eid: 105,
        name: 'Isha',
        salary: 63000.0,
        age: 27,
        mob: 9543216789,
        mail: 'isha.patel@gmail.com'
    },
    {
        eid: 106,
        name: 'Anjali',
        salary: 70000.4,
        age: 35,
        mob: 9234567890,
        mail: 'anjali.nair@gmail.com'
    }
]);


db.createCollection('engineer', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['doorno', 'street', 'city','state'],
            properties: {
                eid: {
                    bsonType: 'number',
                    description: "eid is mandatory and should be a number"
                },
                name: {
                    bsonType: 'string',
                    description: "name is mandatory and should be a string"
                },
                salary: {
                    bsonType: 'double',
                    description: "salary is mandatory and should be a double"
                }
            }
        }
    }
})




db.createCollection('address', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['doorno', 'street', 'city', 'state'],
            properties: {
                doorno: {
                    bsonType: 'string',
                    description: "Door number is mandatory and should be a string"
                },
                street: {
                    bsonType: 'string',
                    description: "Street name is mandatory and should be a string"
                },
                city: {
                    bsonType: 'string',
                    description: "City name is mandatory and should be a string"
                },
                state: {
                    bsonType: 'string',
                    description: "State name is mandatory and should be a string"
                },
                skills: {
                    bsonType: 'array',
                    items: {
                        bsonType: ['string', 'object', 'number'],
                        description: "Each item in the skills array can be a string, an object, or a number"
                    }
                }
            }
        }
    }
})



db.address.insertMany([
    {
        doorno: "101",
        street: "Main Street",
        city: "Bangalore",
        state: "Karnataka",
        skills: ["JavaScript", "React", 5]
    },
    {
        doorno: "202",
        street: "cherch street",
        city: "Bangalore",
        state: "Karnataka",
        skills: ["Java", "Spring", 7]
    },
    {
        doorno: "303",
        street: "Beach Road",
        city: "Bangalore",
        state: "Karnataka",
        skills: ["Python", "Django", 3]
    },
    {
        doorno: "404",
        street: "MG Road",
        city: "Bangalore",
        state: "Karnataka",
        skills: ["C++", "Machine Learning", 4]
    },
    {
        doorno: "505",
        street: "Pine Road",
        city: "Bangalore",
        state: "Karnataka",
        skills: ["PHP", "Laravel", 6]
    }
]);



db.createCollection('trainerDetails',{
    validator:{
        $jsonSchema:{
            bsonType:'object',
            required:['skills','address'],
            properties:{
                skills:{
                    bsonType:'array',
                    items:{
                        bsonType: 'string',
                        description:'2 fields are mandatory'
                }},
                address:{
                    bsonType:'object',
                    required:['street','city','state','pin'],
                    properties:{
                        street:{
                            bsonType:'string',
                            description:"street is mandatory and should be in string"
                        },
                        city:{
                            bsonType:'string',
                            description:"city is mandatory and should be in string"
                        },
                        state:{
                            bsonType:'string',
                            description:"state is mandatory and should be in double"
                        },
                        pin:{
                            bsonType:'number',
                            description:"pin is mandatory and should be in number"
                        }
                    }
                }
            }
        }
    }
 })


 new collections in mongo db
