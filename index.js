var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json())

app.use(cors())

const ConnectionURL = "mongodb://localhost:27017/vaishuwonder";
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
let db;

(async function () {
  try {
    const client = await MongoClient.connect(ConnectionURL);
    db = client.db("vaishuwonder");
  } catch (err) {
    throw err;
  }
})();


app.post("/comp1/add", async (req, res) => {
  try {
    console.log(req.body)
    const result = await db.collection("comp1").insertOne(req.body);
    res.send(result);
  } catch (err) {
    throw err;
  }
});

app.post("/comp2/add", async (req, res) => {
  try {
    console.log(req.body)
    const result = await db.collection("comp2").insertOne(req.body);
    res.send(result);
  } catch (err) {
    throw err;
  }
});

app.post("/comp3/add", async (req, res) => {
  try {
    console.log(req.body)
    const result = await db.collection("comp3").insertOne(req.body);
    
    res.send(result);
  } catch (err) {
    throw err;
  }
});

app.patch("/comp1/update", async (req, res) => {
  try {
    console.log(req.body)
    const result = await db.collection("comp1").update({
      id:req.body.id},{$set:req.body}
      
    );
    
    res.send(result);
  } catch (err) {
    throw err;
  }
});
app.patch("/comp2/update", async (req, res) => {
  try {
    console.log(req.body)
    const result = await db.collection("comp2").update({
      id:req.body.id},{$set:req.body}
      );
      
    res.send(result);
  } catch (err) {
    throw err;
  }
});

app.patch("/comp3/update", async (req, res) => {
  try {
    console.log(req.body)
    const result = await db.collection("comp3").update({ id:req.body.id},{$set:req.body});
    
    res.send(result);
  } catch (err) {
    throw err;
  }
});


app.listen(8080, () => console.log(`listening to port 8080`));













