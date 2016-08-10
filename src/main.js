import moment from 'moment'
import template from './template.handlebars'
import handlebars from 'handlebars/runtime'
import twitter from 'twitter-text'

(function () {
  handlebars.registerHelper('prettyDate', (timestamp) => {
    return moment(new Date(timestamp)).fromNow()
  })

  handlebars.registerHelper('autoLink', (tweet) => {
    return twitter.autoLink(tweet)
  })

  $.get('tweets.json', (data) => {
    let html = template(data)
    $('#twitter-timeline').html(html)
  })
})()
