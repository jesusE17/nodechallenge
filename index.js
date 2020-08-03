var MongoClient = require('mongodb').MongoClient;

// calling express
const express = require('express');
//init express
const app = express();

const uri = "mongodb+srv://cluster0.4rxfe.mongodb.net/JesusE_Dom"

let db;
MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client)=>{
  if (err) throw err;

  console.log("Mongo Connected ");

  db = client.db('blogs');
})
var port = 3000;

app.get('./', function (req, res){
    res.sendStatus(200);
})

app.post('/about', function(req, res){
    res.sendFile(path.join(_dirname + './content/about.html'));
})
app.post('/contact', function(req, res){
    res.sendFile(path.join(_dirname + './content/contact.html'));
})
app.post('/home', function(req, res){
    res.sendFile(path.join(_dirname + './content/home.html'));
})


// Router 
import { userUpdate } from '../services/users';
import { isUserAuthenticated } from '../authMiddleware';

router.post('/:userId/verify', isUserAuthenticated, (req, res, next) => {
  const { userId } = req.params;
  const data = req.body;

  if (res.locals.auth && res.locals.auth.userId && userId === res.locals.auth.userId) {
    return userUpdate(userId, data);
  } else {
    res.status(401).json({
      status: 401,
      message: 'UNAUTHORIZED'
    })
  }
})
