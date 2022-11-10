# MongoDB Cheat Sheet

### Linux Packages
    sudo apt-get install -y mongodb-org
    sudo apt-get install -y mongodb-org-tools
    sudo apt-get install -y mongodb-compass
    sudo apt-get install -y mongodb-atlas-cli

### Linux Server Management
    sudo systemctl start mongod
    sudo systemctl stop mongod
    sudo systemctl status mongod
    sudo systemctl enable mongod
    sudo systemctl restart mongod

### Mongo Shell
    mongosh mongodb://localhost:27017/
    mongosh mongodb+srv://myapp:password@cluster0.qqw8xua.mongodb.net/

### Mongo Import
    mongoimport --uri mongodb://localhost:27017/test --collection restaurants --type json --file ./restaurants.json
    mongoimport --uri mongodb://localhost:27017/bitmex --collection trades --type tsv --file ~/data/bot/bitmex/trades.tsv --headerline

### Use a Database

    use('invoice')

### Delete database

    use ('invoice')
    db.dropDatabase()

### Database Status Info

    db.stats()

### Create a collection
    db.products.insertOne({
        "_id": 1,
        "item": "Banana",
        "categories": ["food", "produce", "grocery"],
        "location": "4th Street Store",
        "stock": 4,
        "type": "cases"
    })

### Delete a collection
    db.user.drop()

### cl.find(query, projection);
// query - query for filtering out the data
// projection - Specifies the fields to return in the documents that match the query filter

### Count documents in a collection

    db.products.find().count()

### Remove all records from a collection
  db.user.deleteMany({})
  db.user.remove({}) // deprecated

### add an Index

    db.products.createIndex( { "item": 1, "stock": 1 } )

    db.products.find( { item: "Banana" } )
    db.products.find( { item: "Banana", stock: { $gt: 5 } } )

### ObjectId(<value>)
Returns a new ObjectId.

The 12-byte ObjectId consists of:
- A 4-byte timestamp, representing the ObjectId's creation, measured in seconds since the Unix epoch.
- A 5-byte random value generated once per process. This random value is unique to the machine and process.
- A 3-byte incrementing counter, initialized to a random value.

## Aggregations
[Fetch Data from Different Collections with Aggregation](https://medium.com/fasal-engineering/fetching-data-from-different-collections-via-mongodb-aggregation-operations-with-examples-a273f24bfff0)

### cl.aggregate(pipeline, options)
- pipeline - A sequence of data aggregation operations or stages.
- options - An optional configuration applicable for multiple operations in pipeline and it's used to optimize or setting rules for executing the query, it doesn't do any data processing

### $match
    db.users.aggregate([{
        $match: {$expr: {$eq: [‘ID’, ‘123' ] }
    }]);
    // equivalent of
    db.users.find({ID: ‘123'})

### $project

    [{ '$project': {
        '_id': 0,
        'time': 1,
        'side': 1,
        'direction': 1,
        'price': 1,
        'quantity': 1,
        'size': 1
    }}]

    db.transactions.insertOne({ cr_dr : "D", amount : 100, fee : 2});
    db.transactions.insertOne({ cr_dr : "C", amount : 100, fee : 2});
    db.transactions.insertOne({ cr_dr : "C", amount : 10,  fee : 2});
    db.transactions.insertOne({ cr_dr : "D", amount : 100, fee : 4});
    db.transactions.insertOne({ cr_dr : "D", amount : 10,  fee : 2});
    db.transactions.insertOne({ cr_dr : "C", amount : 10,  fee : 4});
    db.transactions.insertOne({ cr_dr : "D", amount : 100, fee : 2});
]

## $group
    { $group: {
        _id: <expression>, // Group key
        <field1>: { <accumulator1> : <expression1> },
        ...
    }}

## $sum $avg
    db.transactions.aggregate([{$group {
        _id : '$cr_dr', // group by type of transaction (debit or credit)
        count : {$sum : 1},    // number of transaction for each type
        totalAmount : {$sum : { $sum : ['$amount', '$fee']}},
        averageAmount : {$avg : { $sum : ['$amount', '$fee']}}
        }
    }])

    { _id: 'D', count: 8, totalAmount: 640, averageAmount: 80 }
    { _id: 'C', count: 6, totalAmount: 256, averageAmount: 42.67 }

    db.a.aggregate([{
        $project:{
            _id:0,
            x: '$x',
            round: {$round: ['$x', 2]}
            better_round: {$round: [{$add: ['$x', 0.000000001]}, 2]}
        }
    }])

### $lookup
    SELECT * FROM users
    LEFT JOIN products
    ON user.product_id = products._id

    db.users.aggregate( [{
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "products"
      }
    }] )

### Schema Design Strategies
    Product: {
      id:autoinc, name:{type:string, required:1}), manufacturer, barcode,
      parts: Part[ oid(1), oid(2), ...],
      _indexes:[ id(1, unique), ]
    }

    Part: {
        _id:oid, name, number, quantity, cost, price,
    }

### get all parts of a product
    db.users.aggregate( [{
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "products"
      }
    }] )

### One to Few - Embedding into arrays
    Person: {
      _id, name, ssn, mother_id:Person, father_id:Person,
      addresses:[
        {street, city, country, coords:{lat, long}}
        {street, city, country, coords:{lat, long}}
      ],
    }
- All data in a single query
- No join or $lookup
- Atomic updates

### One to Many - Referencing
    Product: {
      id:autoinc, name:{type:string, required:1}), manufacturer, barcode,
      parts: Part[ oid(1), oid(2), ...],
      _indexes:[ id(1, unique), ]
    }

    Part: {
        _id:oid, name, number, quantity, cost, price,
        products: Product[ oid(1), oid(2), ...]
    }

- Usefull when the Objects can be used for their own.
- Smaller documents, no duplication

![$lookup](screenshots/lookup.png)

## save deprecated
use insertOne, insertMany, updateOne, or updateMany instead.


## [Anti patterns](https://youtu.be/8CZs-0it9r4)
- Massive Arrays
- Massive Number of collections
- Unnecessary indexes
- Bloated Documents
- Case Insensitive queries without Case Insensitive indexes
- Separating data that is used together

https://www.markdownguide.org/basic-syntax/