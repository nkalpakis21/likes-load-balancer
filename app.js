const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3001;

// Creating app 
const app1 = express();
const app2 = express();

const cors = require("cors");
app1.use(cors({ origin : '*'}))
app2.use(cors({ origin : '*'}))


// Handler method
const handler = num => (req,res)=>{
	const { method, url, headers, body } = req;
	res.send('Response from server ' + num);
}

// Only handle GET and POST requests
// Receive request and pass to handler method
app1.get('*', handler(1)).post('*', handler(1));
app2.get('*', handler(2)).post('*', handler(2));

let likes = 0;

app.get('/', (req, res) => {
  console.log('got here');
  res.status(200).send({data: 'success'});
})

app.get('/likes', async function(req,res){
  res.status(200).send({ likes })
  return;
})

app.post('/likes/increment', (req, res) => {
    likes += 1
    res.status(200).send({ success: 'true' })
    return;
})
  

// Creating server to listen at localhost 5001
app1.listen(port,hostname,function(req,res){
    // Logging when the server has started
    console.log(`listening to server ${port}`)
})

app1.listen(port,hostname,function(req,res){
  // Logging when the server has started
  console.log(`listening to server ${port}`)
})