// CRUD operations

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database: ", error);
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "DeadPool",
    //     age: "23"
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user: ", error);
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "BatMan",
    //       age: 28
    //     },
    //     {
    //       name: "Robit",
    //       age: 32
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    db.collection("tasks").insertMany(
      [
        { description: "Brush Teeth", completed: false },
        { description: "Wake Up", completed: true }
      ],
      (error, result) => {
        if (error) {
          console.log("Unable to insert documents!");
        }
        console.log(result.ops);
      }
    );
  }
);
