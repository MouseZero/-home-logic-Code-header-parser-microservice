'use strict'
const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression())
app.get('/', (req, res, next) => {
  let ipArray = req.ip.split(':')
  const result = {
    ipaddress: ipArray[ipArray.length - 1],
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent']
  }
  res.send(JSON.stringify(result, null, 2))
})

const port = process.argv[2] || 8080
app.listen(port, _ => {
  console.log('Node server started on ' + port + '!!!')
})
