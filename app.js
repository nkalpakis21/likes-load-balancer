const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';

// Creating app 
const app1 = express();
const app2 = express();


const cors = require("cors");
app1.use(cors({ origin : '*'}));
app2.use(cors({ origin : '*'}));
app1.use(express.json())
app2.use(express.json())
let likes = 0;

const getLikes = num => (req,res)=>{
  console.log(`response from server number ${num}`)
  res.status(200).send({ likes })
  return;
}

const updateLikes = num => (req,res)=>{
  console.log('increment');
  likes += 1;
  
  console.log(`response from server number ${num}`)
  res.status(200).send({ success: 'true' })
  return;
}

// Only handle GET and POST requests
// Receive request and pass to handler method
app1.get('/likes', getLikes(1)).post('/likes', getLikes(1));
app2.get('/likes', getLikes(2)).post('/likes', getLikes(2));
app1.get('/likes/update', updateLikes(1)).post('/likes/update', updateLikes(1));
app2.get('/likes/update', updateLikes(2)).post('/likes/update', updateLikes(2));

app1.listen(3003,hostname,function(req,res){
    console.log(`server 1 - listening to server 3003`)
})

app2.listen(3004,hostname,function(req,res){
  console.log(`server 2 - listening to server 3004`)
})