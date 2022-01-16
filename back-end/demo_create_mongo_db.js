var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("examination-db");
  dbo.createCollection("questions", function(err, res) {
    if (err) throw err;
    console.log("Question Collection created!");
    db.close();
  });
});
// Insert record
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("examination-db");
//   var myobj = { question: "What is node js", ans_1: "Javascript Framework", ans_2: "Operating System", ans_3: "Search Engine", correct: 1 };
//   dbo.collection("questions").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });