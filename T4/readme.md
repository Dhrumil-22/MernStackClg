'''
Microsoft Windows [Version 10.0.26200.8655]
(c) Microsoft Corporation. All rights reserved.

C:\Program Files\MongoDB\Server\8.2\bin>mongod --version
db version v8.2.5
Build Info: {
    "version": "8.2.5",
    "gitVersion": "a471a13094434666c48a1f75451f2efa49f8f5df",
    "modules": [],
    "allocator": "tcmalloc-gperf",
    "environment": {
        "distmod": "windows"
    }
}

C:\Program Files\MongoDB\Server\8.2\bin>mongosh
'mongosh' is not recognized as an internal or external command,
operable program or batch file.

C:\Program Files\MongoDB\Server\8.2\bin>mongosh
Current Mongosh Log ID: 6a3b58b296090f3191abc113
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.8.3
Using MongoDB:          8.2.5
Using Mongosh:          2.8.3

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2026-06-22T10:38:28.119+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
FirstDb                 72.00 KiB
admin                   40.00 KiB
certificate_generator   12.00 KiB
config                  36.00 KiB
ecommerce              248.00 KiB
ecommerce_hub          184.00 KiB
expense_tracker        180.00 KiB
local                   84.00 KiB
test> db
test
test> use abc
switched to db abc
abc> show dbs
FirstDb                 72.00 KiB
admin                   40.00 KiB
certificate_generator   12.00 KiB
config                  36.00 KiB
ecommerce              248.00 KiB
ecommerce_hub          184.00 KiB
expense_tracker        180.00 KiB
local                   84.00 KiB
abc> db.createCollection("Students")
{ ok: 1 }
abc> show dbs
FirstDb                 72.00 KiB
abc                      8.00 KiB
admin                   40.00 KiB
certificate_generator   12.00 KiB
config                  36.00 KiB
ecommerce              248.00 KiB
ecommerce_hub          184.00 KiB
expense_tracker        180.00 KiB
local                   84.00 KiB
abc> db.Student.drop()
true
abc> show dbs
FirstDb                 72.00 KiB
abc                      8.00 KiB
admin                   40.00 KiB
certificate_generator   12.00 KiB
config                  72.00 KiB
ecommerce              248.00 KiB
ecommerce_hub          184.00 KiB
expense_tracker        180.00 KiB
local                   84.00 KiB
abc> db.Students.drop()
true
abc> show dbs
FirstDb                 72.00 KiB
admin                   40.00 KiB
certificate_generator   12.00 KiB
config                  72.00 KiB
ecommerce              248.00 KiB
ecommerce_hub          184.00 KiB
expense_tracker        180.00 KiB
local                   84.00 KiB
abc> db.createCollection("Student")
{ ok: 1 }
abc> db.Student.renameCollection("Students")
{ ok: 1 }
abc> show dbs
FirstDb                 72.00 KiB
abc                      8.00 KiB
admin                   40.00 KiB
certificate_generator   12.00 KiB
config                  72.00 KiB
ecommerce              248.00 KiB
ecommerce_hub          184.00 KiB
expense_tracker        180.00 KiB
local                   84.00 KiB
abc> db.Student.insertOne({name:'ABC',age:20})\
Uncaught:
SyntaxError: Expecting Unicode escape sequence \uXXXX. (1:42)

> 1 | db.Student.insertOne({name:'ABC',age:20})\
    |                                           ^
  2 |

abc> db.Student.insertOne({name:'ABC',age:20})
{
  acknowledged: true,
  insertedId: ObjectId('6a3b59d996090f3191abc114')
}
abc> db.Student.insertMany([{name:'XYZ',age:22,branch:'CE'},{name:'DEF',age:18},{name:'MNO',age:20,city:'AMD'}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a3b5ae496090f3191abc115'),
    '1': ObjectId('6a3b5ae496090f3191abc116'),
    '2': ObjectId('6a3b5ae496090f3191abc117')
  }
}
abc> db.Student.find()
[
  { _id: ObjectId('6a3b59d996090f3191abc114'), name: 'ABC', age: 20 },
  {
    _id: ObjectId('6a3b5ae496090f3191abc115'),
    name: 'XYZ',
    age: 22,
    branch: 'CE'
  },
  { _id: ObjectId('6a3b5ae496090f3191abc116'), name: 'DEF', age: 18 },
  {
    _id: ObjectId('6a3b5ae496090f3191abc117'),
    name: 'MNO',
    age: 20,
    city: 'AMD'
  }
]
abc> db.Student.insertMany([{ name: 'XYZ', age: 22, branch: 'CE' }, { name: 'DEF', age: 18 }, { name: 'MNO', age: 20, city: 'AMD' }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a3b5bcf96090f3191abc118'),
    '1': ObjectId('6a3b5bcf96090f3191abc119'),
    '2': ObjectId('6a3b5bcf96090f3191abc11a')
  }
}
abc> db.Student.find({name:'ABC'})
[ { _id: ObjectId('6a3b59d996090f3191abc114'), name: 'ABC', age: 20 } ]
abc> db.Student.find({name:'ABC'})
[ { _id: ObjectId('6a3b59d996090f3191abc114'), name: 'ABC', age: 20 } ]
abc> db.Student.find({},{name:'ABC'})
[
  { _id: ObjectId('6a3b59d996090f3191abc114'), name: 'ABC' },
  { _id: ObjectId('6a3b5ae496090f3191abc115'), name: 'ABC' },
  { _id: ObjectId('6a3b5ae496090f3191abc116'), name: 'ABC' },
  { _id: ObjectId('6a3b5ae496090f3191abc117'), name: 'ABC' }
]
abc> db.Student.find({},{name:1})
[
  { _id: ObjectId('6a3b59d996090f3191abc114'), name: 'ABC' },
  { _id: ObjectId('6a3b5ae496090f3191abc115'), name: 'XYZ' },
  { _id: ObjectId('6a3b5ae496090f3191abc116'), name: 'DEF' },
  { _id: ObjectId('6a3b5ae496090f3191abc117'), name: 'MNO' }
]
abc> db.Student.find({},{name:1,age:1})
[
  { _id: ObjectId('6a3b59d996090f3191abc114'), name: 'ABC', age: 20 },
  { _id: ObjectId('6a3b5ae496090f3191abc115'), name: 'XYZ', age: 22 },
  { _id: ObjectId('6a3b5ae496090f3191abc116'), name: 'DEF', age: 18 },
  { _id: ObjectId('6a3b5ae496090f3191abc117'), name: 'MNO', age: 20 }
]
abc> db.Student.find({},{id:0,name:1,age:1})
MongoServerError[Location31253]: Cannot do inclusion on field name in exclusion projection
abc> db.Student.find({},{_id:0,name:1,age:1})
[
  { name: 'ABC', age: 20 },
  { name: 'XYZ', age: 22 },
  { name: 'DEF', age: 18 },
  { name: 'MNO', age: 20 }
]
abc> db.Student.find({name:'DEF'},{age:1,_id:0})
[ { age: 18 } ]
abc> db.Student.findOe({name:'ABC'})
TypeError: db.Student.findOe is not a function
abc> db.Student.findOne({name:'ABC'})
{ _id: ObjectId('6a3b59d996090f3191abc114'), name: 'ABC', age: 20 }
abc> db.Student.find({name:'ABC'}).limit(1)
[ { _id: ObjectId('6a3b59d996090f3191abc114'), name: 'ABC', age: 20 } ]
abc> db.Student.find({name:'ABC'}).limit(1).skip(1)

abc> db.Student.updateOne({name:'ABC'},{age:18})
MongoInvalidArgumentError: Update document requires atomic operators
abc> db.Student.updateOne({name:'ABC'},{$ser:{})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:42)

> 1 | db.Student.updateOne({name:'ABC'},{$ser:{})
    |                                           ^
  2 |

abc> db.Student.updateOne({name:'ABC'},{$ser:{name:'abc'})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:52)

> 1 | db.Student.updateOne({name:'ABC'},{$ser:{name:'abc'})
    |                                                     ^
  2 |

abc> db.Student.updateOne({name:'ABC'},{$ser:{name:'abc'}})
MongoServerError: Unknown modifier: $ser. Expected a valid update modifier or pipeline-style update specified as an array
abc> db.Student.updateOne({name:'ABC'},{$set:{name:'abc'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
abc> db.Student.updateOne({name:'DEF',age:18},{$set:{name:'def'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
abc> db.Student.updateMany({name:'XYZ'},{$set:{name:'xyz'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
abc> db.Student.updateMany({age:30},{$set:{name:'OPS'},{upsert:1})
Uncaught:
SyntaxError: Unexpected token (1:50)

> 1 | db.Student.updateMany({age:30},{$set:{name:'OPS'},{upsert:1})
    |                                                   ^
  2 |

abc> db.Student.updateMany({age:30},{$set:{name:'OPS'},{upsert:true})
Uncaught:
SyntaxError: Unexpected token (1:50)

> 1 | db.Student.updateMany({age:30},{$set:{name:'OPS'},{upsert:true})
    |                                                   ^
  2 |

abc> db.Student.updateOne({age:30},{$set:{name:'OPS'},{upsert:true})
Uncaught:
SyntaxError: Unexpected token (1:49)

> 1 | db.Student.updateOne({age:30},{$set:{name:'OPS'},{upsert:true})
    |                                                  ^
  2 |

abc> db.Student.updateOne({age:30},{$set:{name:'OPS'}},{upsert:true})
{
  acknowledged: true,
  insertedId: ObjectId('6a3b62cc6e31de2b12cde378'),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1
}
abc> db.Student.deleteOne({name:'abc'})
{ acknowledged: true, deletedCount: 1 }
abc> db.Student.count({name:'def'})
DeprecationWarning: Collection.count() is deprecated. Use countDocuments or estimatedDocumentCount.
1
abc> db.Student.find({name:'def'}).count()
1
abc> db.Student.countDocuments({name:'def'})
1
abc> db.Student.find.sort({age:1})
TypeError: db.Student.find.sort is not a function
abc> db.Student.find().sort({age:1})
[
  { _id: ObjectId('6a3b5ae496090f3191abc116'), name: 'def', age: 18 },
  {
    _id: ObjectId('6a3b5ae496090f3191abc117'),
    name: 'MNO',
    age: 20,
    city: 'AMD'
  },
  {
    _id: ObjectId('6a3b5ae496090f3191abc115'),
    name: 'xyz',
    age: 22,
    branch: 'CE'
  },
  { _id: ObjectId('6a3b62cc6e31de2b12cde378'), age: 30, name: 'OPS' }
]
abc>
'''
