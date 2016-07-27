(function () {
  let template = require('./template.handlebars')
  let handlebars = require('handlebars/runtime')
  let twitter = require('twitter-text')
  let moment = require('moment')

  handlebars.registerHelper('prettyDate', function (timestamp) {
    return moment(new Date(timestamp)).fromNow()
  })

  handlebars.registerHelper('autoLink', function (tweet) {
    return twitter.autoLink(tweet)
  })

  $.get('tweets.json', function (data) {
    var html = template(data)
    $('#twitter-timeline').html(html)
  })
})()
