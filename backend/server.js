console.log("May the node be with you")

const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const MongoClient = require('mongodb').MongoClient

  MongoClient.connect("mongodb+srv://Renfrew100:bXfrx2sVR8Op4aaH@cluster0.eyjik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })

  
/* app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
})


 */