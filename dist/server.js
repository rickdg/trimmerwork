require('newrelic')
var history = require('connect-history-api-fallback')
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
app.use(history())
app.use(serveStatic(__dirname))
var port = process.env.PORT || 5000

app.use(function (req, res, next) {
  if (!/https/.test(req.protocol)) {
		res.redirect("https://" + req.headers.host + req.url)
  } else {
		return next()
  }
})

app.listen(port)
console.log('server started '+ port)