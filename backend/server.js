console.log("May the node be with you")

const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



// const MongoClient = require('mongodb').MongoClient

/*   MongoClient.connect("mongodb+srv://Renfrew100:d5oYc5sp0dBwgZZZ@cluster0.eyjik.mongodb.net/LaunchCode?retryWrites=true&w=majority", {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })
 */

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

/* app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
})


 */