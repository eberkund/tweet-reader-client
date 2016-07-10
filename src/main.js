(function () {
  var template = require('./template.handlebars')
  var Handlebars = require('handlebars/runtime')
  var twitter = require('twitter-text')
  var moment = require('moment')

  Handlebars.registerHelper('prettyDate', function (timestamp) {
    return moment(new Date(timestamp)).fromNow()
  })

  Handlebars.registerHelper('autoLink', function (tweet) {
    return twitter.autoLink(tweet)
  })

  $.get('tweets.json', function (data) {
    var html = template(data)
    $('#twitter-timeline').html(html)
  })
})()
