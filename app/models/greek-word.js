var request = require('superagent')
var env = require('../config/env')
var Immutable = require('immutable')
var cache = require('./cache')
var unaccented = require('../utils/unaccented')

exports.findByLemma = function(word, callback) {
  // var firstCharacter = word.substr(0,1)

  var unaccentedWord = unaccented(word)
  var firstCharacter = unaccentedWord.substr(0,1)
  var url = env.API_HOST + 'words/sblgnt/json/' + firstCharacter
      + '/' + unaccentedWord + '.json'
  var cachedResult

  if (cachedResult = cache.get([url])) {
    return callback(null, Immutable.fromJS(cachedResult))
  }

  this.req = request
    .get(url)
    .set('Accept', 'application/json')
    .end(function (error, result) {
      if (error) return callback(error)

      cache.set([url], result.body)
      return callback(null, Immutable.fromJS(result.body))
    })
}
