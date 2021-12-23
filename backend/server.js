console.log("May the node be with you")

const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
  })

  const MongoClient = require('mongodb').MongoClient
  
  MongoClient.connect("mongodb+srv://Renfrew100:d5oYc5sp0dBwgZZZ@cluster0.eyjik.mongodb.net/LaunchCode?retryWrites=true&w=majority",  {
    useUnifiedTopology: true
  })
  .then(client => {
    // ...
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

  })

  app.post('/quotes', (req, res) => {
  quotesCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
})  

MongoClient.connect("mongodb+srv://Renfrew100:d5oYc5sp0dBwgZZZ@cluster0.eyjik.mongodb.net/LaunchCode?retryWrites=true&w=majority", {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(express.static('public'))
    app.get(/* ... */)
    app.post(/* ... */)
    //app.post()
  })

/*  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
}) */
 
//app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   db.collection('quotes').find().toArray()
//     .then(/* ... */)
//     .catch(/* ... */)
//   res.render('index.ejs', {})
// })

// const MongoClient = require('mongodb').MongoClient
 

/* app.post('/quotes', (req, res) => {
    console.log(req.body)
}) */

/* app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
})


 */