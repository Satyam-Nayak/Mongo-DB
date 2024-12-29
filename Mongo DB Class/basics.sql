PS C:\Users\Welcome\Desktop\Mongo DB> mongosh
Current Mongosh Log ID: 671cd795ffa3daece886b01c
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.2
Using MongoDB:          8.0.1
Using Mongosh:          2.3.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-10-23T19:19:24.601+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use Satyam
switched to db Satyam
Satyam> db.createCollection('Satyam')
{ ok: 1 }
Satyam> show collections
Satyam
Satyam> db.Satyam.insertMany([{name:'Sonu OP',age: 33},{name:'Sonu NA',age: 30},{name:'Sonu wP',age:73}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('671cd801ffa3daece886b01d'),
    '1': ObjectId('671cd801ffa3daece886b01e'),
    '2': ObjectId('671cd801ffa3daece886b01f')
  }
}
Satyam> db.Satya.find()

Satyam> db.Satyam.find()
[
  {
    _id: ObjectId('671cd801ffa3daece886b01d'),
    name: 'Sonu OP',
    age: 33
  },
  {
    _id: ObjectId('671cd801ffa3daece886b01e'),
    name: 'Sonu NA',
    age: 30
  },
  {
    _id: ObjectId('671cd801ffa3daece886b01f'),
    name: 'Sonu wP',
    age: 73
  }
]
Satyam> show dbs
Node      72.00 KiB
Node_2pm  72.00 KiB
Satyam    40.00 KiB
Sonu      72.00 KiB
admin     40.00 KiB
config    48.00 KiB
local     72.00 KiB
Satyam> use Sonu
switched to db Sonu
Sonu> show collections
Sonu
Sonu> db.Sonu.find()
[
  {
    _id: ObjectId('671b8cd2c9d3ce302186b01d'),
    name: 'Satyam',
    age: 21
  },
  { _id: ObjectId('671b8ed686481b62ba86b01e'), name: 'Nayak', age: 22 },
  {
    _id: ObjectId('671b8f5886481b62ba86b01f'),
    name: 'Ashish',
    age: 22
  },
  {
    _id: ObjectId('671b8f5886481b62ba86b020'),
    name: 'Ashish1',
    age: 23
  },
  {
    _id: ObjectId('671b8f5886481b62ba86b021'),
    name: 'Ashish2',
    age: 42
  },
  {
    _id: ObjectId('671b8f5886481b62ba86b022'),
    name: 'Ashish3',
    age: 26
  }
]
Sonu> use Sonu
already on db Sonu
Sonu> db.dropDatabase()
{ ok: 1, dropped: 'Sonu' }
Sonu> use Sonu
already on db Sonu
Sonu> db.createCollection.('Sonu')
Uncaught:
SyntaxError: Unexpected token (1:20)

> 1 | db.createCollection.('Sonu')
    |                     ^
  2 |

Sonu> db.createCollection('Sonu')
{ ok: 1 }
Sonu> db.Sonu.insertMany([{name:'Sonu OP',age: 33},{name:'Sonu NA',age: 30},{name:'Sonu wP',age:73}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('671cd948ffa3daece886b020'),
    '1': ObjectId('671cd948ffa3daece886b021'),
    '2': ObjectId('671cd948ffa3daece886b022')
  }
}
Sonu> db.Sonu.find()
[
  {
    _id: ObjectId('671cd948ffa3daece886b020'),
    name: 'Sonu OP',
    age: 33
  },
  {
    _id: ObjectId('671cd948ffa3daece886b021'),
    name: 'Sonu NA',
    age: 30
  },
  {
    _id: ObjectId('671cd948ffa3daece886b022'),
    name: 'Sonu wP',
    age: 73
  }
]
Sonu> use Satyam
switched to db Satyam
Satyam> db.dropDatabase('Sonu')
{ ok: 1, dropped: 'Satyam' }
Satyam> show dbs
Node      72.00 KiB
Node_2pm  72.00 KiB
Sonu      40.00 KiB
admin     40.00 KiB
config    72.00 KiB
local     72.00 KiB
Satyam> db.createCollection('Satyam')
{ ok: 1 }
Satyam> db.Satyam.insertMany([{name:'Sonu OP',age: 33},{name:'Sonu NA',age: 30},{name:'Sonu wP',age:73}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('671cd9a9ffa3daece886b023'),
    '1': ObjectId('671cd9a9ffa3daece886b024'),
    '2': ObjectId('671cd9a9ffa3daece886b025')
  }
}
Satyam> db.getSiblingDB('Sonu').dropDatabase()
{ ok: 1, dropped: 'Sonu' }
Satyam> mongodump --db <database_name> --out <output_directory>
Uncaught:
SyntaxError: Missing semicolon. (1:12)

> 1 | mongodump --db <database_name> --out <output_directory>
    |             ^
  2 |

Satyam>show dbs