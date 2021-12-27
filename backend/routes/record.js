const express = require("express")
const HttpError = require("../models/http-error")

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router()

// This will help us connect to the database
const dbo = require("../db/conn")

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees")
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
})

// This section will help you get a list of all the records.
recordRoutes.route("/rockets/:companyName").get(function (req, res) {
  const companyName = req.params.companyName
  let db_connect = dbo.getDb("RocketLaunches")
  db_connect
    .collection(companyName)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
})

// This section will help you get a single record by id
recordRoutes.route("/rockets/:companyName/:id").get(function (req, res) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  db_connect.collection("records").findOne(myquery, function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

// This section will help you create a new record.
recordRoutes.route("/rocket/add").post(function (req, response, next) {
  let db_connect = dbo.getDb()
  let rocketObj = {
    rocketName: req.body.rocketName,
    companyName: req.body.companyName,
    successLaunch: req.body.successLaunch,
    failedLaunch: req.body.failedLaunch,
    postponedLaunch: req.body.postponedLaunch,
  }

  // Error out if the company is not recognized
  if (!["SpaceX", "BlueOrigin", "NASA"].includes(rocketObj.companyName)) {
    return next(
      new HttpError(`Invalid company name ${rocketObj.companyName}`, 404)
    )
  }

  db_connect.collection(rocketObj.companyName).insertOne(rocketObj, (err, res) => {
    if (err) return next(new HttpError(`MongoDB error ${err}`, 500))
    response.json(res)
  })
})

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId(req.params.id) }
  let newvalues = {
    $set: {
      Rocket_name: req.body.Rocket_name,
      Company_name: req.body.Company_name,
      Successful: req.body.Successful,
      Failed: req.body.Failed,
      Postphoned: req.body.Postphoned,
    },
  }
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err
      console.log("1 document updated")
      response.json(res)
    })
})

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb()
  let myquery = { _id: req.params.id }
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err
    console.log("1 document deleted")
    response.status(obj)
  })
})

module.exports = recordRoutes 
