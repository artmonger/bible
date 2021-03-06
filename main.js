var express = require('express')
var app = express()
const PORT = process.env.NODE_ENV === 'production' ? 80 : (process.env.PORT || 4200)
app.use(function(req, res, next) {
  if (/.*\.json/.test(req.path)) {
    res.set({ 'content-type': 'application/json; charset=utf-8' })
  }
  next()
})
app.use(express.static(__dirname + '/dist'))
app.use('/api',express.static(__dirname + '/node_modules/aaronshaf-bible-data'))
app.get('*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});
console.log('Listening to port ' + PORT)
app.listen(PORT)
